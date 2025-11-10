// src/Components/FeaturedHabits/FeaturedHabits.jsx
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContexts";

const FeaturedHabits = () => {
  const [habits, setHabits] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:3000/habits/featured")
      .then((res) => res.json())
      .then((data) => setHabits(data))
      .catch((err) => console.error(err));
  }, []);

  const handleViewDetails = (habitId) => {
    if (user) {
      navigate(`/habit/${habitId}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="py-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Habits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <div
            key={habit._id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-bold text-xl mb-2">{habit.title}</h3>
              <p className="text-gray-600 mb-2 flex-1">{habit.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                {habit.public ? `By: ${habit.creatorName}` : ""}
              </p>
              <button
                onClick={() => handleViewDetails(habit._id)}
                className="mt-auto btn rounded btn-sm bg-[#58B19F] text-white"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedHabits;
