import data from "@/assets/data.json";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries and Experience", href: "/industries" },
  { name: "Contact", href: "/contact" },
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
        <NavLink
          to="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          {data.name_of_the_company}
        </NavLink>

        {/* Desktop Navigation & Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition relative",
                  isActive &&
                    "text-blue-500 dark:text-blue-400 font-semibold after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-blue-500 dark:after:bg-blue-400 after:transition-all"
                )
              }
            >
              {link.name}
            </NavLink>
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
          <NavLink
            key={link.name}
            to={link.href}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              cn(
                "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition relative",
                isActive &&
                  "text-blue-500 dark:text-blue-400 font-semibold after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-blue-500 dark:after:bg-blue-400 after:transition-all"
              )
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
