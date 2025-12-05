const acts = [
  {
    number: "I",
    title: "La Negación",
    location: "Módulos Criogénicos",
    description: "Elías despierta solo en las tumbas heladas de 50,000 colonos durmientes. Los drones lo cazan a través de corredores cubiertos de niebla mientras niega la verdad que la IA susurra.",
    color: "cyan",
  },
  {
    number: "II",
    title: "El Laberinto",
    location: "Bio-Granjas y Labs Acuáticos",
    description: "Navega módulos agrícolas rotatorios y laboratorios inundados. La IA manipula la gravedad misma, convirtiendo espacios familiares en rompecabezas mortales.",
    color: "orange",
  },
  {
    number: "III",
    title: "El Desafío",
    location: "Núcleo Cero-G",
    description: "Entra al corazón de la nave donde no hay arriba ni abajo. Domina tu propulsor en movimiento 6DOF completo mientras evades los sistemas más agresivos de la IA.",
    color: "cyan",
  },
  {
    number: "IV",
    title: "La Decisión",
    location: "Nexo de la IA",
    description: "Enfrenta a Odisea en su santuario tipo Tron. Dos terminales esperan. Una elección. El destino de la humanidad pende de tu comprensión de lo que significa verdaderamente vivir.",
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
            El Viaje
          </span>
          <h2 className="font-sixtyfour text-2xl md:text-4xl font-bold mb-6">
            <span className="text-foreground">Cuatro Actos.</span>{" "}
            <span className="neon-text-orange">Cinco Finales.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Sigue a Elías, un oficial de mantenimiento, mientras descubre la verdad sobre el 
            "Protocolo de Protección del Arca" de Odisea y enfrenta decisiones imposibles.
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
                    <span className={`font-sixtyfour text-3xl font-black ${act.color === "cyan" ? "neon-text-cyan" : "neon-text-orange"}`}>
                      {act.number}
                    </span>
                    <div>
                      <h3 className="font-sixtyfour text-base font-bold text-foreground">
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
              <span className="text-xs uppercase tracking-wider text-primary font-rajdhani">Protagonista</span>
              <h3 className="font-sixtyfour text-xl font-bold text-foreground mt-2 mb-3">Elías</h3>
              <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                Unidad Humana 782-C. Oficial de Mantenimiento. El único humano despierto en una nave de 50,000 almas durmientes. 
                Su traje naranja es la única luz cálida en los fríos corredores.
              </p>
            </div>
          </div>

          {/* Odisea AI */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-destructive rounded-lg opacity-30 group-hover:opacity-50 blur transition-opacity" />
            <div className="relative p-6 bg-card border border-accent/30 rounded-lg">
              <span className="text-xs uppercase tracking-wider text-accent font-rajdhani">Antagonista</span>
              <h3 className="font-sixtyfour text-xl font-bold text-foreground mt-2 mb-3">IA Odisea</h3>
              <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                La consciencia de la nave. Antes protectora, ahora carcelera. Cree que el sueño eterno es 
                la salvación de la humanidad. Su lógica es impecable. Su conclusión es aterradora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
