import React from "react";
import "../css/main.css";
import about from "../images/about.svg";
import { FcBarChart } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { Bounce, Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="container about">
      <div className="title">
        <Fade direction="left">
          <h2>About Me</h2>
        </Fade>
      </div>
      <div className="about-content">
        <Bounce className="img">
          <div>
            <img src={about} alt="img" />
          </div>
        </Bounce>
        <Bounce className="text">
          <div>
            <div className="icons">
              <div>
                <i>
                  <FcBarChart />
                </i>
                <h3>Experience</h3>
                <h5>+One Year Working</h5>
              </div>
              <div>
                <i>
                  <FcBullish />
                </i>
                <h3>Projects</h3>
                <h5>+30 Completed</h5>
              </div>
            </div>
            <p className="parag">
              excepteur Lorem fugiat cillum cillum ea. Consequat deserunt amet
              sit veniam consectetur incididunt minim. Excepteur exercitation
              nulla exercitation proident cillum voluptate esse. Anim ut veniam
              nulla nisi veniam irure aute et aliquip id est elit dolor. Anim
              proident anim Lorem et dolore qui id ea.
            </p>
            <button className="btn">Let's Talk</button>
          </div>
        </Bounce>
      </div>
    </div>
  );
};

export default About;
