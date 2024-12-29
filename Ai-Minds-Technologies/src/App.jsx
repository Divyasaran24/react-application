import React from "react";
import "./App.css";
import TopBar from "../../Ai-Minds-Technologies/src/components/TopBar";
import Contact from "../../Ai-Minds-Technologies/src/components/Contact";
import Navbar from "../../Ai-Minds-Technologies/src/components/Navbar";
import Statistics from "../../Ai-Minds-Technologies/src/components/Statistics";
import AboutUs from "../../Ai-Minds-Technologies/src/components/AboutUs";
import Services from "../../Ai-Minds-Technologies/src/components/Services";
import Projects from "../../Ai-Minds-Technologies/src/components/Projects";
import Testimonials from "../../Ai-Minds-Technologies/src/components/Testimonials";
import Footer from "../../Ai-Minds-Technologies/src/components/Footer";
import Hero from "../../Ai-Minds-Technologies/src/components/Hero";

const App = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Statistics />
      <AboutUs />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Back to Top Button */}
      <a
        href="#"
        className="btn btn-secondary btn-square rounded-full bg-blue-600 text-white fixed bottom-5 right-5 p-4 shadow-lg hover:bg-blue-700 transition-all"
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
      >
        <i className="fa fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default App;