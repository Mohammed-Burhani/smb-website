import Navbar from "../components/Navbar";
import AboutBanner from "../components/AboutBanner";
import AboutCompanySection from "../components/AboutCompanySection";
import VisionMissionSection from "../components/VisionMissionSection";
import CoreValuesSection from "../components/CoreValuesSection";
import ManufacturingApproachSection from "../components/ManufacturingApproachSection";
import LocalPresenceSection from "../components/LocalPresenceSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutBanner />
      <AboutCompanySection />
      <VisionMissionSection />
      <CoreValuesSection />
      <ManufacturingApproachSection />
      <LocalPresenceSection />
      <WhyChooseUsSection />
      <CTASection
        title="PARTNER WITH A RELIABLE STEEL FITTINGS MANUFACTURER"
        description="Let us support your next project with precision-engineered steel components."
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
