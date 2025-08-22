
import dolphSticker14 from '@/assets/stickers/DolphinDolph_14_💪.gif';

const TokenomicsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">$DOLPH Stats</span> 💎
          </h2>
          <p className="text-xl text-aqua-light max-w-2xl mx-auto mb-8">
            100% community-controlled — no dev wallets, pure CTO
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Dolphin Sticker with Key Stats */}
          <div className="card-ocean hover:scale-105 transition-transform">
            <div className="text-center mb-8">
              <img 
                src={dolphSticker14} 
                alt="Strong Dolphin Dolph" 
                className="w-32 h-32 mx-auto mb-6 dolphin-float hover:scale-125 transition-transform cursor-pointer"
              />
              <div className="text-2xl font-black text-gradient-aqua mb-4">Diamond Fins Strong! 💪</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group hover:scale-110 transition-transform cursor-pointer p-6 rounded-2xl hover:bg-aqua-bright/10">
                <div className="text-4xl md:text-5xl font-black text-aqua-bright mb-2 group-hover:animate-bounce">1M</div>
                <div className="text-aqua-light text-lg font-semibold">Total Supply</div>
                <div className="text-aqua-light/70 text-sm mt-1">Fixed forever</div>
              </div>
              <div className="group hover:scale-110 transition-transform cursor-pointer p-6 rounded-2xl hover:bg-aqua-bright/10">
                <div className="text-4xl md:text-5xl font-black text-aqua-bright mb-2 group-hover:animate-bounce">0%</div>
                <div className="text-aqua-light text-lg font-semibold">Tax</div>
                <div className="text-aqua-light/70 text-sm mt-1">No hidden fees</div>
              </div>
              <div className="group hover:scale-110 transition-transform cursor-pointer p-6 rounded-2xl hover:bg-aqua-bright/10">
                <div className="text-4xl md:text-5xl font-black text-aqua-bright mb-2 group-hover:animate-bounce">100%</div>
                <div className="text-aqua-light text-lg font-semibold">Community</div>
                <div className="text-aqua-light/70 text-sm mt-1">True CTO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
