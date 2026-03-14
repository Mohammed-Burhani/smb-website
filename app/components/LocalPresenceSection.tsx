import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { Body } from "./Typography";

export default function LocalPresenceSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="px-8 lg:px-16 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <SectionTitle
            outlinedText="STRONG LOCAL PRESENCE"
            solidText="IN CHENNAI"
            align="center"
          />

          <Body className="leading-relaxed">
            Located on Thiruvottiyur High Road in Tondiarpet, SMB Fitting Industry is positioned to
            efficiently serve industrial hubs and construction sites across Chennai. Our proximity
            allows faster response times, flexible order handling, and dependable local distribution.
          </Body>

          <Body className="leading-relaxed">
            We understand the urgency of project timelines and prioritize prompt supply to keep
            operations running smoothly.
          </Body>

          <div className="pt-4">
            <Link
              href="https://maps.google.com"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: '#151C50' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10l6-3m0 13l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 10m0 3V7"/>
              </svg>
              Locate Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
