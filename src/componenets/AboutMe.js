import React from "react";
import "../assest/css/AboutMe.css";
import node from '../assest/images/node.svg'

export default function AboutMe() {
  return (
    <div id="About-Me" className="about-me-containter">
      <div className="about-title">
        <h1>ABOUT ME</h1>
      </div>
      <div className="bio-content">
        <div className="bio">
          <div className="bio-img-holder">
            <div className="bio-img"></div>
          </div>
          <div className="bio-text " >
            <h3>Who I am</h3>
            <p >
              I'm Nelson Foster Jr, a Full Stack Developer with roots in
              carpentry, now transitioning to the coding world through The Ohio
              State University's full stack bootcamp. Currently, I work as a
              Teaching Assistant in the same program where my coding journey
              began. Beyond coding, I have a deep love for the great outdoors
              and often spend time camping with my wife, enjoying open-fire
              meals. During my personal downtime, I'm passionate about video
              games and embarking on epic adventures in the world of Dungeons &
              Dragons. For further information about my projects or to get to
              know me better, please do not hesitate to reach out.
            </p>
          </div>
        </div>
        <div className="skills">
        <div className="skills-header">
              <h3>SKILLS</h3>
            </div>
          <div className="skills-icons">
            <div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
