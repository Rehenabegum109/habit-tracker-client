import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import useAxiosSecure from "../Hook/AxiosSecure";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const DashboardHome = () => {
  const axiosSecure =useAxiosSecure()
  const [habits, setHabits] = useState([]);
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0 });
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    const fetchPublicHabits = async () => {
      try {
        // Fetch public habits from backend
        const res = await axiosSecure.get("/habits/public");
        setHabits(res.data);

        // Count Total / Completed / Pending
        const today = new Date().toISOString().split("T")[0];
        const completed = res.data.filter((h) => h.completionHistory?.includes(today)).length;
        const total = res.data.length;
        const pending = total - completed;
        setStats({ total, completed, pending });

        // Weekly chart data
        const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        const weekly = weekDays.map((day) => {
          const count = res.data.filter((h) =>
            h.completionHistory?.some(
              (d) => new Date(d).toLocaleString("en-US", { weekday: "short" }) === day
            )
          ).length;
          return { day, completed: count };
        });
        setWeeklyData(weekly);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPublicHabits();
  }, []);

  // Charts
  const barData = {
    labels: weeklyData.map((d) => d.day),
    datasets: [{ label: "Completed Habits", data: weeklyData.map((d) => d.completed), backgroundColor: "rgba(34,197,94,0.7)" }],
  };

  const pieData = {
    labels: ["Completed", "Pending"],
    datasets: [{ data: [stats.completed, stats.pending], backgroundColor: ["rgba(34,197,94,0.7)", "rgba(250,204,21,0.7)"] }],
  };

  return (
    <div className="space-y-8 p-6 mt-10">
      
      <div>
        <h2 className="text-3xl font-bold">Dashboard Habits Overview</h2>
        <p className="text-gray-600 mt-1">Here’s the list of all public habits.</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3>Total Habits</h3>
          <p className="text-4xl font-bold mt-2">{stats.total}</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3>Completed Today</h3>
          <p className="text-4xl font-bold mt-2">{stats.completed}</p>
        </div>
        <div className="bg-yellow-400 text-black p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3>Pending Today</h3>
          <p className="text-4xl font-bold mt-2">{stats.pending}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Weekly Completion</h3>
          <Bar data={barData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Completion Ratio</h3>
          <Pie data={pieData} />
        </div>
      </div>

    </div>
  );
};

export default DashboardHome;
