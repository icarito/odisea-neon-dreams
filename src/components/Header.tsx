import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Acerca", id: "about" },
    { label: "Historia", id: "story" },
    { label: "Galería", id: "gallery" },
    { label: "Devlog", id: "devlog" },
    { label: "¿Cómo se hace?", id: "how-its-made" },
    { label: "Técnico", id: "tech" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-sixtyfour text-lg font-bold neon-text-cyan">
              ODISEA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={"#" + item.id}
                onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                className="font-rajdhani text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <Button variant="neonOrange" size="sm" onClick={() => { scrollTo("download"); setIsMenuOpen(false); }}>
              Descargar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={"#" + item.id}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.id); setIsMenuOpen(false); }}
                  className="font-rajdhani text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="neonOrange" size="sm" onClick={() => { scrollTo("download"); setIsMenuOpen(false); }}>
                Descargar
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
