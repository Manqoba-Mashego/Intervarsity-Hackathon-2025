"use client";

import React, { useState } from "react";
import { Target, PlusCircle, Coins, CheckCircle2 } from "lucide-react";

const GoalsPage = () => {
  const initialGoals = [
    { id: 1, title: "Emergency Fund", deadline: "2025-12-31", saved: 1000, target: 1000 },
    { id: 2, title: "New Phone", deadline: "2025-09-24", saved: 450, target: 1200 },
    { id: 3, title: "Vacation", deadline: "2025-07-01", saved: 200, target: 1100 },
  ];

  const [goals, setGoals] = useState(initialGoals);
  const [showNewModal, setShowNewModal] = useState(false);
  const [newGoal, setNewGoal] = useState({ title: "", target: "", deadline: "" });
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);
  const [selectedGoalId, setSelectedGoalId] = useState(null);
  const [addAmount, setAddAmount] = useState("");

  const totalSaved = goals.reduce((s, g) => s + g.saved, 0);
  const totalTarget = goals.reduce((s, g) => s + g.target, 0);

  const formatCurrency = (n) => `R${n.toLocaleString()}`;

  const daysLeft = (deadline) => {
    if (!deadline) return "No deadline";
    const diff = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? `${diff} days left` : "Deadline passed";
  };

  const handleSaveNewGoal = (e) => {
    e.preventDefault();
    const targetNum = parseFloat(newGoal.target);
    if (!newGoal.title.trim() || isNaN(targetNum) || targetNum <= 0) {
      alert("Please enter a title and a valid target amount.");
      return;
    }
    const created = {
      id: Date.now(),
      title: newGoal.title.trim(),
      deadline: newGoal.deadline || "",
      saved: 0,
      target: Math.round(targetNum),
    };
    setGoals((prev) => [created, ...prev]);
    setNewGoal({ title: "", target: "", deadline: "" });
    setShowNewModal(false);
  };

  const openAddMoney = (goalId) => {
    setSelectedGoalId(goalId);
    setAddAmount("");
    setShowAddMoneyModal(true);
  };

  const handleAddMoney = (e) => {
    e.preventDefault();
    const amt = parseFloat(addAmount);
    if (isNaN(amt) || amt <= 0) {
      alert("Enter a valid amount to add.");
      return;
    }
    setGoals((prev) =>
      prev.map((g) => (g.id === selectedGoalId ? { ...g, saved: g.saved + Math.round(amt) } : g))
    );
    setShowAddMoneyModal(false);
    setSelectedGoalId(null);
    setAddAmount("");
  };

  // Split goals
  const activeGoals = goals.filter((g) => g.saved < g.target);
  const completedGoals = goals.filter((g) => g.saved >= g.target);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-green-500 w-full h-[160px] px-6 text-white flex flex-col justify-center">
        <h1 className="text-2xl font-bold">Your Goals</h1>
        <p className="text-sm opacity-90">Track your saving quests</p>
      </div>

      {/* Summary Card */}
      <div className="relative -top-12 max-w-7xl mx-auto px-4">
        <div className="bg-white shadow-xl rounded-2xl p-6 flex justify-around text-center">
          <div>
            <p className="text-2xl font-bold text-green-600">{activeGoals.length}</p>
            <p className="text-gray-500 text-sm">Active Goals</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-600">{formatCurrency(totalSaved)}</p>
            <p className="text-gray-500 text-sm">Total Saved</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-600">{formatCurrency(totalTarget)}</p>
            <p className="text-gray-500 text-sm">Target Amount</p>
          </div>
        </div>
      </div>

      {/* Active Goals */}
      <div className="max-w-5xl mx-auto px-4 mt-8 flex flex-col gap-6 pb-12">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Active Goals</h2>
          <button
            onClick={() => setShowNewModal(true)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow-md"
          >
            <PlusCircle className="w-5 h-5" /> New Goal
          </button>
        </div>

        {activeGoals.length === 0 && (
          <p className="text-gray-500 italic">No active goals. Start a new one!</p>
        )}

        {activeGoals.map((goal) => {
          const progress = Math.min(100, Math.round((goal.saved / goal.target) * 100));
          return (
            <div
              key={goal.id}
              className="bg-white rounded-2xl shadow-md p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">{goal.title}</h3>
                </div>
                <p className="text-sm text-gray-500 mt-1">{daysLeft(goal.deadline)}</p>
                <p className="text-green-600 font-bold mt-3">
                  {formatCurrency(goal.saved)}{" "}
                  <span className="text-gray-500 text-sm">of {formatCurrency(goal.target)}</span>
                </p>
                <div className="relative w-full md:w-96 h-3 bg-gray-200 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-700 ease-in-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">{progress}% complete</p>
              </div>
              <div className="flex flex-col sm:items-end gap-3">
                <button
                  onClick={() => openAddMoney(goal.id)}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow-sm"
                >
                  <Coins className="w-4 h-4" /> Add Money
                </button>
                <button className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50">
                  Edit Goal
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completed Goals */}
      {completedGoals.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 mt-4 flex flex-col gap-6 pb-28">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            Completed Goals
          </h2>

          {completedGoals.map((goal) => (
            <div
              key={goal.id}
              className="bg-green-50 border border-green-200 rounded-2xl shadow-sm p-5 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-green-700">{goal.title}</h3>
              </div>
              <p className="text-sm text-gray-500">{daysLeft(goal.deadline)}</p>
              <p className="text-green-700 font-semibold">
                {formatCurrency(goal.saved)} of {formatCurrency(goal.target)} 🎉
              </p>
              <div className="relative w-full h-3 bg-green-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: "100%" }} />
              </div>
              <p className="text-sm text-green-600 mt-1">100% complete</p>
            </div>
          ))}
        </div>
      )}

      {/* Modals */}
      {showNewModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-25" />
          <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
            <h3 className="text-xl font-bold mb-4">Create New Goal</h3>
            <form onSubmit={handleSaveNewGoal} className="flex flex-col gap-3">
              <input
                value={newGoal.title}
                onChange={(e) => setNewGoal((s) => ({ ...s, title: e.target.value }))}
                placeholder="Goal title"
                className="px-4 py-2 border rounded-lg"
              />
              <input
                value={newGoal.target}
                onChange={(e) => setNewGoal((s) => ({ ...s, target: e.target.value }))}
                placeholder="Target amount"
                type="number"
                className="px-4 py-2 border rounded-lg"
              />
              <input
                value={newGoal.deadline}
                onChange={(e) => setNewGoal((s) => ({ ...s, deadline: e.target.value }))}
                type="date"
                className="px-4 py-2 border rounded-lg"
              />
              <div className="flex justify-end gap-3 mt-4">
                <button type="button" onClick={() => setShowNewModal(false)} className="px-4 py-2 rounded-lg bg-gray-200">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 rounded-lg bg-green-600 text-white">
                  Save Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAddMoneyModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-25" />
          <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-sm p-6">
            <h3 className="text-lg font-bold mb-4">Add Money</h3>
            <form onSubmit={handleAddMoney} className="flex flex-col gap-3">
              <input
                value={addAmount}
                onChange={(e) => setAddAmount(e.target.value)}
                placeholder="Amount to add"
                type="number"
                className="px-4 py-2 border rounded-lg"
              />
              <div className="flex justify-end gap-3 mt-4">
                <button type="button" onClick={() => setShowAddMoneyModal(false)} className="px-4 py-2 rounded-lg bg-gray-200">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 rounded-lg bg-green-600 text-white">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bottom Nav */}
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

export default GoalsPage;
