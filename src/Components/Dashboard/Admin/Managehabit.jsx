import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/AxiosSecure";

const ManageHabits = () => {
    const axiosSecure =useAxiosSecure()
  const [habits, setHabits] = useState([]);

  // Fetch all public habits
  const fetchPublicHabits = async () => {
    try {
      const res = await axiosSecure.get("/habits/public");
      setHabits(res.data);
    } catch (err) {
      console.error("Failed to fetch public habits", err);
    }
  };

  useEffect(() => {
    fetchPublicHabits();
  }, []);

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Public Habits</h2>

      {habits.length === 0 ? (
        <p className="text-center mt-4">No public habits available!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Habit Title</th>
                <th className="px-4 py-2 border">Current Streak</th>
                <th className="px-4 py-2 border">Created At</th>
              </tr>
            </thead>
            <tbody>
              {habits.map((habit, index) => (
                <tr key={habit._id} className="text-center">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{habit.title}</td>
                  <td className="px-4 py-2 border">{habit.currentStreak || 0}</td>
                  <td className="px-4 py-2 border">
                    {new Date(habit.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageHabits;
