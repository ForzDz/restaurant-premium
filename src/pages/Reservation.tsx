import { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CalendarIcon, Clock, Users } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
      <section className="section-padding pt-24">
        <div className="container-width text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-foreground">Réservation</h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Réservez votre table en quelques clics et profitez d'une expérience culinaire exceptionnelle
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Panel - Info */}
            <Card className="bg-background/50 backdrop-blur-sm animate-fade-in p-8">
              <h2 className="text-2xl font-medium mb-6 text-foreground">Réserver une table</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Durée estimée: 1h30</span>
                </div>
                {selectedDate && (
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    <span>{format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr })}</span>
                  </div>
                )}
                {selectedTime && (
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{selectedTime}</span>
                  </div>
                )}
              </div>
            </Card>

            {/* Center - Calendar */}
            <Card className="bg-background/50 backdrop-blur-sm animate-fade-in-up p-6" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-medium mb-4 text-foreground">Sélectionnez une date</h3>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date() || date.getDay() === 0}
                className="rounded-md border-0 pointer-events-auto"
                locale={fr}
              />
            </Card>

            {/* Right - Time Slots */}
            <Card className="bg-background/50 backdrop-blur-sm animate-fade-in-up p-6" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-medium mb-4 text-foreground">Sélectionnez l'heure</h3>
              <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "py-3 px-4 rounded-lg border text-sm font-medium transition-all",
                      selectedTime === time
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background/50 border-border hover:border-primary hover:text-primary text-foreground"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-background/50 backdrop-blur-sm animate-fade-in-up mt-8 p-8" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-medium mb-6 text-foreground">Vos informations</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="guests" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Nombre de personnes
                  </Label>
                  <select
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'personne' : 'personnes'}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+33 6 00 00 00 00"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button type="submit" size="lg">
                  Confirmer la réservation
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </AuroraBackground>
  );
}
