import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import data from "@/assets/data.json";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries and Experience", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply dark mode class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          {data.name_of_the_company}
        </Link>

        {/* Desktop Navigation & Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            // <Link
            //   key={link.name}
            //   to={link.href}
            //   className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            // >
            //   {link.name}
            // </Link>
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector(link.href);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Dark Mode Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </Button>
        </div>

        {/* Mobile Menu + Dark Mode Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Dark Mode Toggle for Mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation with Smooth Transition */}
      <div
        className={cn(
          "md:hidden flex flex-col space-y-2 px-4 pb-4 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {navLinks.map((link) => (
          // <Link
          //   key={link.name}
          //   to={link.href}
          //   className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
          //   onClick={() => setIsOpen(false)}
          // >
          //   {link.name}
          // </Link>
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              const section = document.querySelector(link.href);
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false); // Close mobile menu
              }
            }}
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
