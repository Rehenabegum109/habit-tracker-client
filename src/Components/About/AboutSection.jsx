import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

export default function AboutSection() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const features = [
    "Daily habit tracking & streaks",
    "Smart reminders to stay on track",
    "Progress dashboard with insights",
    "Mobile & web support",
    "Customizable habit categories",
    "Motivational streak badges",
  ];

  const moreText = `Our mission is to empower people to take control of their daily routines and achieve their personal and professional goals. 
We believe that small, consistent actions create compounding results. 
Our app is designed to simplify habit tracking, provide insightful analytics, and motivate users to stay consistent.
Whether you want to improve productivity, health, fitness, or mental wellness, our tools help you build routines that last.`;

  const teamText = `Founded by a team of productivity enthusiasts, we focus on simplicity and impact. 
Every feature is built to reduce friction, make tracking fun, and help users feel accomplished daily. 
We are constantly improving based on user feedback to provide the best habit-building experience.`;

  return (
    <section className="w-full bg-primary dark:bg-gray-900 p-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">

    
        <div className="lg:w-1/2 flex flex-col gap-6">

      
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Build Better Habits, Achieve Your Goals
          </h2>

        
          <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
            Our app helps you stay consistent, track your progress, and turn small actions into lasting habits.
          </p>

      
          <ul className="flex flex-col gap-3 mt-2">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-5 h-5 text-indigo-600" />
                {item}
              </li>
            ))}
          </ul>

    
          {showMore && (
            <div className="mt-4 text-gray-600 dark:text-gray-300 space-y-4">
              <p>{moreText}</p>
              <p>{teamText}</p>
            </div>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-2 text-indigo-600 font-semibold hover:underline w-max"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>

      
          <button
            onClick={() => navigate("/add-habit")}
            className="mt-6 px-8 py-4 sm:px-10 sm:py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 w-max"
          >
            Get Started Free
          </button>
        </div>

    
        <div className="lg:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1683262038148-2ac280407276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXBwJTIwZGVtb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="App Demo"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </div>

      </div>
    </section>
  );
}
