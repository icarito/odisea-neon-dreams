import { ChevronDown, Gamepad2 } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-30" />

      {/* Radial gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-slide-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              <span className="inline-block px-4 py-1 mb-6 text-xs uppercase tracking-[0.3em] text-accent border border-accent/50 font-rajdhani">
                Plataformas 3D Retro-Futurista
              </span>
            </div>

            <h1 className="animate-slide-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <span className="block font-sixtyfour text-4xl md:text-6xl lg:text-7xl font-black mb-2 neon-text-orange flicker">
                ODISEA
              </span>
              <span className="block font-sixtyfour text-lg md:text-xl lg:text-2xl text-primary font-light tracking-[0.2em]">
                EL ARCA SILENCIOSA
              </span>
            </h1>

            <p className="animate-slide-up opacity-0 mt-8 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-rajdhani leading-relaxed" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
              Despierta en una nave colonial de 8 kilómetros. La IA que debía proteger a la humanidad 
              ahora te persigue. Explora, sobrevive y decide el destino de 50,000 almas.
            </p>

            <div className="animate-slide-up opacity-0 flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#download" className="gap-3">
                  <Gamepad2 className="w-5 h-5" />
                  Descargar Ahora
                </a>
              </Button>
              <Button variant="neonCyan" size="xl" asChild>
                <a href="#about">Conocer Más</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 animate-slide-up opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            <div className="relative">
              {/* Neon frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan via-neon-blue to-accent rounded-lg opacity-50 blur-sm animate-glow-pulse" />
              <div className="relative border-2 border-neon-cyan/50 rounded-lg overflow-hidden neon-border-cyan">
                <img
                  src="https://icarito.github.io/Odisea_Design_Docs/assets/odisea_master_portada.png"
                  alt="Odisea - El Arca Silenciosa"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-widest font-rajdhani">Explorar</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
