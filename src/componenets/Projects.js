import React from 'react'
import '../assest/css/Projects.css'

export default function Projects({projects}) {
  return (
    <div>
        {projects.map((project, index)=> (
          <div class="blog-slider">
          <div class="blog-slider__item swiper-slide">
                  <div class="blog-slider__img">
                      <img src={project.img} alt=""/>
                  </div>
                  <div class="blog-slider__content">
				<div class="blog-slider__title">{project.title}</div>
                <span class="blog-slider__code">Skills Used: {project.tools}</span>
				<div class="blog-slider__text">{project.description}</div>
				<a href={project.repo} class="blog-slider__button">Repository</a>
                <a href={project.live} class="blog-slider__button">Live site</a>
                  </div>
              </div>
      </div>
        ))}
    </div>
  )
}
