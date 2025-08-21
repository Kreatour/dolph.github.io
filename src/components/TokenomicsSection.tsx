
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const tokenomicsData = [
  { name: 'Liquidity Pool', value: 50, emoji: '🌊', color: '#00CED1' },
  { name: 'Community Treasury', value: 30, emoji: '🏛️', color: '#48CAE4' },
  { name: 'Marketing Fund', value: 15, emoji: '📢', color: '#0077BE' },
  { name: 'Emergency Reserve', value: 5, emoji: '🛡️', color: '#023E8A' }
];

const CONTRACT_ADDRESS = "EQDv...your_contract_address_here";

const TokenomicsSection = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">Community Tokenomics</span> 💎
          </h2>
          <p className="text-xl text-aqua-light max-w-2xl mx-auto mb-8">
            100% community-controlled allocation — no dev wallets, pure CTO
          </p>
          
          {/* Contract Address */}
          <div className="card-meme max-w-md mx-auto hover:scale-105 transition-transform">
            <div className="flex items-center justify-between gap-4">
              <div className="text-left">
                <div className="text-sm text-aqua-light mb-1">Contract Address</div>
                <div className="text-aqua-bright font-mono text-sm">
                  {CONTRACT_ADDRESS.slice(0, 6)}...{CONTRACT_ADDRESS.slice(-6)}
                </div>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 bg-aqua-bright/20 hover:bg-aqua-bright/30 text-aqua-bright px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
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
                  <div className="text-3xl font-black text-aqua-bright">1M</div>
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
