import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onPrevious, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 md:p-2 text-white bg-black/50 hover:bg-black/70 rounded-full md:rounded-lg transition-all h-12 w-12 md:h-auto md:w-auto flex items-center justify-center"
        aria-label="Fermer"
      >
        <X className="h-7 w-7 md:h-6 md:w-6" />
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={onPrevious}
          className="absolute left-2 md:left-4 p-3 md:p-2 text-white bg-black/50 hover:bg-black/70 rounded-full md:rounded-lg transition-all h-12 w-12 md:h-auto md:w-auto flex items-center justify-center"
          aria-label="Image précédente"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
      )}

      {/* Image */}
      <div className="max-w-7xl max-h-[90vh] px-16">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-2 md:right-4 p-3 md:p-2 text-white bg-black/50 hover:bg-black/70 rounded-full md:rounded-lg transition-all h-12 w-12 md:h-auto md:w-auto flex items-center justify-center"
          aria-label="Image suivante"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
