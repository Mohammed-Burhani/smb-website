import SectionTitle from "./SectionTitle";

export default function IndustriesSection() {
  const industries = [
    {
      name: "CONSTRUCTION",
      image: "/industries/construction.jpg",
    },
    {
      name: "OIL & GAS",
      image: "/industries/oil-gas.jpg",
    },
    {
      name: "FABRICATION",
      image: "/industries/fabrication.jpg",
    },
    {
      name: "INFRASTRUCTURE",
      image: "/industries/infrastructure.jpg",
    },
    {
      name: "ENGINEERING",
      image: "/industries/engineering.jpg",
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
          {/* Top Row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {industries.slice(0, 3).map((industry, index) => (
              <div
                key={index}
                className="relative h-32 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                
                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h4 className="text-white text-xl lg:text-2xl font-bold tracking-wide">
                    {industry.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 cards centered */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-start-1 md:col-end-2" />
            {industries.slice(3, 5).map((industry, index) => (
              <div
                key={index}
                className="relative h-32 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                
                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center">
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
