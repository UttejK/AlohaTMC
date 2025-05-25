import { Link } from "react-router-dom";
import data from "@/assets/data.json";
import { Button } from "@/components/ui/button";

export default function Services() {
  const servicesData = data.services;
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.title}
            className="bg-white dark:bg-muted shadow rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-muted-foreground mt-2">
                {service.description}
              </p>
              <span className="inline-block mt-4 text-primary font-medium group-hover:underline">
                <Link to={service.link} className="group">
                  <Button>Learn More →</Button>
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
