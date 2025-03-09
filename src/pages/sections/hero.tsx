import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import data from "@/assets/data.json";

export default function Hero() {
  return (
    // Hero Section
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
        Welcome to {data.name_of_the_company}
      </h1>
      <p className="container mt-4 text-lg text-gray-700 dark:text-gray-300">
        {data.description}
      </p>
      <Button className="mt-6">
        <Link to="/contact">Know More</Link>
      </Button>
    </section>
  );
}
