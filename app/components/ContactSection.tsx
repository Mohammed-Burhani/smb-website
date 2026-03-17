"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

const contactDetails = [
  {
    title: "Address",
    lines: [
      "SMB Fitting Industry, Thiruvottiyur High Road,",
      "Tondiarpet, Chennai – 600081, Tamil Nadu, India",
      "Near: Opposite Jio Petrol Pump",
    ],
    icon: (
      <MapPin />
    ),
  },
  {
    title: "Phone",
    lines: ["+91 99404 85711"],
    href: "tel:+919940485711",
    icon: (
      <Phone />
    ),
  },
  {
    title: "Email",
    lines: ["smbfitting@gmail.com"],
    href: "mailto:smbfitting@gmail.com",
    icon: (
      <Mail />
    ),
  },
  {
    title: "Working Hours",
    lines: ["Monday – Saturday", "9:00 AM – 6:00 PM"],
    icon: (
      <Clock />
    ),
  },
];

const productOptions = [
  "Mild Steel Elbows",
  "MS Pipe Fittings",
  "Steel Pipes & Sections",
  "Custom Fabricated Components",
  "Other",
];

export default function ContactSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: '#EEF2F7' }}>
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2
                className="text-5xl lg:text-6xl font-bold uppercase tracking-wide"
                style={{ WebkitTextStroke: '1.5px #2E3887', color: 'transparent' }}
              >
                LET&apos;S CONNECT
              </h2>
              <Body className="text-[#2E3887] leading-relaxed">
                Reach out to SMB Fitting Industry for product inquiries, bulk orders, or project
                discussions. Our team is ready to assist you with reliable solutions.
              </Body>
            </div>

            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border-2"
                    style={{ borderColor: '#151C50', color: '#151C50' }}
                  >
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#000' }}>{detail.title}</h4>
                    {detail.href ? (
                      <a href={detail.href} className="hover:underline" style={{ color: '#000' }}>
                        {detail.lines[0]}
                      </a>
                    ) : (
                      detail.lines.map((line, i) => (
                        <Body key={i} className="text-black text-sm">{line}</Body>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-center mb-8" style={{ color: '#151C50' }}>
              Request a Quote / Send an Inquiry
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#151C50] transition-colors"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#151C50] transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#151C50] transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#151C50] transition-colors"
              />
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-400 outline-none focus:border-[#151C50] transition-colors appearance-none bg-white"
                defaultValue=""
              >
                <option value="" disabled>Select Your Product Requirement</option>
                {productOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-gray-700">{opt}</option>
                ))}
              </select>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#151C50] transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 text-white font-semibold rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#151C50' }}
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
