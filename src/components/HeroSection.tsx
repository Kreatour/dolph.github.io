
import { Waves, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center ocean-waves overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-20 dolphin-float">🐬</div>
        <div className="absolute top-40 right-16 text-4xl opacity-30 meme-bounce">🌊</div>
        <div className="absolute bottom-32 left-20 text-5xl opacity-25 dolphin-float">🐬</div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-35 meme-bounce">💎</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            <span className="text-gradient-ocean">Swim with the Pod.</span>
          </h1>
          <h1 className="text-6xl md:text-8xl font-black">
            <span className="text-gradient-aqua">Leap with $DOLPH.</span>
          </h1>
        </div>

        {/* Dolphin Emoji Hero */}
        <div className="text-9xl mb-8 dolphin-float">
          🐬
        </div>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-aqua-light max-w-2xl mx-auto mb-12 leading-relaxed">
          The smartest memecoin on TON — fast, playful, unstoppable.
          <br />
          <span className="text-foam-white font-semibold">Join the most intelligent pod in crypto! 🌊</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="btn-hero-primary group">
            <span className="flex items-center gap-2">
              Join the Pod
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
          
          <button className="btn-hero-secondary group">
            <span className="flex items-center gap-2">
              <Waves className="w-5 h-5" />
              Buy $DOLPH
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </div>

        {/* Fun Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="card-meme text-center">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-2xl font-bold text-aqua-bright">Lightning Fast</div>
            <div className="text-aqua-light">TON Speed</div>
          </div>
          
          <div className="card-meme text-center">
            <div className="text-3xl mb-2">🧠</div>
            <div className="text-2xl font-bold text-aqua-bright">Smart Pod</div>
            <div className="text-aqua-light">AI-Powered Memes</div>
          </div>
          
          <div className="card-meme text-center">
            <div className="text-3xl mb-2">💎</div>
            <div className="text-2xl font-bold text-aqua-bright">Diamond Fins</div>
            <div className="text-aqua-light">HODL Strong</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
