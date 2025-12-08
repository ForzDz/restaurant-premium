import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/Button';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Reveal } from '@/components/Reveal';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <AuroraBackground showRadialGradient={false}>
      <div className="min-h-screen flex items-center justify-center section-padding">
        <div className="container-width px-6">
          <Reveal width="100%">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                  <div className="relative w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border-4 border-primary/30">
                    <AlertCircle className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-8xl md:text-9xl font-serif mb-6 text-foreground font-light">
                404
              </h1>
              
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
                Page non trouvée
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                La page que vous recherchez n'existe pas ou a été déplacée.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" asChild className="group">
                  <Link to="/">
                    <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Retour à l'accueil
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="group">
                  <Link to="/contact">
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                    Nous contacter
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
