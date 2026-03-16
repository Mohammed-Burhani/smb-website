import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import ProductListingSection from "../components/ProductListingSection";
import Footer from "../components/Footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageBanner
        image="/home/banner.png"
        outlinedText="OUR PRODUCT"
        solidText="RANGE"
        subtitle="Reliable Mild Steel Fittings & Structural Components"
      />
      <ProductListingSection />
      <Footer />
    </div>
  );
}
