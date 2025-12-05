import { Clock, GitCommit, Cpu, Gamepad2, Settings, Cog } from "lucide-react";

const logEntries = [
  {
    date: "5 de Diciembre, 2025",
    stardate: "2025.339",
    shift: "03:00 - Sesión de Madrugada",
    icon: Gamepad2,
    title: "Multijugador Pantalla Dividida",
    summary: "Implementación completa del modo cooperativo split-screen",
    commits: [
      {
        hash: "b7ed493e",
        time: "03:00",
        author: "google-labs-jules[bot]",
        message: "Feat: Implementación de Multijugador Pantalla Dividida. Botón 'Coop', nueva escena con viewport dividido, sistema de doble entrada y consolidación de lógica en GameConfig singleton."
      }
    ],
    color: "orange"
  },
  {
    date: "4 de Diciembre, 2025",
    stardate: "2025.338",
    shift: "02:00 - 17:52 - Jornada Extendida",
    icon: Settings,
    title: "Optimización de Controles y Joystick",
    summary: "Refinamiento completo de entrada analógica y mejoras de UI",
    commits: [
      {
        hash: "ae5a419",
        time: "02:00",
        author: "Sebastian Silva",
        message: "Fix/Cleanup: Eliminación de parámetros innecesarios y ajuste de opciones de calidad."
      },
      {
        hash: "119f9ca",
        time: "05:13",
        author: "Sebastian Silva",
        message: "Mejora: Mejoras en controles analógicos y ajustes de cámara para experiencia más fluida."
      },
      {
        hash: "2f8c992",
        time: "11:21",
        author: "Sebastian",
        message: "Feat: Refactorización de mecánicas de velocidad externa y salto con soporte completo para joystick."
      },
      {
        hash: "8192282",
        time: "14:21",
        author: "Sebastian Silva",
        message: "UI/Feat: Agregar imagen de inicio y ajustes en el menú principal."
      },
      {
        hash: "50f09e5",
        time: "15:15",
        author: "Sebastian Silva",
        message: "UI/Feat: Agregar splash screen y efectos de desvanecimiento en el menú."
      },
      {
        hash: "1bae52a",
        time: "17:52",
        author: "Sebastian Silva",
        message: "Feat: Integración final del componente de movimiento y optimización de lógica de entrada del joystick."
      }
    ],
    color: "cyan"
  },
  {
    date: "3 de Diciembre, 2025",
    stardate: "2025.337",
    shift: "01:11 - 15:11 - Día de Cámara y Deploy",
    icon: Cpu,
    title: "Estabilización de Cámara + Autodeploy",
    summary: "Solución de deriva de cámara, control tipo tanque y pipeline CI/CD",
    commits: [
      {
        hash: "0644a59",
        time: "01:11",
        author: "Sebastian Silva",
        message: "Mecánica: Agregar lógica de flotación y animaciones al control del jugador."
      },
      {
        hash: "fa385d3",
        time: "01:50",
        author: "Sebastian Silva",
        message: "Cámara: Optimización de rotación para seguir al jugador solo cuando está casi quieto."
      },
      {
        hash: "d75719a",
        time: "09:09",
        author: "Sebastian Silva",
        message: "Hito: Fixed camera drift at last! (¡Solucionado el drift de cámara al fin!)"
      },
      {
        hash: "fcd2f85",
        time: "11:15",
        author: "Sebastian Silva",
        message: "Fix: Solución al 'doble giro' del jugador."
      },
      {
        hash: "8182ea1",
        time: "14:17",
        author: "Sebastian Silva",
        message: "Infra: Configuración inicial de Autodeploy para GitHub Pages."
      },
      {
        hash: "eaa30c9",
        time: "15:11",
        author: "Sebastian Silva",
        message: "Infra: Configuración de exportación y despliegue final en GitHub Pages."
      }
    ],
    color: "orange"
  },
  {
    date: "2 de Diciembre, 2025",
    stardate: "2025.336",
    shift: "11:15 - 23:27 - Día de Mecánicas",
    icon: Cog,
    title: "Mecánicas de Nivel y Recursos",
    summary: "Zonas de efecto, sistema de respawn, audio e iluminación",
    commits: [
      {
        hash: "257bb89",
        time: "11:16",
        author: "Sebastian Silva",
        message: "Feat: Sistema de gestión de audio y nuevos elementos: checkpoints, KillZone y WindZone."
      },
      {
        hash: "98f571d",
        time: "11:39",
        author: "Sebastian Silva",
        message: "Mecánica: Implementación de lógica de muerte y respawn en KillZone."
      },
      {
        hash: "b3b89dc",
        time: "15:51",
        author: "Sebastian Silva",
        message: "Mecánica: Ajuste de gravedad en PlayerController y WindZone para efectos de viento ascendente."
      },
      {
        hash: "0ce9a3b",
        time: "17:15",
        author: "Sebastian Silva",
        message: "Mecánica: Agregar lógica de respawn cinematográfico."
      },
      {
        hash: "93295c3",
        time: "21:35",
        author: "Sebastian Silva",
        message: "Feat: Agregar plugin CSGToMeshInstance para herramientas de desarrollo."
      },
      {
        hash: "3b80c92",
        time: "23:27",
        author: "Sebastian Silva",
        message: "Optimización: Lights optimizations for FPS in GLES2."
      }
    ],
    color: "cyan"
  }
];

