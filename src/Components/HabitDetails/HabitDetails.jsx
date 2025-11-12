import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Spinner from "../Spineer/Spineer";
import successAnimation from "../../Animation/success.json"


const HabitDetails = () => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);

  // Fetch habit by ID
  useEffect(() => {
    axios
      .get(`http://localhost:3000/habits/${id}`)
      .then((res) => setHabit(res.data))
      .catch(() => toast.error("Failed to load habit"));
  }, [id]);

  // Handle Mark Complete
  const handleMarkComplete = async () => {
    try {
      const res = await axios.patch(`http://localhost:3000/habits/${id}/complete`);

      if (res.data.success) {
        toast.success(res.data.message || "Marked complete!");
        setHabit(res.data.updatedHabit);

        
        setShowAnimation(true);
        setTimeout(() => setShowAnimation(false), 2000);
      } else {
        toast.info(res.data.message || "Already marked complete today");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to mark complete");
    }
  };

  if (!habit) return <Spinner />;

  const totalDays = 30;
  const completedDays = habit.completionHistory?.length || 0;
  const progress = Math.min((completedDays / totalDays) * 100, 100);

  return (
    <motion.div
      className="relative max-w-3xl mx-auto p-6 bg-white rounded shadow mt-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Lottie Animation */}
      {showAnimation && (
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 150,
            zIndex: 50,
          }}
        >
          <Lottie animationData={successAnimation} loop={false} />
        </div>
      )}

      <img
        src={habit.photoURL || "https://via.placeholder.com/600x300"}
        alt={habit.title}
        className="w-full h-64 object-cover rounded mb-4"
      />

      <h2 className="text-3xl font-bold mb-2">{habit.title}</h2>
      <p className="text-gray-600 mb-4">{habit.description}</p>
      <p className="mb-2">
        <strong>Category:</strong> {habit.category || "N/A"}
      </p>

      
      <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-700 mb-4">
        Progress: {completedDays} / {totalDays} days ({progress.toFixed(0)}%)
      </p>

      
      <p className="bg-yellow-300 inline-block px-3 py-1 rounded-full mb-3">
        🔥 Current Streak: {habit.currentStreak || completedDays} days
      </p>

      <p className="mt-3 text-gray-600">
        Created by: <strong>{habit.creatorName || "Unknown"}</strong>
      </p>

      {/* Mark Complete Button */}
      <button
        onClick={handleMarkComplete}
        className="mt-5 bg-[#58B19F] text-white px-4 py-2 rounded hover:bg-[#3d8c7a] transition-colors"
      >
        Mark Complete
      </button>
    </motion.div>
  );
};

export default HabitDetails;
