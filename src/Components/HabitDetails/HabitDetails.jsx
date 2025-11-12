import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContexts";

const HabitDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch habit details
  const fetchHabit = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/habits/${id}`);
      setHabit(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch habit details");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login"); // redirect if not logged in
    } else {
      fetchHabit();
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (!habit) return <div>Habit not found</div>;

  // Calculate progress (% of days completed in last 30)
  const completedDays = habit.completedDaysLast30 || 0; // assuming backend provides this array count
  const progressPercent = Math.min(Math.round((completedDays / 30) * 100), 100);

  // Handle Mark Complete
  const handleMarkComplete = async () => {
    try {
      const newStreak = (habit.currentStreak || 0) + 1;
      await axios.patch(`http://localhost:3000/habits/${habit._id}`, {
        currentStreak: newStreak,
      });
      toast.success("Marked Complete!");
      fetchHabit();
    } catch (err) {
      console.error(err);
      toast.error("Failed to mark complete");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        className="bg-gray-300 px-3 py-1 rounded mb-4"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <div className="bg-white shadow p-6 rounded">
        <h2 className="text-3xl font-bold mb-2">{habit.title}</h2>
        <p className="mb-4">{habit.description}</p>

        <div className="mb-4">
          <img
            src={habit.photoURL || "https://via.placeholder.com/300"}
            alt={habit.title}
            className="w-full max-w-md h-auto rounded"
          />
        </div>

        <p className="mb-2">
          <strong>Category:</strong> {habit.category || "N/A"}
        </p>

        {/* Progress bar */}
        <div className="mb-4">
          <p className="mb-1">
            Progress (Last 30 days): {progressPercent}%
          </p>
          <div className="w-full bg-gray-200 h-4 rounded">
            <div
              className="bg-green-500 h-4 rounded"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Streak badge */}
        <p className="mb-4">
          <span className="bg-yellow-300 px-2 py-1 rounded-full font-semibold">
            Current Streak: {habit.currentStreak || 0} days
          </span>
        </p>

        {/* Creator info */}
        <p className="mb-4">
          <strong>Creator:</strong> {habit.creatorName}
        </p>

        {/* Mark Complete button */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleMarkComplete}
        >
          Mark Complete
        </button>
      </div>
    </div>
  );
};

export default HabitDetails;
