import { Gamepad2, Layers } from "lucide-react";

const techStack = [
  {
    icon: Gamepad2,
    title: "Godot Engine 3.x",
    description: "Motor de juegos open source con soporte nativo para exportación multiplataforma.",
  },
  {
    icon: Layers,
    title: "GLES3 Renderer",
    description: "Renderizado 3D moderno y eficiente, compatible con web, móvil y escritorio.",
  },
  {
    icon: Cpu,
    title: "Box3D Physics",
    description: "Motor de física 3D propio (custom physics), determinista y con soporte para gravedad variable.",
  },
];

const TechSection = () => {
  return (
    <section id="tech" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-void" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs uppercase tracking-[0.3em] text-accent border border-accent/30 font-rajdhani">
            Bajo el Capó
          </span>
          <h2 className="font-sixtyfour text-2xl md:text-4xl font-bold mb-6">
            <span className="text-foreground">Detalles</span>{" "}
            <span className="neon-text-orange">Técnicos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Construido con tecnología open source. Optimizado para rendimiento retro.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={tech.title}
              className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border hover:border-accent/50 rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-accent/10 border border-accent/30 group-hover:border-accent group-hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)] transition-all duration-300">
                <tech.icon className="w-6 h-6 text-accent" />
              </div>
              
              {/* Content */}
              <h3 className="font-sixtyfour text-sm font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                {tech.title}
              </h3>
              <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                {tech.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechSection;
