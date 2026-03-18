import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

const practices = [
  "Clean workspace management",
  "Safe equipment operation",
  "Organized stacking methods",
  "Efficient loading procedures",
];

export default function SafeHandlingSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <SectionTitle outlinedText="SAFE HANDLING" solidText="& STRUCTURED STORAGE" align="left" />

            <Body className="text-gray-600 leading-relaxed">
              Proper handling and systematic storage play an important role in preserving product
              quality. We ensure that finished goods are arranged in an organized manner to prevent
              surface damage and maintain dimensional integrity until dispatch.
            </Body>

            <div className="space-y-3">
              <Body className="text-gray-700 font-semibold">Our facility practices:</Body>
              <ul className="space-y-2">
                {practices.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="font-bold" style={{ color: '#151C50' }}>✓</span>
                    <Body className="text-gray-600">{item}</Body>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative h-[460px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image src="/quality/safe-handling.png" alt="Structured storage facility" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
