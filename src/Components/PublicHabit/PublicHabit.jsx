import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Spinner from "../Spineer/Spineer";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const PublicHabits = () => {
  const [habits, setHabits] = useState([]);
  const [filteredHabits, setFilteredHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", "Morning", "Work", "Fitness", "Evening", "Study"];

  useEffect(() => {
    fetch("http://localhost:3000/habits/public")
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
        setFilteredHabits(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {
    let filtered = habits;

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (habit) => habit.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Search filter
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (habit) =>
          habit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          habit.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredHabits(filtered);
  }, [searchTerm, selectedCategory, habits]);

  if (loading) return <Spinner />;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-[#58B19F] text-center">
        Public Habits
      </h2>

      {/* 🔍 Search + Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-3">
        <div className="flex items-center border rounded-lg px-3 py-2 w-full md:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search habits by title or keyword..."
            className="flex-1 outline-none bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#58B19F]"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/*  Habits Table */}
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
          {filteredHabits.length > 0 ? (
            filteredHabits.map((habit) => (
              <tr key={habit._id} className="text-center hover:bg-gray-50">
              
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

                {/* 🏷 Title Tooltip */}
                <td className="border p-2">
                  <span
                    data-tooltip-id={`title-${habit._id}`}
                    className="cursor-pointer text-[#58B19F] font-semibold hover:underline"
                  >
                    {habit.title}
                  </span>
                  <Tooltip
                    id={`title-${habit._id}`}
                    place="top"
                    className="!bg-white !text-gray-800 !p-3 !rounded-xl !border !shadow-lg"
                  >
                    <p className="font-semibold text-[#58B19F]">{habit.title}</p>
                    <p className="text-sm">
                      <strong>Description:</strong> {habit.description || "No description"}
                    </p>
                    <p className="text-sm">
                      <strong>Creator:</strong> {habit.creatorName}
                    </p>
                    <p className="text-sm">
                      <strong>Category:</strong> {habit.category || "N/A"}
                    </p>
                  </Tooltip>
                </td>

                <td className="border p-2">{habit.description}</td>
                <td className="border p-2">{habit.creatorName}</td>

                {/* 👁 Action Button */}
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
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-6 text-center text-gray-500">
                ❌ No habits found matching your search or category.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PublicHabits;




