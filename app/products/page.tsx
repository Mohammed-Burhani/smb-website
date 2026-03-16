import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import ApplicationsSection from "../components/ApplicationsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ProductListingSection from "../components/ProductListingSection";
import { client } from "../lib/sanity";
import { productsListQuery } from "../lib/queries";
import type { SanityProductListItem } from "../lib/types";

// Revalidate every 60 seconds — picks up Sanity changes without a full rebuild
export const revalidate = 60;

export default async function ProductsPage() {
  const products: SanityProductListItem[] = await client.fetch(productsListQuery);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageBanner
        image="/home/banner.png"
        outlinedText="OUR PRODUCT"
        solidText="RANGE"
        subtitle="Reliable Mild Steel Fittings & Structural Components"
      />
      <ProductListingSection products={products} />
      <ApplicationsSection />
      <CTASection
        title="LOOKING FOR STEEL FITTINGS FOR YOUR PROJECT?"
        description="Contact SMB Fitting Industry for reliable manufacturing and supply of mild steel fittings."
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
