import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-12 px-6 transition-colors border-t-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Aloha TMC
          </h3>
          <p className="mt-2 text-sm">
            Empowering enterprises with cutting-edge technology solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Quick Links
          </h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500 dark:text-blue-400" />
              990 Ala Nanala St Apt 10B, Honolulu, HI, 96818
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-500 dark:text-blue-400" />
              +1 408-382-9411
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-500 dark:text-blue-400" />
              joelvpati@alohatmconsulting.com
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aloha TMC. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
