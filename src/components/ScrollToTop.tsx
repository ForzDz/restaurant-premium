import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './Button';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
