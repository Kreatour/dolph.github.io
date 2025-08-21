
import { Download, ExternalLink, Users } from 'lucide-react';
import { useState } from 'react';

const StickersSection = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    
    // Simulate download delay
    setTimeout(() => {
      setDownloading(false);
      console.log('Downloaded: DOLPH Sticker Pack');
    }, 1500);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">
              Express Your Pod Pride
            </span> 🎨
          </h2>
          <p className="text-xl text-aqua-light max-w-2xl mx-auto">
            Premium $DOLPH stickers for Telegram, Discord & WhatsApp
          </p>
        </div>

        {/* Featured Sticker Pack */}
        <div className="max-w-4xl mx-auto">
          <div className="card-ocean hover:scale-[1.02] transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Sticker Preview */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-ocean-medium/20 to-aqua-bright/10 rounded-3xl p-8 mb-6">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {["🐬", "💎", "🚀", "🌊", "💰", "🎯", "👑", "🔥", "🏛️", "⚡", "🎉", "🌙"].map((sticker, index) => (
                      <div
                        key={index}
                        className="text-4xl hover:scale-125 hover:rotate-12 transition-transform cursor-pointer animate-bounce bg-ocean-medium/20 rounded-2xl p-4 hover:bg-aqua-bright/20"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {sticker}
                      </div>
                    ))}
                  </div>
                  
                  {/* Sample Sticker Messages */}
                  <div className="space-y-3 text-left">
                    <div className="bg-aqua-bright/10 rounded-2xl p-3 max-w-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🐬</span>
                        <span className="text-aqua-light text-sm">Swim with the pod!</span>
                      </div>
                    </div>
                    <div className="bg-ocean-medium/20 rounded-2xl p-3 max-w-xs ml-auto">
                      <div className="flex items-center gap-2 justify-end">
                        <span className="text-aqua-light text-sm">Diamond fins only!</span>
                        <span className="text-2xl">💎</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pack Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gradient-aqua mb-2">
                    Official $DOLPH Pack
                  </h3>
                  <p className="text-aqua-light text-lg mb-4">
                    Express your dolphin energy with 50+ premium animated stickers featuring $DOLPH, 
                    diamond fins, ocean vibes, and community memes.
                  </p>
                </div>

                {/* Pack Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                    <span className="text-xl">📱</span>
                    <span className="text-aqua-light">50+ Stickers</span>
                  </div>
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                    <span className="text-xl">✨</span>
                    <span className="text-aqua-light">HD Quality</span>
                  </div>
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                    <span className="text-xl">🎭</span>
                    <span className="text-aqua-light">Animated</span>
                  </div>
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                    <span className="text-xl">🌊</span>
                    <span className="text-aqua-light">CTO Themed</span>
                  </div>
                </div>

                {/* Download Stats */}
                <div className="flex items-center gap-6 text-aqua-light">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">12.5K downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">⭐</span>
                    <span className="text-sm">4.9/5 rating</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleDownload}
                    disabled={downloading}
                    className="btn-hero-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {downloading ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full"></div>
                        Preparing Download...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <Download className="w-5 h-5 group-hover:animate-bounce" />
                        Download Sticker Pack
                        <span className="text-sm opacity-75">(Free)</span>
                      </span>
                    )}
                  </button>
                  
                  <button className="btn-hero-secondary w-full py-3">
                    <span className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Installation Guide
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Community Call-to-Action */}
          <div className="card-meme max-w-2xl mx-auto mt-12 text-center hover:scale-105 transition-transform">
            <div className="text-4xl mb-4 animate-bounce">🎨</div>
            <h3 className="text-2xl font-bold text-gradient-aqua mb-3">
              Create & Earn
            </h3>
            <p className="text-aqua-light mb-6">
              Submit your own $DOLPH sticker designs! Community favorites get featured 
              and creators earn $DOLPH rewards.
            </p>
            <button className="btn-hero-primary">
              Submit Your Designs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickersSection;
