import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import ApplicationsSection from "../components/ApplicationsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ProductListingSection from "../components/ProductListingSection";
import { sanityFetch } from "../lib/sanity";
import { productsListQuery } from "../lib/queries";
import type { SanityProductListItem } from "../lib/types";

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await sanityFetch<SanityProductListItem[]>({
    query: productsListQuery,
    tags: ['product'],
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageBanner
        image="/products/banner.png"
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
