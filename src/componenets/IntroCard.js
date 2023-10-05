import React from "react";
import { Paper, CardContent } from "@mui/material";
import GithubIcon from "@iconscout/react-unicons/icons/uil-github-alt";
import LinkedInICon from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import EmailIcon from "@iconscout/react-unicons/icons/uil-at";
import "../assest/css/IntroCard.css";

export default function IntroCard() {
  return (
    <Paper className="intro-card">
      <CardContent>
        <div>
          <h1> NELSON FOSTER JR</h1>
          <h1>FULL STACK WEB DEVELOPER</h1>
          <h2>welcome to my portfolio</h2>
        </div>
        <div>
          <GithubIcon size="140" color="#61DAFB" />
          <LinkedInICon size="140" color="#61DAFB" />
          <EmailIcon size="140" color="#61DAFB" />
        </div>
      </CardContent>
    </Paper>
  );
}
