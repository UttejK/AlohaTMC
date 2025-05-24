import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
import data from "@/assets/data.json";
import { Link } from "react-router-dom";

export default function Hero() {
  const theme = localStorage.getItem("theme") === "dark";

  return (
    // Hero Section
    // <section
    //   id="home"
    //   className="flex flex-col items-center justify-center text-center py-20 px-4"
    // >
    //   <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
    //     Welcome to {data.name_of_the_company}
    //   </h1>
    //   <p className="container mt-4 text-lg text-gray-700 dark:text-gray-300">
    //     {data.description}
    //   </p>
    //   <Button className="mt-6">
    //     <Link to="/contact">Know More</Link>
    //   </Button>
    // </section>
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center py-32 px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1686100510118-207f1434d807?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Office background
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {theme ? (
          <img
            src="/Team work-rafiki.png" // Professional illustration
            alt="Hero Illustration"
            className="mx-auto mb-8 w-64 h-auto"
          />
        ) : (
          <img
            src="/Team work-bro.png" // Professional illustration
            alt="Hero Illustration"
            className="mx-auto mb-8 w-64 h-auto"
          />
        )}
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to {data.name_of_the_company}
        </h1>
        <p className="mt-4 text-lg text-gray-100">{data.description}</p>
        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200">
          <Link to="/contact">Know More</Link>
        </Button>
      </div>
    </section>
  );
}
