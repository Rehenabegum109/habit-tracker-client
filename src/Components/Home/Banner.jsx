
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


// Slide data with images
const slides = [
  {
    title: "Build Consistent Habits",
    description: "Small daily actions lead to big results. Track your habits and stay consistent!",
    image: "https://images.unsplash.com/photo-1544819667-9bfc1de23d4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Stay Productive",
    description: "Boost your focus and productivity by tracking your tasks.",
    image: "https://images.unsplash.com/photo-1671814789275-d6c962ab649f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1212",
  },
  {
    title: "Achieve Your Goals",
    description: "Turn small actions into big achievements with habit streaks.",
    image: "https://plus.unsplash.com/premium_photo-1664301435093-9804155eb991?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhYml0JTIwdHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden">
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={index}
                className="absolute w-full h-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Text content */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="relative text-center text-white px-4 max-w-2xl"
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-sm md:text-lg">{slide.description}</p>
                </motion.div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default Banner;
