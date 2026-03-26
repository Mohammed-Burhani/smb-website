import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden">
              <Image 
                src="/home/about.png" 
                alt="SMB Fitting Industry Factory"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <SectionTitle 
              outlinedText="ABOUT"
              solidText="SMB FITTING INDUSTRY"
              align="left"
            />

            {/* Description */}
            <div className="space-y-4">
              <Body>
                SMB Fitting Industry is a Chennai-based manufacturer and supplier specializing in mild steel elbows, pipe fittings, and structural steel components. With a strong focus on quality, reliability, and customer satisfaction, we support industrial sectors with consistent product standards.
              </Body>
              
              <Body>
                Our commitment to dependable service and local accessibility makes us a preferred steel fitting partner in Tondiarpet and surrounding industrial areas.
              </Body>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
