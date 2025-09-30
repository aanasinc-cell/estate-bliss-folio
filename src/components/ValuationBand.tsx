import { Button } from "@/components/ui/button";

const ValuationBand = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Wondering how much your home is worth?
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-8">
          Find the value of the Worcestershire sold by Karl Tatler Estate Agents
        </p>
        <Button variant="gold" size="xl">
          BOOK A VALUATION
        </Button>
      </div>
    </section>
  );
};

export default ValuationBand;
