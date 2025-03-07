import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import data from "@/assets/data.json";

export default function Home() {
  return (
    <div className="mt-16 w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Welcome to {data.name_of_the_company}
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Your trusted partner in delivering quality solutions.
        </p>
        <Button className="mt-6">
          <Link to="/contact">Get a Quote</Link>
        </Button>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          About Us
        </h2>
        <p className="mt-4 text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          We specialize in providing high-quality services tailored to your
          needs. Our team of experts ensures the best solutions to help your
          business grow.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white dark:bg-gray-800 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {data.services.map((service) => (
              <Service key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          What Our Clients Say
        </h2>
        <div className="mt-8 flex flex-col items-center">
          <blockquote className="italic text-gray-700 dark:text-gray-300 max-w-lg text-center">
            "MyCompany helped us scale our business with amazing web solutions.
            Highly recommended!"
          </blockquote>
          <p className="mt-2 font-semibold text-gray-900 dark:text-white">
            — John Doe, CEO of XYZ Corp
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white text-center py-10">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-2">Contact us today to discuss your project.</p>
        <Button className="mt-4 bg-white text-blue-600 dark:text-blue-800">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  );
}

type serviceType = {
  id?: number;
  title: string;
  description: string;
};

function Service({ service }: { service: serviceType }) {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 text-gray-700 dark:text-gray-400">
        {service.description}
      </p>
    </div>
  );
}
