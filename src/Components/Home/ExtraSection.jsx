// src/Components/Home/ExtraSections.jsx
import React from "react";
import { motion } from "framer-motion";

// Extra Sections Data
const sections = [
  {
    title: "Mindfulness & Focus",
    description:
      "Practice mindfulness daily to improve focus, reduce stress, and enhance overall productivity in your tasks.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Physical Activity",
    description:
      "Incorporate daily exercise habits to boost energy levels, maintain health, and increase mental clarity.",
    image:
      "https://plus.unsplash.com/premium_photo-1663036884653-0d60263890ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    title: "Healthy Eating",
    description:
      "Build eating habits that nourish your body, improve immunity, and maintain a balanced lifestyle.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Time Management",
    description:
      "Organize your day with consistent routines and effective planning to achieve your goals efficiently.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
];

const ExtraSections = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row items-center mb-12 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-1/2 p-4">
            <img
              src={section.image}
              alt={section.title}
              className="rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h3>
            <p className="text-gray-700 text-lg">{section.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExtraSections;

