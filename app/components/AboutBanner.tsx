import Image from "next/image";

export default function AboutBanner() {
  return (
    <section className="relative w-full h-[500px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/home/about.png"
          alt="SMB Fitting Industry manufacturing facility"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Banner Content */}
      <div className="relative h-full flex items-center justify-center px-8">
        <div className="text-center text-white space-y-4 max-w-4xl">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-wider">
            ABOUT
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold">
            SMB FITTING INDUSTRY
          </h2>
          <p className="text-xl lg:text-2xl font-light">
            Manufacturer & Supplier of Precision Steel Fittings<br />
            in Chennai
          </p>
        </div>
      </div>
    </section>
  );
}
