import { useMemo } from "react";
import {
  Monitor, Terminal, Download, ExternalLink,
  Shield, HardDrive, Cpu, AlertTriangle,
  ChevronRight, Github, Package, Smartphone, Sparkles,
  Apple, Tablet
} from "lucide-react";
import { Button } from "./ui/button";
import { usePlatformDetect } from "@/hooks/usePlatformDetect";

interface PlatformBuild {
  id: string;
  platform: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  variant: "cyan" | "orange";
  version: string;
  size: string;
  telemetryNote: string;
  requirements: { icon: React.ComponentType<{ className?: string }>; text: string }[];
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel?: string;
  secondaryUrl?: string;
  sha256?: string;
}

const builds: PlatformBuild[] = [
  {
    id: "linux",
    platform: "Linux",
    subtitle: "ZIP 64-bit (x86_64 / ARM64)",
    icon: Terminal,
    variant: "orange",
    version: "v0.4.0-nightly.533",
    size: "~134 MB",
    telemetryNote:
      "Incluye telemetría anónima. Puedes desactivarla en el menú de Opciones del juego.",
    requirements: [
      { icon: HardDrive, text: "Ubuntu 22.04+ / Debian 12+" },
      { icon: Cpu, text: "x86_64 o ARM64" },
      { icon: Shield, text: "ZIP — extraer y ejecutar" },
    ],
    primaryLabel: "Descargar ZIP",
    primaryUrl:
      "https://github.com/icarito/Odisea/releases/download/nightly/Odisea-Tech-Demo-Linux-0.4.0-nightly.533+e91cea5.zip",
    secondaryLabel: "Ver Changelog",
    secondaryUrl: "https://github.com/icarito/Odisea/releases",
    sha256: "Disponible en la página de releases",
  },
  {
    id: "windows",
    platform: "Windows",
    subtitle: "ZIP portable (64-bit)",
    icon: Monitor,
    variant: "orange",
    version: "v0.4.0-nightly.533",
    size: "~131 MB",
    telemetryNote:
      "Incluye telemetría anónima. Puedes desactivarla en el menú de Opciones del juego.",
    requirements: [
      { icon: HardDrive, text: "Windows 10+ (64-bit)" },
      { icon: Cpu, text: "DirectX 11" },
      { icon: Shield, text: "ZIP — extraer y ejecutar" },
    ],
    primaryLabel: "Descargar ZIP",
    primaryUrl:
      "https://github.com/icarito/Odisea/releases/download/nightly/Odisea-Tech-Demo-Windows-0.4.0-nightly.533+e91cea5.zip",
    secondaryLabel: "Ver Changelog",
    secondaryUrl: "https://github.com/icarito/Odisea/releases",
    sha256: "Disponible en la página de releases",
  },
  {
    id: "android",
    platform: "Android",
    subtitle: "Build nativa .apk (ARM64)",
    icon: Smartphone,
    variant: "orange",
    version: "v0.4.0-nightly.533",
    size: "~141 MB",
    telemetryNote:
      "Incluye telemetría anónima. Puedes desactivarla en el menú de Opciones del juego.",
    requirements: [
      { icon: HardDrive, text: "Android 10+ / ARM64" },
      { icon: Shield, text: "Instalación manual (APK)" },
    ],
    primaryLabel: "Descargar .apk",
    primaryUrl:
      "https://github.com/icarito/Odisea/releases/download/nightly/Odisea-Tech-Demo-Android-0.4.0-nightly.533+e91cea5.apk",
    secondaryLabel: "Ver Changelog",
    secondaryUrl: "https://github.com/icarito/Odisea/releases",
  },
  {
    id: "ios",
    platform: "iOS",
    subtitle: "iPhone / iPad — TestFlight",
    icon: Tablet,
    variant: "cyan",
    version: "v0.4.0-nightly",
    size: "vía TestFlight",
    telemetryNote:
      "Incluye telemetría anónima. Puedes desactivarla en el menú de Opciones del juego.",
    requirements: [
      { icon: Tablet, text: "iPhone y iPad compatibles" },
      { icon: Apple, text: "Requiere Apple ID" },
      { icon: Shield, text: "Las builds se actualizan solas vía TestFlight" },
    ],
    primaryLabel: "Unirse a la Beta",
    primaryUrl: "https://testflight.apple.com/join/DegSFeFU",
    secondaryLabel: "Qué es TestFlight",
    secondaryUrl: "https://developer.apple.com/testflight/",
  },
  {
    id: "macos",
    platform: "macOS",
    subtitle: "Mac — TestFlight",
    icon: Apple,
    variant: "cyan",
    version: "v0.4.0-nightly",
    size: "vía TestFlight",
    telemetryNote:
      "Incluye telemetría anónima. Puedes desactivarla en el menú de Opciones del juego.",
    requirements: [
      { icon: Monitor, text: "TestFlight para Mac (macOS 12+)" },
      { icon: Apple, text: "Requiere Apple ID" },
      { icon: Shield, text: "Las builds se actualizan solas vía TestFlight" },
    ],
    primaryLabel: "Unirse a la Beta",
    primaryUrl: "https://testflight.apple.com/join/DegSFeFU",
    secondaryLabel: "Qué es TestFlight",
    secondaryUrl: "https://developer.apple.com/testflight/",
  },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const BuildCard = ({ build }: { build: PlatformBuild }) => (
  <div className="group relative flex flex-col w-full max-w-sm">
    <div className="relative flex flex-col flex-1 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-xl overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
      <div className={`h-1.5 ${build.variant === "cyan" ? "bg-gradient-to-r from-primary to-neon-cyan" : "bg-gradient-to-r from-accent to-neon-orange"}`} />
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-4 mb-5">
          <div className={`w-14 h-14 flex items-center justify-center rounded-xl border-2 ${
            build.variant === "cyan"
              ? "bg-primary/10 border-primary/30 group-hover:border-primary"
              : "bg-accent/10 border-accent/30 group-hover:border-accent"
          }`}>
            <build.icon className={`w-7 h-7 ${build.variant === "cyan" ? "text-primary" : "text-accent"}`} />
          </div>
          <div>
            <h3 className="font-sixtyfour text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {build.platform}
            </h3>
            <p className="text-sm text-muted-foreground font-rajdhani">{build.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-rajdhani font-semibold rounded-full border ${
            build.variant === "cyan"
              ? "text-primary border-primary/40 bg-primary/5"
              : "text-accent border-accent/40 bg-accent/5"
          }`}>
            <Package className="w-3 h-3" />
            {build.version}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-rajdhani font-semibold text-muted-foreground border border-border rounded-full bg-muted/30">
            <HardDrive className="w-3 h-3" />
            {build.size}
          </span>
        </div>

        <ul className="space-y-2.5 mb-6 flex-1">
          {build.requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground font-rajdhani">
              <req.icon className="w-4 h-4 mt-0.5 text-muted-foreground/60 shrink-0" />
              <span>{req.text}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-2.5 mt-auto">
          <Button variant={build.variant === "cyan" ? "neonCyan" : "neonOrange"} size="lg" className="w-full gap-2" asChild>
            <a href={build.primaryUrl} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4" />
              {build.primaryLabel}
            </a>
          </Button>
          <p className="flex items-start gap-1.5 px-1 text-[11px] leading-snug text-muted-foreground/80 font-rajdhani">
            <Shield className="w-3 h-3 mt-0.5 shrink-0 text-accent/80" />
            <span>{build.telemetryNote}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const DownloadSection = () => {
  const platform = usePlatformDetect();

  const featured = useMemo(() => builds.find((b) => b.id === platform) ?? null, [platform]);
  const rest = useMemo(() => builds.filter((b) => b.id !== platform), [platform]);

  return (
    <section id="download" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 gradient-void" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs uppercase tracking-[0.3em] text-primary border border-primary/30 font-rajdhani animate-pulse">
            <Download className="w-3 h-3 inline mr-1" />
            Descargas
          </span>
          <h2 className="font-sixtyfour text-2xl md:text-4xl font-bold mb-6">
            <span className="text-foreground">Llévate</span>{" "}
            <span className="neon-text-orange">Odisea</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Builds nativas actualizadas con cada nightly. ¿Prefieres el navegador?
            La versión web vive más abajo, en{" "}
            <button
              onClick={() => scrollToSection("play")}
              className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary cursor-pointer"
            >
              Zona de Desarrollo
            </button>
            , con sus advertencias.
          </p>
        </div>

        {featured ? (
          <>
            {/* Panel destacado: plataforma detectada */}
            <div className="max-w-3xl mx-auto relative animate-slide-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-neon-orange to-accent rounded-xl opacity-40 blur-sm" />

              <div className="relative bg-card border-2 border-accent/60 rounded-xl overflow-hidden shadow-[0_0_40px_hsl(var(--accent)/0.25)]">
                {/* Header industrial */}
                <div className="flex items-center gap-3 px-6 py-4 bg-accent/15 border-b border-accent/30">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="font-sixtyfour text-sm font-bold text-accent uppercase tracking-wider">
                    Recomendado para tu equipo
                  </span>
                  <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-rajdhani font-semibold text-accent border border-accent/40 bg-accent/10 rounded-full">
                    <Package className="w-3 h-3" />
                    {featured.version}
                  </span>
                </div>

                {/* Cuerpo */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl border-2 border-accent/40 bg-accent/10 shrink-0">
                      <featured.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-sixtyfour text-2xl font-bold text-foreground">
                        {featured.platform}
                      </h3>
                      <p className="text-sm text-muted-foreground font-rajdhani">{featured.subtitle}</p>
                      <span className="inline-flex items-center gap-1.5 mt-2 px-3 py-0.5 text-xs font-rajdhani font-semibold text-muted-foreground border border-border rounded-full bg-muted/30">
                        <HardDrive className="w-3 h-3" />
                        {featured.size}
                      </span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3 mb-7">
                    {featured.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 bg-muted/20 border border-border/70 rounded-lg text-sm text-muted-foreground font-rajdhani">
                        <req.icon className="w-4 h-4 mt-0.5 text-accent/70 shrink-0" />
                        <span>{req.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="neonOrange" size="xl" className="flex-1 gap-2" asChild>
                      <a href={featured.primaryUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="w-5 h-5" />
                        {featured.primaryLabel}
                      </a>
                    </Button>
                    {featured.secondaryUrl && (
                      <Button variant="ghost" size="xl" className="gap-1.5 text-muted-foreground hover:text-foreground" asChild>
                        <a href={featured.secondaryUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          {featured.secondaryLabel}
                        </a>
                      </Button>
                    )}
                  </div>

                  <p className="flex items-start gap-1.5 mt-4 text-xs leading-snug text-muted-foreground/80 font-rajdhani">
                    <Shield className="w-3.5 h-3.5 mt-0.5 shrink-0 text-accent/80" />
                    <span>{featured.telemetryNote}</span>
                  </p>
                </div>

              </div>
            </div>

            {/* También disponible para */}
            <div className="mt-10 max-w-3xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: "350ms", animationFillMode: "forwards" }}>
              <div className="relative p-5 bg-card/20 backdrop-blur-sm border border-border/50 rounded-xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-sm text-muted-foreground font-rajdhani font-semibold tracking-wide">
                    También disponible para:
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {rest.map((build) => (
                      <a
                        key={build.id}
                        href={build.primaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-rajdhani text-muted-foreground hover:text-foreground border border-border hover:border-accent/50 rounded-lg bg-card/30 hover:bg-card/50 transition-all duration-300"
                      >
                        <build.icon className="w-4 h-4" />
                        {build.platform}
                        <span className="text-xs text-muted-foreground/60">
                          {build.id === "ios" || build.id === "macos" ? "TestFlight" : build.id === "android" ? "APK" : "ZIP"}
                        </span>
                      </a>
                    ))}
                    <a
                      href="https://github.com/icarito/Odisea/releases/tag/nightly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-rajdhani text-muted-foreground hover:text-foreground border border-border hover:border-primary/50 rounded-lg bg-card/30 hover:bg-card/50 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Todas las builds
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Plataforma no detectada: las tres nativas como tarjetas */
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {builds
              .filter((b) => ["linux", "windows", "android"].includes(b.id))
              .map((build) => (
                <BuildCard key={build.id} build={build} />
              ))}

            <div className="w-full mt-4">
              <div className="relative p-5 bg-card/20 backdrop-blur-sm border border-border/50 rounded-xl max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-sm text-muted-foreground font-rajdhani font-semibold tracking-wide">
                    También disponible para:
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {builds
                      .filter((b) => ["ios", "macos"].includes(b.id))
                      .map((build) => (
                        <a
                          key={build.id}
                          href={build.primaryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-rajdhani text-muted-foreground hover:text-foreground border border-border hover:border-primary/50 rounded-lg bg-card/30 hover:bg-card/50 transition-all duration-300"
                        >
                          <build.icon className="w-4 h-4" />
                          {build.platform}
                          <span className="text-xs text-muted-foreground/60">TestFlight</span>
                        </a>
                      ))}
                    <a
                      href="https://github.com/icarito/Odisea/releases/tag/nightly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-rajdhani text-muted-foreground hover:text-foreground border border-border hover:border-primary/50 rounded-lg bg-card/30 hover:bg-card/50 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Todas las builds
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Alpha disclaimer */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-destructive/70 shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground font-rajdhani leading-relaxed">
              <strong className="text-destructive/80">Builds Alpha —</strong> Estas son versiones
              en desarrollo activo. Pueden contener bugs, assets provisionales y mecánicas
              incompletas. Los datos de telemetría recolectados son anónimos y solo incluyen
              métricas de rendimiento (FPS, memoria, escena).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
