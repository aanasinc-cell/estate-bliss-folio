import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-crowd.jpg";

const Hero = () => {
  const [searchType, setSearchType] = useState<"sale" | "rent">("sale");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      alert("Please enter a location to search");
      return;
    }
    console.log(`Searching for properties ${searchType === "sale" ? "for sale" : "to rent"} in: ${searchQuery}`);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--navy-deep))]/60 via-[hsl(var(--navy-accent))]/50 to-[hsl(var(--navy-deep))]/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Hero Text */}
        <div className="mb-8 md:mb-12">
          <p className="text-white/90 text-sm md:text-base mb-4 tracking-wide font-light">
            Building Trusted Relationships
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-4 leading-tight">
            Find your home
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto font-light">
            Multi-award winning estate & letting agents across Worcestershire
            <br />
            We are an independent local family firm
          </p>
        </div>

        {/* Search Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-hero-card p-6 md:p-8">
          <form onSubmit={handleSearch} className="space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Input
                type="text"
                placeholder="City, town or postcode…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 pl-4 pr-12 text-base border-input"
                required
                aria-label="Search location"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[hsl(var(--navy-deep))] text-white rounded hover:bg-[hsl(var(--navy-accent))] transition-smooth"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Toggle Buttons */}
            <div className="flex gap-3 justify-center">
              <Button
                type="button"
                variant={searchType === "sale" ? "navy" : "outline"}
                size="lg"
                onClick={() => setSearchType("sale")}
                className="flex-1 md:flex-initial"
              >
                FOR SALE
              </Button>
              <Button
                type="button"
                variant={searchType === "rent" ? "navy" : "outline"}
                size="lg"
                onClick={() => setSearchType("rent")}
                className="flex-1 md:flex-initial"
              >
                TO RENT
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
