import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner"; // shadcn's toast hook import

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast("Validation Error", {
        description: "Please fix the errors before submitting.",
      });
      return;
    }

    // Simulate submission failure because email service is not configured
    try {
      throw new Error("Email service not configured.");
    } catch (err) {
      console.error(err);
      toast("Submission Failed", {
        description: "Sorry, we couldn't submit your application at this time.",
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
          <div>
            <Label htmlFor="fullName" className="mb-1 block">
              Full Name
            </Label>
            <Input
              id="fullName"
              name="fullName"
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
          <div>
            <Label htmlFor="email" className="mb-1 block">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
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
          <div>
            <Label htmlFor="phone" className="mb-1 block">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
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

        <div>
          <Label htmlFor="coverLetter" className="mb-1 block">
            Cover Letter (optional)
          </Label>
          <Textarea
            id="coverLetter"
            name="coverLetter"
            rows={5}
            placeholder="Write your message..."
            value={formData.coverLetter}
            onChange={handleChange}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="resume" className="mb-1 block">
              Upload Resume (PDF, DOC)
            </Label>
            <Input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
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
