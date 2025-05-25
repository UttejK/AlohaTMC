import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner"; // shadcn's toast hook import
import { sendEmail } from "@/lib/utils";

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
    coverLetterFile: null as File | null,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Clear error on change
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Simple phone regex (digits, spaces, +, -, parentheses)
  const phoneRegex = /^[\d+\-\s()]{7,20}$/;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Invalid phone format.";
    if (!formData.resume) newErrors.resume = "Resume file is required.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the below errors before submitting:", {
        description: (
          <ul className="list-disc list-inside space-y-1 text-sm">
            {Object.keys(validationErrors).map((key) => (
              <li key={key}>{validationErrors[key]}</li>
            ))}
          </ul>
        ),
      });
      return;
    }

    try {
      if (formData.resume) {
        const messageBody = {
          name: formData.fullName,
          email: formData.email,
          subject: `Career Application, from ${formData.fullName}, phone: ${formData.phone}`,
          message: formData.coverLetter,
          files: [formData.resume],
        };
        if (formData.coverLetterFile) {
          messageBody.files.push(formData.coverLetterFile);
        }

        await sendEmail(messageBody);
      } else {
        toast.error("A resume is required to submit the application.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Submission Failed", {
        description: (
          <div>Sorry, we couldn't submit your application at this time.</div>
        ),
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Join Our Team</h1>
        <p className="text-muted-foreground text-lg">
          We’re always on the lookout for curious minds, passionate builders,
          and thoughtful innovators. Even if we don’t have active job openings,
          we’d love to hear from you. Share your story with us and let’s build
          the future together.
        </p>
        <img
          src="/compressed/pexels-fauxels-3184405.webp"
          alt="Team"
          className="mx-auto mt-6 rounded-2xl shadow-lg w-full max-h-96 object-cover"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-muted p-6 rounded-2xl shadow"
        noValidate
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <Label htmlFor="fullName" className="mb-1 block">
              Full Name
            </Label>
            <Input
              id="fullName"
              name="fullName"
              className="border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-gray-900"
              required
              value={formData.fullName}
              onChange={handleChange}
              aria-invalid={errors.fullName ? "true" : "false"}
              aria-describedby="fullName-error"
            />
            {errors.fullName && (
              <p className="text-destructive mt-1 text-sm" id="fullName-error">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="mb-1 block">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              className="border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-gray-900"
              required
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            {errors.email && (
              <p className="text-destructive mt-1 text-sm" id="email-error">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="mb-1 block">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              className="border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-gray-900"
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby="phone-error"
            />
            {errors.phone && (
              <p className="text-destructive mt-1 text-sm" id="phone-error">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Resume Upload */}
        <div>
          <Label htmlFor="resume" className="mb-1 block">
            Upload Resume (PDF, DOC)
          </Label>
          <Input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-gray-900"
            required
            onChange={handleFileChange}
            aria-invalid={errors.resume ? "true" : "false"}
            aria-describedby="resume-error"
          />
          {errors.resume && (
            <p className="text-destructive mt-1 text-sm" id="resume-error">
              {errors.resume}
            </p>
          )}
        </div>

        {/* Cover Letter Section (textarea + file upload) */}
        <div className="space-y-6">
          <div>
            <Label htmlFor="coverLetter" className="mb-1 block">
              Cover Letter (optional)
            </Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              rows={5}
              placeholder="Write your message..."
              className="border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-gray-900"
              value={formData.coverLetter}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="coverLetterFile" className="mb-1 block">
              Upload Cover Letter (Optional)
            </Label>
            <Input
              id="coverLetterFile"
              name="coverLetterFile"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-gray-900"
            />
          </div>
        </div>

        <Button type="submit" className="text-lg mt-4 px-6 py-3 rounded-xl">
          Submit Application
        </Button>
      </form>
    </div>
  );
}
