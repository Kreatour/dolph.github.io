
import { ExternalLink } from 'lucide-react';

// Import sticker GIFs - ensuring all paths are correct
import sticker1 from '@/assets/stickers/DolphinDolph_1_😂.gif';
import sticker2 from '@/assets/stickers/DolphinDolph_2_😘.gif';
import sticker3 from '@/assets/stickers/DolphinDolph_3_👍.gif';
import sticker4 from '@/assets/stickers/DolphinDolph_4_😨.gif';
import sticker6 from '@/assets/stickers/DolphinDolph_6_😌.gif';
import sticker8 from '@/assets/stickers/DolphinDolph_8_🤔.gif';
import sticker9 from '@/assets/stickers/DolphinDolph_9_🧐.gif';
import sticker10 from '@/assets/stickers/DolphinDolph_10_😭.gif';

const StickersSection = () => {
  const handleBuyDolph = () => {
    window.open('https://t.me/stonks_sniper_bot?start=id=chibhanzi=EQAY6Vsa6OzGS_t296NcMW4BLvC2i7NUGno3Ap5vljJV4yAQ', '_blank');
  };

  const stickerWall = [
    { src: sticker1, alt: "Laughing Dolphin", emoji: "😂" },
    { src: sticker2, alt: "Kiss Dolphin", emoji: "😘" },
    { src: sticker3, alt: "Thumbs Up Dolphin", emoji: "👍" },
    { src: sticker4, alt: "Shocked Dolphin", emoji: "😨" },
    { src: sticker6, alt: "Content Dolphin", emoji: "😌" },
    { src: sticker8, alt: "Thinking Dolphin", emoji: "🤔" },
    { src: sticker9, alt: "Curious Dolphin", emoji: "🧐" },
    { src: sticker10, alt: "Crying Dolphin", emoji: "😭" }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">
              Express Your Pod Pride
            </span> 🎨
          </h2>
          <p className="text-lg md:text-xl text-aqua-light max-w-2xl mx-auto mb-6">
            Premium animated $DOLPH stickers for Telegram
          </p>
          <a 
            href="https://t.me/addstickers/Dolphy5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-aqua-bright hover:text-foam-white transition-colors underline font-semibold"
          >
            Get Sticker Pack →
          </a>
        </div>

        {/* Enhanced Sticker Showcase */}
        <div className="max-w-5xl mx-auto">
          <div className="card-ocean hover:scale-[1.02] transition-all duration-300">
            
            {/* Main Sticker Wall */}
            <div className="text-center mb-12">
              <div className="bg-gradient-to-br from-ocean-medium/30 to-aqua-bright/20 rounded-3xl p-8 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
                  {stickerWall.map((sticker, index) => (
                    <div
                      key={index}
                      className="group relative hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer bg-ocean-medium/20 rounded-3xl p-6 hover:bg-aqua-bright/20 hover:shadow-dolphin"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {/* Sticker Image */}
                      <div className="relative">
                        <img 
                          src={sticker.src} 
                          alt={sticker.alt}
                          className="w-20 h-20 md:w-24 md:h-24 mx-auto animate-meme-bounce group-hover:animate-pulse"
                          onError={(e) => {
                            console.log(`Failed to load sticker: ${sticker.src}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        {/* Emoji Badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-aqua-bright/90 rounded-full flex items-center justify-center text-lg backdrop-blur-sm border-2 border-ocean-medium/30">
                          {sticker.emoji}
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-aqua-bright/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="max-w-md mx-auto">
                <button
                  onClick={handleBuyDolph}
                  className="btn-hero-primary w-full text-lg py-4 group"
                >
                  <span className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Buy $DOLPH
                    <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickersSection;
