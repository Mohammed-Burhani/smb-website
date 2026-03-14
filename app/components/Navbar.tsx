import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="px-8 lg:px-16">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="SMB Fitting Industry"
              width={180}
              height={60}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                style={{ 
                  color: index === 0 ? '#151C50' : '#2E3887',
                  borderColor: index === 0 ? '#D1D5DB' : 'transparent'
                }}
                className={`px-5 py-2.5 text-base font-medium transition-colors ${
                  index === 0
                    ? "border-2 rounded-md hover:bg-gray-50"
                    : "hover:opacity-80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/quote"
            className="hidden lg:block px-8 py-3 text-white text-base font-semibold rounded-md transition-colors"
            style={{ backgroundColor: '#151C50' }}
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
