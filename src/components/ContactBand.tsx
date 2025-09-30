import { Button } from "@/components/ui/button";

const ContactBand = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-card p-8 md:p-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Need to get in touch?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-xl mx-auto">
            Click here to contact us, or call us directly. Search what we can help you simply
          </p>
          <Button variant="gold" size="xl">
            CONTACT US
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactBand;
