import { Link } from 'react-router-dom';
import { MapPin, Star, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Reveal } from '@/components/Reveal';
import heroBg from '@/assets/hero-bg.png';
import reservationBg from '@/assets/reservation-bg.png';
import gallery2 from '@/assets/gallery-2.jpg';


export default function Home() {
  return (
    <AuroraBackground showRadialGradient={false}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Ambience Restaurant" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 text-balance">
            L'Excellence à Chaque Instant
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-2xl mx-auto">
            Découvrez une expérience premium unique
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-black hover:bg-gray-200">
              <Link to="/menu">Découvrir le menu</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white/10 hover:text-white">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Reservation Section */}
      <section className="section-padding">
        <div className="container-width">
          <Reveal width="100%">
            <Card hover className="relative overflow-hidden p-12 text-center border-none">
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={reservationBg} 
                  alt="Reservation Table" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              <div className="relative z-10">
                <CalendarCheck className="h-16 w-16 mx-auto mb-6 text-white" />
                <h2 className="text-4xl font-light mb-4 text-white">Réservez Votre Table</h2>
                <p className="text-gray-200 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                  Offrez-vous une expérience culinaire d'exception. Réservez dès maintenant votre table et profitez d'un moment unique dans notre établissement.
                </p>
                <Button size="lg" asChild className="bg-white text-black hover:bg-gray-200 border-none">
                  <Link to="/reservation">Réserver maintenant</Link>
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>





      {/* Opening Hours Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Title & Info */}
            <Reveal width="100%" direction="right">
              <div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-8 text-balance">
                  NOS <br /> <span className="text-primary/80">HORAIRES</span>
                </h2>
                <div className="space-y-4 text-muted-foreground font-light text-lg">
                  <p>Tous nos stands sont</p>
                  <p className="text-foreground font-medium">Ouverts midi et soir</p>
                  <p>Tous les jours</p>
                  <p className="text-foreground font-medium">Service continu le week-end</p>
                  <p>100% fait maison</p>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Timetable */}
            <Reveal width="100%" direction="left">
              <div className="space-y-6">
                {[
                  { days: "LUNDI", hours: "08h30 - 23h30" },
                  { days: "MARDI", hours: "08h30 - 00h00" },
                  { days: "MERCREDI", hours: "08h30 - 00h00" },
                  { days: "JEUDI", hours: "08h30 - 00h00" },
                  { days: "VENDREDI", hours: "08h30 - 01h30" },
                  { days: "SAMEDI", hours: "12h00 - 01h30" },
                  { days: "DIMANCHE", hours: "12h00 - 23h30" },
                ].map((schedule, index) => (
                  <div key={index} className="flex items-end justify-between gap-4 group">
                    <span className="font-bold text-lg text-foreground tracking-wide w-32">{schedule.days}</span>
                    <div className="flex-1 border-b-2 border-primary/20 mb-1.5 group-hover:border-primary/40 transition-colors" />
                    <span className="font-serif text-xl text-foreground font-medium whitespace-nowrap">{schedule.hours}</span>
                  </div>
                ))}
                
                <div className="mt-12 pt-8 flex gap-8">
                  <Link to="/menu" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-2">
                    Voir le menu <span>↗</span>
                  </Link>
                  <Link to="/reservation" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-2">
                    Venir nous voir <span>↗</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <Reveal width="100%">
              <h2 className="text-4xl font-light mb-4 text-foreground">Nous Trouver</h2>
              <p className="text-muted-foreground font-light flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5" />
                Centre Ville, Oran, Algérie
              </p>
            </Reveal>
          </div>

          <Reveal width="100%" className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://maps.google.com/maps?q=Oran,Algerie&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Notre localisation"
            />
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <Reveal width="100%">
              <h2 className="text-4xl font-light mb-4 text-foreground">Avis Clients</h2>
              <p className="text-muted-foreground font-light">Ce que nos clients disent de nous</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marie Dupont',
                comment: 'Une expérience exceptionnelle ! La qualité est au rendez-vous.',
                rating: 5,
              },
              {
                name: 'Pierre Martin',
                comment: 'Service impeccable et produits d\'une qualité remarquable.',
                rating: 5,
              },
              {
                name: 'Sophie Bernard',
                comment: 'Mon endroit préféré ! L\'ambiance est unique.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Reveal key={index} delay={index * 0.1} className="h-full">
                <Card className="h-full bg-background/50 backdrop-blur-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground font-light mb-4 italic">"{testimonial.comment}"</p>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}
