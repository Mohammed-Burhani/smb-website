import Link from "next/link";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { H6, BodySmall } from "./Typography";
import { sanityFetch, urlFor } from "../lib/sanity";
import { productsListQuery } from "../lib/queries";
import type { SanityProductListItem } from "../lib/types";

export const revalidate = 0;

export default async function ProductsSection() {
  const products = await sanityFetch<SanityProductListItem[]>({
    query: productsListQuery,
    tags: ['product'],
  });

  return (
    <section className="w-full py-20" style={{ backgroundColor: '#F0F4FC' }}>
      <div className="px-8 lg:px-16">
        {/* Heading */}
        <div className="mb-16">
          <SectionTitle 
            outlinedText="EXCLUSIVE"
            solidText="PRODUCTS"
            align="center"
          />
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-128 bg-gray-200 overflow-hidden">
                <Image 
                  src={urlFor(product.listingImage).width(1000).height(1000).url()} 
                  alt={product.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                <H6 className="uppercase">
                  {product.title}
                </H6>
                <BodySmall>
                  {product.listingDescription}
                </BodySmall>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center text-sm font-semibold transition-colors"
                >
                  EXPLORE
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block px-10 py-3.5 text-base font-semibold rounded-lg border-2 transition-colors bg-white"
            style={{ borderColor: '#D1D5DB', color: '#151C50' }}
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
