import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

const infraPoints = [
  "Precision cutting and shaping",
  "Controlled bending operations",
  "Organized raw material storage",
  "Structured finished goods handling",
];

export default function InfrastructureSetupSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative h-[460px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image src="/quality/infrastructure.png" alt="Manufacturing facility" fill className="object-cover" />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <SectionTitle outlinedText="INFRASTRUCTURE" solidText="& OPERATIONAL SETUP" align="left" />

            <Body className="text-gray-600 leading-relaxed">
              Our operational setup is designed to support efficient production and systematic
              order handling. Equipped with essential fabrication tools and organized material
              storage systems, we maintain a seamless workflow from manufacturing to dispatch.
            </Body>

            <div className="space-y-3">
              <Body className="text-gray-700 font-semibold">Our infrastructure supports:</Body>
              <ul className="space-y-2">
                {infraPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#151C50' }} />
                    <Body className="text-gray-600">{point}</Body>
                  </li>
                ))}
              </ul>
            </div>

            <Body className="text-gray-600 leading-relaxed">
              This allows us to manage orders effectively while maintaining quality standards.
            </Body>
          </div>
        </div>
      </div>
    </section>
  );
}
