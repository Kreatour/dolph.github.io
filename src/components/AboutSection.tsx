
const AboutSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gradient-ocean">About the Pod</span> 🐬
          </h2>
          <p className="text-xl text-aqua-light max-w-3xl mx-auto leading-relaxed">
            In the vast digital ocean of TON, a new species has emerged...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Story Content */}
          <div className="card-ocean space-y-6">
            <h3 className="text-3xl font-bold text-gradient-aqua mb-4">
              The Dolphin Way 🌊
            </h3>
            
            <div className="space-y-4 text-lg">
              <p className="text-aqua-light leading-relaxed">
                <span className="text-aqua-bright font-semibold">Dolphins are nature's geniuses</span> — 
                social, playful, and incredibly intelligent. Just like our community!
              </p>
              
              <p className="text-aqua-light leading-relaxed">
                On TON blockchain, we've created the <span className="text-foam-white font-bold">smartest memecoin pod</span> where 
                every holder is part of our dolphin family. We communicate, we play, we meme together! 🐬💎
              </p>
              
              <p className="text-aqua-bright font-semibold">
                Fast transactions, smart community, unstoppable energy. That's the $DOLPH difference.
              </p>
            </div>

            <div className="bg-aqua-bright/10 rounded-2xl p-6 border border-aqua-bright/20">
              <div className="text-2xl mb-2">🧠💡</div>
              <div className="text-aqua-bright font-bold text-lg mb-2">Pod Intelligence</div>
              <div className="text-aqua-light">
                "The pod is our strength. Individual dolphins are smart, but together we're unstoppable!"
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="card-meme text-center p-12">
              <div className="text-8xl mb-6 meme-bounce">🐬</div>
              <div className="text-3xl font-bold text-gradient-ocean mb-4">$DOLPH Traits</div>
              
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <span className="text-aqua-light">Lightning Fast</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🧠</span>
                  <span className="text-aqua-light">Super Smart</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🤝</span>
                  <span className="text-aqua-light">Community First</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">😂</span>
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
