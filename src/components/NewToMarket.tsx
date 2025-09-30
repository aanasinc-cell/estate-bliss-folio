import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";
import property1Image from "@/assets/property-1.jpg";
import property2Image from "@/assets/property-2.jpg";
import property3Image from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1Image,
    price: "£700,000",
    address: "Oak Drive Close",
    city: "Wirral",
    postcode: "CH 42 2W",
    beds: 4,
    baths: 3,
    sqft: 2400,
    description:
      "A beautiful 4 bedroom detached home in a desirable location, featuring a spacious living area, modern kitchen, and beautifully landscaped gardens with stunning views.",
  },
  {
    image: property2Image,
    price: "£375,000",
    address: "Babergh Drive Walmer",
    city: "Wirral",
    postcode: "CH 60 EC",
    beds: 3,
    baths: 2,
    sqft: 1850,
    description:
      "A lovely 3 bedroom property in a prime residential area, well-maintained throughout with spacious rooms, generous garden and excellent transport links to the city centre.",
  },
  {
    image: property3Image,
    price: "£900 pcm",
    address: "Lister Lane",
    city: "Aintree, Wirral",
    postcode: "CH 23 0J",
    beds: 3,
    baths: 1,
    sqft: 1200,
    description:
      "A wonderful 3 bedroom terraced home ideal for families, close to local amenities, shops and schools. Modern interior with bright living space and enclosed back garden.",
  },
];

const NewToMarket = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
            New to market
          </h2>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button variant="navy" size="lg">
            VIEW MOST RECENT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewToMarket;
