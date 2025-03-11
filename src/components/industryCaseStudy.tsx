import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "@/assets/industries.json";
import { Button } from "@/components/ui/button";

// Define TypeScript types
type Industry = {
  id: number;
  name: string;
  description: string;
  headerImage: string;
  content: string;
  keyOfferings: string[];
};

type CaseStudy = {
  id: number;
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  headerImage: string;
  details: string;
};

export default function IndustryCaseStudyItem() {
  const { type, id } = useParams(); // Extract type (industries/case-studies) and id from URL
  const [item, setItem] = useState<Industry | CaseStudy | null>(null);

  useEffect(() => {
    if (!type || !id) return;

    console.log(type, id);

    let selectedItem: Industry | CaseStudy | undefined;

    if (type === "industries") {
      selectedItem = data.industries.find(
        (item: Industry) => item.id === Number(id)
      );
    } else if (type === "case-studies") {
      selectedItem = data["case-studies"].find(
        (item: CaseStudy) => item.id === Number(id)
      );
    }

    if (selectedItem) {
      setItem(selectedItem);
    }
  }, [type, id]);

  if (!item) return <div className="text-center py-20">Item not found.</div>;

  return (
    <section className="container mx-auto py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header Image */}
      <div
        className="relative w-full h-64 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${item.headerImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white">
            {"name" in item ? item.name : item.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-10 text-center">
        <p className="text-lg">
          {"content" in item ? item.content : item.details}
        </p>

        {/* Render key offerings if it's an industry */}
        {"keyOfferings" in item && item.keyOfferings.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Key Offerings</h2>
            <ul className="mt-4 space-y-2 text-left mx-auto max-w-2xl">
              {item.keyOfferings.map((offer, index) => (
                <li key={index} className="flex items-center gap-2">
                  ✅ {offer}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Render case study details if it's a case study */}
        {"challenge" in item && (
          <div className="mt-6 text-left mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold">Case Study Details</h2>
            <p className="mt-4">
              <strong>Challenge:</strong> {item.challenge}
            </p>
            <p className="mt-2">
              <strong>Solution:</strong> {item.solution}
            </p>
            <p className="mt-2">
              <strong>Impact:</strong> {item.impact}
            </p>
          </div>
        )}

        {/* Call to Action */}
        <Button className="mt-6">Learn More</Button>
      </div>
    </section>
  );
}
