import { useState } from "react";
import { ChevronDown, Cpu, Gamepad2, Settings, Cog, Wrench } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const logEntries = [
  {
    date: "5 de Diciembre, 2025",
    stardate: "2025.339",
    icon: Gamepad2,
    title: "Sistemas de Cooperación Tripulante",
    summary: "Módulo de pantalla dividida operacional",
    systems: [
      "Sistema de viewport dual activado",
      "Módulo de entrada cooperativa instalado",
      "Singleton GameConfig consolidado para detección de configuración",
      "Botón de activación 'Coop' integrado en interfaz principal"
    ],
    color: "orange"
  },
  {
    date: "4 de Diciembre, 2025",
    stardate: "2025.338",
    icon: Settings,
    title: "Calibración de Controles de Navegación",
    summary: "Optimización completa de sistemas de entrada analógica",
    systems: [
      "Parámetros de calidad recalibrados - rendimiento optimizado",
      "Controles analógicos afinados - respuesta de cámara mejorada",
      "Mecánicas de velocidad externa y salto refactorizadas",
      "Menú principal actualizado - splash screen y transiciones instaladas",
      "Componente de movimiento integrado - lógica de joystick optimizada",
      "Eje X de joystick invertido según especificaciones ergonómicas"
    ],
    color: "cyan"
  },
  {
    date: "3 de Diciembre, 2025",
    stardate: "2025.337",
    icon: Cpu,
    title: "Estabilización de Sistemas de Cámara",
    summary: "Corrección crítica de deriva + pipeline de despliegue automático",
    systems: [
      "Lógica de flotación y animaciones añadidas al control piloto",
      "Rotación de cámara optimizada - seguimiento suavizado implementado",
      "HITO: Deriva de cámara corregida definitivamente",
      "Anomalía de 'doble giro' del piloto solucionada",
      "Sistema de autodeploy configurado - GitHub Pages operacional",
      "Exportaciones HTML5 y configuración PWA preparadas"
    ],
    color: "orange"
  },
  {
    date: "2 de Diciembre, 2025",
    stardate: "2025.336",
    icon: Cog,
    title: "Instalación de Mecánicas de Nivel",
    summary: "Zonas de efecto, sistema de respawn y gestión de recursos",
    systems: [
      "Sistema de gestión de audio instalado",
      "Checkpoints, KillZone y WindZone implementados",
      "Lógica de muerte y respawn cinematográfico operacional",
      "Efectos de gravedad y viento ascendente calibrados",
      "Plugin CSGToMeshInstance integrado en herramientas de desarrollo",
      "Iluminación optimizada para rendimiento GLES2"
    ],
    color: "cyan"
  }
];

const DevlogSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
            <span className="neon-text-cyan">Bitácora</span>{" "}
            <span className="text-foreground">Técnica</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Registro de mantenimiento y actualizaciones de sistemas. Diciembre 2025.
          </p>
        </div>

        {/* Log entries */}
        <div className="max-w-4xl mx-auto space-y-4">
          {logEntries.map((entry, entryIndex) => (
            <Collapsible
              key={entryIndex}
              open={openItems.includes(entryIndex)}
              onOpenChange={() => toggleItem(entryIndex)}
            >
              <div className={`relative border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm transition-all duration-300 ${entry.color === "cyan" ? "border-primary/30 hover:border-primary/60" : "border-accent/30 hover:border-accent/60"}`}>
                {/* Header - Always visible */}
                <CollapsibleTrigger className="w-full text-left">
                  <div className={`flex items-center gap-4 px-6 py-4 cursor-pointer transition-colors ${entry.color === "cyan" ? "hover:bg-primary/10" : "hover:bg-accent/10"}`}>
                    <div className={`p-2 rounded-lg ${entry.color === "cyan" ? "bg-primary/20" : "bg-accent/20"}`}>
                      <entry.icon className={`w-5 h-5 ${entry.color === "cyan" ? "text-primary" : "text-accent"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
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
                    <div className="hidden sm:block text-right mr-4">
                      <div className="text-sm font-rajdhani text-foreground">{entry.date}</div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${openItems.includes(entryIndex) ? "rotate-180" : ""}`} />
                  </div>
                </CollapsibleTrigger>

                {/* Content - Collapsible */}
                <CollapsibleContent>
                  <div className={`border-t p-4 ${entry.color === "cyan" ? "border-primary/20 bg-primary/5" : "border-accent/20 bg-accent/5"}`}>
                    <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground font-mono uppercase tracking-wider">
                      <Wrench className="w-3 h-3" />
                      Sistemas Intervenidos
                    </div>
                    <ul className="space-y-2">
                      {entry.systems.map((system, systemIndex) => (
                        <li
                          key={systemIndex}
                          className="flex items-start gap-3 text-sm text-muted-foreground font-rajdhani"
                        >
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${entry.color === "cyan" ? "bg-primary" : "bg-accent"}`} />
                          {system}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
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
            <Wrench className="w-4 h-4" />
            Ver historial completo de mantenimiento
          </a>
        </div>
      </div>
    </section>
  );
};

export default DevlogSection;