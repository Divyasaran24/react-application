
import React from "react";
import "./AboutUs.css"; 

const AboutUs = () => {
  return (
    <div id="aboutus" className="about-us-section py-10 mx-4 md:mx-28 mt-14 mb-28">
      <div className="container mx-auto pt-10">
        <div className="flex flex-wrap md:flex-nowrap gap-10 items-center">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 image-container">
            <img
              src="./images/about1.jpg"
              alt="About Us Image 1"
              className="main-image"
            />
            <div className="overlay-image">
              <img
                src="./images/about2.jpg"
                alt="About Us Image 2"
                className="rounded"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <h5 className="text-blue-900 text-lg font-semibold mb-3">About Us</h5>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              About AI Minds Technologies and Who We Are!!
            </h1>
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              We are a passionate team of engineers focused on shaping the future
              of technology. Specializing in deep-tech solutions, we work across
              industries like Automotive, Industrial Automation, AI, and IoT to
              deliver innovative products and services. With years of experience,
              we tackle complex challenges and create solutions that drive growth
              and transform businesses.
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              By embracing the latest advancements in AI, cloud computing, and
              robotics, we develop smart, efficient systems that improve
              productivity and enhance user experiences. Our goal is to help
              businesses stay ahead in an increasingly connected world, using
              technology to unlock new opportunities and drive success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
