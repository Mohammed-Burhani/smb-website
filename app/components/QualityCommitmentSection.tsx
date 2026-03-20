import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

const checkItems = [
  "Material Verification Before Processing",
  "Dimensional Accuracy Checks",
  "Surface Finishing Inspection",
  "Batch-Level Consistency Review",
  "Structured Storage & Handling",
];

export default function QualityCommitmentSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: '#EEF2F7' }}>
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <SectionTitle outlinedText="OUR COMMITMENT" solidText="TO QUALITY" align="left" />

            <div className="space-y-4">
              <Body className="text-gray-600 leading-relaxed">
                At SMB Fitting Industry, quality is not just a process — it is a responsibility. As a
                manufacturer and supplier of mild steel fittings, we ensure that every product meets
                consistent dimensional standards and structural integrity requirements.
              </Body>
              <Body className="text-gray-600 leading-relaxed">
                From raw material inspection to final finishing, our team follows structured evaluation
                methods to deliver fittings that perform reliably and seamlessly in construction and industrial applications.
              </Body>
            </div>

            <ul className="space-y-2">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="font-bold" style={{ color: '#151C50' }}>✓</span>
                  <Body className="text-gray-700">{item}</Body>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Image */}
          <div className="relative h-[460px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image src="/quality/commitment.png" alt="Quality inspection" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
