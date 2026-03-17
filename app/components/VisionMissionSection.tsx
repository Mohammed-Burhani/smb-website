import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

export default function VisionMissionSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: '#DCE8F5' }}>
      <div className="px-8 lg:px-16">
        {/* Title */}
        <div className="text-center mb-16">
          <SectionTitle
            outlinedText="OUR"
            solidText="VISION & MISSION"
            align="center"
          />
        </div>

        {/* Content Row */}
        <div className="flex items-stretch justify-center gap-8 max-w-4xl mx-auto">

          {/* Vision Card */}
          <div
            className="flex-1 bg-white flex flex-col px-10 py-10 shadow-lg"
            style={{ borderRadius: '2.5rem' }}
          >
            {/* Vision Icon */}
            <div className="mb-6">
              <Image src="/about/vision.svg" alt="Vision" width={48} height={48} />
            </div>

            <h3
              className="text-sm font-black mb-4 tracking-widest"
              style={{ color: '#151C50' }}
            >
              VISION
            </h3>
            <Body style={{ color: '#151C50', fontSize: '0.9rem', lineHeight: '1.75' }}>
              To become a trusted regional leader in steel fittings by consistently delivering
              durable products, maintaining quality, and supporting industrial growth reliably.
            </Body>
          </div>

          {/* Mission Card */}
          <div
            className="flex-1 bg-white flex flex-col px-10 py-10 shadow-lg"
            style={{ borderRadius: '2.5rem' }}
          >
            {/* Mission Icon */}
            <div className="mb-6">
              <Image src="/about/mission.svg" alt="Mission" width={48} height={48} />
            </div>

            <h3
              className="text-sm font-black mb-4 tracking-widest"
              style={{ color: '#151C50' }}
            >
              MISSION
            </h3>
            <Body style={{ color: '#151C50', fontSize: '0.9rem', lineHeight: '1.75' }}>
              To manufacture and supply precision-engineered steel fittings that meet industrial
              standards while ensuring reliability, affordability, and customer-focused service.
            </Body>
          </div>

        </div>
      </div>
    </section>
  );
}