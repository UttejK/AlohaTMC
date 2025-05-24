import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Careers", path: "/careers" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          ATMC
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-muted-foreground hover:text-primary transition font-medium",
                pathname === link.path && "text-primary underline"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="hidden md:flex items-center">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="md:hidden flex items-center">
            <ThemeToggle />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open menu">
                <Menu className="w-6 h-6 text-primary" />
              </button>
            </SheetTrigger>

            <SheetContent side="left">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "text-foreground hover:text-primary text-lg font-medium",
                      pathname === link.path && "text-primary"
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
}
