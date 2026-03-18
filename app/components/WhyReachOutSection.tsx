import Image from "next/image";
import SectionTitle from "./SectionTitle";

const reasons = [
  {
    label: "Direct Manufacturer\n& Supplier",
    image: "/contact/direct-manufacturer.png",
    icon: "/contact/direct-manufacturer.svg",
  },
  {
    label: "Competitive Bulk\nPricing",
    image: "/contact/pricing.png",
    icon: "/contact/pricing.svg",
  },
  {
    label: "Prompt Response\n& Dispatch",
    image: "/contact/dispatch.png",
    icon: "/contact/dispatch.svg",
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
                <Image src={reason.icon} alt={reason.label} width={32} height={32} />
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
