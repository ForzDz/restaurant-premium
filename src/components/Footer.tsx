import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border/50">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container-width px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif mb-4 text-foreground">Premium & Coffee</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
              L'excellence à chaque instant. Une expérience premium unique à Oran.
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/yaacine_off/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://web.facebook.com/yacine.ar.1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@yacine.dev?lang=fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation & Contact - Side by Side */}
          <div className="grid grid-cols-2 gap-8">
            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-6 text-foreground uppercase tracking-wider text-sm">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light inline-block">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/reservation" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light inline-block">
                    Réservation
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light inline-block">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light inline-block">
                    Galerie
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-6 text-foreground uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm text-foreground font-light">
                    Oran, Algérie
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+213556482798" 
                    className="text-sm text-foreground hover:text-primary transition-colors font-light"
                  >
                    +213 556 482 798
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:yacinemed2020@gmail.com" 
                    className="text-sm text-foreground hover:text-primary transition-colors font-light break-all"
                  >
                    yacinemed2020@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-light text-center md:text-left">
              © {currentYear} <span className="text-foreground font-medium">Premium & Coffee</span>. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground font-light">
              <Link to="/contact" className="hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <span className="text-border">•</span>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
