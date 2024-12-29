
import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://aimindstechnologies.vercel.app/img/testimonial-1.jpg",
      name: "Client Name 1",
      profession: "Profession 1",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
    },
    {
      image: "https://aimindstechnologies.vercel.app/img/testimonial-2.jpg",
      name: "Client Name 2",
      profession: "Profession 2",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
    },
    {
      image: "https://aimindstechnologies.vercel.app/img/testimonial-3.jpg",
      name: "Client Name 3",
      profession: "Profession 3",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
    },
    {
      image: "https://aimindstechnologies.vercel.app/img/testimonial-4.jpg",
      name: "Client Name 4",
      profession: "Profession 4",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-20 bg-gray-50 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto text-center">
        <div className="mb-10">
          <h5 className="text-blue-900 text-xl md:text-2xl font-semibold">Our Testimonials</h5>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">What Our Clients Say</h1>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            className="absolute left-2 md:left-5 lg:-left-10 bg-white text-blue-700 rounded-full shadow-md p-2 md:p-3 hover:scale-110 hover:border-2 border-blue-500 transition-all"
          >
            <i className="fas fa-chevron-left text-lg md:text-2xl"></i>
          </button>

          {/* Testimonial Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 max-w-full md:max-w-2xl transition-transform duration-500 hover:scale-105 hover:border-2 border-blue-500">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              {/* Client Image */}
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-blue-500"
              />
              {/* Client Details */}
              <div className="text-center md:text-left">
                <h4 className="text-xl md:text-2xl font-bold text-green-500">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-500 text-sm md:text-base">
                  {testimonials[currentIndex].profession}
                </p>
                <div className="flex justify-center md:justify-start mt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <i
                      key={i}
                      className="fas fa-star text-yellow-400 text-sm md:text-lg mr-1"
                    ></i>
                  ))}
                </div>
              </div>
            </div>

            {/* Feedback */}
            <div className="mt-4 md:mt-6">
              <p className="text-gray-600 italic text-sm md:text-base">
                "{testimonials[currentIndex].feedback}"
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-5 lg:-right-10 bg-white text-blue-700 rounded-full shadow-md p-2 md:p-3 hover:scale-110 hover:border-2 border-blue-500 transition-all"
          >
            <i className="fas fa-chevron-right text-lg md:text-2xl"></i>
          </button>
        </div>

        {/* Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-all ${
                currentIndex === index ? "bg-blue-700 scale-125" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
