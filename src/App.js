import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showBackToTop = scrollY > 200;
    setShowBackToTop(showBackToTop);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      <div id="portfolio-section">
        <Portfolio />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
      <Footer />
      {showBackToTop && (
        <button className="backToTop" onClick={scrollToTop}>
          Back to Top
        </button>
      )}
    </div>
  );
}
