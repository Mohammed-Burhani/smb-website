import Image from "next/image";
import SectionTitle from "./SectionTitle";

interface ProductGallerySectionProps {
  images: string[];
}

export default function ProductGallerySection({ images }: ProductGallerySectionProps) {
  return (
    <section className="w-full py-20" style={{ backgroundColor: '#EEF2F7' }}>
      <div className="px-8 lg:px-16">
        <div className="text-center mb-12">
          <SectionTitle outlinedText="PRODUCT" solidText="GALLERY" align="center" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative h-64 rounded-xl overflow-hidden">
              <Image src={src} alt={`Gallery image ${index + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
