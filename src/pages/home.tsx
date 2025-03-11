import AboutUs from "./sections/about";
import ContactCTA from "./sections/contact";
import Hero from "./sections/hero";
import IndustriesExperience from "./sections/industriesAndExperience";
import Services from "./sections/services";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      <Hero />
      <AboutUs />
      <Services />
      <IndustriesExperience />
      <ContactCTA />
    </div>
  );
}
