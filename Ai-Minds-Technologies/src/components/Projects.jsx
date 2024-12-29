
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="projects py-10 mb-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center mx-auto pb-10 animate-fadeIn"
          style={{ animationDelay: "0.3s", maxWidth: "600px" }}
        >
          <h5 className="text-blue-900 text-xl sm:text-2xl font-semibold mb-2">Our Projects</h5>
          <h1 className="text-2xl sm:text-3xl font-bold">Explore Our Latest Work</h1>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image: "./images/webdesign.jpg",
              title: "Web Design",
              description: "Web Analysis",
            },
            {
              image: "./images/cybersecurity.jpg",
              title: "Cyber Security",
              description: "Cyber Security Core",
            },
            {
              image: "./images/mobileinfo.jpg",
              title: "Mobile Info",
              description: "Upcoming Phone",
            },
            {
              image: "./images/webdevelopment.jpg",
              title: "Web Development",
              description: "Web Analysis",
            },
            {
              image: "./images/digitalmarketing.avif",
              title: "Digital Marketing",
              description: "Marketing Analysis",
            },
            {
              image: "./images/keyword.webp",
              title: "Keyword Research",
              description: "Keyword Analysis",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-5 sm:p-7 text-center overflow-hidden group transition-transform duration-700 transform hover:scale-105"
            >
              {/* Gradient Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 opacity-0 transition-opacity duration-700 group-hover:opacity-20"></div>

              {/* Image */}
              <div className="relative z-10 mb-4 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl object-cover w-full h-40 sm:h-48 lg:h-56"
                />
              </div>

              {/* Title */}
              <h4 className="relative z-10 text-xl sm:text-2xl font-bold mb-3 transition-transform duration-500 group-hover:translate-y-3 group-hover:text-green-600">
                {project.title}
              </h4>

              {/* Description */}
              <p className="relative z-10 text-gray-600 text-sm sm:text-base transition-opacity duration-500 opacity-100 group-hover:opacity-80 group-hover:text-black">
                {project.description}
              </p>

              {/* Border Effect */}
              <div className="absolute inset-0 border-4 border-transparent rounded-xl transition-all duration-500 group-hover:border-blue-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
