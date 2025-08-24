
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
  const handleTelegramRedirect = () => {
    window.open('https://t.me/addstickers/Dolphy5', '_blank');
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
          <p className="text-lg md:text-xl text-aqua-light max-w-2xl mx-auto">
            Premium animated $DOLPH stickers for Telegram
          </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickersSection;
