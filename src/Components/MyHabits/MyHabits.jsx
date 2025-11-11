import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContexts";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/habits?userEmail=${user.email}`)
        .then((res) => setHabits(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto p-4">
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
                <button className="bg-[#58B19F] text-white px-2 py-1 rounded">Update</button>
                <button className="bg-[#58B19F] text-white px-2 py-1 rounded">Delete</button>
                <button className="bg-[#58B19F] text-white px-2 py-1 rounded">Mark Complete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyHabits;
