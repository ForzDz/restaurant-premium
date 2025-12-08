import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Mail } from 'lucide-react';
import { Button } from '@/components/Button';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Reveal } from '@/components/Reveal';
import { motion } from 'framer-motion';

export default function ThankYou() {
  return (
    <AuroraBackground showRadialGradient={false}>
      <div className="min-h-screen flex items-center justify-center section-padding">
        <div className="container-width px-6">
          <Reveal width="100%">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                  <div className="relative w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border-4 border-primary/30">
                    <CheckCircle2 className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-foreground">
                Merci !
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4 leading-relaxed">
                Votre message a bien été envoyé
              </p>
              
              <p className="text-lg text-muted-foreground font-light mb-8 leading-relaxed">
                Nous vous répondrons dans les plus brefs délais à l'adresse que vous avez fournie.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" asChild className="group">
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                    Retour à l'accueil
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="group">
                  <Link to="/contact">
                    <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Autre message
                  </Link>
                </Button>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </AuroraBackground>
  );
}
