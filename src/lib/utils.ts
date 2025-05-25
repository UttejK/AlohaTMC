import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function uploadFileToGofile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("https://upload.gofile.io/uploadfile", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: ("Bearer " + import.meta.env.VITE_GO_FILE) as string,
    },
  });

  const json = await res.json();

  if (json.status !== "ok") {
    throw new Error("File upload failed");
  }

  return json.data.downloadPage;
}
export async function sendEmail({
  name,
  email,
  subject,
  message,
  files = [],
}: {
  name: string;
  email: string;
  subject?: string;
  message: string;
  files?: File[];
}) {
  const toastId = toast.loading("Uploading files...");

  try {
    const links: string[] = [];

    for (const file of files) {
      const url = await uploadFileToGofile(file);
      links.push(`${file.name}: ${url}`);
    }

    const fullMessage = `${message}\n\nUploaded Files:\n${links.join("\n")}`;

    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_ACCESS_TOKEN as string);
    formData.append("name", name);
    if (subject) formData.append("subject", subject);
    formData.append("email", email);
    formData.append("message", fullMessage);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const json = await res.json();

    if (!json.success) throw new Error(json.message || "Email send failed");

    toast.success("Message sent with file links!", { id: toastId });
  } catch (err) {
    toast.error("Failed to send message or upload files", { id: toastId });
    throw err;
  }
}
