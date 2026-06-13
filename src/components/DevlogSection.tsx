import { useState } from "react";
import { ChevronDown, Cpu, Gamepad2, Settings, Cog, Wrench, Download } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const logEntries = [
  {
    date: "21 de Marzo, 2026",
    stardate: "2026.080",
    icon: Gamepad2,
    title: "Diseño del Nivel 1 — Sala de Criogenia",
    summary: "Especificación completa del pasillo en L, cubículo de control y flujo jugable",
    systems: [
      "Storyboard momento a momento de los 5 beats del Nivel 1",
      "Layout definido: pasillo en L con holopantallas pasivas",
      "Mecánica terminal → botón → puerta documentada",
      "Primera aparición de la IA Odisea integrada al flujo",
      "Canvas visual del flujo jugable creado en Obsidian",
      "Design Intent Tree (DIT) con métricas de éxito por sala"
    ],
    color: "cyan"
  },
  {
    date: "17 de Marzo, 2026",
    stardate: "2026.076",
    icon: Cpu,
    title: "Consultoría de Diseño — Sesión de Nivel",
    summary: "Definición de mecánicas del Acto I y estructura de las tres primeras salas",
    systems: [
      "Mecánica principal: plataformas + puzzles de entorno (sin combate)",
      "Sala 1: Criogenia (interruptores, ascensor, puertas)",
      "Sala 2: Transporte (empujar cajas sobre cintas transportadoras)",
      "Sala 3: Patrulla DDC (timing + desactivación de peligros)",
      "Decisión: terminal hackeahable como tutorial de interacción",
      "Sistema de riel para cinemática de apertura definido"
    ],
    color: "orange"
  },
  {
    date: "5 de Diciembre, 2025",
    stardate: "2025.339",
    icon: Settings,
    title: "Refactor Core V2 — Determinismo y Replay",
    summary: "Sistema de replay determinista implementado y probado",
    systems: [
      "Core V2 con inputs deterministas operacional",
      "OdysseyScript (OYS): DSL para tests y replays",
      "Suite de pruebas de determinismo automatizada",
      "Protocolo de desarrollo para agentes y humanos establecido",
      "Singleton GameConfig consolidado",
    ],
    color: "cyan"
  },
  {
    date: "3 de Diciembre, 2025",
    stardate: "2025.337",
    icon: Cog,
    title: "Prototipo de Movimiento 3ra Persona",
    summary: "Controlador de Elías funcional con cámara estabilizada",
    systems: [
      "Movimiento momentum-based con curvas de aceleración",
      "Deriva de cámara corregida definitivamente",
      "Doble salto y agarre de bordes implementados",
      "Sistema de autodeploy configurado — GitHub Pages operacional",
      "Exportación HTML5 lista para testing"
    ],
    color: "orange"
  },
  {
    date: "13 de Junio, 2026",
    stardate: "2026.164",
    icon: Download,
    title: "FD-173: Smart Native Download Detection",
    summary: "Detección automática de plataforma en las descargas del website — recomienda el build nativo según el SO del visitante",
    systems: [
      "Hook usePlatformDetect que detecta Windows/Linux/Android/iOS/macOS",
      "Tarjetas de descarga con glow persistente para build recomendado",
      "Integración con el deploy de GitHub Pages y builds nocturnos",
      "Android APK como opción primaria al detectar dispositivo móvil"
    ],
    color: "orange"
  },
  {
    date: "1 de Junio, 2026",
    stardate: "2026.152",
    icon: Wrench,
    title: "FD-050: Height Alignment + Scaffold Liminal",
    summary: "Plataformas de scaffold con height alignment exacto y espacios liminares estilo backrooms",
    systems: [
      "Height alignment entre módulos conectados sin forzar HEIGHT_STEP genérico",
      "Espacios liminares en transiciones (backrooms entre casco duro y terrazas)",
      "Preparado para streaming desde thread"
    ],
    color: "cyan"
  },
  {
    date: "29 de Mayo, 2026",
    stardate: "2026.149",
    icon: Gamepad2,
    title: "Sala 1 — Módulo Criogenia Blockout",
    summary: "Especificación completa del Módulo Criogenia: 3 niveles verticales, puzzle principal, lore",
    systems: [
      "3 niveles verticales: planta baja, entrepiso, pasarela superior",
      "Puzzle principal: consola → gap → push box → lever → puerta A-7",
      "Checkpoints después del gap y después de la palanca",
      "Cápsula de Elías en fila de criopods con RadialScatter",
      "Fugas de gas (LeakEmitter) que se detienen con PedestalButton",
      "Airlock V2 con TransitionFX integrado"
    ],
    color: "orange"
  },
  {
    date: "27 de Mayo, 2026",
    stardate: "2026.147",
    icon: Cog,
    title: "PRC-07: Protocolo de Reactivación Post-Criogénica",
    summary: "Secuencia guía para los primeros ~6-8 min del Vertical Slice",
    systems: [
      "Tutorial integrado: confirmar UI, moverse, leer entorno, interactuar",
      "Multi-tool se encuentra después de salir del módulo Criogenia",
      "Sin armas — solo herramientas de mantenimiento",
      "Odisea IA como narradora-hostil desde el primer contacto"
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
            Registro de mantenimiento y actualizaciones de sistemas. En desarrollo activo.
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