
import React, { useState } from 'react';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Toggle the navbar open/close on mobile
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="bg-blue-600">
      <div className="max-w-screen-xl mx-auto px-4 py-2">
        <nav className="flex justify-between items-center py-2">
          {/* Logo */}
          <a href="#home" className="text-white font-bold text-2xl">
            AIMinds<span className="text-green-400">Technologies</span>
          </a>

          {/* Mobile Toggler Button */}
          <button
            onClick={toggleNavbar}
            className="lg:hidden text-white focus:outline-none"
            aria-expanded={isNavbarOpen ? 'true' : 'false'}
            aria-controls="navbar-links"
          >
            {/* Hamburger Icon */}
            <div
              className={`w-6 h-0.5 bg-white mb-1 transition-all ${isNavbarOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white mb-1 transition-all ${isNavbarOpen ? 'opacity-0' : ''}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white mb-1 transition-all ${isNavbarOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></div>
          </button>

          {/* Navbar Links */}
          <div
            id="navbar-links"
            className={`lg:flex lg:items-center ${isNavbarOpen ? 'block' : 'hidden'} lg:block`}
          >
            <div className="flex flex-col lg:flex-row lg:ml-auto space-y-4 lg:space-y-0 lg:space-x-6">
              <a href="#home" className="text-green-400 hover:text-green-400">Home</a>
              <a href="#aboutus" className="text-white hover:text-green-400">About</a>
              <a href="#services" className="text-white hover:text-green-400">Services</a>
              <a href="#projects" className="text-white hover:text-green-400">Projects</a>
              <a href="#contact" className="text-white hover:text-green-400">Contact</a>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden xl:flex items-center">
            {/* Phone Icon with Animation */}
            <div className="flex items-center justify-center mr-4">
              <a href="tel:+919042241169" className="relative animate-bounce">
                <span className="text-2xl rotate-90">📞</span>
                <div className="absolute -top-2 left-5">
                  <i className="fa fa-comment-dots text-green-400" />
                </div>
              </a>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col border-r border-gray-200 pr-4">
              <span className="text-white/50 text-lg">Have any questions?</span>
              <span className="text-green-400">Call: +91 90422 41169</span>
            </div>

            {/* Search Icon */}
            <div className="flex items-center justify-center ml-4">
              <a href="#">
                <i className="fa fa-search text-white text-3xl" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
