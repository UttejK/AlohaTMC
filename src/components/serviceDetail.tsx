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
import servicesData from "@/assets/services.json";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";

type serviceType = {
  id: number;
  title: string;
  icon: string;
  description: string;
  headerImage: string;
  content: string;
  features: string[];
};
const iconMap = {
  Smartphone: (
    <Smartphone className="w-10 h-10 text-blue-600 dark:text-blue-400" />
  ),
  Cloud: <Cloud className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
  CheckSquare: (
    <CheckSquare className="w-10 h-10 text-blue-600 dark:text-blue-400" />
  ),
  Settings2: (
    <Settings2 className="w-10 h-10 text-blue-600 dark:text-blue-400" />
  ),
  Database: <Database className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
  Code: <Code className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
  Cpu: <Cpu className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
  Gauge: <Gauge className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
} as const; // Ensures type safety

export default function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState<serviceType | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const selectedService = servicesData.find((s) => s.id === Number(id));
    if (selectedService) {
      setService(selectedService);
    }
  }, [id]);

  if (!service)
    return <div className="text-center py-20">Service not found.</div>;

  return (
    <section className="container mx-auto py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div
        className="relative w-full h-64 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${service.headerImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white">{service.title}</h1>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center text-center">
        {iconMap[service.icon as keyof typeof iconMap]}

        <p className="mt-4 text-lg">{service.content}</p>

        <ul className="mt-6 text-left space-y-2">
          {service.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center gap-2">
              ✅ {feature}
            </li>
          ))}
        </ul>

        <Button
          className="mt-6"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
