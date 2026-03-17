import Image from "next/image";
import { Body, H1, H2 } from "./Typography";

interface PageBannerProps {
  image: string;
  outlinedText: string;
  solidText: string;
  subtitle: string;
}

export default function PageBanner({ image, outlinedText, solidText, subtitle }: PageBannerProps) {
  return (
    <section className="relative w-full h-[500px]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={solidText}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full flex items-center justify-center px-8">
        <div className="text-center text-white space-y-2 max-w-4xl">
          <H1
            className="text-5xl lg:text-6xl font-bold tracking-wider"
            style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
          >
            {outlinedText}
          </H1>
          <H2 className="text-3xl lg:text-4xl font-bold text-white">
            {solidText}
          </H2>
          <Body className="text-xl lg:text-2xl font-light text-white">
            {subtitle}
          </Body>
        </div>
      </div>
    </section>
  );
}
