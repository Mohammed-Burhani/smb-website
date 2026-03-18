import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

export interface ProductType {
  title: string;
  description: string;
  image: string;
}

interface ProductTypesSectionProps {
  outlinedText: string;
  solidText: string;
  types: ProductType[];
}

export default function ProductTypesSection({ outlinedText, solidText, types }: ProductTypesSectionProps) {
  return (
    <section className="w-full py-20" style={{ backgroundColor: '#DCE8F5' }}>
      <div className="px-8 lg:px-16">
        <div className="text-center mb-14">
          <SectionTitle outlinedText={outlinedText} solidText={solidText} align="center" />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {types.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 w-56 flex flex-col items-center gap-4 shadow-sm hover:shadow-md transition-shadow h-full"
              style={{ borderBottom: '3px solid #D4A843' }}
            >

              <Image src={type.image} alt={type.title} width={500} height={500} className="w-full h-full" />

              <div className="text-center space-y-2">
                <h4 className="text-sm font-bold" style={{ color: '#151C50' }}>{type.title}</h4>
                <Body className="text-gray-500 text-xs leading-relaxed">{type.description}</Body>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
