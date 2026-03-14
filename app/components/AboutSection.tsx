import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] w-full">
              {/* Placeholder for factory image */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <svg className="w-32 h-32 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                  <p className="mt-4 text-sm">Factory/Warehouse Image</p>
                </div>
              </div>
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
                SMB Fitting Industry is a Chennai-based manufacturer and supplier specializing in mild steel elbows, pipe fittings, and structural steel components. With a strong focus on quality, reliability, and customer satisfaction, we support construction, fabrication, and industrial sectors with consistent product standards.
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
