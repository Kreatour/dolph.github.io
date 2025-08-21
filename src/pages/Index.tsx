
import HeroSection from "@/components/HeroSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import StickersSection from "@/components/StickersSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TokenomicsSection />
      <RoadmapSection />
      <StickersSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
