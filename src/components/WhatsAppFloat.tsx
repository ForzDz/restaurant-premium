import { MessageCircle } from 'lucide-react';
import { Button } from './Button';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/213556482798"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 p-0 shadow-2xl hover:shadow-green-500/50 bg-green-500 hover:bg-green-600 transition-all duration-300 group-hover:scale-110"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Button>
      
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Contactez-nous sur WhatsApp
      </span>
    </a>
  );
}
