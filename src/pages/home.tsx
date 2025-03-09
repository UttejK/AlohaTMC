import ContactUs from "./contact";
import AboutUs from "./sections/about";
import Hero from "./sections/hero";
import IndustriesExperience from "./sections/industriesAndExperience";
import Services from "./sections/services";

export default function Home() {
  return (
    <div className="mt-16 w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      <Hero />
      <AboutUs />
      <Services />
      <IndustriesExperience />
      <ContactUs />
    </div>
  );
}
