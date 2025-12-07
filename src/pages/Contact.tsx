import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function Contact() {
  return (
    <AuroraBackground showRadialGradient={false}>
      {/* Hero */}
      <section className="section-padding pt-24">
        <div className="container-width text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-foreground">Contact</h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Nous sommes à votre écoute
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-light mb-8 text-foreground">Nos Coordonnées</h2>
                
                <div className="space-y-6">
                  <Card className="flex items-start gap-4 bg-background/50 backdrop-blur-sm">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1 text-foreground">Adresse</h3>
                      <a 
                        href="https://www.google.com/maps/search/Restaurant+Oran+Algerie/@35.6976541,-0.6337376,13z" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground font-light hover:text-primary transition-colors cursor-pointer"
                      >
                        Oran, Algérie<br />
                        Cliquez pour voir sur Google Maps
                      </a>
                    </div>
                  </Card>

                  <Card className="flex items-start gap-4 bg-background/50 backdrop-blur-sm">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1 text-foreground">Téléphone</h3>
                      <a href="tel:+213556482798" className="text-muted-foreground font-light hover:text-primary transition-colors">
                        0556 48 27 98
                      </a>
                    </div>
                  </Card>

                  <Card className="flex items-start gap-4 bg-background/50 backdrop-blur-sm">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1 text-foreground">Email</h3>
                      <a href="mailto:yacinemed2020@gmail.com" className="text-muted-foreground font-light hover:text-primary transition-colors">
                        yacinemed2020@gmail.com
                      </a>
                    </div>
                  </Card>

                  <Card className="flex items-start gap-4 bg-background/50 backdrop-blur-sm">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1 text-foreground">Horaires</h3>
                      <p className="text-muted-foreground font-light">
                        Lundi - Vendredi: 8h - 20h<br />
                        Samedi - Dimanche: 9h - 22h
                      </p>
                    </div>
                  </Card>
                </div>

                {/* WhatsApp Button */}
                <div className="mt-8">
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => window.open('https://wa.me/213556482798', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Nous contacter sur WhatsApp
                  </Button>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <h3 className="text-xl font-light mb-4 text-foreground">Suivez-nous</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/50 hover:bg-primary/10 hover:text-primary transition-colors text-foreground backdrop-blur-sm border border-border/50"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/50 hover:bg-primary/10 hover:text-primary transition-colors text-foreground backdrop-blur-sm border border-border/50"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/50 hover:bg-primary/10 hover:text-primary transition-colors text-foreground backdrop-blur-sm border border-border/50"
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
                        className="h-6 w-6"
                      >
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="animate-fade-in bg-background/50 backdrop-blur-sm">
              <h2 className="text-3xl font-light mb-6 text-foreground">Envoyez-nous un message</h2>
              
              <form onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  phone: formData.get('phone'),
                  message: formData.get('message'),
                };

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
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background/70 focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background/70 focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background/70 focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="+213 5 56 48 27 98"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background/70 focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16">
        <div className="container-width px-6">
          <div className="rounded-xl overflow-hidden shadow-xl animate-scale-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102993.38509713726!2d-0.7073376!3d35.6976541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8a6a28d6c5b1%3A0x4ba4c50274f4e4b!2sOran%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1234567890123!5m2!1sen!2sdz"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Notre localisation"
            />
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}
