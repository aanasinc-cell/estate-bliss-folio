import { ChevronRight } from "lucide-react";
import teamSellImage from "@/assets/team-sell.jpg";
import teamLetImage from "@/assets/team-let.jpg";
import teamMortgageImage from "@/assets/team-mortgage.jpg";
import teamCareersImage from "@/assets/team-careers.jpg";

const tiles = [
  {
    title: "Why sell with us?",
    image: teamSellImage,
    link: "#",
  },
  {
    title: "Why let with us?",
    image: teamLetImage,
    link: "#",
  },
  {
    title: "Mortgage & Insurance Services",
    image: teamMortgageImage,
    link: "#",
  },
  {
    title: "Careers",
    image: teamCareersImage,
    link: "#",
  },
];

const FeatureTiles = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiles.map((tile, index) => (
            <a
              key={index}
              href={tile.link}
              className="group relative h-64 md:h-80 rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-smooth"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-smooth group-hover:scale-105"
                style={{ backgroundImage: `url(${tile.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-deep))]/90 via-[hsl(var(--navy-deep))]/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-serif text-2xl md:text-3xl text-white font-semibold mb-2">
                  {tile.title}
                </h3>
                <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-smooth">
                  <span className="text-sm font-medium mr-2">Learn more</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTiles;
