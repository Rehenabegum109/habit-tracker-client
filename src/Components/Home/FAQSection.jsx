import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Is it free?",
      answer: "Yes! You can use our basic habit tracker completely free of charge.",
    },
    {
      question: "Do I need an account?",
      answer: "Creating an account helps you save your habits and track progress across devices.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. You can upgrade or cancel your premium plan anytime without any hassle.",
    },
    {
      question: "Does it work on mobile?",
      answer: "Yes! Our app is fully responsive and works seamlessly on mobile, tablet, and desktop.",
    },
    {
      question: "Can I track multiple habits?",
      answer: "Yes, you can track as many habits as you like, categorize them, and see your streaks.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-wide uppercase">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Got questions? We’ve got answers. Clear and simple.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-gray-800 dark:text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 dark:text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
