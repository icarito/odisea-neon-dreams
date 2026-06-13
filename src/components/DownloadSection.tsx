import { useState, useEffect, useMemo } from "react";
import { 
  Globe, Monitor, Terminal, Download, ExternalLink, 
  Shield, HardDrive, Wifi, Cpu, CheckCircle, AlertTriangle,
  ChevronRight, Github, Package, Smartphone, Sparkles
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
  requirements: { icon: React.ComponentType<{ className?: string }>; text: string }[];
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel?: string;
  secondaryUrl?: string;
  sha256?: string;
}

const builds: PlatformBuild[] = [
  {
    id: "webgl",
    platform: "WebGL",
    subtitle: "Jugá en el navegador",
    icon: Globe,
    variant: "cyan",
    version: "v0.3.0-alpha",
    size: "~45 MB",
    requirements: [
      { icon: Wifi, text: "Requiere conexión a internet" },
      { icon: Globe, text: "Chrome / Firefox recomendado" },
      { icon: Cpu, text: "WebGL 2.0 (GPU con OpenGL ES 3.0+)" },
    ],
    primaryLabel: "Jugar Ahora",
    primaryUrl: "https://odisea.netlify.app/",
    secondaryLabel: "Código Fuente",
    secondaryUrl: "https://github.com/icarito/Odisea",
  },
  {
    id: "linux",
    platform: "Linux",
    subtitle: "AppImage 64-bit",
    icon: Terminal,
    variant: "orange",
    version: "v0.3.0-alpha",
    size: "~120 MB",
    requirements: [
      { icon: HardDrive, text: "Ubuntu 22.04+ / Debian 12+" },
      { icon: Cpu, text: "x86_64, OpenGL ES 3.0+" },
      { icon: Shield, text: "AppImage — sin instalación" },
    ],
    primaryLabel: "Descargar AppImage",
    primaryUrl: "https://github.com/icarito/Odisea/releases",
    secondaryLabel: "Ver Changelog",
    secondaryUrl: "https://github.com/icarito/Odisea/releases",
    sha256: "Disponible en la página de releases",
  },
  {
    id: "windows",
    platform: "Windows",
    subtitle: "Portable .exe",
    icon: Monitor,
    variant: "orange",
    version: "v0.3.0-alpha",
    size: "~130 MB",
    requirements: [
      { icon: HardDrive, text: "Windows 10+ (64-bit)" },
      { icon: Cpu, text: "OpenGL ES 3.0+ / DirectX 11" },
      { icon: Shield, text: "Portable — sin instalador" },
    ],
    primaryLabel: "Descargar .exe",
    primaryUrl: "https://github.com/icarito/Odisea/releases",
    secondaryLabel: "Ver Changelog",
    secondaryUrl: "https://github.com/icarito/Odisea/releases",
    sha256: "Disponible en la página de releases",
  },
  {
    id: "android",
    platform: "Android",
    subtitle: "Build nativa .apk",
    icon: Smartphone,
    variant: "orange",
    version: "v0.3.0-alpha",
    size: "~80 MB",
    requirements: [
      { icon: HardDrive, text: "Android 10+ / ARM64" },
      { icon: Cpu, text: "GLES 2.0 / OpenGL ES 3.0+" },
      { icon: Shield, text: "Instalación manual (APK)" },
    ],
    primaryLabel: "Descargar .apk",
    primaryUrl: "https://github.com/icarito/Odisea/releases",
    secondaryLabel: "Ver Changelog",
    secondaryUrl: "https://github.com/icarito/Odisea/releases",
  },
];

