import { useState } from 'react';
import { Lightbox } from '@/components/Lightbox';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Reveal } from '@/components/Reveal';
import { Image as ImageIcon } from 'lucide-react';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';

const galleryImages = [
  gallery1,
  gallery2,
  product1,
  product2,
  product3,
  gallery1,
  gallery2,
  product1,
  product2,
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <AuroraBackground showRadialGradient={false}>
      {/* Hero */}
      <section className="section-padding pt-32 pb-16">
        <div className="container-width text-center">
          <Reveal width="100%">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-foreground">
              Galerie
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              Plongez dans l'univers Premium à travers nos images et découvrez notre ambiance unique
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <button
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 w-full aspect-[4/3]"
                >
                  <img
                    loading="lazy"
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ImageIcon className="h-6 w-6" />
                      <span className="font-light text-lg">Voir l'image</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-primary-foreground px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    #{index + 1}
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </AuroraBackground>
  );
}
