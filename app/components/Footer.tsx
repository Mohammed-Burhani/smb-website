import Link from "next/link";
import Image from "next/image";
import { Body, BodySmall } from "./Typography";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality & Infrastructure", href: "/quality-infrastructure" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200" role="contentinfo">
      <div className="px-8 lg:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Left - Logo and Description */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <Link href="/" aria-label="SMB Fitting Industry - Home">
              <Image
                src="/logo.png"
                alt="SMB Fitting Industry logo"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-secondary)' }}>
              Precision steel pipe fittings manufacturer and supplier in Tondiarpet, Chennai,
              specializing in mild steel elbows and industrial pipe fittings with reliable quality and service.
            </p>
          </div>

          {/* Middle - Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="text-base font-bold mb-6 uppercase tracking-wide text-center" style={{ color: 'var(--color-primary)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-center" role="list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:underline inline-block"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right - Contact Info */}
          <div className="text-end">
            <h4 className="text-base font-bold mb-6 uppercase tracking-wide" style={{ color: 'var(--color-primary)' }}>
              Contact Info
            </h4>
            <address className="not-italic space-y-2.5 text-sm inline-block" style={{ color: 'var(--color-secondary)' }}>
              <Body className="leading-relaxed">
                New No. 404/406, Thiruvottiyur High Road,<br />
                Tondiarpet, Chennai - 600081,<br />
                Tamil Nadu, India
              </Body>
              <Body>
                <strong>Phone: </strong>
                <a href="tel:+919940485711" className="hover:underline" style={{ color: 'var(--color-secondary)' }}>
                  +91 99404 85711
                </a>
              </Body>
              <Body>
                <strong>Email: </strong>
                <a href="mailto:smbfitting@gmail.com" className="hover:underline" style={{ color: 'var(--color-secondary)' }}>
                  smbfitting@gmail.com
                </a>
              </Body>
              <Body>
                <strong>Hours: </strong>Mon–Sat: 9:00 AM – 6:00 PM
              </Body>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6">
        <div className="px-8 lg:px-16">
          <BodySmall className="text-center" style={{ color: 'var(--color-secondary)' }}>
            © {new Date().getFullYear()} SMB Fitting Industry. All Rights Reserved.
          </BodySmall>
        </div>
      </div>
    </footer>
  );
}
