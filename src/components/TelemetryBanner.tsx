import { useState, useEffect } from "react";
import { Shield, X } from "lucide-react";
import { Button } from "./ui/button";

const TelemetryBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("odisea_telemetry_consent");
    if (accepted === null) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("odisea_telemetry_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("odisea_telemetry_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-card border-2 border-accent/50 rounded-xl overflow-hidden">
          {/* Warning stripe */}
          <div className="h-1.5 bg-gradient-to-r from-accent via-destructive to-accent" />

          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex p-3 bg-accent/10 rounded-lg border border-accent/30 flex-shrink-0">
                <Shield className="w-8 h-8 text-accent" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-sixtyfour text-sm font-bold text-accent mb-2">
                      ⚠ Transparencia de Datos
                    </h3>
                    <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                      Este prototipo <strong className="text-foreground">pre-pre-alfa</strong> recolecta datos anónimos de rendimiento 
                      (FPS, errores de consola, resolución de pantalla) para mejorar el juego.
                    </p>
                    <p className="text-xs text-muted-foreground/70 font-rajdhani mt-2">
                      No se recopilan datos personales, credenciales ni información de navegación fuera del juego.
                      Los datos se usan únicamente para detectar bugs y optimizar rendimiento.
                    </p>
                  </div>
                  <button
                    onClick={handleDecline}
                    className="p-1 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <Button variant="hero" size="sm" onClick={handleAccept} className="text-xs">
                    Aceptar y Continuar
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleDecline} className="text-xs">
                    Rechazar (sin telemetría)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelemetryBanner;
