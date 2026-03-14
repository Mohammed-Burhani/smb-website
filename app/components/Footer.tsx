import Link from "next/link";
import Image from "next/image";
import { Body, BodySmall } from "./Typography";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Enquiry Form", href: "/enquiry" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="px-8 lg:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Left - Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="SMB Fitting Industry"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <Body className="text-sm leading-relaxed max-w-xs">
              Precision steel pipe fittings manufacturer and supplier in Tondiarpet, Chennai, specializing in mild steel elbows and industrial pipe fittings with reliable quality and service.
            </Body>
          </div>

          {/* Middle - Quick Links (Centered) */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4 uppercase" style={{ color: 'var(--color-primary)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 inline-block text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Contact Info (Right Aligned) */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-4 uppercase" style={{ color: 'var(--color-primary)' }}>
              Contact Info
            </h4>
            <div className="space-y-3 text-sm inline-block text-left" style={{ color: 'var(--color-secondary)' }}>
              <p className="leading-relaxed">
                New No. 404/406, Thiruvottiyur High Road,<br />
                Tondiarpet, Chennai - 600081,<br />
                Tamil Nadu, India
              </p>
              
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+919940485711" className="hover:underline">
                  +91 99404 85711
                </a>
              </p>
              
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:smbfitting@gmail.com" className="hover:underline">
                  smbfitting@gmail.com
                </a>
              </p>
              
              <p>
                <span className="font-semibold">Business Hours:</span> Mon-Sat: 09:00 AM - 06:00 PM
              </p>
            </div>
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
