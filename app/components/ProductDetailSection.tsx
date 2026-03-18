import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

interface ProductDetailSectionProps {
  outlinedText: string;
  solidText: string;
  description: string[];
  image: string;
}

export default function ProductDetailSection({
  outlinedText,
  solidText,
  description,
  image,
}: ProductDetailSectionProps) {
  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <SectionTitle
              outlinedText={outlinedText}
              solidText={solidText}
              align="left"
            />
            <div className="space-y-4">
              {description.map((para, i) => (
                <Body key={i} className="text-gray-600 leading-relaxed">
                  {para}
                </Body>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#F0F4FC' }}
          >
            <Image
              src={image}
              alt={solidText}
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
