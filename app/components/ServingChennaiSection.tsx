import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

export default function ServingChennaiSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <SectionTitle outlinedText="SERVING CHENNAI" solidText="& SURROUNDING INDUSTRIAL AREAS" align="left" />

            <Body className="text-gray-700 font-semibold leading-relaxed">
              Located in Tondiarpet, SMB Fitting Industry is strategically positioned to support
              Chennai's industrial and construction hubs. Our proximity enables faster dispatch,
              flexible order coordination, and dependable service support for ongoing projects.
            </Body>

            <Body className="text-gray-700 font-semibold leading-relaxed">
              We prioritize timely supply to minimize operational delays across industries.
            </Body>
          </div>

          {/* Right - Google Map */}
          <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.0!2d80.3!3d13.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sTondiarpet%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SMB Fitting Industry location in Tondiarpet, Chennai"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
