/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../../assets/assets";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);
  return (
    <tr className="border-b border-purple-100 hover:bg-purple-50/30 transition-all duration-300">
  <th className="px-4 py-4 text-gray-600 font-medium">{index}</th>

  <td className="px-4 py-4 text-gray-800 font-semibold">{title}</td>

  <td className="px-4 py-4 text-gray-500 font-light max-sm:hidden">
    {BlogDate.toDateString()}
  </td>

  <td className="px-4 py-4 max-sm:hidden">
    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
      blog.isPublished
        ? "bg-green-100 text-green-600"
        : "bg-yellow-100 text-yellow-600"
    }`}>
      {blog.isPublished ? "Published" : "Unpublished"}
    </span>
  </td>

  <td className="px-4 py-4 flex items-center gap-3">
    <button
      className={`text-xs font-medium px-3 py-1 rounded-full transition duration-300 ${
        blog.isPublished
          ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
          : "bg-green-100 text-green-700 hover:bg-green-200"
      }`}
    >
      {blog.isPublished ? "Unpublish" : "Publish"}
    </button>

    <img
      src={assets.cross_icon}
      alt="Delete"
      className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform"
    />
  </td>
</tr>

  );
};

export default BlogTableItem;
