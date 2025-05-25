import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import data from "@/assets/data.json";

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const industry = data.industries.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Industry Not Found</h2>
        <p className="mb-6">
          Sorry, we couldn't find the industry you're looking for.
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
          src={industry.image}
          alt={industry.title}
          className="w-full md:w-1/3 rounded-lg object-cover shadow-md"
          loading="lazy"
        />

        <div className="md:flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{industry.title}</h1>
          <p className="text-lg text-muted-foreground">
            {industry.description}
          </p>
          <p>{industry.detailed_description}</p>

          {industry.highlights?.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-2">Highlights</h3>
              <ul className="list-disc list-inside space-y-1">
                {industry.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {industry.technologies?.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technologies</h3>
              <ul className="flex flex-wrap gap-3">
                {industry.technologies.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {industry.case_study && (
            <div>
              <h3 className="text-2xl font-semibold mb-2">Case Study</h3>
              <h4 className="font-semibold">{industry.case_study.title}</h4>
              <p>{industry.case_study.summary}</p>
            </div>
          )}

          <Link
            to="/contact"
            className="inline-block mt-6 bg-primary py-3 px-6 rounded-lg font-semibold transition"
          >
            <Button>{industry.cta_label}</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
