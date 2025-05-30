import data from "@/assets/data.json";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  const capabilities = data.capabilities;

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          About Aloha Technologies and Management Consulting
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          At Aloha Technologies and Management Consulting LLC (ATMC), we empower
          enterprises worldwide to achieve a competitive edge through
          innovative, cost-effective, and scalable IT solutions. By combining
          deep technological expertise with a client-centric approach, we drive
          business transformation and deliver measurable value across
          industries.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Our mission is to help businesses thrive in a rapidly evolving
          technological landscape by providing innovative, reliable, and
          scalable IT solutions. We are committed to fostering transformation
          through cutting-edge technology and expert consulting, ensuring our
          clients achieve lasting success.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            Integrity: Upholding the highest standards of fairness and honesty.
          </li>
          <li>
            Competence: Leveraging expertise to deliver world-class solutions.
          </li>
          <li>
            Client Commitment: Prioritizing client success through tailored
            services.
          </li>
          <li>
            Dedication: Committing to excellence in every project we undertake.
          </li>
          <li>Value Addition: Driving measurable impact through innovation.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Our History</h2>
        <p className="text-gray-700 dark:text-gray-300">
          With three years of dedicated service and over 20 years of cumulative
          expertise in IT and management consulting, Aloha Technologies and
          Management Consulting LLC has established itself as a trusted partner
          for businesses worldwide. Operating state-of-the-art development
          centers in the USA and India, our seasoned professionals have
          delivered innovative solutions, including testing services for KOLEA
          MES M&O, BENEFIT, EMPLOYMENT AND SUPPORT SERVICES DIVISION (BESSD) in
          Hawaii, and AEM implementation for KOLEA with partners like Speridian,
          eWorld ES, and Hoike Networks, Inc. dba Pacxa. Our collaborative
          approach and commitment to quality ensure we deliver transformative
          solutions that meet unique business needs.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Our Capabilities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-transform hover:scale-[1.02]"
            >
              <img
                src={capability.image}
                alt={capability.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-primary">
                  {capability.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {capability.description}
                </p>
                <Link to={capability.link}>
                  <Button className="text-sm hover:underline font-medium">
                    Know more →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
