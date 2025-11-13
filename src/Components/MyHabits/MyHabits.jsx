import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContexts";
import { toast } from "react-toastify";
import UpdateHabits from "./UpdateHabits";
import Spinner from "../Spineer/Spineer";
import Lottie from "lottie-react";
import successAnimation from "../../Animation/success.json";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; 

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [selectedHabitId, setSelectedHabitId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);

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

  if (loading) return <Spinner />;

  //  Delete Habit
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
  //  Mark Complete (Lottie animation)
  const handleMarkComplete = async (habit) => {
    try {
      const newStreak = (habit.currentStreak || 0) + 1;
      await axios.patch(`http://localhost:3000/habits/${habit._id}`, { currentStreak: newStreak });

      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 4000);
      fetchHabits();
    } catch (err) {
      console.error(err);
      toast.error("Failed to mark complete");
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-[#58B19F]">My Habits</h2>

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
              {/* Title Tooltip */}
              <td className="border p-2">
                <span
                  data-tooltip-id={`habit-${habit._id}`}
                  className="cursor-pointer text-[#58B19F] font-semibold hover:underline"
                >
                  {habit.title}
                </span>

                <Tooltip id={`habit-${habit._id}`} place="top" className="!bg-white !text-gray-800 !p-3 !rounded-xl !border !shadow-lg">
                  <p className="font-semibold text-[#58B19F] mb-1">{habit.title}</p>
                  <p className="text-sm"><strong>Description:</strong> {habit.description || "No description"}</p>
                  <p className="text-sm"><strong>Category:</strong> {habit.category || "N/A"}</p>
                  <p className="text-sm"><strong>Streak:</strong> {habit.currentStreak || 0} days</p>
                </Tooltip>
              </td>

              <td className="border p-2">{habit.category}</td>
              <td className="border p-2">{habit.currentStreak || 0}</td>
              <td className="border p-2">{new Date(habit.createdAt).toLocaleDateString()}</td>

              {/* Action Buttons */}
              <td className="border p-2 space-x-2">
                {/*  Update */}
                <button
                  data-tooltip-id={`update-${habit._id}`}
                  className="bg-[#58B19F] text-white px-2 py-1 rounded"
                  onClick={() => setSelectedHabitId(habit._id)}
                >
                  Update
                </button>
                <Tooltip id={`update-${habit._id}`} place="top">
                  Edit this habit’s details
                </Tooltip>

                {/*  Delete */}
                <button
                  data-tooltip-id={`delete-${habit._id}`}
                  className="bg-[#58B19F] text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(habit._id)}
                >
                  Delete
                </button>
                <Tooltip id={`delete-${habit._id}`} place="top" className="!bg-red-500 !text-white">
                  This will permanently delete this habit!
                </Tooltip>

                {/* Mark Complete */}
                <button
                  data-tooltip-id={`complete-${habit._id}`}
                  className="bg-[#58B19F] text-white px-2 py-1 rounded"
                  onClick={() => handleMarkComplete(habit)}
                >
                  Mark Complete
                </button>
                <Tooltip id={`complete-${habit._id}`} place="top">
                  Mark this habit as completed for today!
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*Success Animation Overlay */}
      {showAnimation && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-50">
          <Lottie animationData={successAnimation} loop={false} autoplay={true} style={{ width: 200, height: 200 }} />
        </div>
      )}

      {/*  Update Habit Modal */}
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
