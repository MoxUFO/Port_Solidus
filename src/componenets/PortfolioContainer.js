import React from "react";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Intro from "./Intro";
import Contact from "./Contact";

import ProjectContainer from "./ProjectContainer";

import "../assest/css/PortfolioContainer.css";

export default function PortfolioContainer() {
  return (
    <div className="port-container">
      <Intro />
      <ProjectContainer />
      <AboutMe />
      < Contact />
      <NavBar />
    </div>
  );
}
