import { AlertTriangle, ExternalLink, Github, Radiation, Skull, Terminal } from "lucide-react";
import { Button } from "./ui/button";

const PlaySection = () => {
  const handlePlayDemo = () => {
    window.open("https://icarito.github.io/Odisea/", "_blank", "noopener,noreferrer");
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

        {/* MEGA WARNING BANNER */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative border-2 border-destructive/80 rounded-xl overflow-hidden bg-destructive/10">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,hsl(var(--destructive)/0.03)_10px,hsl(var(--destructive)/0.03)_20px)]" />
            <div className="relative p-6 text-center">
              <Skull className="w-10 h-10 text-destructive mx-auto mb-3 animate-pulse" />
              <h3 className="font-sixtyfour text-xl md:text-2xl font-bold text-destructive mb-3 uppercase tracking-wider">
                ⚠ ¡ALTO! ⚠
              </h3>
              <p className="font-sixtyfour text-sm md:text-base text-destructive/90 leading-relaxed max-w-2xl mx-auto">
                ESTO ES UN PROTOTIPO <strong className="text-destructive underline">PRE-PRE-ALFA</strong>
              </p>
              <div className="mt-3 space-y-1">
                <p className="text-xs md:text-sm text-destructive/80 font-rajdhani">
                  ► HAY BUGS ◄ ► LOS CONTROLES PUEDEN FALLAR ◄ ► ASSETS PROVISIONALES ◄
                </p>
                <p className="text-xs md:text-sm text-destructive/80 font-rajdhani">
                  ► MECÁNICAS INCOMPLETAS ◄ ► SIN OPTIMIZACIÓN ◄ ► PUEDE CRASHEAR ◄
                </p>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground font-rajdhani">
                <Terminal className="w-3 h-3" />
                <span>Build de desarrollo — No representa la calidad del producto final</span>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial warning panel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-destructive to-accent rounded-xl opacity-30 blur-sm" />
            
            <div className="relative bg-card border-2 border-accent/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 bg-accent/20 border-b-2 border-accent/30">
                <Radiation className="w-6 h-6 text-accent animate-pulse" />
                <span className="font-sixtyfour text-sm font-bold text-accent uppercase tracking-wider">
                  Advertencia de Sistema
                </span>
                <Radiation className="w-6 h-6 text-accent animate-pulse" />
              </div>

              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:flex p-4 bg-destructive/10 rounded-lg border-2 border-destructive/30">
                    <AlertTriangle className="w-12 h-12 text-destructive" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-sixtyfour text-lg font-bold text-accent mb-4">
                      BUILD ALPHA — INESTABLE
                    </h3>
                    
                    <div className="space-y-3 text-muted-foreground font-rajdhani leading-relaxed">
                      <p className="flex items-start gap-2">
                        <span className="text-accent font-bold">►</span>
                        Este es un <strong className="text-foreground">prototipo en desarrollo activo</strong>. El código cambia diariamente.
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-accent font-bold">►</span>
                        La versión HTML5 es un <strong className="text-foreground">build de desarrollo crudo</strong> y puede fallar o tener errores.
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-accent font-bold">►</span>
                        Contenido incompleto, placeholder assets, y mecánicas experimentales.
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-accent font-bold">►</span>
                        <strong className="text-foreground">Los controles pueden no responder correctamente</strong> — abre en ventana nueva para mejor experiencia.
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-accent font-bold">►</span>
                        Este prototipo recolecta <strong className="text-foreground">datos anónimos de rendimiento</strong> (FPS, errores). Sin datos personales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

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

                <div className="mt-8 flex justify-center">
                  <Button
                    variant="hero"
                    size="xl"
                    onClick={handlePlayDemo}
                    className="gap-3 animate-pulse hover:animate-none"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Abrir Demo en Nueva Ventana
                  </Button>
                </div>
              </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaySection;
