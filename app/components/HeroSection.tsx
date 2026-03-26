import Link from "next/link";
import Image from "next/image";
import { H1 } from "./Typography";

export default function HeroSection() {
  const features = [
    {
      icon: "/home/icons/in-house.svg",
      title: "In-House Manufacturing",
      description: "Precision manufacturing with controlled quality standards.",
    },
    {
      icon: "/home/icons/quality-assured.svg",
      title: "Quality Assured",
      description: "Durable materials and reliable finishing.",
    },
    {
      icon: "/home/icons/timely-supply.svg",
      title: "Timely Supply",
      description: "Efficient dispatch across Chennai & nearby regions.",
    },
    {
      icon: "/home/icons/trusted-partnerships.svg",
      title: "Trusted Partnerships",
      description: "Reliable supplier for contractors & industrial buyers.",
    },
  ];

  return (
    <section className="relative w-full">
      {/* Hero Background with Image */}
      <div className="relative w-full h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/home/banner.png"
            alt="Steel fittings and elbows"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full px-8 lg:px-16 flex items-center w-full">
          <div className="w-full 2xl:max-w-6xl space-y-6">
            <H1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              EXCLUSIVE CUSTOM-MADE SEAMLESS CS / SS ELBOWS & FITTINGS
            </H1>
            
            <p className="text-lg lg:text-xl font-semibold" style={{ color: '#151C50' }}>
              Trusted Manufacturer & Supplier in Chennai for Industrial Applications
            </p>

            <Link
              href="/quote"
              className="inline-block px-8 py-3.5 text-white text-base font-semibold rounded-md transition-colors"
              style={{ backgroundColor: '#151C50' }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Cards - Overlapping the hero section */}
      <div className="relative -mt-12 px-8 lg:px-16 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 flex justify-center" style={{ color: '#151C50' }}>
                <Image 
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-lg font-bold mb-3 text-center" style={{ color: '#151C50' }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-center" style={{ color: '#2E3887' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
