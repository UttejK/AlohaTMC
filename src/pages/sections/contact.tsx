import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ContactCTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 py-16 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together!</h2>
        <p className="text-lg md:text-xl mt-2 opacity-90">
          Have a project in mind? Get in touch with us today.
        </p>
        <Button
          onClick={() => navigate("/contact")}
          className="mt-6 px-6 py-3 text-lg font-medium bg-white text-blue-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 transition"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}
