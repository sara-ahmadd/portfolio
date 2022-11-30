import React from "react";
import "../css/main.css";
import about from "../images/about.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Slide, Fade } from "react-awesome-reveal";

const Header = () => {
  return (
    <div className="container header">
      <div>
        <Slide direction="down" className="txt">
          <div>
            <h4>Hello I'm</h4>
            <h1>Sara Ahmad</h1>
            <h4>Front-end Web Developer</h4>
          </div>
        </Slide>
        <div className="btns-container">
          <Slide direction="left">
            <button className="btn">Download CV</button>
          </Slide>
          <Slide direction="right">
            <button className="btn">Let's Talk</button>
          </Slide>
        </div>
      </div>
      <Fade direction="left">
        <div className="img">
          <img src={about} alt="img" />
        </div>
      </Fade>
      <div className="social">
        <i>
          <FaLinkedin />
        </i>
        <i>
          <FaGithub />
        </i>
      </div>
    </div>
  );
};

export default Header;
