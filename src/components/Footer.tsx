import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--navy-deep))] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* About us */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">About us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Our history
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Offices & team member
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Request a valuation
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Saved properties
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Manage enquiry
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Tenants' Rights
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Complaints procedure
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[hsl(var(--gold))] transition-smooth">
                  Letting fees
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="text-white/80 hover:text-[hsl(var(--gold))] transition-smooth"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-[hsl(var(--gold))] transition-smooth"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-[hsl(var(--gold))] transition-smooth"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-[hsl(var(--gold))] transition-smooth"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-[hsl(var(--gold))] transition-smooth"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright and Brand Mark */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            © 2025 Karl Tatler Estate Agents & Lettings. All Rights Reserved.
            <br className="md:hidden" />
            <span className="ml-2">Crafted by ADCREATIVE</span>
          </p>
          <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
            <span className="font-serif text-lg font-bold">KT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
