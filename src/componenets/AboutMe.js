import React from "react";
import "../assest/css/AboutMe.css";
import node from "../assest/images/node.svg";
import MUI from "../assest/images/material-ui-1.svg";
import Ract from "../assest/images/react.svg";
import Mongo from "../assest/images/mongodb.svg";
import Mysql from "../assest/images/mysql.svg";
import Jquery from "../assest/images/jquery.svg";
import JS from "../assest/images/javascript.svg";
import Html from "../assest/images/html.svg";
import HBs from "../assest/images/handlebars.svg";
import Git from "../assest/images/github.svg";
import Exp from "../assest/images/express.svg";
import CSS from "../assest/images/css.svg";

export default function AboutMe() {
  return (
    <div id="About-Me" className="about-me-containter">
    
        <h1 className="about-title">ABOUT ME</h1>
  
      <div className="bio-content">
        <div className="bio">
          <div className="bio-img-holder">
            <div className="bio-img"></div>
          </div>
          <div className="bio-text ">
            <div className="bio-header">
              <h3>Who I am</h3>
            </div>
            <div className="bio-p ">
              <p>
                I'm Nelson Foster Jr, a Full Stack Developer with roots in
                carpentry, now transitioning to the coding world through The
                Ohio State University's full stack bootcamp. Currently, I work
                as a Teaching Assistant in the same program where my coding
                journey began. Beyond coding, I have a deep love for the great
                outdoors and often spend time camping with my wife, enjoying
                open-fire meals. During my personal downtime, I'm passionate
                about video games and embarking on epic adventures in the world
                of Dungeons & Dragons. For further information about my projects
                or to get to know me better, please do not hesitate to reach
                out.
              </p>

              <a class="logo-link" href="#Contact">
                Seeking additional project insights?
              </a>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skills-header">
            <h3>SKILLS</h3>
          </div>
          <div className="skills-icons">
            <div className="icon-holder">
              <img className="icon" src={Html} alt="#" />
              <img className="icon" src={CSS} alt="#" />
              <img className="icon" src={JS} alt="#" />
              <img className="icon" src={Jquery} alt="#" />
            </div>
            <div className="icon-holder">
              <img className="icon" src={MUI} alt="#" />
              <img className="icon" src={Ract} alt="#" />
              <img className="icon" src={node} alt="#" />
              <img className="icon" src={Exp} alt="#" />
            </div>
            <div className="icon-holder">
              <img className="icon" src={HBs} alt="#" />
              <img className="icon" src={Mongo} alt="#" />
              <img className="icon" src={Mysql} alt="#" />
              <img className="icon" src={Git} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
