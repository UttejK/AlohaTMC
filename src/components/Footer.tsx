import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-8">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <div className="space-x-4">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
          <Link to="/industries" className="hover:underline">
            Industries
          </Link>
          <Link to="/careers" className="hover:underline">
            Careers
          </Link>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Aloha Technologies and Management
          Consulting LLC. All rights reserved.
        </p>
        <p className="text-xs">
          Contact:{" "}
          <a
            href="mailto:joelvpati@alohatmconsulting.com"
            className="underline"
          >
            joelvpati@alohatmconsulting.com
          </a>
        </p>
      </div>
    </footer>
  );
}
