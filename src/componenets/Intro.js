import React from "react";
import IntroButtons from "./IntroButtons";
import "../assest/css/Intro.css";

export default function Intro() {
  return (
    <div className="intro-containter">
      <div className="intro-text">
        <h2>NELSON FOSTER JR</h2>
        <div className="role">
          <h1>FULL STACK</h1>
          <h1>DEVELOPER</h1>
        </div>
        <h3>Welcome to my projects portfolio!</h3>
      </div>
      <div className="intro-btns">
        <IntroButtons />
      </div>
    </div>
  );
}
