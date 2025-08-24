import os
from io import BytesIO
from pathlib import Path
from concurrent.futures import ProcessPoolExecutor, as_completed
from PIL import Image, ImageOps, UnidentifiedImageError

TARGET_KB_DEFAULT = 150
SUPPORTED_FORMATS = (".jpg", ".jpeg")  # quality-only per your setup
WEBP_METHOD = (
    5  # 0..6 (higher = smaller but slower). 4–5 is a good speed/size tradeoff.
)
QMIN, QMAX = 0.01, 95  # quality search range (1..100). 95’s usually enough.


def _encode_webp(img: Image.Image, q: int) -> bytes:
    """Encode to WebP at quality q and return raw bytes."""
    buf = BytesIO()
    # Ensure RGB (no alpha for jpeg inputs)
    if img.mode != "RGB":
        img = img.convert("RGB")
    img.save(buf, format="WEBP", quality=q, method=WEBP_METHOD)
    return buf.getvalue()


def _binary_search_quality(
    img: Image.Image, target_bytes: int, qmin=QMIN, qmax=QMAX, max_iters=10
):
    """
    Find the highest quality that is <= target_bytes using binary search.
    If none fit, return the smallest size we can (qmin).
    Returns (bytes, quality, hit_bool).
    """
    cache = {}

    def enc(q):
        if q in cache:
            return cache[q]
        b = _encode_webp(img, q)
        cache[q] = b
        return b

    # Quick bounds checks
    b_low = enc(qmin)
    if len(b_low) <= target_bytes:
        # Try to find a higher quality under the limit.
        best_bytes, best_q = b_low, qmin
        lo, hi = qmin + 1, qmax
        it = 0
        while lo <= hi and it < max_iters:
            mid = (lo + hi) // 2
            bm = enc(mid)
            if len(bm) <= target_bytes:
                best_bytes, best_q = bm, mid  # acceptable, go higher
                lo = mid + 1
            else:
                hi = mid - 1
            it += 1
        return best_bytes, best_q, True

    # Even qmin is over budget → return qmin (guarantees "as small as possible")
    # Note: With JPEG inputs this is rare; but if it happens, we still return the smallest.
    return b_low, qmin, False


def compress_to_webp_quality_only(
    image_path: str, output_path: str, target_kb: int = TARGET_KB_DEFAULT
):
    p = Path(image_path)
    try:
        img = Image.open(p)
    except UnidentifiedImageError:
        return {"path": str(p), "ok": False, "reason": "unidentified image"}

    # Respect EXIF orientation
    try:
        img = ImageOps.exif_transpose(img)
    except Exception:
        pass

    target_bytes = target_kb * 1024
    b, q, hit = _binary_search_quality(img, target_bytes)
    # If still over target at qmin, we warned via hit=False but still write the smallest.
    out = Path(output_path)
    out.parent.mkdir(parents=True, exist_ok=True)
    with open(out, "wb") as f:
        f.write(b)
    return {
        "path": str(p),
        "ok": True,
        "quality": q,
        "size_kb": round(len(b) / 1024, 1),
        "hit": hit,
    }


def _process_one(args):
    (src_path, out_dir, target_kb) = args
    src = Path(src_path)
    out = Path(out_dir) / (src.stem + ".webp")
    return compress_to_webp_quality_only(str(src), str(out), target_kb=target_kb)


def compress_images_in_folder(
    folder_path: str, target_kb: int = TARGET_KB_DEFAULT, workers: int | None = None
):
    folder = Path(folder_path)
    out_dir = folder / "compressed"
    out_dir.mkdir(exist_ok=True)

    files = [
        str(p)
        for p in folder.iterdir()
        if p.suffix.lower() in SUPPORTED_FORMATS and p.is_file()
    ]
    if not files:
        print("No supported images found.")
        return

    workers = workers or (os.cpu_count() or 4)
    print(
        f"Compressing {len(files)} images → {out_dir} (target={target_kb}KB, workers={workers}, method={WEBP_METHOD})"
    )

    stats = []
    with ProcessPoolExecutor(max_workers=workers) as ex:
        futures = [ex.submit(_process_one, (f, str(out_dir), target_kb)) for f in files]
        for fut in as_completed(futures):
            res = fut.result()
            stats.append(res)
            if res["ok"]:
                status = "✓" if res["hit"] else "•(min q)"
                print(
                    f"{status} {Path(res['path']).name} → {res['size_kb']}KB @ q={res['quality']}"
                )
            else:
                print(f"✗ {Path(res['path']).name}: {res.get('reason','error')}")

    hits = sum(1 for s in stats if s.get("hit"))
    print(f"\nDone. Exact hits (<= {target_kb}KB): {hits}/{len(files)}")


if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2 or len(sys.argv) > 3:
        print("Usage: python compress_images.py <folder_path> [target_kb]")
        sys.exit(1)
    folder = sys.argv[1]
    target = int(sys.argv[2]) if len(sys.argv) == 3 else TARGET_KB_DEFAULT
    compress_images_in_folder(folder, target_kb=target)
