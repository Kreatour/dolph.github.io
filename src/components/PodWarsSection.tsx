
import { Trophy, Users } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PodWarsSection = () => {
  const leaderboardData = [
    {
      rank: 1,
      rankIcon: "🥇",
      podName: "Shark Pod",
      podIcon: "🦈",
      leader: "@SharkLeader",
      points: 2840,
      members: 156
    },
    {
      rank: 2,
      rankIcon: "🥈",
      podName: "Whale Pod",
      podIcon: "🐳",
      leader: "@WhaleKing",
      points: 2650,
      members: 143
    },
    {
      rank: 3,
      rankIcon: "🥉",
      podName: "Rossy Cheeks Pod",
      podIcon: "🐬",
      leader: "@RossyLeader",
      points: 2180,
      members: 128
    },
    {
      rank: 4,
      rankIcon: "4",
      podName: "Dolphin Dreamers",
      podIcon: "🐬",
      leader: "@DreamLeader",
      points: 1950,
      members: 112
    },
    {
      rank: 5,
      rankIcon: "5",
      podName: "Ocean Warriors",
      podIcon: "🌊",
      leader: "@WarriorChief",
      points: 1720,
      members: 98
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            🏆 <span className="text-gradient-ocean hover:scale-105 transition-transform inline-block">
              DOLPH Pod Wars Leaderboard
            </span>
          </h2>
          <p className="text-lg md:text-xl text-aqua-light max-w-2xl mx-auto">
            Battle for glory and TON rewards! The strongest pods rise to the top 🌊
          </p>
        </div>

        {/* Leaderboard Table */}
        <div className="max-w-6xl mx-auto">
          <div className="card-ocean hover:scale-[1.01] transition-all duration-300">
            <div className="bg-gradient-to-br from-ocean-medium/30 to-aqua-bright/20 rounded-3xl p-4 md:p-8">
              
              {/* Mobile-friendly leaderboard */}
              <div className="block md:hidden space-y-4">
                {leaderboardData.map((pod, index) => (
                  <div key={index} className="bg-ocean-deep/40 rounded-2xl p-4 hover:bg-ocean-deep/60 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">
                          {typeof pod.rankIcon === 'string' && pod.rankIcon.includes('🥇') ? pod.rankIcon : 
                           typeof pod.rankIcon === 'string' && pod.rankIcon.includes('🥈') ? pod.rankIcon :
                           typeof pod.rankIcon === 'string' && pod.rankIcon.includes('🥉') ? pod.rankIcon :
                           <span className="w-8 h-8 bg-aqua-bright/20 rounded-full flex items-center justify-center text-aqua-bright font-bold">{pod.rank}</span>}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{pod.podIcon}</span>
                            <span className="text-aqua-bright font-bold">{pod.podName}</span>
                          </div>
                          <div className="text-sm text-aqua-light">{pod.leader}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-foam-white font-bold text-lg">{pod.points.toLocaleString()}</div>
                        <div className="text-aqua-light text-sm flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {pod.members}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop table */}
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow className="border-aqua-bright/20 hover:bg-ocean-medium/20">
                      <TableHead className="text-aqua-bright font-bold text-center">Rank</TableHead>
                      <TableHead className="text-aqua-bright font-bold">Pod Name</TableHead>
                      <TableHead className="text-aqua-bright font-bold">Pod Leader</TableHead>
                      <TableHead className="text-aqua-bright font-bold text-center">Points</TableHead>
                      <TableHead className="text-aqua-bright font-bold text-center">Members</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaderboardData.map((pod, index) => (
                      <TableRow key={index} className="border-aqua-bright/10 hover:bg-ocean-medium/20 transition-colors">
                        <TableCell className="text-center">
                          <span className="text-2xl">
                            {typeof pod.rankIcon === 'string' && pod.rankIcon.includes('🥇') ? pod.rankIcon : 
                             typeof pod.rankIcon === 'string' && pod.rankIcon.includes('🥈') ? pod.rankIcon :
                             typeof pod.rankIcon === 'string' && pod.rankIcon.includes('🥉') ? pod.rankIcon :
                             <span className="w-8 h-8 bg-aqua-bright/20 rounded-full flex items-center justify-center text-aqua-bright font-bold mx-auto">{pod.rank}</span>}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{pod.podIcon}</span>
                            <span className="text-aqua-bright font-bold text-lg">{pod.podName}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-foam-white font-medium">{pod.leader}</span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="text-foam-white font-bold text-lg">{pod.points.toLocaleString()}</span>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Users className="w-4 h-4 text-aqua-light" />
                            <span className="text-aqua-light">{pod.members}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Prize Pool Banner */}
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-aqua-bright/20 to-ocean-light/20 border-2 border-aqua-bright/40 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Trophy className="w-6 h-6 text-aqua-bright animate-pulse" />
                  <span className="text-2xl md:text-3xl font-black text-gradient-aqua">
                    🎁 Prize Pool: 300 TON
                  </span>
                  <Trophy className="w-6 h-6 text-aqua-bright animate-pulse" />
                </div>
                <p className="text-lg md:text-xl text-foam-white font-bold">
                  Hold $DOLPH to Play
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodWarsSection;
