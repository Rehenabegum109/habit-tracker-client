import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaUsers, FaCog } from "react-icons/fa";
import { FiCalendar, FiUser } from "react-icons/fi";
import useRole from "./UseRole";

import Navbar from "../Navbar/Navbar";

const DashboardLayout = () => {
  const { role, loading } = useRole();

  if (loading) return <p className="text-center py-10">Loading...</p>;

  const activeLink = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded hover:bg-gray-200 text-base ${
      isActive ? "border-l-4 border-red-500 bg-gray-100" : ""
    }`;

  return (
    <div className="flex min-h-screen">
      
      {/* SIDEBAR */}
      <div className="w-64 bg-base-200 flex flex-col min-h-screen overflow-y-auto">
        {/* LOGO */}
        <div className="p-4 flex items-center justify-center">
          <Link to="/dashboard">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 object-contain"
            />
          </Link>
        </div>

        {/* MENU LINKS */}
        <ul className="menu p-4 space-y-2 flex-grow">
          {role === "user" && (
            <>
              <li>
                <NavLink to="/dashboard/home" end className={activeLink}>
                  <CiDeliveryTruck /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-habits" className={activeLink}>
                  <CiDeliveryTruck /> My Habits
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-habit" className={activeLink}>
                  <CiDeliveryTruck /> Add Habit
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/calendar" className={activeLink}>
                  <FiCalendar /> Habit Calendar
                </NavLink>
              </li>
            </>
          )}

          {role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/homes" end className={activeLink}>
                  <CiDeliveryTruck /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users-management" className={activeLink}>
                  <FaUsers /> Users Management
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-habits" className={activeLink}>
                  <FaCog /> Manage Habits
                </NavLink>
              </li>
            </>
          )}
        <NavLink to="/dashboard/profile" className={activeLink}>
            <FiUser /> Profile
          </NavLink>

        </ul>

        {/* BOTTOM / PROFILE */}
        <div className="p-4  border-base-300 ">
          
          
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-h-screen overflow-auto">
        <Navbar />
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

