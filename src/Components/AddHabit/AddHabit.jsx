
import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContexts"; 
import Spinner from "../Spineer/Spineer";
import Lottie from "lottie-react";
import successAnimation from "../../Animation/success.json";

const AddHabit = () => {
  const { user } = useContext(AuthContext); 

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Morning");
  const [reminderTime, setReminderTime] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);

  
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const habitData = {
      title,
      description,
      category,
      reminder_time: reminderTime,
      photoURL,
      creatorName: user?.displayName || "",
      userEmail: user?.email || "",
      public: true,
      createdAt: new Date().toISOString(),
    };

    try {
      setLoading(true);

      await axios.post("https://habit-tracker-server-ashy.vercel.app/habits", habitData);

      
      setShowSuccess(true);

    
      setTimeout(() => setShowSuccess(false), 2000);
      
      setTitle("");
      setDescription("");
      setCategory("Morning");
      setReminderTime("");
      setPhotoURL("");

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="max-w-xl mx-auto p-4 shadow-md rounded-md">

      
      {showSuccess && (
        <div className="w-full flex justify-center mb-4">
          <Lottie 
            animationData={successAnimation} 
            loop={false} 
            style={{ width: 180, height: 180 }}
          />
        </div>
      )}

      <h2 className="text-4xl font-bold mb-4">Add a New Habit</h2>

      <form onSubmit={handleSubmit} className="space-y-3 p-4 rounded-3xl bg-white">

        <div>
          <label className="block mb-1 font-medium">Habit Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="Morning">Morning</option>
            <option value="Work">Work</option>
            <option value="Fitness">Fitness</option>
            <option value="Evening">Evening</option>
            <option value="Study">Study</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Reminder Time</label>
          <input
            type="time"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL (optional)</label>
          <input
            type="text"
            value={photoURL}
            onChange={e => setPhotoURL(e.target.value)}
            placeholder="https://example.com/photo.jpg"
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
        >
          Add Habit
        </button>
      </form>
    </div>
  );
};

export default AddHabit;
