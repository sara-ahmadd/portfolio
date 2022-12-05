import React, { useEffect } from "react";
import "../css/main.css";
import header from "../images/header.svg";
import { Slide, Fade } from "react-awesome-reveal";
import NavBar from "./Navbar";
import SocialMedia from "./SocialMedia";
import ScrollBtn from "./ScrollBtn";

const Header = () => {
  useEffect(() => {
    function addActive(id) {
      let link = `ul li a[href="#${id}"]`;
      document.querySelector(link).classList.add("active");
    }
    let links = Array.from(document.querySelectorAll("ul li a"));
    function removeActive() {
      links.forEach((link) => {
        link.classList.remove("active");
      });
    }
    let sections = Array.from(document.querySelectorAll(".container"));
    /*event to make the link corresponding to
    the section in viewport in active state.*/
    const activateLink = () => {
      let scrollPosition = document.documentElement.scrollTop;
      sections.forEach((sec) => {
        if (
          scrollPosition >= sec.offsetTop - sec.offsetHeight * 0.25 &&
          scrollPosition <=
            sec.offsetTop + sec.offsetHeight - sec.offsetHeight * 0.25
        ) {
          removeActive();
          addActive(sec.id);
        }
      });
    };
    onscroll = () => {
      activateLink();
    };
  }, []);

  return (
    <div className="container header" id="header">
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
            <button className="btn">
              <a
                href={
                  "https://drive.google.com/file/d/112_FQL_zZUw_El6xIlxjqm_ylkOpJRmQ/view?usp=share_link"
                }
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </button>
          </Slide>
          <Slide direction="right">
            <button className="btn">
              <a href="#contact">Let's Talk</a>
            </button>
          </Slide>
        </div>
      </div>
      <Fade direction="left">
        <div className="img">
          <img src={header} alt="img" />
        </div>
      </Fade>
      <SocialMedia />
      <div className="navbar">
        <NavBar />
      </div>
      <div className="down-btn" id="down">
        <ScrollBtn direction={"bottom"} Id={"#contact"} />
      </div>
    </div>
  );
};

export default Header;
