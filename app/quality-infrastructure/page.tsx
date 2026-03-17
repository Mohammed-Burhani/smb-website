import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import QualityCommitmentSection from "../components/QualityCommitmentSection";
import InfrastructureSetupSection from "../components/InfrastructureSetupSection";
import OperationalWorkflowSection from "../components/OperationalWorkflowSection";
import SafeHandlingSection from "../components/SafeHandlingSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function QualityInfrastructurePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageBanner
        image="/home/commitment.png"
        outlinedText="QUALITY"
        solidText="& INFRASTRUCTURE"
        subtitle="Engineered for Precision. Built for Reliability."
      />
      <QualityCommitmentSection />
      <InfrastructureSetupSection />
      <OperationalWorkflowSection />
      <SafeHandlingSection />
      <CTASection
        title="PRECISION AND RELIABILITY IN EVERY FITTING"
        description="Partner with SMB Fitting Industry for consistent quality and dependable supply."
        buttonText="Request a Quote"
        buttonLink="/quote"
        secondaryButtonText="View Our Products"
        secondaryButtonLink="/products"
        backgroundImage="/home/cta.png"
      />
      <Footer />
    </div>
  );
}
