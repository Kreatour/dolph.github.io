
import { ExternalLink, Heart } from 'lucide-react';

const FriendsSection = () => {
  const friends = [
    {
      name: "$PEPE",
      emoji: "🐸",
      description: "The legendary green frog that started it all",
      color: "from-green-400 to-green-600"
    },
    {
      name: "$DOGE",
      emoji: "🐕",
      description: "Much wow, very friend, such community",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "$SHIB",
      emoji: "🐕‍🦺",
      description: "The Shiba army stands with the pod",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "$BONK",
      emoji: "🔨",
      description: "Bonking together toward the moon",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">Friends of DOLPH</span> 
            <Heart className="inline-block w-12 h-12 text-aqua-bright ml-4 animate-pulse" />
          </h2>
          <p className="text-lg md:text-xl text-aqua-light max-w-2xl mx-auto">
            The meme family that swims together, moons together! 🌊
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {friends.map((friend, index) => (
            <div
              key={index}
              className="card-meme group hover:scale-105 hover:rotate-2 transition-all duration-300 cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${friend.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="relative z-10 text-center p-6">
                {/* Friend Emoji */}
                <div className="text-6xl mb-4 group-hover:animate-bounce">
                  {friend.emoji}
                </div>
                
                {/* Friend Name */}
                <h3 className="text-xl font-black text-aqua-bright mb-3 group-hover:scale-110 transition-transform">
                  {friend.name}
                </h3>
                
                {/* Description */}
                <p className="text-aqua-light text-sm mb-4 leading-relaxed">
                  {friend.description}
                </p>
                
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
              <span className="animate-pulse">🐸</span>
              <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>🐕</span>
              <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>🐬</span>
              <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>🔨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendsSection;
