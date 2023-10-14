import React from 'react'
import '../assest/css/Projects.css'

export default function Projects({projects}) {
  return (
    <div>
        {projects.map((project, index)=> (
          <div class="blog-slider">
          <div class="blog-slider__item swiper-slide">
                  <div class="blog-slider__img">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""/>
                  </div>
                  <div class="blog-slider__content">
				<div class="blog-slider__title">{project.title}</div>
                <span class="blog-slider__code">Skills Used: {project.tools}</span>
				<div class="blog-slider__text">{project.description}</div>
				<a href="https://github.com/Trengland/Bootcamp-Connect" class="blog-slider__button">Repository</a>
                <a href={project.live} class="blog-slider__button">Live site</a>
                  </div>
              </div>
      </div>
        ))}
    </div>
  )
}
