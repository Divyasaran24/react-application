
import React from "react";

const Services = () => {
  return (
    <div id="services" className="services py-10 mb-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div
          className="text-center mx-auto pb-10 animate-fadeIn"
          style={{ animationDelay: "0.3s", maxWidth: "600px" }}
        >
          <h5 className="text-blue-900 text-xl sm:text-2xl font-semibold">
            Our Services
          </h5>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Services Built Specifically For Your Business
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "fa-code",
              title: "Web Development",
              description:
                "Specializing in creating custom, responsive websites that deliver seamless user experiences and drive business growth.",
            },
            {
              icon: "fa-file-code",
              title: "App Development",
              description:
                "Crafting cutting-edge, intuitive mobile apps designed to boost user engagement and deliver flawless performance on any device.",
            },
            {
              icon: "fa-external-link-alt",
              title: "Artificial Intelligence",
              description:
                "Leveraging AI technologies such as Computer Vision, Generative AI, NLP, and Machine Learning to create smart solutions that drive growth and innovation.",
            },
            {
              icon: "fas fa-user-secret",
              title: "Web Security",
              description:
                "Advanced web security solutions that protect digital assets and ensure a safe, flawless online experience.",
            },
            {
              icon: "fa-envelope-open",
              title: "Digital Marketing",
              description:
                "Result-driven digital marketing strategies, including SEO, designed to boost online visibility, engagement, and business growth.",
            },
            {
              icon: "fas fa-laptop",
              title: "Business Automation",
              description:
                "Intelligent automation solutions that optimize processes, enhance efficiency, and accelerate business growth.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center overflow-hidden group transition-transform duration-700 transform hover:rotate-x-6 hover:scale-105"
            >
              {/* Gradient Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 opacity-0 transition-opacity duration-700 group-hover:opacity-20"></div>

              {/* Icon */}
              <div className="relative z-10 text-blue-800 text-3xl sm:text-4xl mb-4 transition-colors duration-300 group-hover:text-green-500">
                <i className={`fa ${service.icon}`}></i>
              </div>

              {/* Title */}
              <h4 className="relative z-10 text-xl sm:text-2xl font-bold mb-4 transition-transform duration-500 group-hover:translate-y-3 group-hover:text-green-600">
                {service.title}
              </h4>

              {/* Description */}
              <p className="relative z-10 text-gray-600 text-sm sm:text-base transition-opacity duration-500 opacity-100 group-hover:opacity-80 group-hover:text-black">
                {service.description}
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

export default Services;
