
import { CheckCircle, Circle, ArrowRight, Users } from 'lucide-react';

const roadmapStages = [
  {
    stage: "Stage 1",
    title: "CTO Complete 🏛️",
    status: "completed",
    items: [
      "Community Takeover",
      "Governance Structure",
      "Treasury Setup",
      "New Leadership Elected"
    ]
  },
  {
    stage: "Stage 2", 
    title: "Unite the Pod 🐬",
    status: "current",
    items: [
      "Community DEX Listings",
      "Holder Rewards Program",
      "Democratic Voting System", 
      "Meme Competition Series"
    ]
  },
  {
    stage: "Stage 3",
    title: "Ocean Domination 🌊",
    status: "upcoming",
    items: [
      "Major CEX Partnerships",
      "Cross-chain Expansion",
      "Dolphin NFT Collection",
      "Ecosystem Partnerships"
    ]
  }
];

const RoadmapSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">The Pod's Revolution</span> 🗺️
          </h2>
          <p className="text-xl text-aqua-light max-w-2xl mx-auto">
            Our community-driven roadmap to TON supremacy
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {roadmapStages.map((stage, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < roadmapStages.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-aqua-bright/30 z-0">
                    <ArrowRight className="absolute -top-2 -right-1 w-4 h-4 text-aqua-bright animate-pulse" />
                  </div>
                )}

                <div className={`card-ocean relative z-10 hover:scale-105 transition-transform group ${
                  stage.status === 'current' ? 'border-aqua-bright shadow-dolphin animate-pulse' : ''
                }`}>
                  {/* Stage Header */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform"
                         style={{ 
                           background: stage.status === 'completed' ? 'linear-gradient(135deg, #00CED1, #48CAE4)' :
                                      stage.status === 'current' ? 'linear-gradient(135deg, #48CAE4, #0077BE)' :
                                      'linear-gradient(135deg, #0077BE, #023E8A)'
                         }}>
                      {stage.status === 'completed' ? 
                        <CheckCircle className="w-8 h-8 text-ocean-deep group-hover:animate-bounce" /> :
                        stage.status === 'current' ?
                        <Users className="w-8 h-8 text-foam-white group-hover:animate-pulse" /> :
                        <Circle className="w-8 h-8 text-foam-white" />
                      }
                    </div>
                    
                    <div className="text-sm font-semibold text-aqua-light mb-2">{stage.stage}</div>
                    <h3 className="text-2xl font-black text-gradient-aqua group-hover:scale-105 transition-transform">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Stage Items */}
                  <div className="space-y-3">
                    {stage.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 animate-pulse ${
                          stage.status === 'completed' ? 'bg-aqua-bright' :
                          stage.status === 'current' ? 'bg-aqua-light' :
                          'bg-ocean-light'
                        }`} />
                        <span className={`text-sm ${
                          stage.status === 'completed' ? 'text-aqua-bright' :
                          stage.status === 'current' ? 'text-foam-white' :
                          'text-aqua-light'
                        }`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Status Badge */}
                  <div className="mt-6 text-center">
                    <span className={`inline-block px-4 py-2 rounded-full text-xs font-bold hover:scale-110 transition-transform cursor-pointer ${
                      stage.status === 'completed' ? 'bg-aqua-bright/20 text-aqua-bright border border-aqua-bright/30' :
                      stage.status === 'current' ? 'bg-aqua-light/20 text-aqua-light border border-aqua-light/30 meme-bounce' :
                      'bg-ocean-light/20 text-ocean-light border border-ocean-light/30'
                    }`}>
                      {stage.status === 'completed' ? '✅ Achieved' :
                       stage.status === 'current' ? '🚀 Active' :
                       '⏳ Planned'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
