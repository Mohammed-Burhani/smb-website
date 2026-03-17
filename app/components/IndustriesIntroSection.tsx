import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

const industries = [
  {
    title: "CONSTRUCTION",
    description: "Our mild steel fittings and structural components support pipelines and frameworks in residential, commercial, and infrastructure projects, ensuring safe and durable construction.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="6" y="32" width="12" height="14" rx="1"/>
        <rect x="20" y="22" width="12" height="24" rx="1"/>
        <path d="M4 46h40"/>
        <path d="M36 18l6 6H30l6-6z"/>
        <line x1="36" y1="18" x2="36" y2="46"/>
        <path d="M8 32V24l8-8"/>
      </svg>
    ),
  },
  {
    title: "OIL AND GAS",
    description: "Steel pipe fittings and elbows are essential for pipeline routing and flow control. Our products support energy and processing sectors where reliability and precision are critical.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="24" cy="24" r="8"/>
        <path d="M4 24h12M32 24h12"/>
        <path d="M16 16l-4-4M36 16l4-4M16 32l-4 4M36 32l4 4"/>
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: "ENGINEERING",
    description: "Engineering units depend on precise steel components for custom structures and assemblies. We supply consistent-quality fittings that integrate smoothly into fabrication processes.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M10 38l4-8 6 4 4-16 6 10 4-6 4 16"/>
        <path d="M6 42h36"/>
        <path d="M34 10l4 4-4 4M38 14H28"/>
      </svg>
    ),
  },
  {
    title: "MANUFACTURING",
    description: "Manufacturing facilities require reliable piping and structural steel systems. Our fittings support internal infrastructure and operational frameworks.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="4" y="24" width="40" height="20" rx="1"/>
        <rect x="8" y="30" width="6" height="8"/>
        <rect x="21" y="30" width="6" height="8"/>
        <rect x="34" y="30" width="6" height="8"/>
        <path d="M4 24l10-10 8 10 8-10 8 10 6-10"/>
        <rect x="18" y="8" width="12" height="6" rx="1"/>
      </svg>
    ),
  },
  {
    title: "MECHANICAL",
    description: "Mechanical contractors use our fittings for piping networks, fluid systems, and equipment integration. We ensure dependable performance across installations.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="24" cy="24" r="10"/>
        <circle cx="24" cy="24" r="4"/>
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6"/>
        <path d="M11.5 11.5l4.2 4.2M32.3 32.3l4.2 4.2M11.5 36.5l4.2-4.2M32.3 15.7l4.2-4.2"/>
      </svg>
    ),
  },
  {
    title: "STRUCTURAL",
    description: "Structural steel contractors rely on strong, dimensionally accurate components. Our products support framework fabrication and assembly.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="4" y="8" width="8" height="32" rx="1"/>
        <rect x="36" y="8" width="8" height="32" rx="1"/>
        <rect x="12" y="12" width="24" height="6" rx="1"/>
        <rect x="12" y="30" width="24" height="6" rx="1"/>
        <line x1="12" y1="24" x2="36" y2="24"/>
      </svg>
    ),
  },
];

export default function IndustriesIntroSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16">
        <div className="text-center mb-6 space-y-4">
          <SectionTitle outlinedText="DELIVERING STRENGTH" solidText="ACROSS INDUSTRIES" align="center" />
          <div className="max-w-3xl mx-auto space-y-3">
            <Body className="text-gray-600">
              SMB Fitting Industry manufactures and supplies mild steel elbows, pipe fittings, and structural
              steel components that serve a wide range of industrial applications. Our products are engineered
              for durability, dimensional accuracy, and dependable performance across demanding environments.
            </Body>
            <Body className="text-gray-600">
              We understand that each industry operates under different structural and operational requirements.
              Our role is to provide reliable steel solutions that integrate seamlessly into those systems.
            </Body>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 space-y-4 border-2 hover:shadow-lg transition-shadow"
              style={{ borderColor: '#151C50' }}
            >
              <div className="flex items-center gap-4">
                <div style={{ color: '#151C50' }}>{industry.icon}</div>
                <h3 className="text-base font-bold" style={{ color: '#151C50' }}>{industry.title}</h3>
              </div>
              <Body className="text-gray-600 text-sm leading-relaxed">{industry.description}</Body>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
