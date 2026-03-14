import { Body } from "./Typography";

export default function CoreValuesSection() {
  const values = [
    {
      title: "Integrity",
      description: "Transparent dealings and ethical business practices.",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M32 8L12 18v16c0 12.5 8.5 24.2 20 27 11.5-2.8 20-14.5 20-27V18L32 8z"/>
        </svg>
      )
    },
    {
      title: "Quality",
      description: "Consistent inspection and material standards.",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="32" cy="32" r="24"/>
          <path d="M22 32l6 6 14-14"/>
        </svg>
      )
    },
    {
      title: "Reliability",
      description: "Ensuring on-time production and reliable delivery.",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="32" cy="32" r="24"/>
          <path d="M32 16v16l10 6"/>
        </svg>
      )
    },
    {
      title: "Focus",
      description: "Building long-term partnerships with clients.",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M20 48c-4-4-4-8-4-12 0-8 6-14 14-14h8c8 0 14 6 14 14 0 4 0 8-4 12"/>
          <circle cx="22" cy="20" r="6"/>
          <circle cx="42" cy="20" r="6"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-20" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left - Title */}
          <div className="lg:col-span-4">
            <h2 
              className="text-6xl lg:text-7xl font-bold uppercase tracking-wide mb-3"
              style={{
                WebkitTextStroke: '2px #D1D5DB',
                color: 'transparent'
              }}
            >
              CORE
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold uppercase mb-6" style={{ color: '#151C50' }}>
              VALUES
            </h3>
            <Body className="text-gray-600 leading-relaxed">
              The foundation of our operations is built on integrity, quality, and responsibility.
            </Body>
          </div>

          {/* Right - Value Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 rounded-lg p-8 flex items-start gap-6 hover:shadow-lg transition-shadow"
                  style={{ borderColor: '#D1D5DB' }}
                >
                  <div className="w-16 h-16 flex-shrink-0" style={{ color: '#151C50' }}>
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#151C50' }}>
                      {value.title}
                    </h4>
                    <Body className="text-gray-600 text-sm">
                      {value.description}
                    </Body>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
