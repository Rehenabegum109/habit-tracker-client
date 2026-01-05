import React, { useState } from "react";
import Lottie from "lottie-react";
import successAnimation from "../../Animation/success.json";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // send to backend
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    // Hide success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="w-full mt-10 bg-primary dark:bg-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Reach out for support, feedback, or partnership opportunities.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 relative flex flex-col items-center justify-center">

          {/* If success, show animation instead of form */}
          {success ? (
            <div className="flex flex-col items-center justify-center">
              <Lottie 
                animationData={successAnimation} 
                loop={false} 
                style={{ height: 200, width: 200 }} 
              />
              <p className="mt-4 text-green-600 dark:text-green-400 text-lg font-semibold">
                Thank you! Your message has been sent.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">

              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-900 dark:text-white"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-900 dark:text-white"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-900 dark:text-white"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-max bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          )}

        </div>

{/* Optional Contact Info */}
<div className="mt-10 text-center text-gray-600 dark:text-gray-300 space-y-2">
  <p>Email: 
    <a href="mailto:support@yourapp.com" className="text-indigo-600 hover:underline">
      support@yourapp.com
    </a>
  </p>
  <p>Phone: 
    <a href="tel:+880123456789" className="text-indigo-600 hover:underline">
      +880 1234 567 89
    </a>
  </p>
  <p>Follow us on: 
    <a 
      href="https://twitter.com/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-indigo-600 hover:underline mx-1"
    >
      Twitter
    </a> | 
    <a 
      href="https://linkedin.com/in/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-indigo-600 hover:underline mx-1"
    >
      LinkedIn
    </a> | 
    <a 
      href="https://instagram.com/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-indigo-600 hover:underline mx-1"
    >
      Instagram
    </a>
  </p>
</div>

      </div>
    </section>
  );
}
