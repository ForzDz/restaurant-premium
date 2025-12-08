import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Send } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Reveal } from '@/components/Reveal';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <AuroraBackground showRadialGradient={false}>
      {/* Hero */}
      <section className="section-padding pt-32 pb-16">
        <div className="container-width text-center">
          <Reveal width="100%">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-foreground">
                Contactez-nous
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                Nous sommes à votre écoute pour répondre à toutes vos questions
              </p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Reveal width="100%">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">Nos Coordonnées</h2>
              </Reveal>
              
              <div className="space-y-4">
                <Reveal delay={0.1}>
                  <Card className="group hover:border-primary/50 transition-all duration-300 bg-background/60 backdrop-blur-md border border-border/50 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 text-foreground text-lg">Adresse</h3>
                        <a 
                          href="https://www.google.com/maps/search/Restaurant+Oran+Algerie/@35.6976541,-0.6337376,13z" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground font-light hover:text-primary transition-colors block leading-relaxed"
                        >
                          Oran, Algérie<br />
                          <span className="text-sm text-primary/80">Cliquez pour voir sur Google Maps →</span>
                        </a>
                      </div>
                    </div>
                  </Card>
                </Reveal>

                <Reveal delay={0.2}>
                  <Card className="group hover:border-primary/50 transition-all duration-300 bg-background/60 backdrop-blur-md border border-border/50 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 text-foreground text-lg">Téléphone</h3>
                        <a 
                          href="tel:+213556482798" 
                          className="text-foreground font-medium text-lg hover:text-primary transition-colors block"
                        >
                          +213 556 482 798
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Appelez-nous directement</p>
                      </div>
                    </div>
                  </Card>
                </Reveal>

                <Reveal delay={0.3}>
                  <Card className="group hover:border-primary/50 transition-all duration-300 bg-background/60 backdrop-blur-md border border-border/50 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 text-foreground text-lg">Email</h3>
                        <a 
                          href="mailto:yacinemed2020@gmail.com" 
                          className="text-foreground font-medium hover:text-primary transition-colors block break-all"
                        >
                          yacinemed2020@gmail.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                      </div>
                    </div>
                  </Card>
                </Reveal>

                <Reveal delay={0.4}>
                  <Card className="group hover:border-primary/50 transition-all duration-300 bg-background/60 backdrop-blur-md border border-border/50 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Clock className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 text-foreground text-lg">Horaires</h3>
                        <p className="text-foreground font-light leading-relaxed">
                          <span className="font-medium">Lundi - Vendredi:</span> 8h - 20h<br />
                          <span className="font-medium">Samedi - Dimanche:</span> 9h - 22h
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">Service continu le week-end</p>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              </div>

              {/* WhatsApp Button */}
              <Reveal delay={0.5}>
                <Button
                  size="lg"
                  className="w-full mt-6 group"
                  onClick={() => window.open('https://wa.me/213556482798', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Nous contacter sur WhatsApp
                </Button>
              </Reveal>

              {/* Social Media */}
              <Reveal delay={0.6}>
                <div className="mt-8 pt-8 border-t border-border/50">
                  <h3 className="text-xl font-semibold mb-6 text-foreground">Suivez-nous</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/yaacine_off/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://web.facebook.com/yacine.ar.1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@yacine.dev?lang=fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                      aria-label="TikTok"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 group-hover:scale-110 transition-transform"
                      >
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <Reveal width="100%">
              <Card className="bg-background/60 backdrop-blur-md border border-border/50 p-8 lg:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif mb-3 text-foreground">Envoyez-nous un message</h2>
                  <p className="text-muted-foreground font-light">
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                  </p>
                </div>
                
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    message: formData.get('message'),
                  };

                  // Validate phone
                  const phoneStr = data.phone as string;
                  if (phoneStr) {
                    const phoneRegex = /^(05|06|07)[0-9]{8}$/;
                    if (!phoneRegex.test(phoneStr.replace(/\s/g, ''))) {
                      alert("Le numéro de téléphone doit commencer par 05, 06 ou 07 et contenir 10 chiffres (ex: 0556482798)");
                      return;
                    }
                  }

                  try {
                    const response = await fetch('/.netlify/functions/send-contact-email', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data),
                    });

                    if (response.ok) {
                      alert('Message envoyé avec succès ! Nous vous répondrons bientôt.');
                      e.currentTarget.reset();
                    } else {
                      throw new Error('Erreur lors de l\'envoi');
                    }
                  } catch (error) {
                    alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
                  }
                }} className="space-y-6">
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                      Nom complet <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground backdrop-blur-sm"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground backdrop-blur-sm"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-foreground">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground backdrop-blur-sm"
                      placeholder="0556482798"
                    />
                    <p className="text-xs text-muted-foreground mt-2">Format: 05, 06 ou 07 suivi de 8 chiffres (ex: 0556482798)</p>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none placeholder:text-muted-foreground backdrop-blur-sm"
                      placeholder="Dites-nous comment nous pouvons vous aider..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group mt-8">
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding pb-16">
        <div className="container-width">
          <Reveal width="100%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">Notre Localisation</h2>
              <p className="text-muted-foreground font-light">
                Trouvez-nous facilement à Oran, Algérie
              </p>
            </div>
          </Reveal>
          
          <Reveal width="100%">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102993.38509713726!2d-0.7073376!3d35.6976541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8a6a28d6c5b1%3A0x4ba4c50274f4e4b!2sOran%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1234567890123!5m2!1sen!2sdz"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Notre localisation"
                className="w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </AuroraBackground>
  );
}
