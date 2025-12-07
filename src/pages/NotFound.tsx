import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container-width px-6 text-center animate-fade-in">
        <AlertCircle className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="text-6xl font-light mb-4">404</h1>
        <p className="text-2xl text-muted-foreground font-light mb-8">
          Page non trouvée
        </p>
        <p className="text-muted-foreground font-light mb-8 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button size="lg" asChild>
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
}
