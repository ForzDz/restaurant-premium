import { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CalendarIcon, Clock, Users, CheckCircle2 } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Reveal } from '@/components/Reveal';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

const timeSlots = [
  '12:00', '12:30', '13:00', '13:30', '14:00',
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
];

export default function Reservation() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !name || !email || !phone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive"
      });
      return;
    }

    // Phone qualification
    const phoneRegex = /^(05|06|07)[0-9]{8}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      toast({
        title: "Numéro de téléphone invalide",
        description: "Le numéro doit commencer par 05, 06 ou 07 et contenir 10 chiffres (ex: 0556482798)",
        variant: "destructive"
      });
      return;
    }

    try {
      // Call Netlify function to save to Google Sheets
      const response = await fetch('/.netlify/functions/save-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: format(selectedDate, 'dd/MM/yyyy', { locale: fr }),
          time: selectedTime,
          guests,
          name,
          email,
          phone,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Réservation confirmée !",
          description: `Votre table pour ${guests} personne(s) le ${format(selectedDate, 'PPP', { locale: fr })} à ${selectedTime} a été réservée.`,
        });
        // Reset form
        setSelectedDate(undefined);
        setSelectedTime(null);
        setGuests('2');
        setName('');
        setEmail('');
        setPhone('');
      } else {
        throw new Error(result.error || 'Erreur lors de la réservation');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur est survenue lors de la réservation",
        variant: "destructive"
      });
    }
  };

  return (
    <AuroraBackground showRadialGradient={false}>
      {/* Hero */}
      <section className="section-padding pt-32 pb-16">
        <div className="container-width text-center">
          <Reveal width="100%">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-foreground">
              Réservation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              Réservez votre table en quelques clics et profitez d'une expérience culinaire exceptionnelle
            </p>
          </Reveal>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Left Panel - Info */}
            <Reveal delay={0.1}>
              <Card className="bg-background/60 backdrop-blur-md border border-border/50 p-8 h-full">
                <h2 className="text-2xl font-serif mb-6 text-foreground">Informations</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Durée estimée</h3>
                      <p className="text-muted-foreground font-light">1h30</p>
                    </div>
                  </div>
                  {selectedDate && (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CalendarIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Date sélectionnée</h3>
                        <p className="text-foreground font-light">{format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr })}</p>
                      </div>
                    </div>
                  )}
                  {selectedTime && (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Heure sélectionnée</h3>
                        <p className="text-foreground font-light text-lg">{selectedTime}</p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </Reveal>

            {/* Center - Calendar */}
            <Reveal delay={0.2}>
              <Card className="bg-background/60 backdrop-blur-md border border-border/50 p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Sélectionnez une date</h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-md border-0 pointer-events-auto"
                  locale={fr}
                />
              </Card>
            </Reveal>

            {/* Right - Time Slots */}
            <Reveal delay={0.3}>
              <Card className="bg-background/60 backdrop-blur-md border border-border/50 p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Sélectionnez l'heure</h3>
                <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "py-3 px-4 rounded-lg border text-sm font-medium transition-all duration-300",
                        selectedTime === time
                          ? "bg-primary text-primary-foreground border-primary shadow-lg"
                          : "bg-background/50 border-border/50 hover:border-primary/50 hover:text-primary text-foreground hover:bg-primary/5"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal delay={0.4}>
            <Card className="bg-background/60 backdrop-blur-md border border-border/50 p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-serif mb-3 text-foreground">Vos informations</h3>
                <p className="text-muted-foreground font-light">
                  Remplissez vos coordonnées pour finaliser la réservation
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="flex items-center gap-2 text-foreground font-semibold">
                      <Users className="h-4 w-4 text-primary" />
                      Nombre de personnes
                    </Label>
                    <select
                      id="guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full h-11 px-4 rounded-lg border border-border/50 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all backdrop-blur-sm"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'personne' : 'personnes'}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-semibold">
                      Nom complet <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre nom"
                      required
                      className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-semibold">
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      required
                      className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-semibold">
                      Téléphone <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0556482798"
                      required
                      className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                    />
                    <p className="text-xs text-muted-foreground">Format: 05, 06 ou 07 suivi de 8 chiffres</p>
                  </div>
                </div>
                <div className="flex justify-end pt-4">
                  <Button type="submit" size="lg" className="group">
                    <CheckCircle2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Confirmer la réservation
                  </Button>
                </div>
              </form>
            </Card>
          </Reveal>
        </div>
      </section>
    </AuroraBackground>
  );
}
