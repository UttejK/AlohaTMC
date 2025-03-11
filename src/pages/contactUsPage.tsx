import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

// Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message should be at least 5 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactUPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log("Form Submitted", data);
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 bg-gray-100 dark:bg-gray-900"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Contact Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          We'd love to hear from you!
        </p>
      </div>

      <div className="flex justify-center">
        <div className="p-8 max-w-lg w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                {...register("name")}
                placeholder="Your Name"
                className="border-gray-300 dark:border-gray-700"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Input
                {...register("email")}
                placeholder="Your Email"
                className="border-gray-300 dark:border-gray-700"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Textarea
                {...register("message")}
                placeholder="Your Message"
                className="border-gray-300 dark:border-gray-700"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
