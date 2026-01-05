// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import { useNavigate } from "react-router";

// // Slide data
// const slides = [
//   {
//     title: "Build Consistent Habits",
//     description: "Small daily actions lead to big results. Track your habits and stay consistent!",
//     image: "https://images.unsplash.com/photo-1544819667-9bfc1de23d4e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
//   },
//   {
//     title: "Stay Productive",
//     description: "Boost your focus and productivity by tracking your tasks.",
//     image: "https://images.unsplash.com/photo-1671814789275-d6c962ab649f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1212",
//   },
//   {
//     title: "Achieve Your Goals",
//     description: "Turn small actions into big achievements with habit streaks.",
//     image: "https://plus.unsplash.com/premium_photo-1664301435093-9804155eb991?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
//   },
// ];

// const HeroSection = () => {
//   const [current, setCurrent] = useState(0);
//   const navigate = useNavigate();

//   // Auto-slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
//       <AnimatePresence>
//         {slides.map(
//           (slide, index) =>
//             index === current && (
//               <motion.div
//                 key={index}
//                 className="absolute w-full h-full bg-cover bg-center flex items-center justify-center"
//                 style={{ backgroundImage: `url(${slide.image})` }}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 {/* Dark overlay */}
//                 <div className="absolute inset-0 bg-black/40"></div>

//                 {/* Text content */}
//                 <motion.div
//                   initial={{ y: 50, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -50, opacity: 0 }}
//                   transition={{ duration: 1 }}
//                   className="relative text-center text-white px-4 max-w-2xl"
//                 >
//                   {/* Typewriter Title */}
//                   <h1 className="text-3xl md:text-5xl font-bold mb-4">
//                     <Typewriter
//                       words={[slide.title]}
//                       loop={1}
//                       cursor
//                       cursorStyle="|"
//                       typeSpeed={80}
//                       deleteSpeed={50}
//                       delaySpeed={2000}
//                     />
//                   </h1>

//                   {/* Description */}
//                   <p className="text-sm md:text-lg mb-6">{slide.description}</p>

//                   {/* CTA Button */}
//                   <button
//                     onClick={() => navigate("/add-habit")}
//                     className="px-6 py-3 bg-[#58B19F] hover:bg-[#81ecec] text-white rounded-lg font-semibold transition transform hover:scale-105"
//                   >
//                     Get Started
//                   </button>
//                 </motion.div>
//               </motion.div>
//             )
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default HeroSection;


import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router";

const slides = [
  {
    title: "Build Consistent Habits",
    description:
      "Small daily actions lead to big results. Track your habits and stay consistent!",
    image:
      "https://images.unsplash.com/photo-1544819667-9bfc1de23d4e?auto=format&fit=crop&q=60&w=1200",
  },
  {
    title: "Stay Productive",
    description:
      "Boost your focus and productivity by tracking your tasks.",
    image:
      "https://images.unsplash.com/photo-1671814789275-d6c962ab649f?auto=format&fit=crop&q=60&w=1200",
  },
  {
    title: "Achieve Your Goals",
    description:
      "Turn small actions into big achievements with habit streaks.",
    image:
      "https://plus.unsplash.com/premium_photo-1664301435093-9804155eb991?auto=format&fit=crop&q=60&w=1200",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[65vh] overflow-hidden">

      {/* Slides */}
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={index}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative flex items-center justify-center h-full px-4 sm:px-6 md:px-10">
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white max-w-3xl"
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
                      <Typewriter
                        words={[slide.title]}
                        cursor
                        typeSpeed={70}
                        deleteSpeed={40}
                        delaySpeed={1500}
                      />
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 opacity-90">
                      {slide.description}
                    </p>

                    <button
                      onClick={() => navigate("/add-habit")}
                      className="px-5 py-2.5 md:px-6 md:py-3 bg-[#58B19F] hover:bg-[#81ecec] text-white font-semibold rounded-xl transition transform hover:scale-105"
                    >
                      Get Started
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-14 sm:bottom-16 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
              current === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-5 w-full flex justify-center text-white/80 text-sm md:text-base animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
}
