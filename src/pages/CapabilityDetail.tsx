import data from "@/assets/data.json";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function CapabilityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find capability by slug param
  const capability = data.capabilities.find((c) => c.slug === slug);

  if (!capability) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Capability Not Found</h2>
        <p className="mb-6">
          Sorry, we couldn't find the capability you're looking for.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="text-primary underline hover:text-primary-dark"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <section className="flex flex-col md:flex-row gap-8">
        <img
          src={capability.image}
          alt={capability.title}
          className="w-full md:w-1/3 rounded-lg object-cover shadow-md"
          loading="lazy"
        />

        <div className="md:flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{capability.title}</h1>
          <p className="text-lg text-muted-foreground">
            {capability.description}
          </p>
          <p>{capability.detailed_description}</p>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-1">
              {capability.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Technologies</h3>
            <ul className="flex flex-wrap gap-3">
              {capability.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Case Study</h3>
            <h4 className="font-semibold">{capability.case_study.title}</h4>
            <p>{capability.case_study.summary}</p>
          </div>

          <Link
            to={"/contact"}
            className="inline-block mt-6 bg-primary py-3 px-6 rounded-lg font-semibold transition"
          >
            <Button>{capability.cta_label}</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
