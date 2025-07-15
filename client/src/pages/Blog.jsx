/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import moment from "moment";
import Footer from "../components/Footer";

const Blog = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [comment, setComment] = useState([]);

  const [name, setName] = useState([]);
  const [content, setContent] = useState([]);

  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  const fetchComments = async () => {
    setComment(comments_data);
  };

  const addComment = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className="relative">
      {/* Gradient Background */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-32 -z-10 w-full opacity-30 pointer-events-none select-none"
      />

      {/* Navbar */}
      <Navbar />

      {/* Blog Header Section */}
      <div className="text-center mt-20 text-gray-700 px-4">
        <p className="text-sm sm:text-base text-primary py-3 font-semibold tracking-wide">
          Published on {moment(data.createdAt).format("MMMM Do YYYY")}
        </p>

        <h1 className="text-3xl sm:text-5xl font-extrabold max-w-3xl mx-auto text-gray-900 leading-tight bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text">
          {data.title}
        </h1>

        <h2 className="mt-4 text-lg sm:text-xl max-w-xl mx-auto text-gray-600 italic opacity-80">
          {data.subTitle}
        </h2>

        <p className="inline-block mt-6 py-2 px-5 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 border border-primary/20 text-sm font-medium text-primary shadow-sm">
          ✍️ {data.author}
        </p>
      </div>

      {/* Blog Content Section */}
      <div className="mx-5 max-w-5xl md:mx-auto my-14">
        {/* Blog Main Image */}
        <img
          src={data.image}
          alt="Blog cover"
          className="rounded-[2rem] mb-8 w-full shadow-lg hover:scale-[1.01] transition-all duration-300"
        />

        {/* Blog Description */}
        <div className="relative p-[2px] rounded-[2rem] bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 animate-gradient-x">
          <div
            className="bg-white/70 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] shadow-2xl shadow-purple-200/30 transition-all duration-500 text-[15.5px] sm:text-base leading-relaxed text-gray-800 space-y-6 overflow-hidden
    [&>h1]:text-4xl [&>h1]:font-extrabold [&>h1]:bg-clip-text [&>h1]:text-transparent [&>h1]:bg-gradient-to-r [&>h1]:from-purple-600 [&>h1]:via-pink-500 [&>h1]:to-orange-400
    [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-purple-600
    [&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-pink-600
    [&>p]:text-gray-700 [&>p]:tracking-wide
    [&>a]:text-primary [&>a]:hover:underline [&>a]:font-semibold
    [&>img]:rounded-2xl [&>img]:shadow-md [&>img]:hover:scale-105 [&>img]:transition-all
    [&>blockquote]:relative [&>blockquote]:text-gray-600 [&>blockquote]:italic [&>blockquote]:border-l-4 [&>blockquote]:border-pink-400 [&>blockquote]:pl-6 [&>blockquote]:py-3
    [&>ul]:list-disc [&>ul]:pl-5 [&>li]:mb-2"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>

          <div className="relative mt-16 mb-10 text-center group">
            <h2 className="inline-block text-lg sm:text-xl md:text-2xl font-semibold tracking-wide relative z-10 px-6 py-2 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 text-primary shadow-sm shadow-purple-200/30 border border-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
              💬 Comments ({comment.length})
            </h2>

            {/* Optional bottom underline animation */}
            <div className="absolute left-1/2 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full group-hover:w-1/2 transition-all duration-500 transform -translate-x-1/2"></div>
          </div>

          <div>
            {comment.map((item, index) => (
              <div
                key={index}
                className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-4 mb-6 w-full max-w-2xl mx-auto animate-fade-in"
              >
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <img
                    src={assets.user_icon}
                    alt="User Icon"
                    className="w-8 h-8 rounded-full bg-purple-100 p-1 border border-purple-300"
                  />

                  {/* Name + Comment */}
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm mt-2 px-4 py-2 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 text-gray-700 rounded-xl border border-purple-100 leading-relaxed shadow-inner">
                      {item.content}
                    </p>
                  </div>
                </div>

                {/* Timestamp */}
                <div className="mt-2 flex justify-end">
                  <span className="text-xs text-purple-600 font-medium bg-white/70 backdrop-blur-md px-3 py-1 rounded-full shadow hover:shadow-md transition-all duration-300">
                    🕒 {moment(item.createdAt).fromNow()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 px-4">
          <p className="text-lg font-semibold text-gray-800 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text  mb-6">
            💬 Add your comment
          </p>

          <form
            onSubmit={addComment}
            className="flex flex-col gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-md shadow-md border border-purple-100 animate-fade-in"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Your name"
              required
              className="w-full px-4 py-2 rounded-xl border border-purple-200 shadow-inner bg-purple-50 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
            />

            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Write your comment here..."
              required
              className="w-full px-4 py-3 rounded-xl border border-pink-200 shadow-inner bg-pink-50 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
            />

            <button
              type="submit"
              className="self-end px-6 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              🚀 Submit
            </button>
          </form>
        </div>

        <div className="my-24 max-w-3xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold text-gray-800 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text  mb-6 animate-fade-in">
            🚀 Share this article with your circle
          </p>

          <div className="flex justify-center items-center gap-6">
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              width={48}
              className="cursor-pointer transform transition duration-300 hover:scale-110 hover:drop-shadow-xl hover:rotate-[-3deg]"
            />
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              width={48}
              className="cursor-pointer transform transition duration-300 hover:scale-110 hover:drop-shadow-xl hover:rotate-[3deg]"
            />
            <img
              src={assets.googleplus_icon}
              alt="Google Plus"
              width={48}
              className="cursor-pointer transform transition duration-300 hover:scale-110 hover:drop-shadow-xl hover:rotate-[-3deg]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center animate-pulse text-gray-700">
      {/* Gradient Spinner */}
      <div className="w-12 h-12 mb-6 border-4 border-purple-300 border-t-transparent rounded-full animate-spin bg-gradient-to-tr from-purple-300 via-pink-300 to-orange-300 shadow-md"></div>

      {/* Gradient Text */}
      <p className="text-lg sm:text-xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Blog;
