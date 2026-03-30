import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import ContactSection from "../components/ContactSection";
import OurLocationSection from "../components/OurLocationSection";
import WhyReachOutSection from "../components/WhyReachOutSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageBanner
        outlinedText="CONTACT"
        solidText="US"
        subtitle="Get in Touch for Reliable Steel Fittings & Supply Support"
      />
      <ContactSection />
      <OurLocationSection />
      <WhyReachOutSection />
      <CTASection
        title="NEED IMMEDIATE ASSISTANCE?"
        description="Call us directly to discuss your steel fitting requirements."
        buttonText="Call Now"
        buttonLink="tel:+919940485711"
        secondaryButtonText="Send WhatsApp Inquiry"
        secondaryButtonLink="https://wa.me/919940485711"
        backgroundImage="/home/cta.png"
      />
      <Footer />
    </div>
  );
}
