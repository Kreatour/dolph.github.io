
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const tokenomicsData = [
  { name: 'Liquidity Pool', value: 40, emoji: '🌊', color: '#00CED1' },
  { name: 'Community Rewards', value: 30, emoji: '🐬', color: '#48CAE4' },
  { name: 'Marketing & Partnerships', value: 20, emoji: '🎤', color: '#0077BE' },
  { name: 'Development', value: 10, emoji: '⚡', color: '#023E8A' }
];

const TokenomicsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gradient-ocean">Tokenomics</span> 💎
          </h2>
          <p className="text-xl text-aqua-light max-w-2xl mx-auto">
            Smart allocation for a sustainable pod ecosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Pie Chart */}
          <div className="card-ocean">
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
              <div key={index} className="card-meme">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{item.emoji}</span>
                    <div>
                      <h4 className="text-lg font-bold text-aqua-bright">{item.name}</h4>
                      <p className="text-aqua-light text-sm">
                        {item.name === 'Liquidity Pool' && 'Deep liquidity for smooth trading'}
                        {item.name === 'Community Rewards' && 'Rewards for active pod members'}
                        {item.name === 'Marketing & Partnerships' && 'Growing the pod worldwide'}
                        {item.name === 'Development' && 'Building the future of $DOLPH'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div 
                      className="text-2xl font-black"
                      style={{ color: item.color }}
                    >
                      {item.value}%
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Key Stats */}
            <div className="card-ocean mt-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-aqua-bright">1B</div>
                  <div className="text-aqua-light">Total Supply</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-aqua-bright">0%</div>
                  <div className="text-aqua-light">Tax</div>
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
