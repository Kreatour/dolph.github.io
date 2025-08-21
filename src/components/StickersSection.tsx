
import { Download, Heart, Share2 } from 'lucide-react';
import { useState } from 'react';

const stickerPacks = [
  {
    id: 1,
    name: "Classic Dolph Vibes",
    preview: "🐬",
    stickers: ["🐬", "💎", "🌊", "🚀", "💰", "🎯"],
    description: "Essential dolphin expressions for every crypto conversation",
    downloads: "2.3K"
  },
  {
    id: 2,
    name: "Moon Mission Pack",
    preview: "🚀",
    stickers: ["🚀", "🌙", "💎", "📈", "🔥", "⚡"],
    description: "For when $DOLPH is reaching new heights",
    downloads: "1.8K"
  },
  {
    id: 3,
    name: "Diamond Fins",
    preview: "💎",
    stickers: ["💎", "🐬", "👑", "🏆", "💪", "🎉"],
    description: "Premium stickers for diamond-finned holders",
    downloads: "3.1K"
  },
  {
    id: 4,
    name: "Ocean Memes",
    preview: "🌊",
    stickers: ["🌊", "🐠", "🦈", "🏄‍♂️", "🏖️", "⛵"],
    description: "Dive deep into ocean-themed crypto humor",
    downloads: "1.5K"
  }
];

const StickersSection = () => {
  const [likedPacks, setLikedPacks] = useState<Set<number>>(new Set());
  const [downloadingPacks, setDownloadingPacks] = useState<Set<number>>(new Set());

  const handleLike = (packId: number) => {
    setLikedPacks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(packId)) {
        newSet.delete(packId);
      } else {
        newSet.add(packId);
      }
      return newSet;
    });
  };

  const handleDownload = async (packId: number, packName: string) => {
    setDownloadingPacks(prev => new Set(prev).add(packId));
    
    // Simulate download delay
    setTimeout(() => {
      setDownloadingPacks(prev => {
        const newSet = new Set(prev);
        newSet.delete(packId);
        return newSet;
      });
      
      // In a real implementation, you would trigger actual download here
      console.log(`Downloaded sticker pack: ${packName}`);
    }, 1500);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">
              Dolphin Sticker Packs
            </span> 🎨
          </h2>
          <p className="text-2xl text-aqua-bright max-w-3xl mx-auto mb-4 font-bold">
            "Express yourself with premium $DOLPH stickers!"
          </p>
          <p className="text-lg text-aqua-light max-w-2xl mx-auto">
            Download our exclusive community-created sticker packs for Telegram, Discord, and more! 
            Show your dolphin pride in every conversation. 🐬✨
          </p>
        </div>

        {/* Featured Sticker Preview */}
        <div className="card-ocean max-w-4xl mx-auto mb-16 hover:scale-105 transition-transform">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gradient-aqua mb-4">
              Featured Stickers Preview 🎭
            </h3>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {["🐬", "💎", "🚀", "🌊", "💰", "🎯", "👑", "🔥"].map((sticker, index) => (
                <div
                  key={index}
                  className="text-6xl hover:scale-125 hover:rotate-12 transition-transform cursor-pointer animate-bounce"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {sticker}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticker Packs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stickerPacks.map((pack) => (
            <div
              key={pack.id}
              className="card-meme group hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer"
            >
              {/* Pack Preview */}
              <div className="text-center mb-4">
                <div className="text-6xl mb-3 group-hover:animate-bounce">
                  {pack.preview}
                </div>
                <h4 className="text-xl font-bold text-gradient-aqua mb-2">
                  {pack.name}
                </h4>
                <p className="text-aqua-light text-sm mb-3">
                  {pack.description}
                </p>
              </div>

              {/* Sticker Grid Preview */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {pack.stickers.map((sticker, index) => (
                  <div
                    key={index}
                    className="bg-ocean-medium/30 rounded-lg p-2 text-center text-2xl hover:scale-110 transition-transform"
                  >
                    {sticker}
                  </div>
                ))}
              </div>

              {/* Pack Stats & Actions */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-aqua-light text-sm">
                  📥 {pack.downloads} downloads
                </div>
                <button
                  onClick={() => handleLike(pack.id)}
                  className={`flex items-center gap-1 transition-all duration-300 ${
                    likedPacks.has(pack.id)
                      ? 'text-red-400 scale-110'
                      : 'text-aqua-light hover:text-red-400 hover:scale-110'
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${likedPacks.has(pack.id) ? 'fill-current' : ''}`}
                  />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => handleDownload(pack.id, pack.name)}
                  disabled={downloadingPacks.has(pack.id)}
                  className="btn-hero-primary w-full text-sm py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {downloadingPacks.has(pack.id) ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full"></div>
                      Downloading...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Pack
                    </span>
                  )}
                </button>
                
                <button className="btn-hero-secondary w-full text-sm py-2">
                  <span className="flex items-center justify-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share Pack
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Community Creation CTA */}
        <div className="card-ocean max-w-3xl mx-auto mt-16 text-center hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold text-gradient-aqua mb-4">
            Create Your Own Pack! 🎨
          </h3>
          <p className="text-aqua-light mb-6">
            Got creative ideas? Submit your dolphin-themed stickers to our community! 
            The best submissions get featured and earn $DOLPH rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero-primary">
              Submit Stickers
            </button>
            <button className="btn-hero-secondary">
              View Guidelines
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickersSection;
