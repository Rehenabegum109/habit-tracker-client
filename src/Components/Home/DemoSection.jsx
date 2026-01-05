import React from "react";

export default function DemoSection() {
  const screenshots = [
    {
      title: "Dashboard Overview",
      desc: "Track your habits and progress in a clean, intuitive dashboard.",
      img: "https://plus.unsplash.com/premium_photo-1720503242835-b537741c9736?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGFzaGJvYXJkJTIwT3ZlcnZpZXd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Mobile App View",
      desc: "Manage your habits on the go with our fully responsive mobile app.",
      img: "https://images.unsplash.com/photo-1760597371579-da4fd99d44ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlJTIwYXBwJTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Statistics & Progress",
      desc: "Visualize your streaks, completion rate, and habit consistency easily.",
      img: "https://plus.unsplash.com/premium_photo-1661393435010-5fce2376b414?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3RhdGlzdGljcyUyMCUyNiUyMFByb2dyZXNzfGVufDB8fDB8fHww",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-wide uppercase">
            Demo Preview
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            See the App in Action
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
            Explore the dashboard, mobile interface, and statistics to understand how the app works.
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-2xl shadow-lg hover:shadow-xl transition w-full object-cover h-64 sm:h-72 md:h-80"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-center text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
