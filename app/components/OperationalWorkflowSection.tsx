import Image from "next/image";
import SectionTitle from "./SectionTitle";

const steps = [
  {
    number: "1",
    label: "Material\nProcurement",
    borderColor: "#D4A843",
    icon: "/quality/procurement.svg",
  },
  {
    number: "2",
    label: "Manufacturing\n& Forming",
    borderColor: "#4CAF50",
    icon: "/quality/fabcrication.svg",
  },
  {
    number: "3",
    label: "Quality\nInspection",
    borderColor: "#2196F3",
    icon: "/quality/inspection.svg",
  },
  {
    number: "4",
    label: "Storage\n& Dispatch",
    borderColor: "#9C27B0",
    icon: "/quality/dispatch.svg",
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
                <Image src={step.icon} alt={step.label.replace('\n', ' ')} width={40} height={40} />
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
