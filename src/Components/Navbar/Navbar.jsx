import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContexts";
import Lottie from "lottie-react";
import successAnimation from "../../Animation/success.json"

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [showAnimation, setShowAnimation] = useState(false);

  const links = (
    <div className="flex flex-col lg:flex-row gap-5">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-black font-bold" : "hover:text-gray-600"}>Home</NavLink>
      <NavLink to="/add-habit" className={({ isActive }) => isActive ? "text-black font-bold" : "hover:text-gray-600"}>Add Habit</NavLink>
      <NavLink to="/my-habits" className={({ isActive }) => isActive ? "text-black font-bold" : "hover:text-gray-600"}>My Habits</NavLink>
      <NavLink to="/public-habit" className={({ isActive }) => isActive ? "text-black font-bold" : "hover:text-gray-600"}>Public Habits</NavLink>
    </div>
  );

  const handleLogout = () => {
    logout()
      .then(() => {
        setShowAnimation(true); // Show Lottie animation
        setTimeout(() => setShowAnimation(false), 3000); // Hide after 3s
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="relative">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <p className="btn btn-ghost text-xl text-[#F97F51]">Habit Tracker</p>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-4">
          {user ? (
            <>
              <div className="flex items-center gap-3">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="user" className="w-10 h-10 rounded-full border-2 border-blue-400" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-lg font-bold text-blue-700">
                    {user.displayName?.[0] || "U"}
                  </div>
                )}
                <span className="font-semibold hidden sm:block">{user.displayName || "User"}</span>
              </div>

              <button
                onClick={handleLogout}
                className="btn btn-outline bg-[#58B19F] text-white font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline bg-[#58B19F]">Login</Link>
              <Link to="/register" className="btn btn-outline bg-[#58B19F]">Register</Link>
            </>
          )}
        </div>
      </div>

      {/* ✅ Logout Success Animation */}
      {showAnimation && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-50">
          <Lottie
            animationData={successAnimation}
            loop={false}
            autoplay={true}
            style={{ width: 200, height: 200 }}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;


