import { AlertTriangle, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const PlaySection = () => {
  return (
    <section id="play" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-xs uppercase tracking-[0.3em] text-accent border border-accent/30 font-rajdhani">
            Early Access
          </span>
          <h2 className="font-sixtyfour text-2xl md:text-4xl font-bold mb-6">
            <span className="text-foreground">Play the</span>{" "}
            <span className="neon-text-orange">Prototype</span>
          </h2>
        </div>

        {/* Warning card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative p-6 bg-card/50 backdrop-blur-sm border border-accent/30 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/20 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-sixtyfour text-sm font-bold text-accent mb-2">
                  Work in Progress
                </h3>
                <p className="text-muted-foreground font-rajdhani leading-relaxed">
                  This is an early prototype demonstrating core mechanics. It is under active development 
                  and may contain bugs, incomplete features, or placeholder content. 
                  Your feedback helps shape the final game!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Game embed area */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Neon frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-neon-orange to-accent rounded-xl opacity-50 blur-sm" />
            
            <div className="relative bg-card border-2 border-accent/50 rounded-xl overflow-hidden">
              {/* Game iframe */}
              <div className="aspect-video bg-void flex items-center justify-center">
                <iframe
                  src="https://icarito.github.io/Odisea/HTML5/"
                  className="w-full h-full border-0"
                  title="Odisea Prototype"
                  allowFullScreen
                />
              </div>
              
              {/* Controls hint */}
              <div className="p-4 bg-secondary/50 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-rajdhani">
                  <span className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">WASD</kbd>
                    Move
                  </span>
                  <span className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Space</kbd>
                    Jump
                  </span>
                  <span className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Mouse</kbd>
                    Look
                  </span>
                </div>
                <Button variant="neonOrange" size="sm" asChild>
                  <a
                    href="https://icarito.github.io/Odisea/HTML5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Fullscreen
                  </a>
                </Button>
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
              View Source Code
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
              Design Documents
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlaySection;
