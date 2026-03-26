import SectionTitle from "./SectionTitle";

export interface Specification {
  feature: string;
  description: string;
}

interface ProductSpecificationsSectionProps {
  outlinedText: string;
  solidText: string;
  specifications: Specification[];
}

export default function ProductSpecificationsSection({ 
  outlinedText, 
  solidText, 
  specifications 
}: ProductSpecificationsSectionProps) {
  // Don't render if no specifications
  if (!specifications || specifications.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16">
        <div className="text-center mb-14">
          <SectionTitle outlinedText={outlinedText} solidText={solidText} align="center" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl border-2" style={{ borderColor: '#151C50' }}>
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-gray-200">
              <div className="px-6 py-4 font-bold text-sm" style={{ color: '#151C50' }}>
                FEATURE
              </div>
              <div className="px-6 py-4 font-bold text-sm" style={{ color: '#151C50' }}>
                DESCRIPTION
              </div>
            </div>

            {/* Table Body */}
            {specifications.map((spec, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                  {spec.feature}
                </div>
                <div className="px-6 py-4 text-sm text-gray-700">
                  {spec.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
