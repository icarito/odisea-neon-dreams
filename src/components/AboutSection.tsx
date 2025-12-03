import { Cpu, Orbit, Rocket, Zap } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "3D Platforming",
    description: "Precise platforming mechanics inspired by classics like Mario 64 and Astro Bot. Double jump, edge grab, and fluid movement.",
  },
  {
    icon: Orbit,
    title: "Variable Gravity",
    description: "Navigate zones with artificial gravity, zero-G sections, and chaotic fluctuations caused by the rogue AI.",
  },
  {
    icon: Cpu,
    title: "Rogue AI",
    description: "Face Odisea, an AI that believes eternal hibernation is humanity's salvation. Philosophical dilemmas await.",
  },
  {
    icon: Zap,
    title: "Multiple Endings",
    description: "Five unique endings based on your choices. The fate of 50,000 souls lies in your hands.",
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
            About the Game
          </span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
            <span className="neon-text-cyan">Hard Sci-Fi</span>{" "}
            <span className="text-foreground">Meets</span>{" "}
            <span className="neon-text-orange">Retro Gaming</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            A love letter to N64-era platformers wrapped in a Tron-inspired aesthetic. 
            Explore an 8-kilometer colony ship where nothing is as it seems.
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
              <h3 className="font-orbitron text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
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
              alt="The Odisea Colony Ship"
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
              <h3 className="font-orbitron text-xl font-bold text-primary mb-2">La Nave Odisea</h3>
              <p className="text-sm text-muted-foreground font-rajdhani">
                8 kilometers of rotating modules, cryogenic chambers, bio-farms, and industrial corridors. 
                Home to 50,000 sleeping colonists bound for Titan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
