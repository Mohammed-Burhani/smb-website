import Link from "next/link";

export default function HeroSection() {
  const features = [
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="12" y="32" width="12" height="20" />
          <rect x="26" y="24" width="12" height="28" />
          <rect x="40" y="16" width="12" height="36" />
          <path d="M8 12 L56 12" strokeWidth="3" />
        </svg>
      ),
      title: "In-House Manufacturing",
      description: "Precision fabrication with controlled quality standards.",
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M32 8 L32 56 M20 20 L32 32 L44 20" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="32" cy="32" r="24" />
        </svg>
      ),
      title: "Quality Assured",
      description: "Durable materials and reliable finishing.",
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="8" y="20" width="32" height="24" rx="2" />
          <rect x="44" y="28" width="12" height="16" rx="2" />
          <circle cx="16" cy="52" r="4" />
          <circle cx="32" cy="52" r="4" />
          <circle cx="50" cy="52" r="4" />
          <path d="M40 20 L48 20 L56 32 L56 44 L44 44" />
        </svg>
      ),
      title: "Timely Supply",
      description: "Efficient dispatch across Chennai & nearby regions.",
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 32 C20 32, 24 28, 32 28 C40 28, 44 32, 44 32 C44 32, 44 36, 44 40 C44 44, 40 48, 32 48 C24 48, 20 44, 20 40 C20 36, 20 32, 20 32 Z" />
          <path d="M16 28 L20 32 M44 32 L48 28" strokeLinecap="round" />
          <circle cx="28" cy="20" r="4" />
          <circle cx="36" cy="20" r="4" />
        </svg>
      ),
      title: "Trusted Partnerships",
      description: "Reliable supplier for contractors & industrial buyers.",
    },
  ];

  return (
    <section className="relative w-full">
      {/* Hero Background with Image */}
      <div className="relative w-full h-[600px] bg-gradient-to-r from-gray-100 to-gray-200">
        {/* Background Image - Replace with actual image */}
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-40" />
        
        {/* Hero Content */}
        <div className="relative h-full px-8 lg:px-16 flex items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: '#151C50' }}>
              EXCLUSIVE CUSTOM-MADE SEAMLESS MS ELBOWS & FITTINGS
            </h1>
            
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
      <div className="relative -mt-24 px-8 lg:px-16 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 flex justify-center" style={{ color: '#151C50' }}>
                {feature.icon}
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
