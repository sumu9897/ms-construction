import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl ">
        {/* Left Section */}
        <div className="bg-secondary text-center px-20 py-6 text-white font-bold text-3xl">
          MS
        </div>

        {/* Center Section */}
        <div className="text-gray-400 text-sm">
          © 2025
          <a
            href="https://linkedin.com/in/md-sumon9897"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:text-secondary transition-colors duration-300 ml-1"
          >
            Mohammad Sumon
          </a>
          , All Rights Reserved
        </div>

        {/* Right Section */}
        <div className=""></div>

        
      </div>
    </footer>
  );
};

export default Footer;
