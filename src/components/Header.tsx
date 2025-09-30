import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-[hsl(var(--navy-deep))]/95 backdrop-blur-sm shadow-lg"
          : "bg-[hsl(var(--navy-deep))]/80"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-32 h-10 flex items-center justify-center">
                <span className="font-serif text-2xl text-white font-bold tracking-wider">
                  TATLER
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white text-sm font-medium hover:text-[hsl(var(--gold))] transition-smooth"
            >
              FIND YOUR HOME
            </a>
            <div className="relative group">
              <button className="text-white text-sm font-medium hover:text-[hsl(var(--gold))] transition-smooth">
                OUR SERVICES ▾
              </button>
            </div>
            <div className="relative group">
              <button className="text-white text-sm font-medium hover:text-[hsl(var(--gold))] transition-smooth">
                ABOUT US ▾
              </button>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-[hsl(var(--gold))] transition-smooth">
              <Heart className="w-5 h-5" />
            </button>
            <Button variant="navyOutline" size="sm">
              BOOK A VALUATION
            </Button>
            <Button variant="navyOutline" size="sm">
              CONTACT US
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-[hsl(var(--gold))] transition-smooth"
              >
                FIND YOUR HOME
              </a>
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-[hsl(var(--gold))] transition-smooth"
              >
                OUR SERVICES
              </a>
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-[hsl(var(--gold))] transition-smooth"
              >
                ABOUT US
              </a>
              <Button variant="gold" size="sm" className="w-full">
                BOOK A VALUATION
              </Button>
              <Button variant="navyOutline" size="sm" className="w-full">
                CONTACT US
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
