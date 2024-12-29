
import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-black py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div className="flex flex-col items-center md:items-start">
            <a href="index.html">
              <h2 className="text-white text-2xl font-semibold text-center md:text-left">
                AIMinds<span className="text-green-400">Technologies</span>
              </h2>
            </a>
            <p className="mt-4 text-white text-center md:text-left">
              Driving innovation to empower business growth and transformation across industries.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="bg-white p-3 rounded-full hover:scale-110 transition">
                <i className="fab fa-facebook-f text-blue-900"></i>
              </a>
              <a href="#" className="bg-white p-3 rounded-full hover:scale-110 transition">
                <i className="fab fa-twitter text-blue-900"></i>
              </a>
              <a href="#" className="bg-white p-3 rounded-full hover:scale-110 transition">
                <i className="fab fa-instagram text-blue-900"></i>
              </a>
              <a href="#" className="bg-white p-3 rounded-full hover:scale-110 transition">
                <i className="fab fa-linkedin-in text-blue-900"></i>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl text-green-400 font-semibold">Short Links</h3>
            <div className="mt-4 space-y-2">
              <a href="about.html" className="text-white flex items-center hover:text-green-400">
                <i className="fas fa-angle-right text-green-400 mr-2"></i>About us
              </a>
              <a href="contact.html" className="text-white flex items-center hover:text-green-400">
                <i className="fas fa-angle-right text-green-400 mr-2"></i>Contact us
              </a>
              <a href="service.html" className="text-white flex items-center hover:text-green-400">
                <i className="fas fa-angle-right text-green-400 mr-2"></i>Our Services
              </a>
              <a href="project.html" className="text-white flex items-center hover:text-green-400">
                <i className="fas fa-angle-right text-green-400 mr-2"></i>Our Projects
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl text-green-400 font-semibold">Contact Us</h3>
            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="text-white flex items-center hover:text-green-400"
              >
                <i className="fas fa-map-marker-alt text-green-400 mr-2"></i>
                Nandha Engineering College, Erode
              </a>
              <a
                href="tel:+919042241169"
                className="text-white flex items-center hover:text-green-400"
              >
                <i className="fas fa-phone-alt text-green-400 mr-2"></i>
                +91 90422 41169
              </a>
              <a
                href="mailto:aimindstechnologies@gmail.com"
                className="text-white flex items-center hover:text-green-400"
              >
                <i className="fas fa-envelope text-green-400 mr-2"></i>
                aimindstechnologies@gmail.com
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 my-8" />

        <div className="flex justify-center items-center text-center">
          <div className="text-white text-sm">
            <i className="fas fa-copyright text-green-400 mr-1"></i>
            <a href="#" className="text-green-400 hover:underline">
              AIMinds Technologies
            </a>
            , All rights reserved 2024.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
