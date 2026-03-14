import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import CommitmentSection from "./components/CommitmentSection";
import IndustriesSection from "./components/IndustriesSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CommitmentSection />
      <IndustriesSection />
      <CTASection 
        title="LOOKING FOR RELIABLE STEEL FITTINGS SUPPLIER IN CHENNAI?"
        description="Partner with SMB Fitting Industry for quality products and dependable service."
        backgroundImage="/home/cta.png"
      />
      <Footer />
    </div>
  );
}
