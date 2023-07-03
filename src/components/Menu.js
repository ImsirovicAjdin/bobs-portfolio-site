import React from "react";

export default function Menu() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="menu">
      <ul>
        <li>
          <a
            href="#portfolio-section"
            onClick={() => scrollToSection("portfolio-section")}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#about-section"
            onClick={() => scrollToSection("about-section")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact-section"
            onClick={() => scrollToSection("contact-section")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
