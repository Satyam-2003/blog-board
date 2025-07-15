import React from 'react'

const Newsletter = () => {
  return (
    <div className="max-w-3xl mx-auto text-center bg-white/60 backdrop-blur-lg rounded-2xl shadow-md border border-purple-100 px-6 py-10 sm:py-14 transition-all duration-300">
  {/* Heading */}
  <h1 className="text-2xl sm:text-4xl font-bold text-purple-700 mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text animate-fade-in">
    Never miss the blog!
  </h1>

  {/* Subtext */}
  <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
    Subscribe to get the latest blog, new tech, and exclusive news delivered to your inbox.
  </p>

  {/* Form */}
  <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <input
      type="email"
      placeholder="Enter your email"
      required
      className="w-full sm:w-2/3 px-5 py-3 rounded-full border border-purple-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-sm transition-all duration-300 placeholder:text-gray-400 bg-white/80 backdrop-blur"
    />
    <button
      type="submit"
      className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-pink-400/40 transition-transform duration-300"
    >
      Subscribe
    </button>
  </form>
</div>

  )
}

export default Newsletter