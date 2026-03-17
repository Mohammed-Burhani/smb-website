import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

export default function CoreValuesSection() {
  const values = [
    {
      title: "Integrity",
      description: "Transparent dealings and ethical business practices.",
      icon: "/about/integrity.svg"
    },
    {
      title: "Quality",
      description: "Consistent inspection and material standards.",
      icon: "/about/quality.svg"
    },
    {
      title: "Reliability",
      description: "Ensuring on-time production and reliable delivery.",
      icon: "/about/reliability.svg"
    },
    {
      title: "Focus",
      description: "Building long-term partnerships with clients.",
      icon: "/about/focus.svg"
    }
  ];

  return (
    <section className="w-full py-20" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left - Title */}
          <div className="lg:col-span-4">
            <SectionTitle
              outlinedText="Core"
              align="left"
            />
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
                  <div className="w-16 h-16 flex-shrink-0">
                    <Image src={value.icon} alt={value.title} width={64} height={64} />
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
