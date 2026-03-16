import SectionTitle from "./SectionTitle";

const applications = [
  {
    label: "Construction\nProjects",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12">
        <rect x="8" y="40" width="16" height="20" rx="1"/>
        <rect x="28" y="28" width="16" height="32" rx="1"/>
        <path d="M4 60h56"/>
        <path d="M48 20l8 8H40l8-8z"/>
        <line x1="48" y1="20" x2="48" y2="60"/>
        <path d="M12 40V28l8-8"/>
        <line x1="20" y1="20" x2="20" y2="28"/>
      </svg>
    ),
  },
  {
    label: "Fabrication\nWorkshops",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12">
        <path d="M12 52c0-4 4-8 8-8s8 4 8 8"/>
        <circle cx="20" cy="36" r="6"/>
        <path d="M38 20l16-8-4 16-6-4-6 8-8-8 6-6 2 2z"/>
        <line x1="30" y1="34" x2="38" y2="26"/>
      </svg>
    ),
  },
  {
    label: "Industrial\nPlants",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12">
        <rect x="4" y="32" width="56" height="28" rx="1"/>
        <rect x="10" y="40" width="8" height="12"/>
        <rect x="28" y="40" width="8" height="12"/>
        <rect x="46" y="40" width="8" height="12"/>
        <path d="M8 32V20l12 12V20l12 12V20l12 12V20l12 12"/>
        <rect x="24" y="8" width="16" height="12" rx="1"/>
        <line x1="32" y1="8" x2="32" y2="4"/>
      </svg>
    ),
  },
  {
    label: "Pipeline\nInstallations",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12">
        <path d="M4 32h56"/>
        <circle cx="32" cy="32" r="8"/>
        <path d="M24 24v-8M40 24v-8M24 48v-8M40 48v-8"/>
        <circle cx="24" cy="14" r="3"/>
        <circle cx="40" cy="14" r="3"/>
        <path d="M8 28v8M56 28v8"/>
      </svg>
    ),
  },
  {
    label: "Structural\nFrameworks",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12">
        <rect x="4" y="8" width="12" height="48" rx="2"/>
        <rect x="48" y="8" width="12" height="48" rx="2"/>
        <rect x="16" y="12" width="32" height="8" rx="1"/>
        <rect x="16" y="44" width="32" height="8" rx="1"/>
        <line x1="16" y1="32" x2="48" y2="32"/>
      </svg>
    ),
  },
];

export default function ApplicationsSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: '#EEF2F7' }}>
      <div className="px-8 lg:px-16">
        <div className="text-center mb-14">
          <SectionTitle
            outlinedText="APPLICATIONS"
            solidText="OF OUR PRODUCTS"
            align="center"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4 w-64 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              style={{ borderBottom: '3px solid #D4A843' }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#EEF2F7', color: '#151C50' }}
              >
                {app.icon}
              </div>
              <p className="text-sm font-semibold text-center whitespace-pre-line" style={{ color: '#151C50' }}>
                {app.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
