import React from "react";
import { BookOpen, Dumbbell, Brain, Target, HeartPulse, Clock } from "lucide-react";

export default function CategoriesSection() {
  const categories = [
    {
      icon: <BookOpen size={38} />,
      title: "Study Habits",
      desc: "Improve focus, plan study hours, and stay consistent with learning goals.",
    },
    {
      icon: <Dumbbell size={38} />,
      title: "Fitness",
      desc: "Build healthy workout routines and track daily exercise progress.",
    },
    {
      icon: <Brain size={38} />,
      title: "Mental Wellness",
      desc: "Practice mindfulness, journaling, and mood tracking to stay balanced.",
    },
    {
      icon: <Target size={38} />,
      title: "Productivity",
      desc: "Organize tasks, reduce procrastination, and get more done every day.",
    },
    {
      icon: <HeartPulse size={38} />,
      title: "Health",
      desc: "Track sleep, hydration, and healthy lifestyle habits easily.",
    },
    {
      icon: <Clock size={38} />,
      title: "Routine Building",
      desc: "Create long-term routines and build positive daily habits.",
    }
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Categories & Use Cases
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track habits across different areas of your life and stay motivated every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col gap-3"
            >
              <div className="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
