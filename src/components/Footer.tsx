import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-sm">
        {/* Navigation */}
        <nav className="space-y-2">
          <h3 className="font-semibold text-foreground">Explore</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:underline">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <address className="not-italic space-y-2">
          <h3 className="font-semibold text-foreground">Contact</h3>
          <p>
            <a
              href="mailto:support@alohatmconsulting.com"
              className="underline hover:text-foreground"
            >
              support@alohatmconsulting.com
            </a>
          </p>
        </address>

        {/* Legal Notice */}
        <div className="space-y-2 md:text-right sm:col-span-2 md:col-span-1">
          <p>
            © {new Date().getFullYear()} Aloha Technologies and Management
            Consulting LLC.
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