const DownloadSection = () => {
  const platform = usePlatformDetect();

  const { displayedBuilds, recommendedBuildId, isRestrictedPlatform } = useMemo(() => {
    let recommendedId: string | null = null;
    let restricted = false;

    if (platform === 'windows') recommendedId = 'windows';
    else if (platform === 'linux') recommendedId = 'linux';
    else if (platform === 'android') recommendedId = 'android';
    else if (platform === 'ios' || platform === 'macos') restricted = true;

    const filtered = restricted 
      ? builds.filter(b => b.id === 'webgl')
      : builds;

    return { 
      displayedBuilds: filtered, 
      recommendedBuildId: recommendedId,
      isRestrictedPlatform: restricted
    };
  }, [platform]);

  return (
    <section id="download" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 gradient-void" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs uppercase tracking-[0.3em] text-primary border border-primary/30 font-rajdhani animate-pulse">
            <Download className="w-3 h-3 inline mr-1" />
            Descargas
          </span>
          <h2 className="font-sixtyfour text-2xl md:text-4xl font-bold mb-6">
            <span className="text-foreground">Llevate</span>{" "}
            <span className="neon-text-orange">Odisea</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Descargá la build más reciente para tu plataforma. Todas las versiones 
            incluyen telemetría anónima que ayuda al desarrollo del juego.
          </p>
          
          {isRestrictedPlatform && (
            <div className="mt-8 flex items-center justify-center gap-2 animate-fade-in">
              <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-accent" />
                <span className="text-sm font-rajdhani text-accent font-bold tracking-wider uppercase">
                  Próximamente build nativa
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Platform cards grid */}
        <div className={`grid gap-6 max-w-5xl mx-auto ${
          displayedBuilds.length === 1 ? "max-w-md" : "md:grid-cols-3"
        }`}>
          {displayedBuilds.map((build, index) => (
            <div
              key={build.id}
              className={`group relative flex flex-col animate-slide-up opacity-0 ${
                recommendedBuildId && recommendedBuildId !== build.id ? "opacity-50 grayscale-[0.3]" : ""
              }`}
              style={{ 
                animationDelay: `${200 + index * 150}ms`, 
                animationFillMode: "forwards" 
              }}
            >
              {/* Outer glow (persistent if recommended, else on hover) */}
              <div 
                className={`absolute -inset-1 rounded-xl blur-md transition-all duration-500 ${
                  build.id === recommendedBuildId ? "opacity-60" : "opacity-0 group-hover:opacity-40"
                } ${
                  build.variant === "cyan" 
                    ? "bg-gradient-to-r from-primary via-neon-cyan to-primary" 
                    : "bg-gradient-to-r from-accent via-neon-orange to-accent"
                }`} 
              />

              <div className={`relative flex flex-col flex-1 bg-card/50 backdrop-blur-sm border-2 rounded-xl overflow-hidden transition-all duration-500 ${
                build.id === recommendedBuildId 
                  ? (build.variant === "cyan" ? "border-primary/70 shadow-[0_0_30px_hsl(var(--primary)/0.4)]" : "border-accent/70 shadow-[0_0_30px_hsl(var(--accent)/0.4)]")
                  : "border-border hover:border-primary/50 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)]"
              }`}>
                {/* Top colored bar */}
                <div 
                  className={`h-1.5 ${
                    build.variant === "cyan" 
                      ? "bg-gradient-to-r from-primary to-neon-cyan" 
                      : "bg-gradient-to-r from-accent to-neon-orange"
                  }`} 
                />

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6">
                  {build.id === recommendedBuildId && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-[9px] sm:text-[10px] text-primary font-rajdhani font-bold animate-pulse z-20">
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 h-3" />
                      ✨ Recomendado para tu equipo
                    </div>
                  )}

                  {/* Platform icon + name */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 flex items-center justify-center rounded-xl border-2 transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] ${
                      build.variant === "cyan"
                        ? "bg-primary/10 border-primary/30 group-hover:border-primary"
                        : "bg-accent/10 border-accent/30 group-hover:border-accent"
                    }`}>
                      <build.icon className={`w-7 h-7 ${
                        build.variant === "cyan" ? "text-primary" : "text-accent"
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-sixtyfour text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {build.platform}
                      </h3>
                      <p className="text-sm text-muted-foreground font-rajdhani">
                        {build.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Version + size badges */}
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

                  {/* Requirements */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {build.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground font-rajdhani">
                        <req.icon className="w-4 h-4 mt-0.5 text-muted-foreground/60 shrink-0" />
                        <span>{req.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* SHA256 (if available) */}
                  {build.sha256 && (
                    <div className="mb-4 p-3 bg-muted/30 rounded-lg border border-border">
                      <div className="flex items-center gap-2 text-xs font-rajdhani">
                        <Shield className="w-3 h-3 text-muted-foreground" />
                        <span className="text-muted-foreground">SHA256: </span>
                        <code className="text-xs text-foreground/70 font-mono break-all">
                          {build.sha256}
                        </code>
                      </div>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="space-y-2.5 mt-auto">
                    <Button 
                      variant={build.variant === "cyan" ? "neonCyan" : "neonOrange"} 
                      size="lg" 
                      className="w-full gap-2"
                      asChild
                    >
                      <a 
                        href={build.primaryUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4" />
                        {build.primaryLabel}
                      </a>
                    </Button>
                    
                    {build.secondaryLabel && build.secondaryUrl && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full gap-1.5 text-muted-foreground hover:text-foreground"
                        asChild
                      >
                        <a 
                          href={build.secondaryUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {build.secondaryLabel}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Secondary row: also available on */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="relative p-5 bg-card/20 backdrop-blur-sm border border-border/50 rounded-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm text-muted-foreground font-rajdhani font-semibold tracking-wide">
                También disponible para:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {displayedBuilds.length > 1 && !displayedBuilds.some(b => b.id === 'android') && (
                  <a
                    href="https://github.com/icarito/Odisea/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-rajdhani text-muted-foreground hover:text-foreground border border-border hover:border-accent/50 rounded-lg bg-card/30 hover:bg-card/50 transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M17.523 13.906c.512 1.38.194 2.98-.957 4.13-1.437 1.438-3.779 1.563-5.508.43l-.3-.2-.323.164c-1.705.874-4.05.635-5.477-.793-1.438-1.437-1.669-3.69-.798-5.37l.155-.305-.208-.3c-1.168-1.699-.857-4.118.688-5.656 1.156-1.155 2.744-1.667 4.284-1.408l.42.07.357-.237c1.226-.807 2.87-.76 4.053.17l.244.202.313-.03c1.623-.16 3.18.42 4.163 1.4 1.18 1.18 1.555 2.98.918 4.517l-.118.288.17.26c.765 1.174.801 2.688.136 3.905z"/>
                    </svg>
                    Android APK
                  </a>
                )}
                <a
                  href="https://github.com/icarito/Odisea/releases"
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
