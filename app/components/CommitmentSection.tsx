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
            <div className="relative h-[400px] lg:h-[500px] w-full">
              {/* Placeholder for quality control image */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <svg className="w-32 h-32 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                  <p className="mt-4 text-sm">Quality Control Image</p>
                </div>
              </div>
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
              We maintain strict quality control measures throughout manufacturing and sourcing processes. From material selection to final inspection, every product undergoes dimensional accuracy checks and finishing evaluation to ensure durability and performance.
            </Body>

            <ul className="space-y-3">
              {commitments.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span 
                    className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" 
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
