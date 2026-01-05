// UserHome.jsx
import React from "react";

const UserHome = () => {
  // Dummy data (replace with real API)
  const totalHabits = 12;
  const completedHabits = 7;
  const pendingHabits = totalHabits - completedHabits;
  const currentStreak = 5;

  const habitList = [
    { name: "Morning Exercise", status: "Completed" },
    { name: "Read Book", status: "Pending" },
    { name: "Meditation", status: "Completed" },
    { name: "Drink Water 8x", status: "Pending" },
  ];

  return (
    <div className="space-y-6 p-6 mt-20">
      <h2 className="text-3xl font-bold text-gray-800">Welcome Back!</h2>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Total Habits</h3>
          <p className="text-4xl mt-2">{totalHabits}</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Completed Habits</h3>
          <p className="text-4xl mt-2">{completedHabits}</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Current Streak</h3>
          <p className="text-4xl mt-2">{currentStreak} Days</p>
        </div>
      </div>

      {/* Habit List */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">My Habits</h3>
        <ul className="divide-y divide-gray-200">
          {habitList.map((habit, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center py-2"
            >
              <span>{habit.name}</span>
              <span
                className={`font-semibold ${
                  habit.status === "Completed"
                    ? "text-green-500"
                    : "text-gray-500"
                }`}
              >
                {habit.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserHome;
