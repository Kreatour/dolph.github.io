
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
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/20 via-aqua-bright/10 to-ocean-deep/20 rounded-full blur-3xl transform -translate-y-12"></div>
          <h2 className="text-5xl font-black mb-6 relative">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block animate-dolphin-leap">
              The Pod's Revolution
            </span> 🗺️
          </h2>
          <p className="text-xl text-aqua-light max-w-2xl mx-auto relative">
            Our community-driven roadmap to TON supremacy
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-aqua-bright via-ocean-medium to-ocean-deep opacity-30"></div>
          
          <div className="space-y-16">
            {roadmapStages.map((stage, index) => (
              <div 
                key={index} 
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 top-12 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-background z-10 shadow-ocean">
                  <div className={`w-full h-full rounded-full ${
                    stage.status === 'completed' ? 'bg-aqua-bright animate-pulse' :
                    stage.status === 'current' ? 'bg-ocean-medium animate-meme-bounce' :
                    'bg-ocean-deep/60'
                  }`}></div>
                </div>
                
                {/* Stage Card */}
                <div className={`w-5/12 card-ocean hover:scale-105 transition-all duration-500 hover:shadow-dolphin relative ${
                  stage.status === 'current' ? 'ring-2 ring-aqua-bright/30 shadow-dolphin animate-pulse' : ''
                }`}>
                  <div className="p-8">
                    {/* Stage Icon & Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl hover:rotate-12 transition-transform ${
                        stage.status === 'completed' ? 'bg-aqua-bright/20 text-aqua-bright' :
                        stage.status === 'current' ? 'bg-ocean-medium/30 text-aqua-light animate-pulse' :
                        'bg-ocean-deep/20 text-aqua-light/60'
                      }`}>
                        {stage.status === 'completed' ? '✅' : 
                         stage.status === 'current' ? '🚀' : '⏳'}
                      </div>
                      <div>
                        <div className="text-sm text-aqua-light/70 font-medium">{stage.stage}</div>
                        <h3 className="text-2xl font-bold text-gradient-aqua hover:scale-105 transition-transform">{stage.title}</h3>
                      </div>
                    </div>

                    {/* Stage Items */}
                    <ul className="space-y-3 mb-6">
                      {stage.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-3 text-aqua-light hover:text-aqua-bright transition-colors hover:translate-x-2 cursor-pointer">
                          <span className="text-aqua-bright animate-pulse text-lg">•</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Status Badge */}
                    <div className={`inline-flex px-4 py-2 rounded-full text-xs font-bold transition-all hover:scale-110 ${
                      stage.status === 'completed' ? 'bg-aqua-bright/20 text-aqua-bright border border-aqua-bright/30' :
                      stage.status === 'current' ? 'bg-ocean-medium/30 text-aqua-light border border-aqua-light/30 animate-meme-bounce' :
                      'bg-ocean-deep/20 text-aqua-light/60 border border-ocean-light/30'
                    }`}>
                      {stage.status === 'completed' ? '✨ Complete' : 
                       stage.status === 'current' ? '🔥 In Progress' : '⏳ Upcoming'}
                    </div>
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
