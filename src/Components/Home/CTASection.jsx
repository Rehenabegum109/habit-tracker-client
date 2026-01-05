import React from "react";
import { useNavigate } from "react-router";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-indigo-600 dark:bg-indigo-700 py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Start building better habits today
        </h2>

        <p className="text-indigo-100 mb-8 text-lg sm:text-xl">
          Join thousands of users who are improving their lives one habit at a time.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/add-habit")}
          className="px-8 py-4 sm:px-10 sm:py-5 bg-white text-indigo-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
        >
          Get Started Free
        </button>

      </div>
    </section>
  );
}
