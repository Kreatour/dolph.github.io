
import { Waves, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const CONTRACT_ADDRESS = "EQDv...your_contract_address_here";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
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

        {/* Dolphin Emoji Hero */}
        <div className="text-9xl mb-8 dolphin-float hover:scale-125 transition-transform cursor-pointer">
          🐬
        </div>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-aqua-light max-w-2xl mx-auto mb-8 leading-relaxed">
          The smartest community-owned memecoin on TON — fast, playful, unstoppable.
          <br />
          <span className="text-foam-white font-semibold">Built by dolphins, for dolphins! 🌊</span>
        </p>

        {/* Contract Address */}
        <div className="card-meme max-w-md mx-auto mb-8 hover:scale-105 transition-transform">
          <div className="flex items-center justify-between gap-4">
            <div className="text-left">
              <div className="text-sm text-aqua-light mb-1">Contract Address</div>
              <div className="text-aqua-bright font-mono text-sm">
                {CONTRACT_ADDRESS.slice(0, 6)}...{CONTRACT_ADDRESS.slice(-6)}
              </div>
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 bg-aqua-bright/20 hover:bg-aqua-bright/30 text-aqua-bright px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy CA
                </>
              )}
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="btn-hero-primary group hover:shadow-dolphin">
            <span className="flex items-center gap-2">
              Join the Pod
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
          
          <button className="btn-hero-secondary group hover:shadow-ocean">
            <span className="flex items-center gap-2">
              <Waves className="w-5 h-5 group-hover:animate-pulse" />
              Buy $DOLPH
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="card-meme text-center group hover:rotate-1 transition-transform">
            <div className="text-3xl mb-2 group-hover:animate-bounce">🏛️</div>
            <div className="text-2xl font-bold text-aqua-bright">100% CTO</div>
            <div className="text-aqua-light">Community Owned</div>
          </div>
          
          <div className="card-meme text-center group hover:-rotate-1 transition-transform">
            <div className="text-3xl mb-2 group-hover:animate-pulse">💎</div>
            <div className="text-2xl font-bold text-aqua-bright">1M Supply</div>
            <div className="text-aqua-light">Diamond Fins</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
