/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";

const AddBlog = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  const generateContent = async () => {
    // logic for AI content generation
  };

  useEffect(() => {
    if (!quillRef.current && editorRef) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 text-gray-700 h-full overflow-scroll py-8 px-4 sm:px-16"
    >
      <div className="bg-white/70 backdrop-blur-md w-full max-w-3xl p-6 sm:p-10 mx-auto rounded-2xl shadow-lg space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-indigo-700 mb-4">
          Create a New Blog
        </h2>

        {/* Upload Thumbnail */}
        <div>
          <p className="text-sm font-medium text-gray-600">Upload Thumbnail</p>
          <label htmlFor="image" className="block mt-2">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt=""
              className="h-28 w-full max-w-xs object-cover rounded-xl border border-dashed border-indigo-300 cursor-pointer hover:shadow-md transition"
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </label>
        </div>

        {/* Title */}
        <div>
          <p className="text-sm font-medium text-gray-600">Blog Title</p>
          <input
            type="text"
            placeholder="Type here"
            required
            className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-300 outline-none shadow-sm transition"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        {/* Sub Title */}
        <div>
          <p className="text-sm font-medium text-gray-600">Sub Title</p>
          <input
            type="text"
            placeholder="Type here"
            required
            className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-300 outline-none shadow-sm transition"
            onChange={(e) => setSubTitle(e.target.value)}
            value={subTitle}
          />
        </div>

        {/* Description */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">
            Blog Description
          </p>
          <div className="max-w-lg h-72 sm:h-80 border border-gray-300 rounded-lg overflow-hidden">
            <div ref={editorRef} className="h-full" />
          </div>
          <button
            type="button"
            onClick={generateContent}
            className="mt-3 inline-block px-4 py-2 text-sm text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 rounded-lg transition"
          >
            Generate with AI
          </button>
        </div>

        {/* Category */}
        <div>
          <p className="text-sm font-medium text-gray-600">Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 shadow-sm cursor-pointer"
          >
            <option value="">Select category</option>
            {blogCategories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Published Toggle */}
        <div className="flex items-center gap-3 mt-4">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="w-5 h-5 accent-indigo-500 cursor-pointer"
          />
          <p className="text-sm font-medium text-gray-600">Publish Now</p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold tracking-wide shadow-md transition"
        >
          Add Blog
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
