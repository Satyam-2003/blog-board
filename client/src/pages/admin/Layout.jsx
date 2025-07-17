import React from "react";
import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const Layout = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 text-gray-800 font-[Inter]">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 sm:px-20 xl:px-32 py-5 bg-white/80 backdrop-blur-md shadow-lg rounded-b-2xl border-b border-purple-100 z-10">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-28 sm:w-40 cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => navigate("/")}
        />
        <button
          onClick={logout}
          className="relative overflow-hidden flex items-center gap-2 rounded-full text-sm font-semibold cursor-pointer px-8 py-2.5 text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg hover:from-orange-400 hover:to-yellow-300 hover:shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:ring-2 before:ring-orange-300 before:opacity-0 hover:before:opacity-100"
        >
          Logout
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex h-[calc(100vh-80px)]">
        <div className="w-auto md:w-[270px] bg-white/80 backdrop-blur-sm border-r border-purple-100 shadow-md rounded-tr-3xl animate-slide-in-left">
          <Sidebar />
        </div>

        <div className="flex-1 p-6 overflow-y-auto animate-fade-in">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
