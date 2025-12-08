import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './Button';
import { useLenis } from '@/contexts/LenisContext';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const toggleVisibility = () => {
      if (lenis) {
        const scrollY = lenis.scroll;
        if (scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // Écouter les événements de scroll avec Lenis
    if (lenis) {
      lenis.on('scroll', toggleVisibility);
    } else {
      window.addEventListener('scroll', toggleVisibility, { passive: true });
    }

    toggleVisibility(); // Vérifier l'état initial

    return () => {
      if (lenis) {
        lenis.off('scroll', toggleVisibility);
      } else {
        window.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, [lenis]);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 group"
          aria-label="Retour en haut"
        >
          <Button
            size="lg"
            className="rounded-full h-14 w-14 p-0 shadow-2xl hover:shadow-primary/50 transition-all duration-300 group-hover:scale-110"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </button>
      )}
    </>
  );
}