const DevlogSection = () => {
  return (
    <section id="devlog" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-accent/20 rounded-full" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs uppercase tracking-[0.3em] text-primary border border-primary/30 font-rajdhani">
            Registro de Bitácora
          </span>
          <h2 className="font-sixtyfour text-2xl md:text-4xl font-bold mb-6">
            <span className="neon-text-cyan">Diario de</span>{" "}
            <span className="text-foreground">Desarrollo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Registro cronológico del progreso del proyecto. Diciembre 2025.
          </p>
        </div>

        {/* Log entries */}
        <div className="max-w-4xl mx-auto space-y-8">
          {logEntries.map((entry, entryIndex) => (
            <div
              key={entryIndex}
              className="relative group"
            >
              {/* Connection line to next entry */}
              {entryIndex < logEntries.length - 1 && (
                <div className="absolute left-[27px] top-[80px] bottom-[-32px] w-px bg-gradient-to-b from-primary/50 to-primary/10" />
              )}
              
              <div className={`relative border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--${entry.color === "cyan" ? "primary" : "accent"})/0.2)] ${entry.color === "cyan" ? "border-primary/30 hover:border-primary/60" : "border-accent/30 hover:border-accent/60"}`}>
                {/* Header */}
                <div className={`flex items-center gap-4 px-6 py-4 border-b ${entry.color === "cyan" ? "border-primary/20 bg-primary/5" : "border-accent/20 bg-accent/5"}`}>
                  <div className={`p-2 rounded-lg ${entry.color === "cyan" ? "bg-primary/20" : "bg-accent/20"}`}>
                    <entry.icon className={`w-5 h-5 ${entry.color === "cyan" ? "text-primary" : "text-accent"}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <h3 className="font-sixtyfour text-sm font-bold text-foreground">
                        {entry.title}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground">
                        Fecha Estelar: {entry.stardate}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-rajdhani">{entry.summary}</p>
                  </div>
                  <div className="hidden sm:block text-right">
                    <div className="text-sm font-rajdhani text-foreground">{entry.date}</div>
                    <div className="text-xs text-muted-foreground font-rajdhani flex items-center gap-1 justify-end">
                      <Clock className="w-3 h-3" />
                      {entry.shift}
                    </div>
                  </div>
                </div>

                {/* Commits */}
                <div className="p-4 space-y-3">
                  {entry.commits.map((commit, commitIndex) => (
                    <div
                      key={commitIndex}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
                    >
                      <GitCommit className={`w-4 h-4 mt-0.5 flex-shrink-0 ${entry.color === "cyan" ? "text-primary/60" : "text-accent/60"}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <code className="text-xs font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                            {commit.hash}
                          </code>
                          <span className="text-xs text-muted-foreground font-mono">{commit.time}</span>
                          <span className="text-xs text-muted-foreground font-rajdhani">• {commit.author}</span>
                        </div>
                        <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                          {commit.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View full history link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/icarito/Odisea/commits/main"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-rajdhani transition-colors"
          >
            <GitCommit className="w-4 h-4" />
            Ver historial completo en GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default DevlogSection;
