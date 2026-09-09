import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechSection from "@/components/TechSection";
import DownloadSection from "@/components/DownloadSection";
import PlaySection from "@/components/PlaySection";
import TelemetryBanner from "@/components/TelemetryBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TechSection />
        <DownloadSection />
        <PlaySection />
      </main>
      <Footer />
      <TelemetryBanner />
    </div>
  );
};

export default Index;
