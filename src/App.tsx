import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
