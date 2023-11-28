import React from "react";
import "./about.css";
import Button from "@mui/material/Button";
import ChatIcon from "@mui/icons-material/Chat";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const About = () => {
  return (
    <>
      <div className="main-container">
        <div className="img-container">
          <img
            className="img-item"
            src="../../../public/assets/deepu.jpeg"
            alt=""
          />
          <div className="name-title-container">
            {" "}
            <h1 className="name-title">M Sandeep Reddy</h1>
            <p className="sub-title-tag">Full Stack Developer</p>
          </div>
        </div>
        <div className="text-container">
          <p className="description">
            "Sandeep Reddy Modugapalem: Your versatile full-stack developer and
            digital marketer.Crafting Code and Converting Clicks: Your One-Stop
            Solution for Digital Excellence!
          </p>
          <div className="social-contact">
            <Button
              sx={{ margin: "5px" }}
              startIcon={<ChatIcon />}
              variant="contained"
            >
              Contact
            </Button>
            <Button
              sx={{ margin: "5px" }}
              startIcon={<LinkedInIcon />}
              variant="outlined"
            >
              LinkedIn
            </Button>
            <Button
              sx={{ margin: "5px" }}
              startIcon={<InstagramIcon />}
              variant="contained"
            >
              Instagram
            </Button>
          </div>
        </div>
        <div className="social-container"></div>
      </div>
    </>
  );
};

export default About;
