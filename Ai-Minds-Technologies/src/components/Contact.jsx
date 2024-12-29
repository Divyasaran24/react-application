
import React from "react";

const Contact = () => {
  const contactDetails = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      content: "Nandha Engineering College, Erode",
      link: "https://goo.gl/maps/Zd4BCynmTb98ivUJ6",
    },
    {
      icon: "fa fa-phone",
      title: "Call Us",
      content: "+91 90422 41169",
      link: "tel:+919042241169",
    },
    {
      icon: "fa fa-envelope",
      title: "Email Us",
      content: "aimindsadmin@gmail.com",
      link: "mailto:aimindsadmin@gmail.com",
    },
  ];

  return (
    <div id="contact" className="contact-section py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto pb-10 max-w-2xl">
          <h5 className="text-blue-900 text-xl md:text-2xl font-semibold">
            Get In Touch
          </h5>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            Contact for any query
          </h1>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="flex bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div
                className="icon bg-green-400 text-white rounded-full flex items-center justify-center w-16 h-16"
              >
                <i className={`${detail.icon} text-2xl`}></i>
              </div>
              <div className="ml-4">
                <h4 className="text-blue-900 text-lg md:text-xl font-bold">
                  {detail.title}
                </h4>
                <a
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-lg text-black font-medium hover:text-blue-700"
                >
                  {detail.content}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Form and Map Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {/* Map */}
          <div className="rounded overflow-hidden shadow-md ">
            <iframe
              className="w-full h-80 md:h-96 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710403339755!2d-73.82241512404069!3d40.685622471397615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686493221834!5m2!1sen!2sbd"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-green-400 p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-green-400"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-green-400"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-green-400"
                  placeholder="Project"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-green-400"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 px-5 rounded hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
