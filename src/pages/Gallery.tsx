import { useState } from 'react';
import { Lightbox } from '@/components/Lightbox';
import { AuroraBackground } from '@/components/ui/aurora-background';
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
      <section className="section-padding pt-24">
        <div className="container-width text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-foreground">Galerie</h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Plongez dans l'univers Premium à travers nos images
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-light">
                    Voir l'image
                  </span>
                </div>
              </button>
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
