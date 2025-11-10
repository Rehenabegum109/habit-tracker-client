// src/Components/Register/Register.jsx
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContexts";
import { FaEye, FaEyeSlash } from "react-icons/fa";
 


const Register = () => {
  const { signup, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);

   const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    // Password validation
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError("");

    try {
      await signup(email, password, name, photoURL);
      navigate("/"); 
    } catch (err) {
      console.error(err);
      setError("Registration failed. Try again.");
    }
  };

  const handleGoogle = async () => {
    await googleLogin();
    navigate("/"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          Create an Account 👋
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Start tracking your habits today
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium mb-1 text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@email.com"
              className="input input-bordered w-full"
            />
          </div>

          {/* Photo URL */}
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium mb-1 text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
            <div className="flex flex-col items-start relative">
            <label className="block text-xl font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="••••••••"
              className="input input-bordered w-full pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[43px] cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="btn w-full bg-black text-white hover:bg-gray-800"
          >
            Sign Up
          </button>
        </form>

        <div className="divider my-6">OR</div>

        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-black font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
