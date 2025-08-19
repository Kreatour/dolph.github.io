
const AboutSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">About the Pod</span> 🐬
          </h2>
          <p className="text-xl text-aqua-light max-w-3xl mx-auto leading-relaxed">
            In the vast digital ocean of TON, a community has risen...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Story Content */}
          <div className="card-ocean space-y-6 hover:scale-105 transition-transform">
            <h3 className="text-3xl font-bold text-gradient-aqua mb-4">
              The Community Way 🌊
            </h3>
            
            <div className="space-y-4 text-lg">
              <p className="text-aqua-light leading-relaxed">
                <span className="text-aqua-bright font-semibold">$DOLPH was born from the community</span> — 
                a true CTO (Community Take Over) where every holder has a voice!
              </p>
              
              <p className="text-aqua-light leading-relaxed">
                After the original developers stepped away, <span className="text-foam-white font-bold">the pod united</span> to 
                take full control. No more centralized decisions — we swim together, we decide together! 🐬💎
              </p>
              
              <p className="text-aqua-bright font-semibold">
                Decentralized governance, community-driven development, unstoppable meme energy. That's the new $DOLPH way.
              </p>
            </div>

            <div className="bg-aqua-bright/10 rounded-2xl p-6 border border-aqua-bright/20 hover:border-aqua-bright/40 transition-colors">
              <div className="text-2xl mb-2 animate-bounce">🏛️💡</div>
              <div className="text-aqua-bright font-bold text-lg mb-2">Community Governance</div>
              <div className="text-aqua-light">
                "Every dolphin has a voice. Every decision is made by the pod. This is true decentralization!"
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="card-meme text-center p-12 hover:rotate-2 transition-transform">
              <div className="text-8xl mb-6 meme-bounce hover:scale-125 transition-transform cursor-pointer">🐬</div>
              <div className="text-3xl font-bold text-gradient-ocean mb-4">CTO Traits</div>
              
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-2xl animate-pulse">🏛️</span>
                  <span className="text-aqua-light">Community-Owned</span>
                </div>
                <div className="flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-2xl animate-bounce">🗳️</span>
                  <span className="text-aqua-light">Democratic</span>
                </div>
                <div className="flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-2xl animate-pulse">🤝</span>
                  <span className="text-aqua-light">Unity First</span>
                </div>
                <div className="flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-2xl animate-bounce">😂</span>
                  <span className="text-aqua-light">Meme Master</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
