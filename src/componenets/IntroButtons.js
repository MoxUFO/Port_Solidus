import React from "react";
import Button from "@mui/material/Button";
import "../assest/css/IntroButtons.css";

export default function IntroButtons() {
  let styles = {
    "&.MuiButton-contained": {
      backgroundColor: "#201d20",
      color: "#77835d",
      fontSize: "16px",
      fontWeight: 'bold'
    },
  };

  return (
    <div className="btn-div">
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
      {/* <Button className='intro-btn'sx={styles} color='inherit' variant="contained" >My GitHub</Button> */}
    </div>
  );
}
