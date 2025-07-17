import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const navItems = [
    { to: "/admin", icon: assets.home_icon, label: "Dashboard" },
    { to: "/admin/addBlog", icon: assets.add_icon, label: "Add Blogs" },
    { to: "/admin/listBlog", icon: assets.list_icon, label: "Blogs List" },
    { to: "/admin/comments", icon: assets.comment_icon, label: "Comments" },
  ];

  return (
    <div className="flex flex-col min-h-screen border-r border-purple-100 bg-gradient-to-b from-purple-50 via-indigo-50 to-white shadow-inner backdrop-blur-md p-4 transition-all duration-500 ease-in-out slide-in-left">
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          end={true}
          to={item.to}
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-4 md:px-8 rounded-lg transition-all duration-300 font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-100 hover:shadow-md ${
              isActive
                ? "bg-purple-100 border-l-4 border-purple-400 text-purple-800 shadow"
                : "bg-transparent"
            }`
          }
        >
          <img src={item.icon} alt="" className="w-5 opacity-80" />
          <p className="hidden md:inline-block text-sm">{item.label}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
