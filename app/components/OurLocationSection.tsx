import SectionTitle from "./SectionTitle";

export default function OurLocationSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16">
        <div className="text-center mb-10">
          <SectionTitle outlinedText="OUR LOCATION" solidText="" align="center" />
        </div>

        <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.0539!2d80.3016!3d13.1227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d8b7b7b7b7%3A0x0!2sSMB%20Fitting%20Industry%2C%20Thiruvottiyur%20High%20Rd%2C%20Tondiarpet%2C%20Chennai%2C%20Tamil%20Nadu%20600081!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SMB Fitting Industry location map"
          />
        </div>
      </div>
    </section>
  );
}
