import { Body } from "./Typography";

const reasons = [
  {
    title: "CONSISTENT MANUFACTURING STANDARDS",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
        <path d="M24 4L6 13v13c0 11.1 7.7 21.5 18 24 10.3-2.5 18-12.9 18-24V13L24 4z"/>
      </svg>
    ),
  },
  {
    title: "RELIABLE LOCAL SUPPLY NETWORK",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
        <rect x="2" y="18" width="28" height="18" rx="2"/>
        <path d="M30 24h8l8 8v8H30V24z"/>
        <circle cx="10" cy="38" r="4"/>
        <circle cx="36" cy="38" r="4"/>
        <path d="M6 22V14h20v4"/>
      </svg>
    ),
  },
  {
    title: "STRUCTURED INVENTORY HANDLING",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
        <path d="M24 4L4 14v4l20 10 20-10v-4L24 4z"/>
        <path d="M4 28l20 10 20-10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M4 36l20 10 20-10" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    title: "RESPONSIVE ORDER PROCESSING",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10">
        <circle cx="24" cy="24" r="20"/>
        <path d="M24 12v12l8 4" strokeLinecap="round"/>
      </svg>
    ),
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
                  {reason.icon}
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
