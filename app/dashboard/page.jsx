import React from "react";
import Link from "next/link";
import { Ribbon, Flame, Award, Coins, Zap, Target, User } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Top banner */}
      <div className="relative bg-gradient-to-r from-green-500 to-green-600 w-full h-[160px]  px-6 text-white flex flex-col justify-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Welcome back, Saver!</h1>
              <p className="text-sm opacity-80">Keep your streak alive 🚀</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm">Level</p>
            <p className="text-2xl font-bold">{level}</p>
          </div>
        </div>
      </div>

      {/* Weekly goal card */}
      <div className="relative -top-10 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Weekly Quest</h2>
            <div className="flex items-center gap-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              <Award className="w-4 h-4" />
              Silver Strategist
            </div>
          </div>

          <p className="text-3xl font-extrabold text-green-600 mt-2">
            R{savedThisWeek}
          </p>
          <p className="text-sm text-gray-500">3 days left • Goal R{weeklyGoal}</p>

          <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden mt-4">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <div className="mt-4 flex gap-3">
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl font-semibold shadow-md">
              + Add Savings
            </button>
            <button className="flex-1 bg-white hover:bg-gray-100 text-green-600 border border-green-600 py-2 px-4 rounded-xl font-semibold shadow-md">
              View Goals
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center">
          <Coins className="w-6 h-6 text-yellow-500" />
          <p className="text-lg font-bold mt-1">R{totalSaved}</p>
          <p className="text-xs text-gray-500">Total Saved</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center">
          <Flame className="w-6 h-6 text-orange-500" />
          <p className="text-lg font-bold mt-1">{dayStreak}</p>
          <p className="text-xs text-gray-500">Day Streak</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center">
          <Award className="w-6 h-6 text-purple-500" />
          <p className="text-lg font-bold mt-1">{badges}</p>
          <p className="text-xs text-gray-500">Badges</p>
        </div>
      </div>

      {/* Recent Badges */}
      <div className="p-6 mt-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-gray-800">Recent Badges</h2>
          <Link href="/badges" className="text-green-600 text-sm font-semibold">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {recentBadges.map((badge, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform"
            >
              <div
                className={`w-16 h-16 ${badge.color} rounded-full flex items-center justify-center shadow-md`}
              >
                {badge.icon}
              </div>
              <p className="text-sm font-semibold text-center">
                {badge.name}
              </p>
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
