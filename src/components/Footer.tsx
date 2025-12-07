import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent border-t border-border">
      <div className="container-width px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Premium</h3>
            <p className="text-sm text-muted-foreground font-light">
              Une expérience premium pour vos moments d'exception.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">123 Rue Premium, 75001 Paris</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+33123456789" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:contact@premium.fr" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  contact@premium.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {currentYear} Premium. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
