import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import DevlogSection from "@/components/DevlogSection";
import TechSection from "@/components/TechSection";
import PlaySection from "@/components/PlaySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StorySection />
        <GallerySection />
        <DevlogSection />
        <TechSection />
        <PlaySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
