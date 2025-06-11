import data from "@/assets/data.json";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = data.services;

const capabilities = data.capabilities;

const industries = data.industries;

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh]"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
        }}
      >
        <div className="absolute inset-0 bg-black/60 bg-opacity-60 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Empowering Enterprises with Innovation
            </h1>
            <p className="mb-6">
              Delivering IT excellence with global development centers in
              Hawai'i, USA and India.
            </p>
            <Link to="/about">
              <Button className="bg-white text-black font-bold">
                Who We Are
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-6 md:px-12 bg-muted/30 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          About Aloha Technologies
        </h2>
        <p className="max-w-3xl mx-auto mb-4 text-muted-foreground">
          At ATMC, we help enterprises optimize operations and gain a
          competitive edge by delivering reliable, scalable IT services. Backed
          by decades of experience and guided by our values—Integrity,
          Competence, and Client Commitment—we enable innovation with
          confidence.
        </p>
        <Link to="/about">
          <Button>Read More</Button>
        </Link>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-12 bg-muted/10">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Our Services
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <HomeCard
              key={i}
              title={service.title}
              description={service.description}
              link={service.link}
              image={service.image}
            />
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Technical Capabilities
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((capability, i) => (
            <HomeCard
              key={i}
              title={capability.title}
              description={capability.description}
              link={capability.link}
              image={capability.image}
            />
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 md:px-12 bg-muted/10">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Industries We Serve
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <HomeCard
              key={i}
              title={industry.title}
              description={industry.description}
              link={industry.link}
              image={industry.image}
            />
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="bg-muted text-muted-foreground text-center py-6 mt-10">
        <p className="mb-2">
          © 2025 Aloha Technologies and Management Consulting LLC
        </p>
        <div className="space-x-4">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/careers" className="hover:underline">
            Careers
          </Link>
        </div>
      </footer>
    </div>
  );
}

type HomeCardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export const HomeCard = ({
  title,
  description,
  link,
  image,
}: HomeCardProps) => {
  return (
    <Card className="relative overflow-hidden rounded-xl shadow-md group transition hover:shadow-lg min-h-[320px] hover:cursor-pointer">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-150 ease-in-out scale-100 group-hover:scale-105"
      />

      {/* Translucent overlay for text legibility */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-end md:justify-between p-4">
        {/* Title always visible — slides on hover (desktop) */}
        <div className="text-white text-xl font-semibold md:group-hover:cursor-pointer">
          {title}
        </div>

        {/* Description + CTA - hidden on desktop until hover, always visible on mobile */}
        <div className="mt-4 text-white opacity-100 duration-300">
          <p className="text-sm text-gray-100 mb-4">{description}</p>
          <div className="flex justify-end">
            <Link to={link}>
              <Button className="text-sm">Know more →</Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};
