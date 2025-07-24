/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../../assets/assets";

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="border-y border-purple-100 hover:bg-indigo-50/30 transition-all duration-300">
      <td className="px-6 py-5 text-sm text-gray-700 leading-relaxed">
        <p>
          <span className="font-semibold text-indigo-600">Blog:</span>{" "}
          <span className="italic text-gray-800">{blog.title}</span>
        </p>
        <p className="mt-2">
          <span className="font-semibold text-pink-600">Name:</span>{" "}
          <span className="text-gray-800">{comment.name}</span>
        </p>
        <p className="mt-1">
          <span className="font-semibold text-purple-600">Comment:</span>{" "}
          <span className="text-gray-700">{comment.content}</span>
        </p>
      </td>

      <td className="px-6 py-5 max-sm:hidden text-gray-500 text-sm">
        {BlogDate.toLocaleDateString()}
      </td>

      <td className="px-6 py-5">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <img
              src={assets.tick_icon}
              className="w-6 h-6 p-1 bg-green-50 border border-green-200 rounded-full hover:bg-green-100 transition-transform hover:scale-110 cursor-pointer"
              title="Approve comment"
              alt="approve"
            />
          ) : (
            <span className="text-xs border border-green-600 bg-green-100 text-green-700 font-medium rounded-full px-3 py-1">
              Approved
            </span>
          )}
          <img
            src={assets.bin_icon}
            alt="delete"
            title="Delete comment"
            className="w-6 h-6 p-1 bg-red-50 border border-red-200 rounded-full hover:bg-red-100 transition-transform hover:scale-110 cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
