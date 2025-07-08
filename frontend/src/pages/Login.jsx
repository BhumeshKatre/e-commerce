import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // ✅ Correct import
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        form,
        {
          withCredentials: true,
        }
      );
      toast.success("Login successful:");
      alert(`Email: ${form.email}\nPassword: ${form.password}`)
    } catch (error) {
      toast.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex w-90 h-screen  px-2 py-10 mx-auto shadow my-5 items-center justify-center">
      <div className="p-2">
        <h1 className="text-center mb-3 font-semibold text-xl">Login</h1>
        <hr />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              value={form.email}
              className="p-2 border border-gray-300 focus:outline-blue-500 outline-none rounded-md"
              type="email"
              name="email"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              value={form.password}
              className="p-2 border border-gray-300 focus:outline-blue-500 outline-none rounded-md"
              type="password"
              name="password"
              required
            />
          </div>

          <button
            type="submit"
            className="px-3 py-2 bg-black hover:bg-gray-600 text-white rounded-md"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-2">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
