import { useState } from "react";
import { AlertTriangle, ChevronDown, ExternalLink, Github, Globe, Radiation } from "lucide-react";
import { Button } from "./ui/button";

const PlaySection = () => {
  const [showWeb, setShowWeb] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePlayDemo = () => {
    window.open("https://odisea-game.netlify.app/", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="play" className="relative py-24 md:py-32 overflow-hidden">
      {/* Industrial background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Warning stripes top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(90deg,hsl(var(--accent))_0px,hsl(var(--accent))_20px,hsl(var(--background))_20px,hsl(var(--background))_40px)]" />
      
      {/* Warning stripes bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(90deg,hsl(var(--accent))_0px,hsl(var(--accent))_20px,hsl(var(--background))_20px,hsl(var(--background))_40px)]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-xs uppercase tracking-[0.3em] text-destructive border border-destructive/50 font-rajdhani animate-pulse">
            ⚠ Zona de Desarrollo ⚠
          </span>
          <h2 className="font-sixtyfour text-2xl md:text-4xl font-bold mb-6">
            <span className="text-foreground">Probar</span>{" "}
            <span className="neon-text-orange">Alpha</span>
          </h2>
        </div>

        {/* Industrial warning panel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-destructive to-accent rounded-xl opacity-30 blur-sm" />
            
            <div className="relative bg-card border-2 border-accent/50 rounded-xl overflow-hidden">
              {/* Warning header bar */}
              <div className="flex items-center gap-3 px-6 py-4 bg-accent/20 border-b-2 border-accent/30">
                <Radiation className="w-6 h-6 text-accent animate-pulse" />
                <span className="font-sixtyfour text-sm font-bold text-accent uppercase tracking-wider">
                  Advertencia de Sistema
                </span>
                <Radiation className="w-6 h-6 text-accent animate-pulse" />
              </div>

              {/* Warning content */}
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:flex p-4 bg-destructive/10 rounded-lg border-2 border-destructive/30">
                    <AlertTriangle className="w-12 h-12 text-destructive" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-sixtyfour text-lg font-bold text-accent mb-4">
                      BUILD ALPHA - INESTABLE
                    </h3>
                    
                    <div className="space-y-3 text-muted-foreground font-rajdhani leading-relaxed">
                      <p className="flex items-start gap-2">
                        <span className="text-accent font-bold">►</span>
                        Este es un <strong className="text-foreground">prototipo en desarrollo activo</strong>. El código cambia diariamente.
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-accent font-bold">►</span>
                        Contenido incompleto, placeholder assets, y mecánicas experimentales.
                      </p>
                    </div>

                    {/* Controls info */}
                    <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-rajdhani">Controles:</span>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground font-rajdhani">
                        <span className="flex items-center gap-2">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono border border-border">WASD</kbd>
                          Mover
                        </span>
                        <span className="flex items-center gap-2">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono border border-border">Space</kbd>
                          Saltar
                        </span>
                        <span className="flex items-center gap-2">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono border border-border">Mouse</kbd>
                          Mirar
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Versión Web: acordeón "solo para pruebas" */}
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => setShowWeb((v) => !v)}
                    aria-expanded={showWeb}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-muted/30 border border-border rounded-lg hover:border-primary/40 transition-colors"
                  >
                    <span className="flex items-center gap-3 text-sm uppercase tracking-wider text-muted-foreground font-rajdhani">
                      <Globe className="w-4 h-4" />
                      Versión Web (solo para pruebas)
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        showWeb ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showWeb && (
                    <div className="mt-3 p-5 bg-muted/20 border border-border rounded-lg space-y-4">
                      <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                        Esta versión corre en tu navegador <strong className="text-foreground">solo para pruebas rápidas</strong> del build. La experiencia recomendada es la{" "}
                        <strong className="text-foreground">versión nativa</strong> (Linux, Windows o Android), disponible en la{" "}
                        <span
                          role="link"
                          tabIndex={0}
                          className="text-primary underline underline-offset-4 cursor-pointer hover:text-primary/80"
                          onClick={() => scrollToSection("download")}
                        >
                          sección de Descargas
                        </span>
                        .
                      </p>
                      <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                        Renderizar 3D en el navegador puede <strong className="text-foreground">relentecer tu navegador</strong>. Si la pruebas, hazlo en ventana nueva.
                      </p>
                      <div className="flex justify-center pt-1">
                        <Button variant="hero" size="lg" onClick={handlePlayDemo} className="gap-3">
                          <ExternalLink className="w-5 h-5" />
                          Abrir Demo en Nueva Ventana
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer bar */}
              <div className="px-6 py-3 bg-muted/20 border-t border-border flex items-center justify-center gap-2 text-xs text-muted-foreground font-rajdhani">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Tu feedback ayuda a dar forma al juego final
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <Button variant="neonCyan" size="lg" asChild>
            <a
              href="https://github.com/icarito/Odisea"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github className="w-5 h-5" />
              Ver Código Fuente
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://icarito.github.io/Odisea_Design_Docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Documentos de Diseño
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlaySection;
