import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import data from "@/assets/data.json";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = data.industries.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <div className="p-6 text-center text-red-500">Industry not found</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-primary">{industry.title}</h1>

      <img
        src={industry.image}
        alt={industry.title}
        className="w-full h-64 object-cover rounded-2xl shadow mb-6"
      />

      <p className="text-lg text-muted-foreground mb-6">
        {industry.detailed_description}
      </p>

      {industry.highlights?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Industry Highlights</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {industry.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {industry.technologies?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {industry.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {industry.case_study && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Case Study</h2>
          <div className="bg-muted p-4 rounded-xl shadow">
            <h3 className="text-lg font-medium mb-1">
              {industry.case_study.title}
            </h3>
            <p className="text-muted-foreground">
              {industry.case_study.summary}
            </p>
          </div>
        </div>
      )}

      <Button asChild className="text-lg px-6 py-3 rounded-xl">
        <Link to="/contact">{industry.cta_label}</Link>
      </Button>
    </div>
  );
}
