import React from "react";
import config from "../config";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__title">
        Welcome to {config.ownerName}'s Portfolio
      </div>
      <div className="hero__subtitle">Showcasing My Work</div>
      <div className="hero__cta">
        <button className="cta-button">Get In Touch</button>
      </div>
    </div>
  );
}
