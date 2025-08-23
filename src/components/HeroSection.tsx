
import { Waves, ExternalLink, MessageCircle, Twitter } from 'lucide-react';
import dolphSticker from '@/assets/stickers/DolphinDolph_5_👋.gif';

const HeroSection = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/dolphyonton', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://x.com/Dolphonton?t=Y2pDM-JqhhkFiB4eInC_Dg&s=09', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center ocean-waves overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-20 dolphin-float hover:scale-125 transition-transform cursor-pointer">🐬</div>
        <div className="absolute top-40 right-16 text-4xl opacity-30 meme-bounce hover:rotate-12 transition-transform">🌊</div>
        <div className="absolute bottom-32 left-20 text-5xl opacity-25 dolphin-float hover:scale-125 transition-transform cursor-pointer">🐬</div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-35 meme-bounce hover:rotate-12 transition-transform">💎</div>
        
        {/* Floating Bubbles */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-aqua-bright/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-foam-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-aqua-light/30 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">Swim with the Pod.</span>
          </h1>
          <h1 className="text-6xl md:text-8xl font-black">
            <span className="text-gradient-aqua hover:scale-105 transition-transform inline-block">Leap with $DOLPH.</span>
          </h1>
        </div>

        {/* Dolphin Sticker Hero */}
        <div className="mb-8 dolphin-float hover:scale-125 transition-transform cursor-pointer flex justify-center">
          <img src={dolphSticker} alt="Dolphin Dolph waving" className="w-32 h-32 md:w-48 md:h-48" />
        </div>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-aqua-light max-w-2xl mx-auto mb-8 leading-relaxed">
          The smartest community-owned memecoin on TON — fast, playful, unstoppable.
          <br />
          <span className="text-foam-white font-semibold">Built by dolphins, for dolphins! 🌊</span>
        </p>

        {/* Buy Button */}
        <div className="mb-12">
          <button className="btn-hero-primary group hover:shadow-ocean text-lg px-8 py-4">
            <span className="flex items-center gap-2">
              <Waves className="w-5 h-5 group-hover:animate-pulse" />
              Buy $DOLPH
              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </div>

        {/* Join Pod Section */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-black text-gradient-aqua mb-8 flex items-center justify-center gap-3">
            <span className="text-4xl animate-bounce">🐬</span>
            Join the Pod
            <span className="text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🐬</span>
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <button 
              onClick={handleTelegramClick} 
              className="group relative bg-gradient-to-r from-aqua-bright to-ocean-light text-ocean-deep font-bold px-8 py-4 rounded-2xl hover:scale-110 hover:rotate-2 transition-all duration-300 hover:shadow-2xl hover:shadow-aqua-bright/30 w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aqua-bright/20 to-ocean-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-lg">Join Telegram</span>
                <span className="text-2xl group-hover:animate-pulse">🐠</span>
              </span>
            </button>
            
            <button 
              onClick={handleTwitterClick} 
              className="group relative bg-gradient-to-r from-ocean-medium to-aqua-light text-foam-white font-bold px-8 py-4 rounded-2xl hover:scale-110 hover:-rotate-2 transition-all duration-300 hover:shadow-2xl hover:shadow-ocean-medium/30 w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ocean-medium/20 to-aqua-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-3">
                <Twitter className="w-6 h-6 group-hover:animate-spin" />
                <span className="text-lg">Follow X</span>
                <span className="text-2xl group-hover:animate-pulse">🌊</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
