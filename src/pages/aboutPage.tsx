export default function AboutPage() {
  return (
    <section className="container mx-auto py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold text-center">About Aloha TMC</h1>
      <p className="text-lg mt-4 text-center">
        Aloha Technologies and Management Consulting LLC (ATMC) is a trusted IT
        partner, specializing in enterprise solutions, cloud infrastructure, and
        automation testing.
      </p>

      <div className="mt-12 space-y-8">
        {/* Mission Section */}
        <div>
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-2">
            Our mission is to empower businesses with cutting-edge digital
            solutions that optimize processes, drive efficiency, and create
            scalable innovations.
          </p>
        </div>

        {/* Core Values Section */}
        <div>
          <h2 className="text-2xl font-semibold">Our Core Values</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Integrity: We uphold the highest ethical standards.</li>
            <li>Competence: Excellence in IT solutions and consulting.</li>
            <li>Client Commitment: Prioritizing customer success.</li>
            <li>Dedication: Passionate about innovation and growth.</li>
            <li>Value Addition: Delivering real impact for businesses.</li>
          </ul>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-semibold">Our Experience</h2>
          <p className="mt-2">
            With <strong>over 20 years of combined experience</strong>, our team
            has worked across{" "}
            <strong>government, healthcare, and enterprise IT</strong> sectors,
            helping organizations streamline operations and embrace digital
            transformation.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <p className="mt-2">
            At ATMC, we stand out by offering customized, client-centric
            solutions that drive business growth. Our expertise in modern
            technologies, agile methodologies, and deep industry knowledge
            ensures seamless implementation of IT strategies.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Expert Team with Decades of Experience</li>
            <li>Proven Track Record in IT Consulting & Automation</li>
            <li>Global Presence with Development Centers in the USA & India</li>
            <li>Cutting-edge Cloud & Infrastructure Solutions</li>
            <li>Commitment to Innovation & Continuous Improvement</li>
          </ul>
        </div>

        {/* Future Vision Section */}
        <div>
          <h2 className="text-2xl font-semibold">Our Vision for the Future</h2>
          <p className="mt-2">
            We envision a future where businesses harness the power of
            technology to create smarter, more efficient, and scalable
            solutions. ATMC aims to lead the digital transformation wave by
            constantly innovating and evolving with the latest advancements.
          </p>
        </div>

        {/* Placeholder for Additional Information */}
        <div>
          <h2 className="text-2xl font-semibold">
            More Information Coming Soon
          </h2>
          <p className="mt-2 text-gray-500">
            [Placeholder: This section will be updated with detailed content
            about the company's history, leadership, partnerships, and more.]
          </p>
        </div>
      </div>
    </section>
  );
}
