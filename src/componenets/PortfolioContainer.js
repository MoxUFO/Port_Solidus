import React from "react";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Intro from "./Intro";
import Contact from "./Contact";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import Fade from "@mui/material/Fade";
import ProjectContainer from "./ProjectContainer";
import "../assest/css/PortfolioContainer.css";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 90,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role="presentation">
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function PortfolioContainer(props) {
  return (
    <div className="port-container">
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <MoveUpIcon className="home-btn" />
        </Fab>
      </ScrollTop>
      <Intro />
      <ProjectContainer />
      <AboutMe />
      <Contact />
      <NavBar />
    </div>
  );
}
