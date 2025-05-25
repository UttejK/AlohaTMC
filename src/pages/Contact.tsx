import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      toast.error("Please fix the below errors before submitting:", {
        description: (
          <ul className="list-disc list-inside space-y-1 text-sm">
            {(Object.keys(validationErrors) as (keyof ContactFormData)[]).map(
              (key) => (
                <li key={key}>{validationErrors[key] ?? ""}</li>
              )
            )}
          </ul>
        ),
      });
      return;
    }

    // Simulate success
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary mb-2">Get in Touch</h1>
        <p className="text-muted-foreground text-lg">
          Have questions, ideas, or just want to say hello? We’d love to hear
          from you.
        </p>
      </div>

      <Card className="shadow-lg border border-border">
        <CardContent className="p-6 sm:p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-base font-medium">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="bg-background border-border focus:ring-2 focus:ring-primary focus:outline-none"
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-base font-medium">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-background border-border focus:ring-2 focus:ring-primary focus:outline-none"
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="subject" className="text-base font-medium">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="bg-background border-border focus:ring-2 focus:ring-primary focus:outline-none"
              />
              {errors.subject && (
                <p className="text-sm text-destructive mt-1">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-base font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="bg-background border-border focus:ring-2 focus:ring-primary focus:outline-none"
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full text-lg py-6 rounded-xl">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
