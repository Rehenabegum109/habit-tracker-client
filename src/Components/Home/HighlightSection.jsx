import React from "react";

export default function HighlightSection() {
  const stats = [
    {
      value: "5,000+",
      label: "Active Users",
    },
    {
      value: "120,000+",
      label: "Daily Check-Ins",
    },
    {
      value: "90%",
      label: "Completion Rate",
    },
    {
      value: "4.9★",
      label: "Average Rating",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            People all over the world use our platform to build better habits and stay motivated.
          </p>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-600">
                {item.value}
              </h3>

              <p className="text-gray-600 mt-2 text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
