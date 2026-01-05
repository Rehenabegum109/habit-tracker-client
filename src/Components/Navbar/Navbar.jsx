
import React, {  useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import { AuthContext, UseAuth } from "../Contexts/AuthContexts";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import Lottie from "lottie-react";
import successAnimation from "../../Animation/success.json";
import Logo from '../../assets/image/compressed_9b456a1a7049d4c0fbb26f37d05d9c88.webp';

const Navbar = () => {
  const { user, logout } = UseAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const handleLogout = () => {
    logout()
      .then(() => {
        setShowAnimation(true);
        setTimeout(() => setShowAnimation(false), 3000);
      })
      .catch(console.error);
    setMenuOpen(false);
  };

  const commonLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const loggedInLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "My Habits", href: "/my-habits" },
    { name: "Public Habits", href: "/public-habit" },
  ];

  const links = user ? [...commonLinks, ...loggedInLinks] : commonLinks;

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-primary dark:bg-indigo-900 transition-colors">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          
    
          <div className="flex items-center gap-2">
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded hover:bg-secondary hover:text-white transition-colors"
              >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
            <Link to="/" className="flex items-center gap-2 ml-2 lg:ml-0">
              <img src={Logo} alt="Habit Tracker Logo" className="h-10 w-10" />
              <span className="font-bold text-lg text-neutral dark:text-neutral-light">
                Habit Tracker
              </span>
            </Link>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex flex-1 justify-center gap-6 items-center">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-black dark:text-white font-bold"
                    : "text-neutral dark:text-neutral-light hover:text-secondary transition-colors"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right: Dark mode + Login / Logout */}
          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded hover:bg-secondary hover:text-white transition-colors"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Login / Logout */}
            {!user ? (
              <Link
                to="/login"
                className="btn bg-secondary text-white font-semibold hover:bg-secondary-dark transition-colors"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="btn bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-primary dark:bg-indigo-900 transition-all animate-slide-down">
            <div className="flex flex-col items-center p-4 gap-4">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-bold"
                      : "hover:text-white/80 transition-colors"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Logout Animation */}
      {showAnimation && (
        <div className="fixed top-16 right-4 w-20 h-20 z-50">
          <Lottie animationData={successAnimation} loop={false} />
        </div>
      )}

      {/* Slide-down animation */}
      <style>{`
        @keyframes slide-down {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Navbar;

