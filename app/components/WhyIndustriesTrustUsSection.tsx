import Image from "next/image";
import { Body } from "./Typography";

const reasons = [
  {
    title: "CONSISTENT MANUFACTURING STANDARDS",
    icon: "/industries/manufacturing-standards.svg",
  },
  {
    title: "RELIABLE LOCAL SUPPLY NETWORK",
    icon: "/industries/supply-network.svg",
  },
  {
    title: "STRUCTURED INVENTORY HANDLING",
    icon: "/industries/inventory.svg",
  },
  {
    title: "RESPONSIVE ORDER PROCESSING",
    icon: "/industries/responsive.svg",
  },
];

export default function WhyIndustriesTrustUsSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: '#EEF2F7' }}>
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left - Title */}
          <div className="lg:col-span-4 space-y-4">
            <h2
              className="text-6xl lg:text-7xl font-bold uppercase tracking-wide"
              style={{ WebkitTextStroke: '2px #D1D5DB', color: 'transparent' }}
            >
              WHY
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold uppercase" style={{ color: '#151C50' }}>
              INDUSTRIES TRUST US
            </h3>
            <Body className="text-gray-600 leading-relaxed">
              Across sectors, our focus remains consistent — reliability, quality, and responsive supply.
            </Body>
          </div>

          {/* Right - Reason Cards */}
          <div className="lg:col-span-8 space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl px-8 py-5 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0" style={{ color: '#151C50' }}>
                  <Image src={reason.icon} alt={reason.title} width={40} height={40} />
                </div>
                <h4 className="text-base font-bold tracking-wide" style={{ color: '#151C50' }}>
                  {reason.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
