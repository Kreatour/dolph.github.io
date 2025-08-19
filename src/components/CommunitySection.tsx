
import { MessageCircle, Twitter, ExternalLink, Users, Vote, Crown } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">Rule the Pod</span> 🐬
          </h2>
          <p className="text-2xl text-aqua-bright max-w-3xl mx-auto mb-4 font-bold">
            "The Pod is our strength. Together we meme harder and swim smarter."
          </p>
          <p className="text-lg text-aqua-light max-w-2xl mx-auto">
            Join the most democratic crypto community on TON! Every dolphin has a voice, every vote counts. 🌊
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="card-meme hover:scale-110 hover:rotate-2 transition-transform group">
            <div className="text-4xl mb-3 group-hover:animate-bounce">🐬</div>
            <div className="text-3xl font-black text-aqua-bright">15K+</div>
            <div className="text-aqua-light">Pod Members</div>
          </div>
          
          <div className="card-meme hover:scale-110 hover:-rotate-2 transition-transform group">
            <div className="text-4xl mb-3 group-hover:animate-pulse">🗳️</div>
            <div className="text-3xl font-black text-aqua-bright">24/7</div>
            <div className="text-aqua-light">Democracy</div>
          </div>
          
          <div className="card-meme hover:scale-110 hover:rotate-2 transition-transform group">
            <div className="text-4xl mb-3 group-hover:animate-bounce">💎</div>
            <div className="text-3xl font-black text-aqua-bright">100%</div>
            <div className="text-aqua-light">Community</div>
          </div>

          <div className="card-meme hover:scale-110 hover:-rotate-2 transition-transform group">
            <div className="text-4xl mb-3 group-hover:animate-pulse">🎭</div>
            <div className="text-3xl font-black text-aqua-bright">∞</div>
            <div className="text-aqua-light">Fresh Memes</div>
          </div>
        </div>

        {/* Social Links */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="card-ocean group hover:scale-105 hover:rotate-1 transition-transform cursor-pointer">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-aqua-bright to-ocean-light rounded-2xl flex items-center justify-center group-hover:animate-bounce">
                <MessageCircle className="w-10 h-10 text-ocean-deep" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gradient-aqua mb-4">Telegram Governance</h3>
            <p className="text-aqua-light mb-6">
              Join our democratic pod for community votes, governance discussions, and the best $DOLPH memes! 
              Every major decision is made together as a community.
            </p>
            
            <button className="btn-hero-primary w-full group-hover:shadow-dolphin transition-all">
              <span className="flex items-center justify-center gap-2">
                <Vote className="w-5 h-5 group-hover:animate-pulse" />
                Join Democracy
                <ExternalLink className="w-4 h-4" />
              </span>
            </button>
          </div>

          <div className="card-ocean group hover:scale-105 hover:-rotate-1 transition-transform cursor-pointer">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-aqua-bright to-ocean-light rounded-2xl flex items-center justify-center group-hover:animate-bounce">
                <Twitter className="w-10 h-10 text-ocean-deep" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gradient-aqua mb-4">Twitter / X</h3>
            <p className="text-aqua-light mb-6">
              Follow us for community updates, voting announcements, and viral dolphin content! 
              Help us spread the CTO revolution across crypto Twitter.
            </p>
            
            <button className="btn-hero-secondary w-full group-hover:shadow-ocean transition-all">
              <span className="flex items-center justify-center gap-2">
                <Crown className="w-5 h-5 group-hover:animate-spin" />
                Follow CTO
                <ExternalLink className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Community Benefits */}
        <div className="card-meme max-w-4xl mx-auto hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold text-gradient-ocean mb-6">
            <span className="hover:animate-bounce inline-block">Pod Member Powers</span> 🎁
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center hover:scale-110 transition-transform cursor-pointer">
              <div className="text-3xl mb-2 hover:animate-spin">🗳️</div>
              <div className="text-aqua-bright font-semibold">Voting Rights</div>
              <div className="text-aqua-light text-sm">Shape the future</div>
            </div>
            
            <div className="text-center hover:scale-110 transition-transform cursor-pointer">
              <div className="text-3xl mb-2 hover:animate-bounce">🏆</div>
              <div className="text-aqua-bright font-semibold">Community Rewards</div>
              <div className="text-aqua-light text-sm">Earn $DOLPH prizes</div>
            </div>
            
            <div className="text-center hover:scale-110 transition-transform cursor-pointer">
              <div className="text-3xl mb-2 hover:animate-pulse">📢</div>
              <div className="text-aqua-bright font-semibold">Alpha Access</div>
              <div className="text-aqua-light text-sm">First to know</div>
            </div>
            
            <div className="text-center hover:scale-110 transition-transform cursor-pointer">
              <div className="text-3xl mb-2 hover:animate-spin">👑</div>
              <div className="text-aqua-bright font-semibold">Leadership</div>
              <div className="text-aqua-light text-sm">Run for council</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
