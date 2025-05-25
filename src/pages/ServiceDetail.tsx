import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import data from "@/assets/data.json";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = data.services.find((s) => s.link === `/services/${slug}`);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Service Not Found</h2>
        <p className="mb-6">
          Sorry, we couldn't find the service you're looking for.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="text-primary underline hover:text-primary/80"
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
          src={service.image}
          alt={service.title}
          className="w-full md:w-1/3 rounded-lg object-cover shadow-md"
          loading="lazy"
        />

        <div className="md:flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{service.title}</h1>
          <p className="text-lg text-muted-foreground">{service.description}</p>
          <p>{service.detailed_description}</p>

          {service.offerings?.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-2">Our Offerings</h3>
              <ul className="list-disc list-inside space-y-1">
                {service.offerings.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {service.benefits?.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-2">Key Benefits</h3>
              <ul className="list-disc list-inside space-y-1">
                {service.benefits.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {service.technologies?.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Technologies We Use
              </h3>
              <ul className="flex flex-wrap gap-3">
                {service.technologies.map((tech, idx) => (
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

          {service.case_study && (
            <div>
              <h3 className="text-2xl font-semibold mb-2">Case Study</h3>
              <div className="bg-muted p-4 rounded-xl shadow">
                <h4 className="text-lg font-medium mb-1">
                  {service.case_study.title}
                </h4>
                <p className="text-muted-foreground">
                  {service.case_study.summary}
                </p>
              </div>
            </div>
          )}

          <Link
            to="/contact"
            className="inline-block mt-6 bg-primary py-3 px-6 rounded-lg font-semibold transition"
          >
            <Button>{service.cta_label}</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
