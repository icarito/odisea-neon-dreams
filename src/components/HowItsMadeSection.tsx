import { Code, Globe, Layers, Monitor, Music, Puzzle, Wrench, FileCode } from "lucide-react";

const pipelineSteps = [
  {
    icon: Puzzle,
    title: "1. Diseño",
    description: "El juego se diseña en documentos de especificación: niveles, personajes, mecánicas, historia. Cada sala, cada puzzle y cada línea de diálogo se planifica antes de programar.",
    detail: "Herramientas: Obsidian, Markdown, GitHub"
  },
  {
    icon: Code,
    title: "2. Programación (GDScript)",
    description: "El código se escribe en GDScript, el lenguaje de scripting de Godot. Cada componente (movimiento, cámara, interacción) es un script independiente que se comunica por señales.",
    detail: "Motor: Godot Engine 3.x | Lenguaje: GDScript (similar a Python)"
  },
  {
    icon: Layers,
    title: "3. Modelado 3D",
    description: "Los personajes, escenarios y objetos se modelan con geometría low-poly. El estilo retro-futurista usa pocos polígonos con iluminación neón para un look único.",
    detail: "Estilo: Low-poly + Neon | Renderer: GLES2"
  },
  {
    icon: Music,
    title: "4. Audio",
    description: "Efectos de sonido industriales, sintetizadores y ambientes generados proceduralmente. La nave tiene su propia voz a través del audio ambiental.",
    detail: "Formato: OGG | Síntesis: Procedural"
  },
  {
    icon: Wrench,
    title: "5. Pruebas",
    description: "Cada cambio se prueba en Godot, se exporta a HTML5 y se juega en navegador. Un sistema de replay determinista permite detectar bugs reproduciendo exactamente la misma partida.",
    detail: "Core V2: Determinismo + Replay | Tests automatizados"
  },
  {
    icon: Globe,
    title: "6. Publicación Web",
    description: "El juego se exporta a WebGL (HTML5) y se despliega automáticamente a GitHub Pages mediante GitHub Actions. Cada commit en main genera un nuevo build.",
    detail: "CI/CD: GitHub Actions | Host: GitHub Pages"
  }
];

const HowItsMadeSection = () => {
  return (
    <section id="how-its-made" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-void" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs uppercase tracking-[0.3em] text-primary border border-primary/30 font-rajdhani">
            Educación
          </span>
          <h2 className="font-sixtyfour text-2xl md:text-4xl font-bold mb-6">
            <span className="neon-text-cyan">¿Cómo se hace</span>{" "}
            <span className="text-foreground">un videojuego?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-rajdhani">
            Odisea es un proyecto open source que muestra el ciclo completo de desarrollo de un videojuego 3D.
            Desde el diseño en papel hasta el juego funcionando en tu navegador.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg">
            <Monitor className="w-4 h-4 text-accent" />
            <span className="text-xs font-rajdhani text-muted-foreground">
              Pipeline completo: Godot 3 → GDScript → GLES2 → WebGL → GitHub Pages
            </span>
          </div>
        </div>

        {/* Pipeline grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pipelineSteps.map((step, index) => (
            <div
              key={step.title}
              className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/30 group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-sixtyfour text-sm font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed mb-3">
                {step.description}
              </p>
              <div className="text-xs text-primary/70 font-mono font-rajdhani border-t border-border/50 pt-2 mt-auto">
                {step.detail}
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto p-6 bg-card/30 backdrop-blur-sm border border-border rounded-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileCode className="w-5 h-5 text-primary" />
              <h3 className="font-sixtyfour text-sm font-bold text-foreground">
                Código Abierto
              </h3>
            </div>
            <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed mb-4">
              Todo el código fuente de Odisea está disponible en GitHub. Puedes explorar cada script,
              cada escena y cada documento de diseño. Es un recurso educativo para aprender desarrollo
              de videojuegos con Godot Engine.
            </p>
            <a
              href="https://github.com/icarito/Odisea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-rajdhani text-sm transition-colors"
            >
              <Code className="w-4 h-4" />
              Ver repositorio en GitHub →
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/50 font-rajdhani max-w-xl mx-auto">
            Este sitio es parte del proyecto educativo Odisea. El prototipo mostrado está en fase 
            pre-pre-alfa y no representa la calidad del producto final.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItsMadeSection;
