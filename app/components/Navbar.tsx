"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Quality", href: "/quality-infrastructure" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white border-b border-gray-200 relative z-50" role="navigation" aria-label="Main navigation">
      <div className="px-8 lg:px-16">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" aria-label="SMB Fitting Industry - Home">
            <Image
              src="/logo.svg"
              alt="SMB Fitting Industry logo"
              width={180}
              height={60}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-2 list-none" role="list">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`px-5 py-2.5 text-base font-medium transition-colors rounded-md ${active ? "border-2" : "hover:opacity-80"}`}
                    style={{
                      color: '#151C50',
                      borderColor: active ? '#2E3887' : 'transparent',
                    }}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:block px-8 py-3 text-white text-base font-semibold rounded-md transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#151C50' }}
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg"
        >
          <ul className="flex flex-col py-4 px-8" role="list">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 text-base font-medium border-b border-gray-100 transition-colors ${active ? "font-bold" : "hover:opacity-70"}`}
                    style={{ color: '#151C50' }}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-8 py-3 text-white font-semibold rounded-md"
                style={{ backgroundColor: '#151C50' }}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
