import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import DevlogSection from "@/components/DevlogSection";
import TechSection from "@/components/TechSection";
import PlaySection from "@/components/PlaySection";
import HowItsMadeSection from "@/components/HowItsMadeSection";
import TelemetryBanner from "@/components/TelemetryBanner";
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
        <HowItsMadeSection />
        <TechSection />
        <PlaySection />
      </main>
      <Footer />
      <TelemetryBanner />
    </div>
  );
};

export default Index;
