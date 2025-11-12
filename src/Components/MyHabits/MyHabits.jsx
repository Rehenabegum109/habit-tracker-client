import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContexts";

import { toast } from "react-toastify";
import UpdateHabits from "./UpdateHabits";
import Spinner from "../Spineer/Spineer";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [selectedHabitId, setSelectedHabitId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user's own habits
  const fetchHabits = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/habits?userEmail=${user.email}`);
      setHabits(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch habits");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) fetchHabits();
  }, [user]);

  if (loading) return <Spinner/>

  // Delete Habit
  const handleDelete = async (habitId) => {
    if (!window.confirm("Are you sure you want to delete this habit?")) return;
    try {
      await axios.delete(`http://localhost:3000/habits/${habitId}`);
      toast.success("Habit deleted!");
      fetchHabits();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete habit");
    }
  };

  // Mark Complete (Increment currentStreak)
  const handleMarkComplete = async (habit) => {
    try {
      const newStreak = (habit.currentStreak || 0) + 1;
      await axios.patch(`http://localhost:3000/habits/${habit._id}`, { currentStreak: newStreak });
      toast.success("Marked complete!");
      fetchHabits();
    } catch (err) {
      console.error(err);
      toast.error("Failed to mark complete");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">My Habits</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Title</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Current Streak</th>
            <th className="border p-2">Created Date</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {habits.map((habit) => (
            <tr key={habit._id}>
              <td className="border p-2">{habit.title}</td>
              <td className="border p-2">{habit.category}</td>
              <td className="border p-2">{habit.currentStreak || 0}</td>
              <td className="border p-2">{new Date(habit.createdAt).toLocaleDateString()}</td>
              <td className="border p-2 space-x-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => setSelectedHabitId(habit._id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(habit._id)}
                >
                  Delete
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => handleMarkComplete(habit)}
                >
                  Mark Complete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Habit Modal */}
      {selectedHabitId && (
        <UpdateHabits
          habitId={selectedHabitId}
          onClose={() => setSelectedHabitId(null)}
          onUpdated={fetchHabits}
        />
      )}
    </div>
  );
};

export default MyHabits;
