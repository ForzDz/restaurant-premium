import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/Button';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container-width px-6 text-center animate-fade-in">
        <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-light mb-4">Merci !</h1>
        <p className="text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
          Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
        </p>
        <Button size="lg" asChild>
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
}
