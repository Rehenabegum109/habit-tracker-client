import { Star } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Ayesha Rahman",
      review:
        "This habit tracker helped me stay consistent every single day. Super simple and effective!",
      rating: 5,
    },
    {
      name: "Hasan Ali",
      review:
        "I love the reminders and streak tracking. It keeps me motivated to not break the chain.",
      rating: 4,
    },
    {
      name: "Sarah Khan",
      review:
        "Clean UI, easy to use, and actually useful. My study habits improved a lot.",
      rating: 5,
    },
    {
      name: "Rafiul Islam",
      review:
        "I tried many apps but this one finally helped me build real habits. Highly recommend!",
      rating: 5,
    },
    {
      name: "Nadia Farhana",
      review:
        "Tracking habits daily made me feel more productive and focused. Love it!",
      rating: 4,
    },
    {
      name: "Tanvir Ahmed",
      review:
        "Super smooth experience. The stats and streak system are really motivating.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-wide uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Real feedback from real users improving their daily habits.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex mb 3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{item.review}"
              </p>

              {/* Name */}
              <p className="mt-4 font-semibold text-gray-900 dark:text-white">
                — {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
