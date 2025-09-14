"use client";

import React, { useState } from "react";
import { Users, Trophy } from "lucide-react";

const LeaderboardPage = () => {
  const [showAll, setShowAll] = useState(false);

  const leaderboard = [
    { id: 1, name: "Alex M.", score: 480, title: "Top saver" },
    { id: 2, name: "You", score: 320, title: "Rising star" },
    { id: 3, name: "Sarah K.", score: 290, title: "Steady saver" },
    { id: 4, name: "Jamie L.", score: 180, title: "New challenger" },
    { id: 5, name: "Chris P.", score: 150, title: "Saver in training" },
    { id: 6, name: "Taylor B.", score: 140, title: "Getting started" },
    { id: 7, name: "Jordan W.", score: 130, title: "Budget explorer" },
    { id: 8, name: "Casey R.", score: 120, title: "Smart spender" },
    { id: 9, name: "Morgan T.", score: 100, title: "Frugal beginner" },
    { id: 10, name: "Riley S.", score: 90, title: "On the path" },
  ];

  const displayedPlayers = showAll ? leaderboard : leaderboard.slice(0, 5);

  return (
    <div className="min-h-screen">
      <header className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white h-[160px] ">
        <div className="h-[200px] max-w-5xl mx-auto px-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Compete with Friends
            </h1>
            <p className="mt-2 text-md opacity-90">
              Climb the leaderboard and show who’s the ultimate saver!
            </p>
          </div>
          <Users className="hidden md:block w-16 h-16 text-white/80" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 mt-10 pb-32">
        <section className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" /> Leaderboard
            </h2>
          </div>

          <>
            <div className="grid grid-cols-3 gap-4 text-center mb-8">
              {leaderboard.slice(0, 3).map((player, i) => (
                <div
                  key={player.id}
                  className={`rounded-2xl p-4 shadow-md ${
                    i === 0
                      ? "bg-yellow-50"
                      : i === 1
                      ? "bg-gray-50"
                      : "bg-amber-50"
                  } ${
                    player.name === "You" ? "ring-2 ring-green-500" : ""
                  }`}
                >
                  <div
                    className={`w-12 h-12 mx-auto flex items-center justify-center rounded-full font-bold text-white ${
                      i === 0
                        ? "bg-yellow-400"
                        : i === 1
                        ? "bg-gray-400"
                        : "bg-amber-700"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <p
                    className={`mt-2 font-semibold ${
                      player.name === "You" ? "text-green-600" : ""
                    }`}
                  >
                    {player.name}
                  </p>
                  <p className="text-sm text-gray-500">{player.title}</p>
                  <p className="mt-1 font-bold">{`R${player.score}`}</p>
                </div>
              ))}
            </div>

            <ol className="space-y-3">
              {displayedPlayers.map((player, i) => (
                <li
                  key={player.id}
                  className={`flex items-center justify-between rounded-lg p-3 border shadow-sm ${
                    player.name === "You"
                      ? "bg-green-50 border-green-200"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                        player.name === "You"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div
                        className={`text-sm font-semibold ${
                          player.name === "You" ? "text-green-700" : ""
                        }`}
                      >
                        {player.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {player.title}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`text-sm font-bold ${
                      player.name === "You" ? "text-green-700" : ""
                    }`}
                  >
                    {`R${player.score}`}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 text-center">
              <button
                className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold shadow hover:scale-[1.02] transition"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "View Full Leaderboard"}
              </button>
            </div>
          </>
        </section>
      </main>
    </div>
  );
};

export default LeaderboardPage;
