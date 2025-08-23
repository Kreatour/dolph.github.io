
import HeroSection from "@/components/HeroSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import StickersSection from "@/components/StickersSection";
import FriendsSection from "@/components/FriendsSection";
import PodWarsSection from "@/components/PodWarsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TokenomicsSection />
      <StickersSection />
      <FriendsSection />
      <PodWarsSection />
      <Footer />
    </div>
  );
};

export default Index;
