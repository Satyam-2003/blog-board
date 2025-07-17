import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Logging in with:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl animate-fade-in border border-purple-100">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-2">
          Admin <span className="text-black">Panel</span>
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Enter your credentials to access the admin panel
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-purple-200 bg-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="Enter your email id"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-purple-200 bg-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-md hover:from-orange-400 hover:to-yellow-300 hover:shadow-lg transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
