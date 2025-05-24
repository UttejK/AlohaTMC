import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Computer, ServerCog, Users, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 0,
    title: "Intelligent ERP",
    icon: <ServerCog className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    description:
      "Our iERP solutions, on-premise and cloud-based, automate and optimize Finance, HR, logistics, CRM, sales, and procurement. Using AI, ML, and data analytics, we provide scalable solutions across industries. Our services include advisory, implementation, modernization, migration, and custom development to enhance automation.",
  },
  {
    id: 1,
    title: "Enterprise Digital Transformation",
    icon: <Users className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    description:
      "Our digital transformation services help enterprises design, automate, and modernize processes with intelligent tools. We offer tailored solutions in user and customer experience design, mobile and web technologies, AI/ML, modern generative AI, cloud computing, analytics, Industrial Internet of Things (IIoT), and hyper-automation.",
  },
  {
    id: 2,
    title: "Infrastructure Services",
    icon: <Workflow className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    description:
      "Our infrastructure services help businesses assess, design, build, and maintain a robust, secure IT infrastructure to drive growth and enhance efficiency. We offer solutions in cloud engineering, cybersecurity, IT service management, network operations, and identity and access management to ensure resilience and cost-effectiveness. ",
  },
  {
    id: 3,
    title: "Program Management",
    icon: <Cloud className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    description:
      "Our enterprise program management office (E-PMO) services are designed to boost project planning, governance, execution, and monitoring using advanced technology, tailored to diverse industries and customers. E-PMO empowers businesses to maximize project outcomes, reduce risks, and make informed, data-driven decisions in the evolving digital landscape.",
  },
  {
    id: 4,
    title: "Managed Services",
    icon: <Computer className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    description:
      "Our managed services involve assessing existing systems, workflows, and operations. Our experts deliver maintenance and support, customize technology solutions, and offer cloud services tailored to your unique business needs. We focus on enhancing flexibility and scalability for optimal business efficiency.",
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
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                <div className="mt-4 flex justify-center">
                  <Link to={`/services/${service.id}`}>
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
