import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

export default function AboutCompanySection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="grid grid-cols-5 gap-4">
              {/* Display steel fittings in a grid */}
              <div className="col-span-5 relative h-[400px] rounded-lg overflow-hidden">
                <Image 
                  src="/home/about.png" 
                  alt="Steel fittings and elbows"
                  fill
                  className="object-cover"
                />
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

            <div className="space-y-4">
              <Body className="text-gray-700 leading-relaxed">
                SMB Fitting Industry is a Chennai-based manufacturer and supplier specializing in 
                mild steel elbows, pipe fittings, elbows, and structural steel components.
              </Body>
              
              <Body className="text-gray-700 leading-relaxed">
                With a strong focus on quality, reliability, and customer satisfaction, we support 
                construction, fabrication, and industrial sectors with consistent product supply and 
                consistent quality standards.
              </Body>

              <Body className="text-gray-700 leading-relaxed">
                Our commitment to dependable service and local accessibility makes us a preferred 
                steel fitting partner in Tondiarpet and surrounding industrial areas.
              </Body>

              <Body className="text-gray-700 leading-relaxed">
                We combine in-house manufacturing with experienced inventory management to ensure 
                timely delivery and reliable performance for demanding industrial environments.
              </Body>

              <Body className="text-gray-700 leading-relaxed">
                We continue to build long-term B2B industrial relationships by maintaining transparency, 
                product reliability, and service responsiveness.
              </Body>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
