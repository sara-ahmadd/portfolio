import React from "react";
import "../css/main.css";
import about from "../images/about.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container header">
      <div>
        <div className="txt">
          <h4>Hello I'm</h4>
          <h1>Sara Ahmad</h1>
          <h4>Front-end Web Developer</h4>
        </div>
        <div className="btns-container">
          <button className="btn">Download CV</button>
          <button className="btn">Let's Talk</button>
        </div>
      </div>
      <div className="img">
        <img src={about} alt="img" />
      </div>
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
