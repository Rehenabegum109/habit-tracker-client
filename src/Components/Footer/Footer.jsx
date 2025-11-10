// src/Components/Footer/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";
import logoImg from "../../assets/image/compressed_9b456a1a7049d4c0fbb26f37d05d9c88.webp"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 ">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="flex flex-col items-start gap-2">
          <img
            src={logoImg} 
            alt="Logo"
            className="w-16 h-16 object-cover"
          />
          <h2 className="text-2xl font-bold">Habit Tracker</h2>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p>Email: support@habittracker.com</p>
          <p>Phone: +880 123 456 789</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Terms & Conditions */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Terms & Policies</h3>
          <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/faq" className="hover:text-white">FAQ</Link>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Habit Tracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
