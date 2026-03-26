import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

const industries = [
  {
    title: "OIL AND GAS",
    description: "Steel pipe fittings and elbows are essential for pipeline routing and flow control. Our products support energy and processing sectors where reliability and precision are critical.",
    icon: "/industries/oil-gas.svg",
  },
  {
    title: "ENGINEERING",
    description: "Engineering units depend on precise steel components for custom structures and assemblies. We supply consistent-quality fittings that integrate smoothly into manufacturing processes.",
    icon: "/industries/engineering.svg",
  },
  {
    title: "MANUFACTURING",
    description: "Manufacturing facilities require reliable piping and structural steel systems. Our fittings support internal infrastructure and operational frameworks.",
    icon: "/industries/manufacturing.svg",
  },
  {
    title: "MECHANICAL",
    description: "Mechanical contractors use our fittings for piping networks, fluid systems, and equipment integration. We ensure dependable performance across installations.",
    icon: "/industries/mechanical.svg",
  },
  {
    title: "STRUCTURAL",
    description: "Structural steel contractors rely on strong, dimensionally accurate components. Our products support framework assembly and installation.",
    icon: "/industries/structural.svg",
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
                <div style={{ color: '#151C50' }}>
                  <Image src={industry.icon} alt={industry.title} width={40} height={40} />
                </div>
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
