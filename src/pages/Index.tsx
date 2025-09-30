import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValuationBand from "@/components/ValuationBand";
import FeatureTiles from "@/components/FeatureTiles";
import NewToMarket from "@/components/NewToMarket";
import ContactBand from "@/components/ContactBand";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValuationBand />
        <FeatureTiles />
        <NewToMarket />
        <ContactBand />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
