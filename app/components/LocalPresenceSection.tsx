import Image from "next/image";
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
              <Image src="/about/local-presence.svg" alt="Local Presence" width={16} height={16} />
              Locate Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
