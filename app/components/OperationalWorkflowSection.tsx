import SectionTitle from "./SectionTitle";

const steps = [
  {
    number: "1",
    label: "Material\nProcurement",
    borderColor: "#D4A843",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" style={{ color: '#151C50' }}>
        <rect x="6" y="30" width="36" height="6" rx="2" fill="currentColor" opacity="0.3"/>
        <rect x="10" y="22" width="28" height="6" rx="2" fill="currentColor" opacity="0.6"/>
        <rect x="14" y="14" width="20" height="6" rx="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    number: "2",
    label: "Fabrication\n& Forming",
    borderColor: "#4CAF50",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" style={{ color: '#151C50' }}>
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="3"/>
        <path d="M24 14v-4M24 38v-4M14 24h-4M38 24h-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M20 20l-3-3M31 31l-3-3M28 20l3-3M17 31l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  {
    number: "3",
    label: "Quality\nInspection",
    borderColor: "#2196F3",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" style={{ color: '#151C50' }}>
        <circle cx="22" cy="22" r="12" stroke="currentColor" strokeWidth="3"/>
        <path d="M31 31l8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M17 22l3 3 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "4",
    label: "Storage\n& Dispatch",
    borderColor: "#9C27B0",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" style={{ color: '#151C50' }}>
        <rect x="4" y="20" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M32 26h6l6 6v6h-12V26z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="12" cy="40" r="3" fill="currentColor"/>
        <circle cx="36" cy="40" r="3" fill="currentColor"/>
        <path d="M4 26h28" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function OperationalWorkflowSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: '#EEF2F7' }}>
      <div className="px-8 lg:px-16">
        <div className="text-center mb-14">
          <SectionTitle outlinedText="OPERATIONAL" solidText="WORKFLOW" align="center" />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 w-52 flex flex-col items-start gap-4 shadow-sm relative"
              style={{ borderBottom: `3px solid ${step.borderColor}` }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#EEF2F7' }}
              >
                {step.icon}
              </div>

              {/* Step number - large, top right */}
              <span
                className="absolute top-4 right-5 text-5xl font-bold leading-none"
                style={{ color: '#D1D5DB' }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Label */}
              <p className="text-base font-bold whitespace-pre-line" style={{ color: '#151C50' }}>
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
