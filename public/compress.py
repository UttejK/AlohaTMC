import os
from PIL import Image, UnidentifiedImageError
from io import BytesIO

MAX_SIZE_KB = 200
MAX_SIZE_BYTES = MAX_SIZE_KB * 1024
SUPPORTED_FORMATS = (".jpg", ".jpeg")


def compress_to_webp(image_path, output_path):
    try:
        img = Image.open(image_path)
    except UnidentifiedImageError:
        print(f"Skipped {image_path}: Not a valid image.")
        return False

    img = img.convert("RGB")
    quality = 50  # Start moderate for WebP
    min_quality = 2

    while quality >= min_quality:
        buffer = BytesIO()
        img.save(buffer, format="WEBP", quality=quality, method=6)
        size = buffer.tell()

        print(f"   Tried quality={quality}, size={size / 1024:.1f}KB")

        if size <= MAX_SIZE_BYTES:
            with open(output_path, "wb") as f_out:
                f_out.write(buffer.getvalue())
            return True

        quality -= 5

    # Save the smallest version anyway
    with open(output_path, "wb") as f_out:
        f_out.write(buffer.getvalue())
    print(f"   Saved lowest quality WebP at {size / 1024:.1f}KB (still over 200KB)")
    return False


def compress_images_in_folder(folder_path):
    compressed_folder = os.path.join(folder_path, "compressed")
    os.makedirs(compressed_folder, exist_ok=True)

    for filename in os.listdir(folder_path):
        if filename.lower().endswith(SUPPORTED_FORMATS):
            original_path = os.path.join(folder_path, filename)
            base_name = os.path.splitext(filename)[0]
            compressed_path = os.path.join(compressed_folder, base_name + ".webp")

            print(f"Compressing {filename} → {base_name}.webp ...")
            success = compress_to_webp(original_path, compressed_path)

            if success:
                final_size = os.path.getsize(compressed_path) / 1024
                print(f"✔ Compressed to {final_size:.1f}KB\n")
            else:
                print(f"✖ Could not reach < 200KB (saved lowest quality anyway)\n")


if __name__ == "__main__":
    import sys

    if len(sys.argv) != 2:
        print("Usage: python compress_images.py <folder_path>")
        sys.exit(1)

    folder_path = sys.argv[1]
    compress_images_in_folder(folder_path)
