import { toast } from "sonner";

export default function Careers() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-4">
          Join Our Team
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We’re always on the lookout for curious minds, passionate builders,
          and thoughtful innovators. Even if there aren’t active job openings,
          we’d still love to hear from you. Share your story with us — let’s
          build the future together.
        </p>
      </div>

      <div className="text-center space-y-4">
        <p className="text-base">
          📧 Send your resume to{" "}
          <a
            href="mailto:support@alohatmconsulting.com"
            className="text-primary underline hover:text-primary/80"
            onClick={() => {
              navigator.clipboard.writeText("support@alohatmconsulting.com");
              toast.success("Email address copied to clipboard!");
            }}
          >
            support@alohatmconsulting.com
          </a>
        </p>
        <a
          href="mailto:support@alohatmconsulting.com"
          className="inline-block bg-primary text-white dark:text-black px-6 py-2 rounded-full shadow hover:bg-primary/90 transition"
          aria-label="Send your resume via email"
        >
          Email Your Resume
        </a>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-lg max-h-[28rem]">
        <img
          src="/compressed/pexels-fauxels-3184405.webp"
          alt="Team collaborating in an office"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
