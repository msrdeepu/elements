import React from "react";
import "./about.css";
import Button from "@mui/material/Button";
import ChatIcon from "@mui/icons-material/Chat";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PublicIcon from "@mui/icons-material/Public";
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
            Solution for Digital Excellence!". I will be your go-to expert for
            harnessing the full potential of the digital realm. With a strong
            background in web development and a deep understanding of digital
            marketing, I am committed to helping individuals and businesses
            thrive in the ever-evolving digital landscape.
          </p>
        </div>
        <div className="social-container">
          <div className="social-contact">
            <Button
              sx={{ margin: "5px" }}
              startIcon={<ChatIcon />}
              variant="contained"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfxtI8-TEORzB8aSqaNccjhAt5PkkzHakFFT-HHWdi9vSaXuQ/viewform?usp=sf_link"
            >
              Contact
            </Button>
            <Button
              target="_blannk"
              href="https://www.linkedin.com/in/mspreddy2021/"
              sx={{ margin: "5px" }}
              variant="outlined"
            >
              <LinkedInIcon />
            </Button>
            <Button
              target="_blank"
              href="https://www.instagram.com/sandeep_tech_blogger/"
              sx={{ margin: "5px" }}
              variant="contained"
            >
              <InstagramIcon />
            </Button>
            <Button
              target="_blank"
              href="https://judobits.com/"
              sx={{ margin: "5px" }}
              variant="outlined"
            >
              <PublicIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
