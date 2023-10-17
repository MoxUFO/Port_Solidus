import React from "react";
import "../assest/css/Projects.css";

export default function Projects({ projects }) {
  return (
    <div>
      {projects.map((project, index) => (
        <div className="blog-slider">
          <div className="blog-slider__item ">
            <div className="blog-slider__img">
              <img src={project.img} alt="" />
            </div>
            <div className="blog-slider__content">
              <div className="blog-slider__title">{project.title}</div>
              <span className="blog-slider__code">
                Skills Used: {project.tools}
              </span>
              <div className="blog-slider__text">{project.description}</div>
              <div className="blog-slider__button-container" >
              <a href={project.repo} class="blog-slider__button">
                Repository
              </a>
              <a href={project.live} class="blog-slider__button">
                Live site
              </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
