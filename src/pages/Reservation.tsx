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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content: Steps */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Step 1: Date & Time */}
              <Reveal delay={0.1}>
                <Card className="bg-background/60 backdrop-blur-md border border-border/50 p-6 md:p-8">
                  <h2 className="text-2xl font-serif mb-6 text-foreground flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                    Date et Heure
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Calendar */}
                    <div className="flex justify-center md:block">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="rounded-md border-0 pointer-events-auto"
                        locale={fr}
                      />
                    </div>

                    {/* Time Slots */}
                    <div>
                      <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">Créneaux disponibles</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "py-2 px-3 rounded-md border text-sm font-medium transition-all duration-200",
                              selectedTime === time
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-background/50 border-border/50 hover:border-primary/50 hover:text-primary text-foreground hover:bg-primary/5"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>

              {/* Step 2: Details & Confirmation */}
              <Reveal delay={0.2}>
                <Card className="bg-background/60 backdrop-blur-md border border-border/50 p-6 md:p-8">
                  <h2 className="text-2xl font-serif mb-6 text-foreground flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                    Vos Coordonnées
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Guests */}
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

                    {/* Personal Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-semibold">Nom complet <span className="text-primary">*</span></Label>
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
                         <Label htmlFor="phone" className="text-foreground font-semibold">Téléphone <span className="text-primary">*</span></Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setPhone(value);
                          }}
                          placeholder="0556482798"
                          required
                          maxLength={10}
                          pattern="^(05|06|07)[0-9]{8}$"
                          className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-semibold">Email <span className="text-primary">*</span></Label>
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

                    <div className="pt-4">
                      <Button type="submit" size="lg" className="w-full group text-lg h-12">
                        <CheckCircle2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Confirmer la réservation
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-3">
                        En cliquant sur confirmer, vous acceptez nos conditions de réservation.
                      </p>
                    </div>
                  </form>
                </Card>
              </Reveal>
            </div>

            {/* Sidebar: Summary (Sticky) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Reveal delay={0.3}>
                  <Card className="bg-background/60 backdrop-blur-md border border-primary/20 p-6 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4" />
                    
                    <h2 className="text-xl font-serif mb-6 text-foreground relative z-10">Ma Réservation</h2>
                    
                    <div className="space-y-6 relative z-10">
                      
                      {/* Date Summary */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                          <CalendarIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Date</p>
                          <p className="text-foreground font-medium text-lg">
                            {selectedDate ? format(selectedDate, 'd MMMM yyyy', { locale: fr }) : <span className="text-muted-foreground/50 italic">Non sélectionnée</span>}
                          </p>
                        </div>
                      </div>

                      {/* Time Summary */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Heure</p>
                          <p className="text-foreground font-medium text-lg">
                            {selectedTime || <span className="text-muted-foreground/50 italic">--:--</span>}
                          </p>
                        </div>
                      </div>

                      {/* Guest Summary */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Invités</p>
                          <p className="text-foreground font-medium text-lg">
                            {guests} {parseInt(guests) === 1 ? 'Personne' : 'Personnes'}
                          </p>
                        </div>
                      </div>

                      <div className="h-px bg-border/50 my-4" />
                      
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          <span className="font-semibold text-primary">Note:</span> Votre table sera réservée pendant 1h30. Merci d'arriver à l'heure.
                        </p>
                      </div>

                    </div>
                  </Card>
                </Reveal>
              </div>
            </div>

          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}
