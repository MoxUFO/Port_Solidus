import React from 'react'
import '../assest/css/ProjectContainer.css'
import Projects from './Projects'
import Rave from '../assest/images/Rave.png'
import BcCon from '../assest/images/BootCamp-Connect.png'
import Wether from '../assest/images/wether.png'


export default function ProjectContainer() {

  const projectArr= [
    {
      title: "Bootcamp Connect",
      description: "This is a uniqe app where bootcamp students can can create a profile and view peer profile to learn more about them.",
      live: "https://bootcamp-connect-5.herokuapp.com/",
      tools:["HandleBar.js", "Bootstrap", "JavaScript", "Node.js", "Express.js", "MySQL"],
      repo: "https://github.com/Trengland/Bootcamp-Connect",
      img: BcCon
    },
    {
      title: "Rave Reviews",
      description: "This is a cool app that allows you to search for nearby events",
      tools:["HTML", "CSS", "JavasCript", "webAPI "],
      live: "https://moxufo.github.io/Rave-Reviews/",
      repo: "https://github.com/MoxUFO/Rave-Reviews",
      img: Rave
    },
    {
      title: "Yo what's the wheather like",
      description: "A beautiful app that Shows the current and 5 day forcast for any city in U.S. .",
      tools:["HTML", "Bootstrap", "CSS","JavaScript", "OpenWetherAPI"],
      live: "https://moxufo.github.io/yo-whats--the-weather-like/",
      repo: "https://github.com/MoxUFO/yo-whats--the-weather-like",
      img: Wether
    },
   
  ]

 
  return (
    <div className='projects'>
      <h1 className='title' id='Projects'>PROJECTS</h1>
      <div className='project-cards'>
      <Projects projects={projectArr} />
      </div>
    </div>
  )
}
