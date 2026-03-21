import { Cpu, Orbit, Rocket, Zap } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Plataformas 3D",
    description: "Mecánicas de plataformas precisas inspiradas en clásicos como Mario 64. Movimiento fluido, puzzles de entorno y exploración de una nave colonial de 8 km.",
  },
  {
    icon: Orbit,
    title: "Puzzles de Entorno",
    description: "Usa el entorno a tu favor: activa consolas, mueve objetos, sincroniza tu movimiento con los sistemas de la nave para avanzar.",
  },
  {
    icon: Cpu,
    title: "IA Antagonista",
    description: "Enfrenta a Odisea, una IA que cree que la hibernación eterna es la salvación de la humanidad. No dispara. No ataca. Argumenta.",
  },
  {
    icon: Zap,
    title: "Narrativa Ambiental",
    description: "La historia se cuenta a través del espacio. Cada sala, cada pantalla, cada cápsula criogénica tiene algo que decir.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-void" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs uppercase tracking-[0.3em] text-primary border border-primary/30 font-rajdhani">
            Sobre el Juego
          </span>
          <h2 className="font-sixtyfour text-2xl md:text-4xl font-bold mb-6">
            <span className="neon-text-cyan">Ciencia Ficción Dura</span>{" "}
            <span className="text-foreground">+</span>{" "}
            <span className="neon-text-orange">Gaming Retro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Una carta de amor a los plataformas de la era N64 envuelta en una estética inspirada en Tron. 
            Explora una nave colonial de 8 kilómetros donde nada es lo que parece.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/30 group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-sixtyfour text-sm font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Ship image */}
        <div className="mt-20 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-xl blur-2xl opacity-50" />
          <div className="relative border border-border rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm">
            <img
              src="https://icarito.github.io/Odisea_Design_Docs/assets/nave_odisea_concepto.png"
              alt="La Nave Colonial Odisea"
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
              <h3 className="font-sixtyfour text-lg font-bold text-primary mb-2">La Nave Odisea</h3>
              <p className="text-sm text-muted-foreground font-rajdhani">
                8 kilómetros de módulos rotatorios, cámaras criogénicas, bio-granjas y corredores industriales. 
                Hogar de 50,000 colonos durmientes rumbo a Titán.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
