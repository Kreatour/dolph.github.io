
import { MessageCircle, Twitter, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-aqua-bright/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="text-4xl font-black text-gradient-ocean mb-2">
              $DOLPH 🐬
            </div>
            <p className="text-aqua-light">
              The smartest memecoin on TON
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <button className="w-12 h-12 bg-gradient-to-br from-aqua-bright to-ocean-light rounded-xl flex items-center justify-center hover:scale-110 transition-transform group">
              <MessageCircle className="w-6 h-6 text-ocean-deep group-hover:scale-110 transition-transform" />
            </button>
            
            <button className="w-12 h-12 bg-gradient-to-br from-aqua-bright to-ocean-light rounded-xl flex items-center justify-center hover:scale-110 transition-transform group">
              <Twitter className="w-6 h-6 text-ocean-deep group-hover:scale-110 transition-transform" />
            </button>
            
            <button className="w-12 h-12 bg-gradient-to-br from-aqua-bright to-ocean-light rounded-xl flex items-center justify-center hover:scale-110 transition-transform group">
              <ExternalLink className="w-6 h-6 text-ocean-deep group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Fun Disclaimer */}
          <div className="text-center md:text-right">
            <p className="text-aqua-light text-sm flex items-center justify-center md:justify-end gap-2">
              <span>No dolphins were harmed in the making of this coin</span>
              <span className="text-lg">🐬😂</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-aqua-bright/10 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-aqua-light text-sm">
              © 2024 $DOLPH Token. Swimming with the TON blockchain.
            </p>
            
            <p className="text-aqua-bright text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-400" /> by the Pod
            </p>
          </div>
          
          {/* Meme Quote */}
          <div className="mt-6 p-4 bg-aqua-bright/5 rounded-2xl border border-aqua-bright/10">
            <p className="text-aqua-light italic">
              "In the vast ocean of crypto, be the dolphin that stands out - smart, social, and always making waves!" 🌊🐬💎
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
