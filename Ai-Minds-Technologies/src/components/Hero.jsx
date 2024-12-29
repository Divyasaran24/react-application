
import React, { useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "./images/hero1.jpg",
      heading: `"Delivering Digital Solutions for Your Business Needs"`,
      buttonText: "Contact Us",
    },
    {
      image: "./images/hero2.webp",
      heading: "Quality Digital Services You Really Need!",
      buttonText: "Contact Us",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="home" className="relative w-full h-screen bg-black overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4 sm:px-8 md:px-12">
              <div className="text-center text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 animate-fadeIn">
                  {slide.heading}
                </h1>
                <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-700 transition-all duration-300 animate-fadeIn">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 sm:left-0 top-80 transform -translate-y-1/2 bg-blue-500 text-white py-4 px-6 sm:px-8 rounded-e-full hover:bg-opacity-70 transition-all"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 sm:right-0 top-80 transform -translate-y-1/2 bg-blue-500 text-white py-4 px-6 sm:px-8 rounded-s-full hover:bg-opacity-70 transition-all"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-blue-500"
                : "bg-white bg-opacity-50 hover:bg-opacity-100"
            } transition-all`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
