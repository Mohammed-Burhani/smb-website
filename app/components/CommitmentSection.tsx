import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

export default function CommitmentSection() {
  const commitments = [
    "Precision Fabrication",
    "Quality Material Sourcing",
    "Skilled Workforce",
    "Structured Storage & Dispatch",
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden">
              <Image 
                src="/home/commitment.png" 
                alt="Quality Control and Infrastructure"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <SectionTitle 
              outlinedText="COMMITMENT"
              solidText="TO QUALITY & INFRASTRUCTURE"
              align="left"
            />

            <Body>
              We maintain strict quality control measures throughout manufacturing and sourcing processes. From material selection to final inspection, every product undergoes dimensional accuracy checks and finishing evaluation to ensure seamless durability and performance.
            </Body>

            <ul className="space-y-3">
              {commitments.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span 
                    className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" 
                    style={{ backgroundColor: '#151C50' }} 
                  />
                  <Body className="m-0">
                    {item}
                  </Body>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
