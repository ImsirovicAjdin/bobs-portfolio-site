import React from "react";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__title">Portfolio</div>
      <div className="portfolio__subtitle">Check out my projects</div>
      <div className="portfolio__projects">
        <div className="project">
          <div className="project__title">Project 1</div>
          <div className="project__description">
            This is the description of Project 1.
          </div>
          <img
            className="project__image"
            src="https://picsum.photos/id/100/300/200"
            alt="Project 1"
          />
        </div>
        <div className="project">
          <div className="project__title">Project 2</div>
          <div className="project__description">
            This is the description of Project 2.
          </div>
          <img
            className="project__image"
            src="https://picsum.photos/id/101/300/200"
            alt="Project 2"
          />
        </div>
        <div className="project">
          <div className="project__title">Project 3</div>
          <div className="project__description">
            This is the description of Project 3.
          </div>
          <img
            className="project__image"
            src="https://picsum.photos/id/102/300/200"
            alt="Project 3"
          />
        </div>
      </div>
    </div>
  );
}
