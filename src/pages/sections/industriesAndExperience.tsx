import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const industries = [
  {
    id: 0,
    name: "Government",
    description:
      "Digital transformation and IT consulting for government agencies.",
  },
  {
    id: 1,
    name: "Healthcare",
    description: "Testing and automation for healthcare IT solutions.",
  },
  {
    id: 2,
    name: "Enterprise IT",
    description:
      "Cloud infrastructure and automation solutions for businesses.",
  },
];

const caseStudies = [
  {
    id: 0,
    title: "KOLEA MES M&O",
    challenge:
      "Ensuring seamless operational support for Medicaid Eligibility System (MES).",
    solution:
      "Provided extensive functional and automation testing, ensuring reliability and scalability.",
    impact:
      "Enhanced system performance and reduced downtime, benefiting thousands of users.",
  },
  {
    id: 1,
    title: "BESSD Hawaii",
    challenge:
      "Implementing a robust digital platform for the Benefit, Employment, and Support Services Division.",
    solution:
      "Collaborated with eWorld ES to develop and test an integrated IT system.",
    impact:
      "Improved efficiency in service delivery for social benefit programs in Hawaii.",
  },
  {
    id: 2,
    title: "AEM for KOLEA",
    challenge:
      "Integrating Adobe Experience Manager (AEM) into Hawaii’s Medicaid system.",
    solution:
      "Performed end-to-end testing and ensured seamless deployment with Hoike Networks.",
    impact:
      "Delivered a user-friendly digital experience for Medicaid applicants and administrators.",
  },
];

export default function IndustriesExperience() {
  return (
    <section
      id="industries"
      className="bg-gray-100 dark:bg-gray-900 py-16 px-4"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white text-center">
          Industries & Experience
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-center">
          ATMC provides IT consulting and digital transformation services across
          multiple industries.
        </p>

        {/* Industries We Serve */}
        <h3 className="mt-10 text-2xl font-semibold text-gray-900 dark:text-white">
          Industries
        </h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Card
              key={industry.id}
              className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  {industry.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  {industry.description}
                </p>
                <div className="mt-4 flex justify-center">
                  <Link to={`/industries/${industry.id}`}>
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies / Experience */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Case Studies
          </h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy) => (
              <Card
                key={caseStudy.id}
                className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {caseStudy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  {/* Left-aligned content */}
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Challenge:</strong> {caseStudy.challenge}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    <strong>Solution:</strong> {caseStudy.solution}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    <strong>Impact:</strong> {caseStudy.impact}
                  </p>
                  <div className="mt-4 flex justify-center">
                    <Link to={`/case-studies/${caseStudy.id}`}>
                      <Button variant="outline">Read More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
