import React from "react";
import "../assest/css/AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-containter">
      <div className="bio">
        <div className="bio-img-holder">
          <div className="bio-img"></div>
        </div>
        <div className="bio-text">
          <p>
            Greetings, I'm Nelson Foster Jr, a Full Stack Developer with a
            foundation built at The Ohio State University. My journey into tech
            has been a unique one, transitioning from a background in carpentry
            to the world of code and design. As I initiate this new chapter, I
            now serve as a Teaching Assistant in the very same program where I
            began my journey into the arts of Front-End and Back-End coding.
            Beyond coding, you'll often find me loggin time in the great
            outdoors, camping alongside my wife, enjoying a meal over the open
            fire. In my personal downtime, my passions include video games and
            embarking on epic adventures in the world of Dungeons & Dragons.
            These are the sparks that fuel my creativity and kindle my
            curiosity.
          </p>
        </div>
        <div className="bio-edu">
          <h3>EDUCATION</h3>
          <p>Certificate in Full Stack Coding</p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-header">
          <h3>SKILLS</h3>
          </div>
          <div className="skills-icons">

          </div>
        </div>
      </div>
    
  );
}
