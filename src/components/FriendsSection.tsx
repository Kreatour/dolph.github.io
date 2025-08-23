
import { ExternalLink } from 'lucide-react';
import mrAssSticker from '@/assets/stickers/MrAss_👋.gif';
import owledDidiSticker from '@/assets/stickers/OwledDidi_🤔.gif';
import dolphinLoveSticker from '@/assets/stickers/DolphinDolph_15_❤️.gif';

const FriendsSection = () => {
  const friends = [
    {
      name: "PEDRO",
      image: "/lovable-uploads/d0fc7027-f54d-4b77-a8d9-4e9df6585d98.png",
      description: "OG AUDIO MEME ON TON, COMMUNITY TAKEOVER, DANCE TO THE TUNE, PROBABLY NOTHING 💎👀 🦝",
      color: "from-gray-400 to-gray-600",
      chat: "https://t.me/ofcPedroCTOTON"
    },
    {
      name: "Mr Rosy Cheeks",
      sticker: mrAssSticker,
      description: "Mr Rosy Cheeks is the dumbest meme and most bullish telegram sticker of all time 🍑",
      color: "from-pink-400 to-rose-500",
      chat: "https://t.me/CheeksCTO",
      website: "https://cheeksonton.lol/"
    },
    {
      name: "Owled Didi",
      sticker: owledDidiSticker,
      description: "Owled Didi is an animated Telegram sticker pack featuring a cute purple owl. It is also shown on the Telegram home page.",
      color: "from-purple-400 to-indigo-500",
      chat: "https://t.me/owled_didi_portal",
      website: "https://owleddidi.com"
    },
    {
      name: "KITO",
      image: "/lovable-uploads/89e2fbc7-ec59-40d2-b65c-b91318935782.png",
      description: "kito is just the coolest cat on ton. noothing more.",
      color: "from-blue-400 to-cyan-500",
      chat: "http://t.me/KitoCommunity"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">Friends of DOLPH</span> 
            <img 
              src={dolphinLoveSticker} 
              alt="Dolph Love"
              className="inline-block w-12 h-12 ml-4 animate-pulse"
            />
          </h2>
          <p className="text-lg md:text-xl text-aqua-light max-w-2xl mx-auto">
            The meme family that swims together, moons together! 🌊
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {friends.map((friend, index) => (
            <div
              key={index}
              className="card-meme group hover:scale-105 hover:rotate-2 transition-all duration-300 cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${friend.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="relative z-10 text-center p-6">
                {/* Friend Avatar */}
                <div className="text-6xl mb-4 group-hover:animate-bounce flex justify-center items-center h-16">
                  {friend.sticker ? (
                    <img 
                      src={friend.sticker} 
                      alt={friend.name}
                      className="w-16 h-16 object-contain"
                    />
                  ) : friend.image ? (
                    <img 
                      src={friend.image} 
                      alt={friend.name}
                      className="w-16 h-16 object-contain rounded-full"
                    />
                  ) : (
                    friend.emoji
                  )}
                </div>
                
                {/* Friend Name */}
                <h3 className="text-xl font-black text-aqua-bright mb-3 group-hover:scale-110 transition-transform">
                  {friend.name}
                </h3>
                
                {/* Description */}
                <p className="text-aqua-light text-sm mb-4 leading-relaxed">
                  {friend.description}
                </p>
                
                {/* Community Links */}
                {(friend.chat || friend.website) && (
                  <div className="flex justify-center gap-2 mb-4">
                    {friend.chat && (
                      <a
                        href={friend.chat}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-semibold hover:bg-blue-500/30 transition-colors"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                        Chat
                      </a>
                    )}
                    {friend.website && (
                      <a
                        href={friend.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-aqua-bright/20 text-aqua-bright px-2 py-1 rounded-full text-xs font-semibold hover:bg-aqua-bright/30 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Site
                      </a>
                    )}
                  </div>
                )}
                
                {/* Friendship Badge */}
                <div className="inline-flex items-center gap-2 bg-aqua-bright/20 text-aqua-bright px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-aqua-bright/30 transition-colors">
                  <span className="animate-pulse">🤝</span>
                  Pod Ally
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-2 right-2 text-aqua-bright/30 group-hover:text-aqua-bright/60 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="card-ocean max-w-2xl mx-auto hover:scale-105 transition-transform">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-3xl animate-bounce">🐬</span>
              <span className="text-2xl font-black text-gradient-aqua">Building the Meme Alliance</span>
              <span className="text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>🚀</span>
            </div>
            <p className="text-aqua-light mb-6">
              Together we're stronger! The DOLPH pod believes in unity across all meme communities.
              <br />
              <span className="text-foam-white font-semibold">One ocean, many dolphins! 🌊</span>
            </p>
            <div className="flex justify-center gap-4 text-2xl">
              <span className="animate-pulse">🦝</span>
              <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>🍑</span>
              <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>🐬</span>
              <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>🐱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendsSection;
