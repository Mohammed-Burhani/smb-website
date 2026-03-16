import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

const products = [
  {
    title: "MILD STEEL ELBOWS",
    description:
      "Our mild steel elbows are manufactured for precise pipe direction changes in industrial piping systems and structural installations.",
    image: "/home/prod-1.png",
    href: "/products/mild-steel-elbows",
  },
  {
    title: "MS PIPE FITTINGS",
    description:
      "We supply a range of MS pipe fittings used in fabrication workshops, construction projects, and industrial pipeline systems.",
    image: "/home/prod-2.png",
    href: "/products/ms-pipe-fittings",
  },
  {
    title: "STEEL PIPES & SECTIONS",
    description:
      "Durable steel pipes and structural sections used for fabrication, framework construction, and mechanical installations.",
    image: "/home/prod-3.png",
    href: "/products/steel-pipes-sections",
  },
  {
    title: "CUSTOM FABRICATED COMPONENTS",
    description:
      "We also support customized fabrication requirements based on project specifications and industrial needs.",
    image: "/home/fabrication.png",
    href: "/products/custom-fabricated-components",
  },
];

export default function ProductListingSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <SectionTitle
            outlinedText="INDUSTRIAL STEEL FITTINGS"
            solidText="FOR RELIABLE PERFORMANCE"
            align="center"
          />
          <div className="max-w-3xl mx-auto space-y-3">
            <Body className="text-gray-600">
              SMB Fitting Industry manufactures and supplies high-quality mild steel pipe fittings
              and structural steel components used in construction, fabrication, and industrial infrastructure.
            </Body>
            <Body className="text-gray-600">
              Our products are designed to provide durability, dimensional accuracy, and dependable
              performance in demanding environments. From elbows and pipe fittings to structural steel
              sections, we ensure reliable supply for industrial requirements.
            </Body>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="rounded-xl overflow-hidden border border-gray-200 bg-white">
              {/* Image */}
              <div className="relative h-64 w-full bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold" style={{ color: '#151C50' }}>
                  {product.title}
                </h3>
                <Body className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </Body>
                <Link
                  href={product.href}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-gray-300 rounded-lg text-sm font-semibold transition-colors hover:bg-gray-50"
                  style={{ color: '#151C50' }}
                >
                  EXPLORE
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
