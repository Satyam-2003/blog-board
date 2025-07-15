import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-white via-purple-50 to-pink-50 text-gray-600">
      {/* Upper Section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-12 border-b border-purple-200/40">
        {/* Logo + Description */}
        <div className="max-w-sm space-y-4">
          <img src={assets.logo} alt="logo" className="w-36 sm:w-44" />
          <p className="text-sm leading-relaxed text-gray-600">
            QuickBlog by{" "}
            <span className="text-purple-600 font-semibold">Aradhana Labs</span>{" "}
            is your personalized space to express, inspire, and explore. From
            tech insights to life lessons, write what matters most.
          </p>
        </div>

        {/* Link Sections */}
        <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-6 sm:gap-10">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="text-md sm:text-lg font-semibold text-purple-700 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-pink-500 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <p className="py-6 text-center text-sm sm:text-base text-purple-700/80">
        © 2025 QuickBlog • Crafted with ❤️ by Aradhana Labs • All Rights
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
