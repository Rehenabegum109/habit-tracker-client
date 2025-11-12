import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router";

// Slide data
const slides = [
  {
    title: "Build Consistent Habits",
    description: "Small daily actions lead to big results. Track your habits and stay consistent!",
    image: "https://images.unsplash.com/photo-1544819667-9bfc1de23d4e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Stay Productive",
    description: "Boost your focus and productivity by tracking your tasks.",
    image: "https://images.unsplash.com/photo-1671814789275-d6c962ab649f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1212",
  },
  {
    title: "Achieve Your Goals",
    description: "Turn small actions into big achievements with habit streaks.",
    image: "https://plus.unsplash.com/premium_photo-1664301435093-9804155eb991?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
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
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Text content */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="relative text-center text-white px-4 max-w-2xl"
                >
                  {/* Typewriter Title */}
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    <Typewriter
                      words={[slide.title]}
                      loop={1}
                      cursor
                      cursorStyle="|"
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
                  </h1>

                  {/* Description */}
                  <p className="text-sm md:text-lg mb-6">{slide.description}</p>

                  {/* CTA Button */}
                  <button
                    onClick={() => navigate("/add-habit")}
                    className="px-6 py-3 bg-[#58B19F] hover:bg-[#81ecec] text-white rounded-lg font-semibold transition transform hover:scale-105"
                  >
                    Get Started
                  </button>
                </motion.div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;

