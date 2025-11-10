import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaSmile, FaClock, FaChartLine } from "react-icons/fa";

const benefits = [
  {
    icon: <FaBullseye size={40} className="text-blue-600" />,
    title: "Better Focus",
    desc: "Consistently building habits enhances our concentration and helps us dive deeper into tasks. It allows us to maintain attention and stay productive throughout the day.",
  },
  {
    icon: <FaSmile size={40} className="text-green-600" />,
    title: "Reduced Stress",
    desc: "Daily habits reduce mental stress and bring a sense of calm. By establishing small routines, we can improve emotional stability and handle challenges more effectively.",
  },
  {
    icon: <FaClock size={40} className="text-orange-600" />,
    title: "Time Management",
    desc: "Regular habits make us better at managing time. They help us prioritize daily tasks efficiently and prevent unnecessary time wastage.",
  },
  {
    icon: <FaChartLine size={40} className="text-purple-600" />,
    title: "Stronger Mindset",
    desc: "Habit building strengthens self-discipline and perseverance. Small achievements through habits boost confidence and prepare us to achieve bigger goals.",
  },
];

const WhyBuildHabits = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Build Habits?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuildHabits;
