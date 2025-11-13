import React, { useContext, useState,  } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContexts";


const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(" Invalid email or password",err);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      navigate(from, { replace: true });
    } catch (err) {
      setError("Google login failed",err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Log in to continue tracking your habits
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col items-start">
            <label className="block text-xl font-medium mb-1 text-gray-700">
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

          {error && (
            <p className="text-center text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="btn w-full bg-black text-white hover:bg-gray-800"
          >
            Login
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
  Don’t have an account?{" "}
  <Link to="/register" className="text-black font-semibold hover:underline">
    Register
  </Link>
</p>
      </div>
    </div>
  );
};

export default Login;



