
import React from "react";


const AdminHome = () => {
  const totalUsers = 1250;
  const newUsersThisWeek = 45;
  const activeHabits = 78;
  const reportsGenerated = 12;

  const recentActivities = [
    "User John updated habit 'Exercise'",
    "New user Jane registered",
    "Admin Mike changed role for Alex",
    "User Sara completed habit 'Meditation'",
    "User Bob added new habit 'Reading'",
  ];

  return (
    <div className="space-y-6 mt-10 p-6">
      <h2 className="text-3xl font-bold text-gray-800">Admin Dashboard</h2>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-4xl mt-2">{totalUsers}</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">New Users This Week</h3>
          <p className="text-4xl mt-2">{newUsersThisWeek}</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Active Habits</h3>
          <p className="text-4xl mt-2">{activeHabits}</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Reports Generated</h3>
          <p className="text-4xl mt-2">{reportsGenerated}</p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Recent Activities</h3>
        <ul className="divide-y divide-gray-200 text-gray-700">
          {recentActivities.map((activity, idx) => (
            <li key={idx} className="py-2">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminHome;
