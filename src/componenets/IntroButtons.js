import React from "react";
import Button from "@mui/material/Button";
import "../assest/css/IntroButtons.css";

export default function IntroButtons() {
  let styles = {
    "&.MuiButton-contained": {
      backgroundColor: "#201d20",
      color: "#77835d",
      fontSize: "16px",
      fontWeight: "bold",
      border: "2px solid  #353D29",
      margin: "10px 75px"
    },
  };
  // const mediaQueries = {
  //   '@media (max-width: 768px)': {
  //     "&.MuiButton-contained": {
  //       fontSize: "2.5vw",  // Modify the styles for smaller screens
  //       margin: "5px 20px",  // Modify the styles for smaller screens
  //     },
  //   },
  // };

  return (
    <div className="btn-div">
      <Button
      href="https://1drv.ms/w/c/053372b4ea429ded/Qe2dQuq0cjMggAW9AAAAAAAAp7uUE10mLDSy_Q"
        className="intro-btn"
        sx={styles}
        color="inherit"
        variant="contained"
      >
        My Resume
      </Button>
      <Button
        href="https://github.com/MoxUFO/Port_Solidus"
        className="intro-btn"
        sx={styles}
        color="inherit"
        variant="contained"
      >
        {" "}
        Portfolio Source Code
      </Button>
    </div>
  );
}
