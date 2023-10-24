import React from "react";
import Chip from '@mui/material/Chip';
import "../assest/css/Projects.css";

export default function Projects({ projects }) {
  
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="blog-slider">
          <div className="blog-slider__item ">
            <div className="blog-slider__img">
              <img src={project.img} alt="" />
            </div>
            <div className="blog-slider__content">
              <div className="blog-slider__title">{project.title}</div>
              <span className="blog-slider__code">
               {project.tools.map((tool,index)=>(
                  <Chip style={{backgroundColor:'#353D29',color: '#77835D', margin: "5px 5px"}} key={index} label={tool}  />
                ))}
              </span>
              <div className="blog-slider__text">{project.description}</div>
              <div className="blog-slider__button-container" >
              <a href={project.repo} className="blog-slider__button">
                Repository
              </a>
              <a href={project.live} className="blog-slider__button">
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
