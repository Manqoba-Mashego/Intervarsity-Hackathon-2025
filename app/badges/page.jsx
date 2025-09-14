import { Trophy, Lock, Flame, Target, Zap, Coins, Star, Rocket, Medal, Gem, PiggyBank, Calendar, Crown, Shield, Sword, Award, Gift, Diamond, Heart, Umbrella} from "lucide-react";
import { Card, CardContent } from "@/components/BadgeCards";

const badges = [
  // Savings Badges
  { id: "first-steps", name: "First Steps", description: "Created your first saving goal", icon: <Target className="w-8 h-8 text-pink-500"/>, unlocked: true },
  { id: "quick-saver", name: "Quick Saver", description: "Saved R100 in one day", icon: <Zap className="w-8 h-8 text-green-500"/>, unlocked: true },
  { id: "treasure-hunter", name: "Treasure Hunter", description: "Saved R1000 total", icon: <Coins className="w-8 h-8 text-amber-600"/>, unlocked: false },
  { id: "money-mountain", name: "Money Mountain", description: "Saved R5000 total", icon: <PiggyBank className="w-8 h-8 text-purple-600"/>, unlocked: false },
  { id: "vault-keeper", name: "Vault Keeper", description: "Saved R10,000 total", icon: <Shield className="w-8 h-8 text-blue-500"/>, unlocked: false },
  { id: "rainy-day", name: "Rainy Day Ready", description: "Fully funded an emergency goal", icon: <Umbrella className="w-8 h-8 text-teal-500"/>, unlocked: false },
  { id: "double-up", name: "Double Up", description: "Completed 2 saving goals", icon: <Award className="w-8 h-8 text-indigo-500"/>, unlocked: false },
  { id: "goal-crusher", name: "Goal Crusher", description: "Completed 5 saving goals", icon: <Trophy className="w-8 h-8 text-yellow-500"/>, unlocked: false },

  // Streak Badges
  { id: "streak-starter", name: "Streak Starter", description: "Saved 3 days straight", icon: <Flame className="w-8 h-8 text-orange-400"/>, unlocked: true },
  { id: "streak-master", name: "Streak Master", description: "Saved 7 days straight", icon: <Flame className="w-8 h-8 text-orange-500"/>, unlocked: true },
  { id: "streak-pro", name: "Streak Pro", description: "Saved 14 days straight", icon: <Flame className="w-8 h-8 text-orange-600"/>, unlocked: false },
  { id: "consistency", name: "Consistency King", description: "Saved 30 days straight", icon: <Crown className="w-8 h-8 text-yellow-600"/>, unlocked: false },
  { id: "relentless", name: "Relentless", description: "Saved 60 days straight", icon: <Calendar className="w-8 h-8 text-emerald-600"/>, unlocked: false },
  { id: "unstoppable", name: "Unstoppable", description: "Saved 100 days straight", icon: <Flame className="w-8 h-8 text-red-600"/>, unlocked: false },

  // XP & Level Badges
  { id: "xp-beginner", name: "XP Beginner", description: "Earned 100 XP", icon: <Star className="w-8 h-8 text-purple-500"/>, unlocked: true },
  { id: "xp-explorer", name: "XP Explorer", description: "Earned 500 XP", icon: <Rocket className="w-8 h-8 text-blue-500"/>, unlocked: true },
  { id: "xp-adventurer", name: "XP Adventurer", description: "Earned 1000 XP", icon: <Rocket className="w-8 h-8 text-indigo-600"/>, unlocked: false },
  { id: "xp-master", name: "XP Master", description: "Earned 5000 XP", icon: <Medal className="w-8 h-8 text-emerald-600"/>, unlocked: false },
  { id: "xp-champion", name: "XP Champion", description: "Earned 10,000 XP", icon: <Gem className="w-8 h-8 text-pink-600"/>, unlocked: false },
  { id: "level-5", name: "Level 5", description: "Reached Level 5", icon: <Star className="w-8 h-8 text-yellow-500"/>, unlocked: true },
  { id: "level-10", name: "Level 10", description: "Reached Level 10", icon: <Star className="w-8 h-8 text-yellow-600"/>, unlocked: false },
  { id: "level-20", name: "Level 20", description: "Reached Level 20", icon: <Star className="w-8 h-8 text-yellow-700"/>, unlocked: false },

  // Special & Challenge Badges
  { id: "first-goal-done", name: "First Goal Done", description: "Completed your first goal", icon: <Medal className="w-8 h-8 text-sky-500"/>, unlocked: true },
  { id: "collector", name: "Collector", description: "Created 3+ goals", icon: <Gift className="w-8 h-8 text-rose-500"/>, unlocked: false },
  { id: "strategist", name: "Strategist", description: "Split savings across 3 goals", icon: <Sword className="w-8 h-8 text-gray-700"/>, unlocked: false },
  { id: "big-dreamer", name: "Big Dreamer", description: "Set a goal above R20,000", icon: <Diamond className="w-8 h-8 text-cyan-600"/>, unlocked: false },
  { id: "team-player", name: "Team Player", description: "Joined a group challenge", icon: <Heart className="w-8 h-8 text-red-500"/>, unlocked: false },
  { id: "challenge-conqueror", name: "Challenge Conqueror", description: "Completed a challenge", icon: <Trophy className="w-8 h-8 text-indigo-700"/>, unlocked: false },
  { id: "marathon-saver", name: "Marathon Saver", description: "Saved for 6 months", icon: <Calendar className="w-8 h-8 text-purple-700"/>, unlocked: false },
  { id: "legendary-hero", name: "Legendary Hero", description: "Unlocked all milestones", icon: <Crown className="w-8 h-8 text-yellow-500"/>, unlocked: false },
];

export default function BadgesPage() {
  const unlockedCount = badges.filter(b => b.unlocked).length;
  const progress = (unlockedCount / badges.length) * 100;

  return (
    <div className="w-full mb-40">
      <div className=" relative bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 px-10 h-[160px] ">
        <h1 className="text-3xl font-bold">Achievement Badges</h1>
        <p className="mt-2 text-purple-200">
          Track your progress and unlock achievements!
        </p>
        {/* progress bar */}
        <div className="absolute -bottom-33 inset-x-10 ">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Your Progress
            </h2>
            <div className="mb-6">
          <p className="text-sm text-gray-500">
            {unlockedCount} of {badges.length} badges earned
          </p>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mt-1">
            <div className="h-3 bg-green-500 rounded-full" style={{width: `${progress}%`}} />
          </div>
        </div>
          </div>
      </div>
      </div>

      
      
 

      {/* Badge grid */}
      <div className="mt-45 px-4 sm:px-6 lg:px-12">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
    {badges.map((badge) => (
      <Card
        key={badge.id}
        className={`relative ${badge.unlocked ? "opacity-100" : "opacity-40"}`}
      >
        <CardContent className="flex flex-col items-center justify-center p-4 text-center">
          <div className="mb-2">{badge.icon}</div>
          <h2 className="font-semibold">{badge.name}</h2>
          <p className="text-sm text-gray-500">{badge.description}</p>
          {!badge.unlocked && (
            <Lock className="absolute top-2 right-2 w-4 h-4 text-gray-500" />
          )}
        </CardContent>
      </Card>
    ))}
  </div>
</div>



    </div>
  );
}
