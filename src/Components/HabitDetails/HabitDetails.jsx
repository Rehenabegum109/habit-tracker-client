// import React, { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router";
// import axios from "axios";
// import { AuthContext } from "../Contexts/AuthContexts";
// import { toast } from "react-toastify";

// const HabitDetails = () => {
//   const { id } = useParams();
//   const { user } = useContext(AuthContext);
//   const [habit, setHabit] = useState(null);
//   const [progress, setProgress] = useState(0);
//   const [loading, setLoading] = useState(true);

//   // Fetch single habit by ID
//   const fetchHabit = async () => {
//     try {
//       const res = await axios.get(`http://localhost:3000/habits/${id}`);
//       setHabit(res.data);
//       calculateProgress(res.data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to fetch habit details");
//       setLoading(false);
//     }
//   };

//   // Calculate progress for last 30 days (random example logic)
//   const calculateProgress = (habit) => {
//     const streak = habit.currentStreak || 0;
//     const percent = Math.min((streak / 30) * 100, 100);
//     setProgress(percent);
//   };

//   // Handle Mark Complete
//   const handleMarkComplete = async () => {
//     try {
//       const newStreak = (habit.currentStreak || 0) + 1;
//       await axios.patch(`http://localhost:3000/habits/${id}`, {
//         currentStreak: newStreak,
//       });
//       toast.success("Habit marked complete!");
//       fetchHabit();
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to update habit");
//     }
//   };

//   useEffect(() => {
//     fetchHabit();
//   }, [id]);

//   if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;
//   if (!habit) return <div className="text-center mt-10 text-red-500">Habit not found</div>;

//   return (
//     <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mt-6">
//       <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
//         {habit.title}
//       </h2>

//       <img
//         src={habit.photoURL || "https://via.placeholder.com/600x300"}
//         alt={habit.title}
//         className="w-full h-64 object-cover rounded-lg mb-4"
//       />

//       <p className="text-gray-700 mb-2">
//         <strong>Description:</strong> {habit.description}
//       </p>

//       <p className="text-gray-700 mb-2">
//         <strong>Category:</strong> {habit.category || "N/A"}
//       </p>

//       <div className="flex justify-between items-center mt-4 mb-4">
//         <div className="text-gray-600">
//           👩‍💼 <strong>Creator:</strong> {habit.creatorName || "Anonymous"}
//         </div>

//         {/* Streak Badge */}
//         <div className="bg-orange-500 text-white px-4 py-1 rounded-full font-semibold">
//           🔥 Streak: {habit.currentStreak || 0} days
//         </div>
//       </div>

//       {/* Progress Bar */}
//       <div className="mb-4">
//         <p className="text-gray-700 mb-1 font-medium">
//           Progress (last 30 days): {progress.toFixed(0)}%
//         </p>
//         <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
//           <div
//             className="bg-green-500 h-4 rounded-full transition-all duration-500"
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* Mark Complete Button */}
//       {user && (
//         <div className="text-center mt-6">
//           <button
//             onClick={handleMarkComplete}
//             className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md"
//           >
//             ✅ Mark Complete
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HabitDetails;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const HabitDetails = () => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);

  
  useEffect(() => {
    axios.get(`http://localhost:3000/habits/${id}`)
      .then(res => setHabit(res.data))
      .catch(() => toast.error("Failed to load habit"));
  }, [id]);

  //  Mark Complete button handler
  const handleMarkComplete = async () => {
    try {
      const res = await axios.patch(`http://localhost:3000/habits/${id}/complete`);
      
      if (res.data.success) {
        toast.success(res.data.message || "Marked complete!");
        setHabit(res.data.updatedHabit); 
      } else {
        toast.info(res.data.message || "Already marked complete today");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to mark complete");
    }
  };

  if (!habit) return <p>Loading...</p>;

  
  const totalDays = 30;
  const completedDays = habit.completionHistory?.length || 0;
  const progress = Math.min((completedDays / totalDays) * 100, 100);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <img
        src={habit.photoURL}
        alt={habit.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-3xl font-bold mb-2">{habit.title}</h2>
      <p className="text-gray-600 mb-4">{habit.description}</p>
      <p className="mb-2"><strong>Category:</strong> {habit.category}</p>

      {/* ✅ Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-700 mb-4">
        Progress: {completedDays} / {totalDays} days ({progress.toFixed(0)}%)
      </p>

      
      <p className="bg-yellow-300 inline-block px-3 py-1 rounded-full mb-3">
        🔥 Current Streak: {habit.currentStreak || completedDays}
      </p>

      
      <p className="mt-3 text-gray-600">
        Created by: <strong>{habit.creatorName || "Unknown"}</strong>
      </p>

  
      <button
        onClick={handleMarkComplete}
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Mark Complete
      </button>
    </div>
  );
};

export default HabitDetails;
