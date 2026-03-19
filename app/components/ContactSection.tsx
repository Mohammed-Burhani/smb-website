"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
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

const defaultForm = { name: "", company: "", phone: "", email: "", product: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(defaultForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm(defaultForm);
    } catch {
      setStatus("error");
    }
  };

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

            {status === "success" ? (
              <div className="text-center py-12 space-y-3">
                <p className="text-2xl font-bold" style={{ color: '#151C50' }}>Thank you!</p>
                <p className="text-gray-500 text-sm">Your inquiry has been sent. We&apos;ll get back to you shortly.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm underline"
                  style={{ color: '#151C50' }}
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#151C50] transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#151C50] transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#151C50] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#151C50] transition-colors"
                />
                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-400 outline-none focus:border-[#151C50] transition-colors appearance-none bg-white"
                >
                  <option value="" disabled>Select Your Product Requirement</option>
                  {productOptions.map((opt) => (
                    <option key={opt} value={opt} className="text-gray-700">{opt}</option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#151C50] transition-colors resize-none"
                />
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 text-white font-semibold rounded-lg transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: '#151C50' }}
                >
                  {status === "loading" ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
