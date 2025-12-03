import { useState } from "react";
import { X } from "lucide-react";

const images = [
  {
    src: "https://icarito.github.io/Odisea_Design_Docs/assets/odisea_master_portada.png",
    title: "Main Concept",
    description: "The Odisea colony ship in all its industrial glory",
  },
  {
    src: "https://icarito.github.io/Odisea_Design_Docs/assets/nave_odisea_exterior.jpeg",
    title: "Ship Exterior",
    description: "8 kilometers of humanity's last hope",
  },
  {
    src: "https://icarito.github.io/Odisea_Design_Docs/assets/nave_odisea_seccion.jpeg",
    title: "Cross Section",
    description: "Rotating modules, cryogenic chambers, and the central core",
  },
  {
    src: "https://icarito.github.io/Odisea_Design_Docs/assets/nave_odisea_esquema.png",
    title: "Technical Blueprint",
    description: "The ship's structure and gravity zones",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-void" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs uppercase tracking-[0.3em] text-primary border border-primary/30 font-rajdhani">
            Concept Art
          </span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
            <span className="neon-text-cyan">Visual</span>{" "}
            <span className="text-foreground">Development</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Low-poly aesthetic meets neon lighting. Tron-inspired geometry meets industrial sci-fi.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-video overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-orbitron text-sm font-bold text-primary">{image.title}</h3>
                <p className="text-xs text-muted-foreground font-rajdhani">{image.description}</p>
              </div>
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/0 group-hover:border-primary transition-colors duration-300" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/0 group-hover:border-primary transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/0 group-hover:border-primary transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/0 group-hover:border-primary transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative border-2 border-primary/50 rounded-lg overflow-hidden neon-border-cyan">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-orbitron text-xl font-bold text-primary">{selectedImage.title}</h3>
              <p className="text-muted-foreground font-rajdhani">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
