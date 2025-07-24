import React, { useEffect, useState } from "react";
import { blog_data } from "../../assets/assets";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(blog_data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 tracking-tight mb-6 animate-fade-in">
        All Blogs 📚
      </h1>
      <div className="mt-6 overflow-x-auto rounded-xl shadow-md bg-white/80 backdrop-blur-md">
        <table className="min-w-full divide-y divide-purple-100 text-sm text-left">
          <thead className="bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 text-gray-700 uppercase tracking-wide text-xs">
            <tr>
              <th className="px-4 py-4">#</th>
              <th className="px-4 py-4">Blog Title</th>
              <th className="px-4 py-4 max-sm:hidden">Date</th>
              <th className="px-4 py-4 max-sm:hidden">Status</th>
              <th className="px-4 py-4">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-purple-50">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => {
                const blogDate = new Date(blog.date || Date.now());
                return (
                  <tr
                    key={blog._id || index}
                    className="hover:bg-purple-50/30 transition-all duration-300"
                  >
                    <td className="px-4 py-3 font-medium text-gray-600">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{blog.title}</td>
                    <td className="px-4 py-3 text-gray-500 max-sm:hidden">
                      {blogDate.toDateString()}
                    </td>
                    <td className="px-4 py-3 max-sm:hidden">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                          blog.isPublished
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {blog.isPublished ? "Published" : "Unpublished"}
                      </span>
                    </td>
                    <td className="px-4 py-3 space-x-2 flex items-center">
                      <button className="px-3 py-1 text-xs text-white bg-indigo-500 hover:bg-indigo-600 rounded-full transition">
                        {blog.isPublished ? "Unpublish" : "Publish"}
                      </button>
                      <button className="px-3 py-1 text-xs text-white bg-red-400 hover:bg-red-500 rounded-full transition">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-4 py-6 text-center text-gray-400 italic text-sm"
                >
                  No blogs to display yet...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;
