import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Smartphone,
  Cloud,
  CheckSquare,
  Settings2,
  Database,
  Code,
  Cpu,
  Gauge,
} from "lucide-react";

const services = [
  {
    id: 0,
    title: "Mobile Development",
    icon: <Smartphone className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    description:
      "State-of-the-art native Android & iOS mobile application development.",
  },
  {
    id: 1,
    title: "Cloud Infrastructure",
    icon: <Cloud className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    description:
      "Drive innovation and scalability with seamless cloud integration.",
  },
  {
    id: 2,
    title: "Functional Testing",
    icon: (
      <CheckSquare className="w-10 h-10 text-blue-600 dark:text-blue-400" />
    ),
    description:
      "Ensuring application quality from requirement phase to final delivery.",
  },
  {
    id: 3,
    title: "Mobile Automation",
    icon: <Settings2 className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    description:
      "Automated testing for Android & iOS platforms to ensure excellence.",
  },
  {
    id: 4,
    title: "REST API Testing",
    icon: <Code className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    description:
      "Expertise in building automation testing frameworks for REST APIs.",
  },
  {
    id: 5,
    title: "Database Testing",
    icon: <Database className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    description:
      "Ensuring accuracy, integrity, and performance of database systems.",
  },
  {
    id: 6,
    title: "Automation Frameworks",
    icon: <Cpu className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    description:
      "Development & integration of automation frameworks with CI/CD pipelines.",
  },
  {
    id: 7,
    title: "Performance & Load Testing",
    icon: <Gauge className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    description:
      "Ensuring optimal functionality and user experience through performance testing.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 dark:bg-gray-900 py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          We provide cutting-edge technology solutions, ensuring quality,
          efficiency, and innovation.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
            >
              <CardHeader className="flex flex-col items-center">
                {service.icon}
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mt-3">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
