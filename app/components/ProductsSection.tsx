import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { H6, BodySmall } from "./Typography";

export default function ProductsSection() {
  const products = [
    {
      title: "MILD STEEL ELBOWS",
      description: "High-strength MS elbows designed for structural and pipeline applications.",
      image: "/products/elbows.jpg",
    },
    {
      title: "MS PIPE FITTINGS",
      description: "Comprehensive range of couplings, bends, reducers and connectors.",
      image: "/products/fittings.jpg",
    },
    {
      title: "STEEL PIPES & SECTIONS",
      description: "Reliable steel pipes and square sections for industrial fabrication.",
      image: "/products/pipes.jpg",
    },
  ];

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
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                  <p className="mt-2 text-xs">Product Image</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                <H6 className="uppercase">
                  {product.title}
                </H6>
                <BodySmall>
                  {product.description}
                </BodySmall>
                <Link
                  href={`/products/${product.title.toLowerCase().replace(/\s+/g, '-')}`}
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
