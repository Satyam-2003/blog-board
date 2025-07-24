import React, { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";
import CommentTableItem from "../../components/admin/CommentTableItem";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const fetchComments = async () => {
    setComments(comments_data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="flex-1 pt-6 px-6 sm:pt-12 sm:pl-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-indigo-700">Comments</h1>
        <div className="flex gap-3">
          {["Approved", "Not Approved"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-1 rounded-full border transition-all duration-200 shadow-md text-sm font-medium ${
                filter === status
                  ? "bg-indigo-100 text-indigo-700 border-indigo-300"
                  : "bg-white text-gray-600 hover:bg-gray-50 border-gray-300"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-xl shadow-lg overflow-hidden">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 text-gray-700 uppercase tracking-wide text-xs">
            <tr>
              <th className="px-6 py-4">Blog Title & Comment</th>
              <th className="px-6 py-4 max-sm:hidden">Date</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {comments
              .filter((comment) =>
                filter === "Approved"
                  ? comment.isApproved === true
                  : comment.isApproved === false
              )
              .map((comment, index) => (
                <CommentTableItem
                  key={comment._id}
                  comment={comment}
                  index={index + 1}
                  fetchComments={fetchComments}
                />
              ))}
            {comments.filter((c) =>
              filter === "Approved" ? c.isApproved : !c.isApproved
            ).length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="px-6 py-8 text-center italic text-gray-400"
                >
                  No comments found for this filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
