import Link from "next/link";
import { H2, BodyLarge } from "./Typography";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

export default function CTASection({ 
  title, 
  description, 
  buttonText = "Get a Quote",
  buttonLink = "/quote",
  backgroundImage
}: CTASectionProps) {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Fallback gradient background */}
      {/* {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2850]/10 to-[#0d1428]/10" />
      )} */}
      
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-[#151C50]/10" /> */}
      
      {/* Blurred background effect */}
      {/* <div className="absolute inset-0 backdrop-blur-sm" /> */}
      
      {/* Content */}
      <div className="relative px-8 lg:px-16 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <H2 className="text-white font-bold leading-tight">
            {title}
          </H2>
          
          <BodyLarge className="text-white/90">
            {description}
          </BodyLarge>
          
          <div className="pt-4">
            <Link
              href={buttonLink}
              className="inline-block px-10 py-4 bg-white text-base font-semibold rounded-lg transition-all hover:bg-gray-100 hover:shadow-lg"
              style={{ color: 'var(--color-primary)' }}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
