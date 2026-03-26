import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function IndustriesSection() {
  const industries = [
    {
      name: "OIL & GAS",
      image: "/home/oil-gas.png",
    },
    {
      name: "INFRASTRUCTURE",
      image: "/home/infrastructure.png",
    },
    {
      name: "ENGINEERING",
      image: "/home/engineering.png",
    },
  ];

  return (
    <section className="w-full py-20" style={{ backgroundColor: 'var(--color-light-bg)' }}>
      <div className="px-8 lg:px-16">
        {/* Heading */}
        <div className="mb-16">
          <SectionTitle 
            outlinedText="INDUSTRIES"
            solidText="WE SERVE"
            align="center"
          />
        </div>

        {/* Industries Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Single Row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="relative h-40 rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
              >
                {/* Background Image */}
                <Image 
                  src={industry.image} 
                  alt={industry.name}
                  width={1000}
                  height={1000}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors z-10" />
                
                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h4 className="text-white text-xl lg:text-2xl font-bold tracking-wide">
                    {industry.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
