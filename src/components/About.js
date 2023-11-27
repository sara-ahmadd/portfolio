import React from "react";
import "../css/main.css";
import about from "../images/about.svg";
import { FcBarChart } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { Bounce, Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="container about" id="about">
      <div className="title">
        <Fade direction="left" triggerOnce={true}>
          <h2>About Me</h2>
        </Fade>
      </div>
      <div className="about-content">
        <Bounce className="img" triggerOnce={true}>
          <div>
            <img src={about} alt="img" />
          </div>
        </Bounce>
        <Bounce className="text" triggerOnce={true}>
          <div>
            <div className="icons">
              <div>
                <i>
                  <FcBarChart />
                </i>
                <h3>
                  <a href="#experience">Experience</a>
                </h3>
                <h5>+Two Year Working</h5>
              </div>
              <div>
                <i>
                  <FcBullish />
                </i>
                <h3>
                  <a href="#portfolio">Projects</a>
                </h3>
                <h5>+30 Completed</h5>
              </div>
            </div>
            <p className="parag">
              I'm a frontend web developer, experienced in creating responsive
              web applications UI. I've been studying and creating projects for
              more than one year, working with HTML, CSS, Javascript, Bootstrap
              ,Reactjs and other technologies. A knowledgeable programmer
              seeking opportunities in software development to improve my skills
              and learn new stuff.
            </p>
            <button className="btn">
              <a href="#contact">Let's Talk</a>
            </button>
          </div>
        </Bounce>
      </div>
    </div>
  );
};

export default About;
