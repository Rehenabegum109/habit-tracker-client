import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Spinner from "../Spineer/Spineer";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // ✅ Tooltip CSS

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

  if (loading) return <Spinner />;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-[#58B19F]">Public Habits</h2>

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
                  className="mx-auto cursor-pointer"
                  data-tooltip-id={`photo-${habit._id}`}
                />
                <Tooltip id={`photo-${habit._id}`} place="top">
                  Created by {habit.creatorName}
                </Tooltip>
              </td>

              
              <td className="border p-2">
                <span
                  data-tooltip-id={`title-${habit._id}`}
                  className="cursor-pointer text-[#58B19F] font-semibold hover:underline"
                >
                  {habit.title}
                </span>
                <Tooltip id={`title-${habit._id}`} place="top" className="!bg-white !text-gray-800 !p-3 !rounded-xl !border !shadow-lg">
                  <p className="font-semibold text-[#58B19F]">{habit.title}</p>
                  <p className="text-sm"><strong>Description:</strong> {habit.description || "No description"}</p>
                  <p className="text-sm"><strong>Creator:</strong> {habit.creatorName}</p>
                  <p className="text-sm"><strong>Category:</strong> {habit.category || "N/A"}</p>
                </Tooltip>
              </td>

              <td className="border p-2">{habit.description}</td>
              <td className="border p-2">{habit.creatorName}</td>

              
              <td className="border p-2 space-x-2">
                <button
                  data-tooltip-id={`details-${habit._id}`}
                  className="bg-[#58B19F] text-white px-2 py-1 rounded"
                  onClick={() => navigate(`/habit/${habit._id}`)}
                >
                  See Details
                </button>
                <Tooltip id={`details-${habit._id}`} place="top">
                  View full details of this habit
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PublicHabits;
