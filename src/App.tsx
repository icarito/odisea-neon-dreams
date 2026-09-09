import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacidad from "./pages/Privacidad";
import NotFound from "./pages/NotFound";

// Destino del enlace de descargas que sirve Odisea Central (#/downloads):
// renderiza la home y baja hasta la sección de descargas.
const Downloads = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => clearTimeout(timer);
  }, []);
  return <Index />;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* URL publica que exigen la App Store y Google Play. */}
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/privacy" element={<Privacidad />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/download" element={<Downloads />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
