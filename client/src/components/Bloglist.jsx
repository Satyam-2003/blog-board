import React, { useState } from "react";
import { blog_data, blogCategories } from "../assets/assets";
import Blogcard from "./Blogcard";

const Bloglist = () => {
  const [selectedCategory, setSelectedCategory] = useState("All"); // default selected

  return (
    <div>
      {/* Category Buttons */}
      <div className="flex justify-center flex-wrap gap-4 sm:gap-6 my-10 px-4 relative">
        {blogCategories.map((item) => {
          const isActive = selectedCategory === item;

          return (
            <div key={item} className="relative group">
              <button
                onClick={() => setSelectedCategory(item)}
                className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-medium text-sm sm:text-base border transition-all duration-300 cursor-pointer shadow-md backdrop-blur-sm relative
                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 border-transparent shadow-xl scale-105"
                      : "text-purple-700 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 border-purple-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 hover:scale-105 hover:shadow-xl"
                  }
                `}
              >
                {item}
                {!isActive && (
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-pink-400 group-hover:w-3/4 transition-all duration-300 transform -translate-x-1/2 rounded-full"></span>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Output area (placeholder) */}
      <div className="text-center text-gray-600 text-sm sm:text-base mb-10">
        Showing blogs for:{" "}
        <span className="font-semibold text-pink-600">{selectedCategory}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blog_data.filter((blog) => selectedCategory === "All" ? true : blog.category === selectedCategory).map((blog)=> <Blogcard key={blog._id} blog={blog}/>)}
      </div>
    </div>
  );
};

export default Bloglist;
