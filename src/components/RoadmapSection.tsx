
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

const roadmapStages = [
  {
    stage: "Stage 1",
    title: "CTO Complete 🏛️",
    status: "completed",
    items: [
      "Community Takeover",
      "Governance Structure", 
      "New Leadership"
    ]
  },
  {
    stage: "Stage 2", 
    title: "Unite the Pod 🐬",
    status: "current",
    items: [
      "DEX Listings",
      "Holder Rewards",
      "Democratic Voting"
    ]
  },
  {
    stage: "Stage 3",
    title: "Ocean Domination 🌊",
    status: "upcoming",
    items: [
      "CEX Partnerships",
      "Cross-chain Expansion", 
      "Ecosystem Growth"
    ]
  }
];

const RoadmapSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">
              The Pod's Revolution
            </span> 🗺️
          </h2>
          <p className="text-lg md:text-xl text-aqua-light max-w-2xl mx-auto">
            Our roadmap to TON supremacy
          </p>
        </div>

        {/* Mobile-First Roadmap */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {roadmapStages.map((stage, index) => (
              <div key={index} className="relative">
                
                {/* Connector Line (hidden on mobile) */}
                {index < roadmapStages.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-aqua-bright/30 to-ocean-medium/30"></div>
                )}
                
                {/* Stage Card */}
                <div className={`card-ocean hover:scale-[1.02] transition-all duration-300 relative ${
                  stage.status === 'current' ? 'ring-2 ring-aqua-bright/30 shadow-dolphin' : ''
                }`}>
                  
                  <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
                    
                    {/* Stage Icon & Status */}
                    <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 md:w-32 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl transition-transform hover:rotate-12 ${
                        stage.status === 'completed' ? 'bg-aqua-bright/20 text-aqua-bright' :
                        stage.status === 'current' ? 'bg-ocean-medium/30 text-aqua-light' :
                        'bg-ocean-deep/20 text-aqua-light/60'
                      }`}>
                        {stage.status === 'completed' ? '✅' : 
                         stage.status === 'current' ? '🚀' : '⏳'}
                      </div>
                      
                      <div className="md:text-center">
                        <div className="text-sm text-aqua-light/70 font-medium">{stage.stage}</div>
                        <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold mt-1 ${
                          stage.status === 'completed' ? 'bg-aqua-bright/20 text-aqua-bright' :
                          stage.status === 'current' ? 'bg-ocean-medium/30 text-aqua-light' :
                          'bg-ocean-deep/20 text-aqua-light/60'
                        }`}>
                          {stage.status === 'completed' ? 'Complete' : 
                           stage.status === 'current' ? 'Active' : 'Upcoming'}
                        </div>
                      </div>
                    </div>

                    {/* Stage Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gradient-aqua mb-4 hover:scale-105 transition-transform">
                        {stage.title}
                      </h3>

                      {/* Stage Items */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                        {stage.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2 text-aqua-light hover:text-aqua-bright transition-colors p-2 rounded-lg hover:bg-ocean-medium/10">
                            <span className="text-aqua-bright text-sm">•</span>
                            <span className="text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
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
