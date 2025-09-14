import React from "react";
import Link from "next/link";
import { Ribbon , Flame, Award, Coins, Zap, Target } from "lucide-react";

const DashboardPage = () => {
  // Example data
  const weeklyGoal = 500;
  const savedThisWeek = 350;
  const totalSaved = 1240;
  const dayStreak = 7;
  const badges = 8;
  const level = 12;

  const recentBadges = [
    {
      name: "First Goal",
      color: "bg-pink-500",
      icon: <Target className="w-6 h-6 text-white" />,
    },
    {
      name: "Week Streak",
      color: "bg-orange-500",
      icon: <Flame className="w-6 h-6 text-white" />,
    },
    {
      name: "Quick Saver",
      color: "bg-purple-600",
      icon: <Zap className="w-6 h-6 text-white" />,
    },
  ];

  const progressPercent = (savedThisWeek / weeklyGoal) * 100;

  return (
    <div className="min-h-screen bg-gray-50 mb-10 pb-30">
      {/* Top Green Navbar */}
      <div className="relative bg-green-500 w-full h-[160px] px-6 text-white flex flex-col justify-center">
        <h1 className="text-2xl font-bold">Welcome back, Saver!</h1>
        <div className="mt-2 inline-flex items-center gap-2 bg-purple-600 px-3 py-1 rounded-full shadow-md w-fit">
          <Award className="w-4 h-4 text-white" />
          <span className="text-sm font-semibold">Silver Strategist</span>
        </div>

        {/* Level on top-right */}
        <p className="absolute top-6 right-6 text-right">
          <span className="text-base">Current Level</span> <br />
          <span className="text-2xl font-bold">{level}</span>
        </p>

        {/* Weekly Goal Card (absolute inside navbar) */}
        <div className="absolute -bottom-60 inset-x-6 bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
          <h2 className="text-lg font-bold text-gray-800">Weekly Goal</h2>
          <p className="text-3xl font-extrabold text-green-600">
            R{savedThisWeek}
          </p>
          <p className="text-sm text-gray-500">
            3 days left of R{weeklyGoal}
          </p>

          {/* Progress bar */}
          <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <div className="mt-2 flex justify-between">
  <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl font-semibold shadow-md cursor-pointer">
    + Add Savings
  </button>
  <button className="bg-white hover:bg-gray-100 text-green-600 border border-green-600 py-2 px-4 rounded-xl font-semibold shadow-md cursor-pointer">
    View all goals
  </button>
</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 mt-70 grid gap-6 max-w-4xl mx-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
            <Coins className="w-6 h-6 text-yellow-500" />
            <p className="text-lg font-bold">R{totalSaved}</p>
            <p className="text-xs text-gray-500">Total Saved</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
            <Flame className="w-6 h-6 text-orange-500" />
            <p className="text-lg font-bold">{dayStreak}</p>
            <p className="text-xs text-gray-500">Day Streak</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
            <Award className="w-6 h-6 text-purple-500" />
            <p className="text-lg font-bold">{badges}</p>
            <p className="text-xs text-gray-500">Badges</p>
          </div>
        </div>

        {/* Recent Badges */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Recent Badges</h2>
          <Link href="/badges" className="text-green-600 text-sm font-semibold">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {recentBadges.map((badge, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center gap-2"
            >
              <div
                className={`w-16 h-16 ${badge.color} rounded-full flex items-center justify-center shadow-md`}
              >
                {badge.icon}
              </div>
              <p className="text-sm font-semibold">{badge.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-inner py-2 px-4 flex justify-around text-gray-600">
        <button className="flex flex-col items-center text-green-600">
          <span>🏠</span>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center">
          <span>🎯</span>
          <span className="text-xs">Goals</span>
        </button>
        <button className="flex flex-col items-center">
          <span>🏅</span>
          <span className="text-xs">Badges</span>
        </button>
        <button className="flex flex-col items-center">
          <span>⚔️</span>
          <span className="text-xs">Challenges</span>
        </button>
        <button className="flex flex-col items-center">
          <span>📜</span>
          <span className="text-xs">Quests</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
