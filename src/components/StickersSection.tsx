
import { Download, ExternalLink, Users } from 'lucide-react';
import { useState } from 'react';

const StickersSection = () => {
  const [downloading, setDownloading] = useState(false);

  const handleTelegramRedirect = () => {
    // This will redirect to the actual Telegram sticker set
    window.open('https://t.me/addstickers/YOUR_STICKER_SET_NAME', '_blank');
  };

  // Actual sticker imports
  const stickerWall = [
    { src: require('@/assets/stickers/DolphinDolph_1_😂.gif'), alt: "Laughing Dolphin" },
    { src: require('@/assets/stickers/DolphinDolph_2_😘.gif'), alt: "Kiss Dolphin" },
    { src: require('@/assets/stickers/DolphinDolph_3_👍.gif'), alt: "Thumbs Up Dolphin" },
    { src: require('@/assets/stickers/DolphinDolph_4_😨.gif'), alt: "Shocked Dolphin" },
    { src: require('@/assets/stickers/DolphinDolph_6_😌.gif'), alt: "Content Dolphin" },
    { src: require('@/assets/stickers/DolphinDolph_8_🤔.gif'), alt: "Thinking Dolphin" }
  ];

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
            Premium $DOLPH stickers for Telegram
          </p>
        </div>

        {/* Featured Sticker Pack */}
        <div className="max-w-4xl mx-auto">
          <div className="card-ocean hover:scale-[1.02] transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Sticker Wall */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-ocean-medium/20 to-aqua-bright/10 rounded-3xl p-8 mb-6">
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    {stickerWall.map((sticker, index) => (
                      <div
                        key={index}
                        className="hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer bg-ocean-medium/20 rounded-2xl p-4 hover:bg-aqua-bright/20 hover:shadow-ocean"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <img 
                          src={sticker.src} 
                          alt={sticker.alt}
                          className="w-16 h-16 mx-auto animate-meme-bounce"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Sample Telegram Chat Preview */}
                  <div className="space-y-3 text-left max-w-sm mx-auto">
                    <div className="bg-aqua-bright/10 rounded-2xl p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🐬</span>
                        <span className="text-aqua-light text-sm">Swim with the pod!</span>
                      </div>
                    </div>
                    <div className="bg-ocean-medium/20 rounded-2xl p-3 ml-auto">
                      <div className="flex items-center gap-2 justify-end">
                        <span className="text-aqua-light text-sm">Diamond fins only!</span>
                        <span className="text-2xl">💎</span>
                      </div>
                    </div>
                    <div className="text-center text-xs text-aqua-light/60 mt-4">
                      Preview: How stickers look in Telegram
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
                    Express your dolphin energy with premium animated stickers featuring $DOLPH, 
                    diamond fins, ocean vibes, and community memes.
                  </p>
                </div>

                {/* Pack Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                    <span className="text-xl">📱</span>
                    <span className="text-aqua-light">Telegram Only</span>
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
                    onClick={handleTelegramRedirect}
                    className="btn-hero-primary w-full text-lg py-4 group"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      Add to Telegram
                      <span className="text-sm opacity-75">(Free)</span>
                    </span>
                  </button>
                  
                  <button className="btn-hero-secondary w-full py-3">
                    <span className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      How to Add Stickers
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StickersSection;
