import React from "react";

const TopBar = () => {
  return (
    <div className="bg-black py-2 hidden md:flex ">
      <div className="container mx-auto">
        <div className="flex justify-evenly items-center">
          {/* Top Info */}
          <div className="flex items-center space-x-6 text-sm text-white/70">
            <div className="flex items-center">
              <a href="#" className="text-green-400">
                <i className="fas fa-map-marker-alt mr-2" />
              </a>
              Nandha Engineering College, Erode
            </div>
            <div className="flex items-center">
              <a href="#" className="text-green-400">
                <i className="fas fa-envelope mr-2" />
              </a>
              aimindstechnologies@gmail.com
            </div>
          </div>

          {/* Note */}
          <div className="hidden xl:flex text-green-400 text-sm">
            
            Note: We help you to Grow your Business
          </div>

          {/* Social Links */}
          <div className="flex space-x-2">
            <a
              href=""
              className="bg-white px-3 py-2 rounded-full flex justify-center items-center hover:shadow-md"
            >
              <i className="fab fa-facebook-f text-blue-900" />
            </a>
            <a
              href=""
              className="bg-white px-3 py-2 rounded-full flex justify-center items-center hover:shadow-md"
            >
              <i className="fab fa-twitter text-blue-900" />
            </a>
            <a
              href=""
              className="bg-white px-3 py-2 rounded-full flex justify-center items-center hover:shadow-md"
            >
              <i className="fab fa-instagram text-blue-900" />
            </a>
            <a
              href=""
              className="bg-white px-3 py-2 rounded-full flex justify-center items-center hover:shadow-md"
            >
              <i className="fab fa-linkedin-in text-blue-900" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
