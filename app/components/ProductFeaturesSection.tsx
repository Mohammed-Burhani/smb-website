import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

interface ProductFeaturesSectionProps {
  image: string;
  features: string[];
}

export default function ProductFeaturesSection({ image, features }: ProductFeaturesSectionProps) {
  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg">
            <Image src={image} alt="Product features" width={500} height={500} className="object-cover w-full h-full" />
          </div>

          {/* Right - Features */}
          <div className="space-y-6">
            <SectionTitle outlinedText="KEY" solidText="PRODUCT FEATURES" align="left" />
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#151C50' }} />
                  <Body className="text-gray-600">{feature}</Body>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
