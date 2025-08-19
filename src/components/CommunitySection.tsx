
import { MessageCircle, Twitter, ExternalLink, Users } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gradient-ocean">Join the Pod</span> 🐬
          </h2>
          <p className="text-2xl text-aqua-bright max-w-3xl mx-auto mb-4 font-bold">
            "The Pod is our strength. Together we meme harder and swim smarter."
          </p>
          <p className="text-lg text-aqua-light max-w-2xl mx-auto">
            Connect with thousands of fellow dolphins in the most active crypto community on TON! 🌊
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="card-meme">
            <div className="text-4xl mb-3">🐬</div>
            <div className="text-3xl font-black text-aqua-bright">15K+</div>
            <div className="text-aqua-light">Pod Members</div>
          </div>
          
          <div className="card-meme">
            <div className="text-4xl mb-3">💬</div>
            <div className="text-3xl font-black text-aqua-bright">24/7</div>
            <div className="text-aqua-light">Active Chat</div>
          </div>
          
          <div className="card-meme">
            <div className="text-4xl mb-3">🎭</div>
            <div className="text-3xl font-black text-aqua-bright">∞</div>
            <div className="text-aqua-light">Fresh Memes</div>
          </div>
        </div>

        {/* Social Links */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="card-ocean group hover:scale-105 transition-transform cursor-pointer">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-aqua-bright to-ocean-light rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-ocean-deep" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gradient-aqua mb-4">Telegram Channel</h3>
            <p className="text-aqua-light mb-6">
              Join our main pod for announcements, discussions, and the best $DOLPH memes! 
              Get exclusive insights and be first to know about updates.
            </p>
            
            <button className="btn-hero-primary w-full group-hover:scale-105 transition-transform">
              <span className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Join Telegram Pod
                <ExternalLink className="w-4 h-4" />
              </span>
            </button>
          </div>

          <div className="card-ocean group hover:scale-105 transition-transform cursor-pointer">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-aqua-bright to-ocean-light rounded-2xl flex items-center justify-center">
                <Twitter className="w-10 h-10 text-ocean-deep" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gradient-aqua mb-4">Twitter / X</h3>
            <p className="text-aqua-light mb-6">
              Follow us for real-time updates, community highlights, and viral dolphin content! 
              RT our posts to spread the $DOLPH wave across crypto Twitter.
            </p>
            
            <button className="btn-hero-secondary w-full group-hover:scale-105 transition-transform">
              <span className="flex items-center justify-center gap-2">
                <Twitter className="w-5 h-5" />
                Follow @DolphTON
                <ExternalLink className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Community Benefits */}
        <div className="card-meme max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gradient-ocean mb-6">Pod Member Benefits 🎁</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🎭</div>
              <div className="text-aqua-bright font-semibold">Exclusive Memes</div>
              <div className="text-aqua-light text-sm">Fresh content daily</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-aqua-bright font-semibold">Contests & Prizes</div>
              <div className="text-aqua-light text-sm">Win $DOLPH rewards</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">📢</div>
              <div className="text-aqua-bright font-semibold">Alpha Calls</div>
              <div className="text-aqua-light text-sm">First to know news</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <div className="text-aqua-bright font-semibold">Networking</div>
              <div className="text-aqua-light text-sm">Meet fellow dolphins</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
