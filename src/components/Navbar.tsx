import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import logo from '../assets/logo.png';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/reservation', label: 'Réservation' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for background change
      setIsScrolled(currentScrollY > 20);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Determine if we should use the transparent style (Home page + not scrolled)
  const isTransparent = isHome && !isScrolled;

  return (
    <nav className={cn(
      "w-full z-50 transition-all duration-300",
      isHome ? "fixed top-0" : "sticky top-0",
      isTransparent
        ? "bg-transparent border-transparent"
        : "bg-background/60 backdrop-blur-md border-b border-white/10 shadow-sm",
      // Add transform for hide/show animation
      isVisible ? "translate-y-0" : "-translate-y-full"
    )}>
      <div className="container-width px-6">
        <div className="flex items-center justify-between h-22">
          <Link to="/" className={cn(
            "flex items-center gap-3 text-xl font-semibold tracking-tight transition-colors",
            isTransparent ? "text-white" : "text-foreground"
          )}>
            <img src={logo} alt="Premium" className="h-16 w-auto object-contain" />
            <span className="hidden sm:block">Premium & Coffee</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-sm font-light transition-colors',
                  isTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-muted-foreground hover:text-primary",
                  isActive(link.to) && (isTransparent ? "text-white font-medium" : "text-primary font-medium")
                )}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle isTransparent={isTransparent} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle isTransparent={isTransparent} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-lg transition-colors"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className={cn("h-6 w-6", isTransparent ? "text-white" : "text-foreground")} />
              ) : (
                <Menu className={cn("h-6 w-6", isTransparent ? "text-white" : "text-foreground")} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={cn(
            "md:hidden py-4 animate-fade-in absolute top-20 left-0 right-0 px-6",
            isTransparent ? "bg-black/90 backdrop-blur-md" : "bg-background border-b border-border"
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block py-3 text-sm font-light transition-colors',
                  isTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-muted-foreground hover:text-primary",
                   isActive(link.to) && (isTransparent ? "text-white font-medium" : "text-primary font-medium")
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
