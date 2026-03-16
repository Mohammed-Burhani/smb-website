import SectionTitle from "./SectionTitle";

const reasons = [
  "Structured Inventory Management",
  "Manufacturer & Direct Supplier",
  "Quality-Focused Production",
  "Reliable Order Fulfillment",
  "Local Accessibility",
  "Competitive Pricing",
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" style={{ color: '#151C50' }}>
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
    </svg>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: '#DCE8F5' }}>
      <div className="px-8 lg:px-16">
        <div className="text-center mb-12">
          <SectionTitle
            outlinedText="WHY"
            solidText="CHOOSE US ?"
            align="center"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-5 rounded-lg font-semibold text-base"
              style={{ backgroundColor: '#D6DFF0', color: '#151C50' }}
            >
              <ShieldIcon />
              {reason}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
