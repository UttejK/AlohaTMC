import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import data from "@/assets/data.json";

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = data.services.find((s) => s.link === `/services/${slug}`);

  if (!service) {
    return (
      <div className="p-6 text-center text-red-500">Service not found</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-primary">{service.title}</h1>

      <img
        src={service.image}
        alt={service.title}
        className="w-full h-64 object-cover rounded-2xl shadow mb-6"
      />

      <p className="text-lg text-muted-foreground mb-6">
        {service.detailed_description}
      </p>

      {service.offerings?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Offerings</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {service.offerings.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {service.benefits?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Key Benefits</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {service.benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      {service.technologies?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Technologies We Use</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {service.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {service.case_study && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Case Study</h2>
          <div className="bg-muted p-4 rounded-xl shadow">
            <h3 className="text-lg font-medium mb-1">
              {service.case_study.title}
            </h3>
            <p className="text-muted-foreground">
              {service.case_study.summary}
            </p>
          </div>
        </div>
      )}

      <Button asChild className="text-lg px-6 py-3 rounded-xl">
        <Link to="/contact">{service.cta_label}</Link>
      </Button>
    </div>
  );
}
