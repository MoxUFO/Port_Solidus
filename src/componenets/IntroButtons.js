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
    },
  };

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
