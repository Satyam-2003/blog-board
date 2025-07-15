import React from 'react'
import { useNavigate } from 'react-router-dom';

const Blogcard = ({blog}) => {

    const {title, description, category, image, _id} = blog;
    const navigate = useNavigate();
  return (
    <div
  onClick={() => navigate(`/blog/${_id}`)}
  className="w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-pink-300/40 backdrop-blur-md border border-purple-100 bg-white/60 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
>
  {/* Image */}
  <img
    src={image}
    alt={title}
    className="aspect-video w-full object-cover group-hover:brightness-95 transition duration-300"
  />

  {/* Category */}
  <span className="ml-5 mt-4 px-4 py-1 inline-block text-xs font-semibold text-purple-700 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-full border border-purple-200 shadow-sm">
    {category}
  </span>

  {/* Text Content */}
  <div className="p-5">
    <h5 className="mb-2 text-lg font-semibold text-gray-700 group-hover:text-purple-700 transition duration-300">
      {title}
    </h5>
    <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600" dangerouslySetInnerHTML={{__html: description.slice(0,80)}}>
    </p>
  </div>
</div>

  )
}

export default Blogcard