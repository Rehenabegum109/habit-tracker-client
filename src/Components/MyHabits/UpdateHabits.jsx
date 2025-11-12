import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateHabits = ({ habitId, onClose }) => {
  const [habit, setHabit] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  // Fetch habit data by id
  const fetchHabit = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/habits/${habitId}`);
      setHabit(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setCategory(res.data.category);
      setReminderTime(res.data.reminder_time);
      setPhotoURL(res.data.photoURL);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch habit data");
    }
  };

  useEffect(() => {
    if (habitId) fetchHabit();
  }, [habitId]);

  // Update habit
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedHabit = {
      title,
      description,
      category,
      reminder_time: reminderTime,
      photoURL
    };
    try {
      await axios.patch(`http://localhost:3000/habits/${habitId}`, updatedHabit);
      toast.success("Habit updated successfully!");
      onClose(); // Close modal
    } catch (err) {
      console.error(err);
      toast.error("Failed to update habit");
    }
  };

  if (!habit) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 font-bold"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-xl font-bold mb-4">Update Habit</h2>
        <form onSubmit={handleUpdate} className="space-y-3">
          <div>
            <label className="block font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="Morning">Morning</option>
              <option value="Work">Work</option>
              <option value="Fitness">Fitness</option>
              <option value="Evening">Evening</option>
              <option value="Study">Study</option>
              <option value="Health">Health</option>
            </select>
          </div>
          <div>
            <label className="block font-medium">Reminder Time</label>
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Image URL (optional)</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium">User Name</label>
            <input
              type="text"
              value={habit.creatorName}
              readOnly
              className="w-full border p-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              value={habit.userEmail || ""}
              readOnly
              className="w-full border p-2 rounded bg-gray-100"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Update Habit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateHabits;
