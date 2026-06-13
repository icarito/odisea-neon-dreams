import { Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-void" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-sixtyfour text-xl font-bold neon-text-cyan">ODISEA</span>
            <span className="text-sm text-muted-foreground font-rajdhani">El Arca Silenciosa</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/icarito/Odisea"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-rajdhani">GitHub</span>
            </a>
            <a
              href="https://icarito.github.io/Odisea_Design_Docs/Odisea/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm font-rajdhani">Documentación</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground font-rajdhani">
              Una aventura retro-futurista
            </p>
            <p className="text-xs text-muted-foreground/60 font-rajdhani mt-1">
              Hecho con 💙 por Sebastian Silva
            </p>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
