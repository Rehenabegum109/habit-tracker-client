import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Spinner from "../Spineer/Spineer";

const PublicHabits = () => {
  const [habits, setHabits] = useState([]);
  const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/habits/public")
      .then(res => res.json())
      .then(data => {
        setHabits(data);
        setLoading(false); 
      })
          .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
    if (loading) return <Spinner/>;
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Public Habits</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-center">
            <th className="border p-2">Photo</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Creator</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {habits.map((habit) => (
            <tr key={habit._id} className="text-center">
              <td className="border p-2">
                <img
                  src={habit.photoURL || "https://via.placeholder.com/100"}
                  alt={habit.title}
                  width="100"
                  height="100"
                  className="mx-auto"
                />
              </td>
              <td className="border p-2">{habit.title}</td>
              <td className="border p-2">{habit.description}</td>
              <td className="border p-2">{habit.creatorName}</td>
              <td className="border p-2 space-x-2">
                <button
                  className="bg-[#58B19F] text-white px-2 py-1 rounded"
                  onClick={() => navigate(`/habit/${habit._id}`)}
                >
                  See Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PublicHabits;
