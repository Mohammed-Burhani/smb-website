import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

export default function ManufacturingApproachSection() {
  const approaches = [
    "Accurate bending and shaping of elbows",
    "Clean finishing and surface preparation",
    "Dimensional consistency checks",
    "Safe handling and structured storage"
  ];

  return (
    <section className="w-full py-20" style={{ backgroundColor: '#DCE8F5' }}>
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/home/fabrication.png" 
                alt="Manufacturing process"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <SectionTitle 
              outlinedText="APPROACH"
              solidText="OF OUR MANUFACTURING"
              align="left"
            />

            <Body className="text-gray-700 leading-relaxed">
              We follow disciplined production practices, efficient workflow, and structural flexibility. 
              From raw material procurement to final inspection, every stage follows systematic quality checks.
            </Body>

            <div className="space-y-3">
              <h4 className="text-lg font-bold" style={{ color: '#151C50' }}>
                We include:
              </h4>
              <ul className="space-y-2">
                {approaches.map((approach, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-xl mt-1" style={{ color: '#151C50' }}>•</span>
                    <Body className="text-gray-700">{approach}</Body>
                  </li>
                ))}
              </ul>
            </div>

            <Body className="text-gray-700 leading-relaxed">
              By combining skilled workmanship with organized production methods, we maintain consistent 
              product quality across batches.
            </Body>
          </div>
        </div>
      </div>
    </section>
  );
}
