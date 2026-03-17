import Image from "next/image";
import SectionTitle from "./SectionTitle";

const reasons = [
  {
    label: "Direct Manufacturer\n& Supplier",
    image: "/home/fabrication.png",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.8" className="w-8 h-8">
        <rect x="2" y="18" width="28" height="12" rx="1"/>
        <path d="M2 18l8-10h12l8 10"/>
        <path d="M10 18V10M22 18V10"/>
        <rect x="13" y="22" width="6" height="8"/>
      </svg>
    ),
  },
  {
    label: "Competitive Bulk\nPricing",
    image: "/home/infrastructure.png",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.8" className="w-8 h-8">
        <path d="M16 2l2.5 7.5H27l-6.5 4.5 2.5 7.5L16 17l-7 4.5 2.5-7.5L5 9.5h8.5L16 2z"/>
      </svg>
    ),
  },
  {
    label: "Prompt Response\n& Dispatch",
    image: "/home/commitment.png",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.8" className="w-8 h-8">
        <rect x="2" y="12" width="20" height="14" rx="1"/>
        <path d="M22 16h5l5 5v5H22V16z"/>
        <circle cx="8" cy="28" r="3"/>
        <circle cx="26" cy="28" r="3"/>
      </svg>
    ),
  },
];

export default function WhyReachOutSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: '#EEF2F7' }}>
      <div className="px-8 lg:px-16">
        <div className="text-center mb-12">
          <SectionTitle outlinedText="WHY REACH OUT" solidText="TO SMB FITTING INDUSTRY?" align="center" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="relative h-52 rounded-2xl overflow-hidden group">
              {/* Background image */}
              <Image src={reason.image} alt={reason.label} fill className="object-cover" />
              {/* Dark blue overlay */}
              <div className="absolute inset-0 bg-[#4F5CB3]/60" />
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center gap-4 p-6 text-white text-center">
                {reason.icon}
                <p className="text-base font-bold whitespace-pre-line leading-snug text-white">
                  {reason.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
