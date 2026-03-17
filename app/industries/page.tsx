import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import IndustriesIntroSection from "../components/IndustriesIntroSection";
import WhyIndustriesTrustUsSection from "../components/WhyIndustriesTrustUsSection";
import ServingChennaiSection from "../components/ServingChennaiSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageBanner
        image="/home/engineering.png"
        outlinedText="INDUSTRIES"
        solidText="WE SERVE"
        subtitle="Supporting Diverse Industrial & Infrastructure Sectors"
      />
      <IndustriesIntroSection />
      <WhyIndustriesTrustUsSection />
      <ServingChennaiSection />
      <CTASection
        title="LOOKING FOR A RELIABLE STEEL FITTINGS PARTNER?"
        description="Let SMB Fitting Industry support your industry requirements with dependable steel solutions."
        buttonText="Request a Quote"
        buttonLink="/quote"
        secondaryButtonText="Contact Our Team"
        secondaryButtonLink="/contact"
        backgroundImage="/home/cta.png"
      />
      <Footer />
    </div>
  );
}
