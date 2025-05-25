import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className="bg-white dark:bg-black shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* <Link
          to="/"
          className="text-3xl font-extrabold text-black dark:text-white tracking-tight"
        >
          ATMC
        </Link> */}
        <Link to="/" className="flex items-center space-x-4">
          <img
            src="/ATMC.jpg"
            alt="ATMC Logo"
            className="size-10 scale-[1.5] rounded-full object-fit"
          />
          <span className="text-3xl font-extrabold text-black dark:text-white tracking-tight">
            ATMC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "hover:scale-105 transform transition-all duration-300 font-semibold text-base",
                "text-black hover:text-gray-700", // Light mode text
                "dark:text-white dark:hover:text-gray-300", // Dark mode text
                pathname === link.path &&
                  "underline underline-offset-4 text-black dark:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
              >
                <Menu className="w-7 h-7 text-black dark:text-white" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="bg-white dark:bg-black text-black dark:text-white"
            >
              <nav className="flex flex-col space-y-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 pl-8",
                      "text-xl font-semibold transition-all duration-300",
                      pathname === link.path &&
                        "border-l-4 pl-8 border-black dark:border-white"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
