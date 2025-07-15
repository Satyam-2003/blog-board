import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer">
        <img
          src={assets.logo}
          alt=""
          className="w-32 sm:w-40 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <button
          onClick={logout}
          className="relative overflow-hidden flex items-center gap-2 rounded-full text-sm font-semibold cursor-pointer px-10 py-2.5 text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:from-orange-400 hover:to-yellow-300 hover:shadow-2xl before:absolute before:inset-0 before:rounded-full before:ring-2 before:ring-orange-300 before:opacity-0 hover:before:opacity-100"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Layout;
