export default function BlogSection() {
  const posts = [
    {
      title: "How to Build Habits That Actually Stick",
      desc: "Learn the psychology behind building long-term habits that stay with you for life.",
      tag: "Habit Tips",
      date: "Jan 2026",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    },
    {
      title: "5 Ways to Stay Motivated Every Day",
      desc: "Simple mindset shifts that help you stay consistent even when you don't feel like it.",
      tag: "Motivation",
      date: "Jan 2026",
      img: "https://images.unsplash.com/photo-1531346878377-a5be20888e57",
    },
    {
      title: "Productivity Habits Used by Top Performers",
      desc: "Discover proven routines that increase focus, energy, and performance.",
      tag: "Productivity",
      date: "Dec 2025",
      img: "https://images.unsplash.com/photo-1498079022511-d15614cb1c02",
    },
    {
      title: "Why Small Daily Actions Matter",
      desc: "Tiny habits compound over time — here’s how to make them work for you.",
      tag: "Mindset",
      date: "Dec 2025",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    },
    {
      title: "Building a Morning Routine",
      desc: "Create a morning routine that improves your mood, energy and mental clarity.",
      tag: "Wellness",
      date: "Nov 2025",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
    {
      title: "Break Bad Habits — Step by Step",
      desc: "Understand triggers and replace unhealthy habits with better ones.",
      tag: "Self-Growth",
      date: "Nov 2025",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-Black font-semibold tracking-wide uppercase">
            Blog & Resources
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            Learn • Improve • Grow
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Actionable tips on habits, productivity and motivation.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={post.img}
                className="h-48 w-full object-cover"
                alt={post.title}
              />

              <div className="p-6">
                <span className="text-sm text-primary font-semibold">
                  {post.tag}
                </span>

                <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {post.desc}
                </p>

                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <button className="text-primary font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
