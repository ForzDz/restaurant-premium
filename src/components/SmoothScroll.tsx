import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { LenisProvider } from '@/contexts/LenisContext';

export function SmoothScroll({ children }: { children?: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Initialiser Lenis smooth scroll avec des paramètres optimisés
    // Équivalent à ScrollSmoother.create({ smooth: 1, effects: true })
    const lenisInstance = new Lenis({
      duration: 1.0, // smooth: 1 équivalent
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing smooth et moderne
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true, // smooth scroll avec la molette de la souris
      wheelMultiplier: 1,
      smoothTouch: true, // smooth scroll avec les doigts sur mobile
      touchMultiplier: 1.5,
      infinite: false,
    });

    setLenis(lenisInstance);

    // Animation frame function pour le smooth scroll
    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenisInstance.destroy();
    };
  }, []);

  if (children) {
    return <LenisProvider lenis={lenis}>{children}</LenisProvider>;
  }

  return null;
}

