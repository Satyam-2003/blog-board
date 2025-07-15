import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-3 px-5 py-2 mb-6 rounded-full text-sm font-medium text-purple-700 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm bg-opacity-70">
          <p className="animate-pulse">✨ New: AI feature integrated</p>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold sm:leading-[4.5rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 drop-shadow-lg animate-pulse">
          Your own blogging platform – Powered by Aradhana Labs
        </h1>

        <p className="my-6 sm:my-10 max-w-3xl mx-auto px-4 text-sm sm:text-base text-center text-gray-600 sm:tracking-wide leading-relaxed bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-500 border border-purple-100 backdrop-blur-sm bg-opacity-60">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto mt-10 px-4">
          <input
            type="text"
            placeholder="Search for blogs"
            required
            className="w-full sm:w-auto flex-1 px-5 py-3 rounded-full text-sm sm:text-base text-gray-700 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 border border-purple-200 shadow-inner placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-300 backdrop-blur-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 text-sm sm:text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            🔍 Search
          </button>
        </form>
         
      </div>
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default Header;
