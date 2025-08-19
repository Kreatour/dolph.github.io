
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const tokenomicsData = [
  { name: 'Liquidity Pool', value: 50, emoji: '🌊', color: '#00CED1' },
  { name: 'Community Treasury', value: 30, emoji: '🏛️', color: '#48CAE4' },
  { name: 'Marketing Fund', value: 15, emoji: '📢', color: '#0077BE' },
  { name: 'Emergency Reserve', value: 5, emoji: '🛡️', color: '#023E8A' }
];

const TokenomicsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">Community Tokenomics</span> 💎
          </h2>
          <p className="text-xl text-aqua-light max-w-2xl mx-auto">
            100% community-controlled allocation — no dev wallets, pure CTO
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Pie Chart */}
          <div className="card-ocean hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-center mb-8 text-gradient-aqua">
              $DOLPH Distribution 🐬
            </h3>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Breakdown Cards */}
          <div className="space-y-6">
            {tokenomicsData.map((item, index) => (
              <div key={index} className="card-meme hover:rotate-1 hover:scale-105 transition-transform group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl group-hover:animate-bounce">{item.emoji}</span>
                    <div>
                      <h4 className="text-lg font-bold text-aqua-bright">{item.name}</h4>
                      <p className="text-aqua-light text-sm">
                        {item.name === 'Liquidity Pool' && 'Locked liquidity for stable trading'}
                        {item.name === 'Community Treasury' && 'Controlled by community votes'}
                        {item.name === 'Marketing Fund' && 'Community-approved campaigns'}
                        {item.name === 'Emergency Reserve' && 'Safety fund for the pod'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div 
                      className="text-2xl font-black group-hover:scale-110 transition-transform"
                      style={{ color: item.color }}
                    >
                      {item.value}%
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Key Stats */}
            <div className="card-ocean mt-8 hover:scale-105 transition-transform">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="hover:scale-110 transition-transform cursor-pointer">
                  <div className="text-3xl font-black text-aqua-bright">1B</div>
                  <div className="text-aqua-light">Total Supply</div>
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer">
                  <div className="text-3xl font-black text-aqua-bright">0%</div>
                  <div className="text-aqua-light">Tax</div>
                </div>
                <div className="hover:scale-110 transition-transform cursor-pointer">
                  <div className="text-3xl font-black text-aqua-bright">100%</div>
                  <div className="text-aqua-light">Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
