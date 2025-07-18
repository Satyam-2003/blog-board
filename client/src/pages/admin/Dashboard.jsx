import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const fetchDashboard = async () => {
    // Replace this with real API later
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="flex-1 p-4 md:p-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      {/* Top Stats Cards */}
      <div className="flex flex-wrap gap-6">
        {/* Blogs */}
        <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-6 min-w-60 transition hover:scale-105 hover:shadow-lg hover:bg-purple-50/50 duration-300 ease-in-out">
          <img
            src={assets.dashboard_icon_1}
            alt="blogs"
            className="w-12 h-12"
          />
          <div>
            <p className="text-2xl font-bold text-purple-600">
              {dashboardData.blogs}
            </p>
            <p className="text-gray-500 text-sm">Blogs</p>
          </div>
        </div>

        {/* Comments */}
        <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-6 min-w-60 transition hover:scale-105 hover:shadow-lg hover:bg-pink-50/50 duration-300 ease-in-out">
          <img
            src={assets.dashboard_icon_2}
            alt="comments"
            className="w-12 h-12"
          />
          <div>
            <p className="text-2xl font-bold text-pink-600">
              {dashboardData.comments}
            </p>
            <p className="text-gray-500 text-sm">Comments</p>
          </div>
        </div>

        {/* Drafts */}
        <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-6 min-w-60 transition hover:scale-105 hover:shadow-lg hover:bg-orange-50/50 duration-300 ease-in-out">
          <img
            src={assets.dashboard_icon_3}
            alt="drafts"
            className="w-12 h-12"
          />
          <div>
            <p className="text-2xl font-bold text-orange-600">
              {dashboardData.drafts}
            </p>
            <p className="text-gray-500 text-sm">Drafts</p>
          </div>
        </div>
      </div>

      {/* Latest Blogs Table */}
      <div className="mt-10 bg-white rounded-xl shadow-md p-6 hover:bg-indigo-50/50 transition-all duration-300 ease-in-out">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={assets.dashboard_icon_4}
            alt="latest blogs"
            className="w-8 h-8"
          />
          <p className="text-lg font-semibold text-gray-700">Latest Blogs</p>
        </div>

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
              {dashboardData.recentBlogs.length > 0 ? (
                dashboardData.recentBlogs.map((blog, index) => {
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
    </div>
  );
};

export default Dashboard;
