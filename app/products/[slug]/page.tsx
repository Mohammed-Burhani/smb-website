import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import PageBanner from "../../components/PageBanner";
import ProductDetailSection from "../../components/ProductDetailSection";
import ProductTypesSection from "../../components/ProductTypesSection";
import ProductSpecificationsSection from "../../components/ProductSpecificationsSection";
import ProductFeaturesSection from "../../components/ProductFeaturesSection";
import ProductGallerySection from "../../components/ProductGallerySection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { sanityFetch, urlFor } from "../../lib/sanity";
import { productBySlugQuery, productSlugsQuery } from "../../lib/queries";
import type { SanityProduct } from "../../lib/types";

export const revalidate = 0;

// Allow new slugs added in Sanity to be served without a rebuild
export const dynamicParams = true;

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = await sanityFetch<SanityProduct | null>({
    query: productBySlugQuery,
    params: { slug },
    tags: ['product', `product:${slug}`],
  });

  if (!data) notFound();

  const detailImageUrl = urlFor(data.detailImage).width(800).height(600).url();
  const featuresImageUrl = urlFor(data.featuresImage).width(800).height(600).url();
  const bannerImageUrl = urlFor(data.bannerImage).width(1600).height(600).url();
  const galleryImageUrls = data.galleryImages.map((img) =>
    urlFor(img).width(800).height(600).url()
  );
  const types = data.types.map((t) => ({
    title: t.title,
    description: t.description,
    image: urlFor(t.image).width(400).height(300).url(),
  }));

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageBanner
        image={bannerImageUrl}
        outlinedText={data.bannerOutlinedText}
        solidText={data.bannerSolidText}
        subtitle={data.bannerSubtitle}
      />
      <ProductDetailSection
        outlinedText={data.detailOutlinedText}
        solidText={data.detailSolidText}
        description={data.description}
        image={detailImageUrl}
      />
      <ProductTypesSection
        outlinedText={data.typesOutlinedText}
        solidText={data.typesSolidText}
        types={types}
      />
      {data.specifications && data.specifications.length > 0 && (
        <ProductSpecificationsSection
          outlinedText={data.specificationsOutlinedText || "RELIABLE"}
          solidText={data.specificationsSolidText || "SPECIFICATIONS"}
          specifications={data.specifications}
        />
      )}
      <ProductFeaturesSection image={featuresImageUrl} features={data.features} />
      <ProductGallerySection images={galleryImageUrls} />
      <CTASection
        title={data.ctaTitle}
        description={data.ctaDescription}
        buttonText="Request a Quote"
        buttonLink="/quote"
        secondaryButtonText="Send Enquiry"
        secondaryButtonLink="/contact"
        backgroundImage="/home/cta.png"
      />
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: productSlugsQuery,
    tags: ['product'],
  });
  return slugs.map(({ slug }) => ({ slug }));
}
