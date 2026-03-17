import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality-infrastructure" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200" role="navigation" aria-label="Main navigation">
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

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-2 list-none" role="list">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  style={{
                    color: index === 0 ? '#151C50' : '#2E3887',
                    borderColor: index === 0 ? '#2E3887' : 'transparent'
                  }}
                  className={`px-5 py-2.5 text-base font-medium transition-colors ${
                    index === 0
                      ? "border-2 rounded-md hover:bg-gray-50"
                      : "hover:opacity-80"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/quote"
            className="hidden lg:block px-8 py-3 text-white text-base font-semibold rounded-md transition-colors hover:opacity-90"
            style={{ backgroundColor: '#151C50' }}
            aria-label="Get a quote from SMB Fitting Industry"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
