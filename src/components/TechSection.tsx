import { Code, Cpu, Gamepad2, Layers, Monitor, Smartphone } from "lucide-react";

const techStack = [
  {
    icon: Gamepad2,
    title: "Godot Engine 3.x",
    description: "Motor de juegos open source con soporte nativo para exportación multiplataforma.",
  },
  {
    icon: Code,
    title: "GDScript",
    description: "Lenguaje de scripting optimizado para desarrollo de juegos con sintaxis tipo Python.",
  },
  {
    icon: Layers,
    title: "GLES2 Renderer",
    description: "Renderizado compatible con hardware legacy para máxima compatibilidad web y móvil.",
  },
  {
    icon: Monitor,
    title: "HTML5 Export",
    description: "Exportación WebGL para jugar directamente en el navegador sin instalación.",
  },
  {
    icon: Smartphone,
    title: "Android ARM64",
    description: "Build nativo para dispositivos móviles Android modernos.",
  },
  {
    icon: Cpu,
    title: "GitHub Actions CI/CD",
    description: "Pipeline automatizado de build y deploy a GitHub Pages.",
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

        {/* Additional info card */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative p-6 bg-card/30 backdrop-blur-sm border border-primary/30 rounded-xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-xl blur-sm" />
            <div className="relative">
              <h3 className="font-sixtyfour text-sm font-bold text-primary mb-4">
                Arquitectura del Proyecto
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm font-rajdhani text-muted-foreground">
                <div>
                  <strong className="text-foreground">Estructura:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Escenas modulares con herencia</li>
                    <li>• Sistema de singletons (Autoload)</li>
                    <li>• Componentes reutilizables</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground">Características:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Física con gravedad variable</li>
                    <li>• Sistema de cámara spring-arm</li>
                    <li>• Soporte gamepad completo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
