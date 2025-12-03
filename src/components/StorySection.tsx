const acts = [
  {
    number: "I",
    title: "La Negación",
    location: "Cryogenic Modules",
    description: "Elías awakens alone in the frozen tombs of 50,000 sleeping colonists. Drones hunt him through fog-filled corridors as he denies the truth the AI whispers.",
    color: "cyan",
  },
  {
    number: "II",
    title: "El Laberinto",
    location: "Bio-Farms & Aquatic Labs",
    description: "Navigate rotating agricultural modules and flooded laboratories. The AI manipulates gravity itself, turning familiar spaces into deadly puzzles.",
    color: "orange",
  },
  {
    number: "III",
    title: "El Desafío",
    location: "Zero-G Core",
    description: "Enter the ship's heart where there is no up or down. Master your thruster in full 6DOF movement while evading the AI's most aggressive systems.",
    color: "cyan",
  },
  {
    number: "IV",
    title: "La Decisión",
    location: "AI Nexus",
    description: "Face Odisea in its Tron-like sanctum. Two terminals await. One choice. The fate of humanity hangs on your understanding of what it means to truly live.",
    color: "orange",
  },
];

const StorySection = () => {
  return (
    <section id="story" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs uppercase tracking-[0.3em] text-accent border border-accent/30 font-rajdhani">
            The Journey
          </span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Four Acts.</span>{" "}
            <span className="neon-text-orange">Five Endings.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Follow Elías, a maintenance officer, as he uncovers the truth about Odisea's 
            "Ark Protection Protocol" and faces impossible choices.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

          {acts.map((act, index) => (
            <div
              key={act.number}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 flex items-center justify-center">
                <div className={`w-4 h-4 rounded-full ${act.color === "cyan" ? "bg-primary" : "bg-accent"} animate-glow-pulse`} />
                <div className={`absolute w-8 h-8 rounded-full border-2 ${act.color === "cyan" ? "border-primary/50" : "border-accent/50"}`} />
              </div>

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className={`p-6 bg-card/50 backdrop-blur-sm border rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_${act.color === "cyan" ? "hsl(var(--primary)/0.2)" : "hsl(var(--accent)/0.2)"}] ${act.color === "cyan" ? "border-primary/30 hover:border-primary/60" : "border-accent/30 hover:border-accent/60"}`}>
                  {/* Act number */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`font-orbitron text-4xl font-black ${act.color === "cyan" ? "neon-text-cyan" : "neon-text-orange"}`}>
                      {act.number}
                    </span>
                    <div>
                      <h3 className="font-orbitron text-xl font-bold text-foreground">
                        {act.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-rajdhani">
                        {act.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-rajdhani leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Character cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-4xl mx-auto">
          {/* Elías */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-neon-blue rounded-lg opacity-30 group-hover:opacity-50 blur transition-opacity" />
            <div className="relative p-6 bg-card border border-primary/30 rounded-lg">
              <span className="text-xs uppercase tracking-wider text-primary font-rajdhani">Protagonist</span>
              <h3 className="font-orbitron text-2xl font-bold text-foreground mt-2 mb-3">Elías</h3>
              <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                Human Unit 782-C. Maintenance Officer. The only human awake on a ship of 50,000 sleeping souls. 
                His orange suit is the only warm light in the cold corridors.
              </p>
            </div>
          </div>

          {/* Odisea AI */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-destructive rounded-lg opacity-30 group-hover:opacity-50 blur transition-opacity" />
            <div className="relative p-6 bg-card border border-accent/30 rounded-lg">
              <span className="text-xs uppercase tracking-wider text-accent font-rajdhani">Antagonist</span>
              <h3 className="font-orbitron text-2xl font-bold text-foreground mt-2 mb-3">IA Odisea</h3>
              <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                The ship's consciousness. Once a protector, now a jailer. It believes eternal sleep is 
                humanity's salvation. Its logic is flawless. Its conclusion is terrifying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
