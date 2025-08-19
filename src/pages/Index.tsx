
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
