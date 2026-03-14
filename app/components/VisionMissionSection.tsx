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
              <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" style={{ color: '#151C50' }}>
                <rect x="4" y="36" width="9" height="20" rx="1.5" fill="currentColor"/>
                <rect x="16" y="26" width="9" height="30" rx="1.5" fill="currentColor"/>
                <rect x="28" y="18" width="9" height="38" rx="1.5" fill="currentColor"/>
                <circle cx="50" cy="18" r="11" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                <circle cx="50" cy="18" r="4.5" fill="currentColor"/>
                <path d="M50 5 L50 9 M50 27 L50 31 M37 18 L41 18 M59 18 L63 18 M41.1 9.1 L43.9 11.9 M56.1 24.1 L58.9 26.9 M56.1 11.9 L58.9 9.1 M41.1 26.9 L43.9 24.1"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
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
              <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" style={{ color: '#151C50' }}>
                <circle cx="30" cy="36" r="22" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                <circle cx="30" cy="36" r="14" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                <circle cx="30" cy="36" r="6" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                <path d="M46 6 L58 6 L58 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M58 6 L36 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
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