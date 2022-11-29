import React from "react";
import "../css/main.css";
import about from "../images/about.svg";
import { FcConferenceCall } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";

const About = () => {
  return (
    <div className="container about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <div className="img">
          <img src={about} alt="img" />
        </div>
        <div className="text">
          <div className="icons">
            <div>
              <i>
                <FcBarChart />
              </i>
              <h3>Experience</h3>
              <h5>+10 Years Working</h5>
            </div>
            <div>
              <i>
                <FcConferenceCall />
              </i>
              <h3>Clients</h3>
              <h5>+100 World Wide</h5>
            </div>
            <div>
              <i>
                <FcBullish />
              </i>
              <h3>Projects</h3>
              <h5>+300 Completed</h5>
            </div>
          </div>
          <p className="parag">
            excepteur Lorem fugiat cillum cillum ea. Consequat deserunt amet sit
            veniam consectetur incididunt minim. Excepteur exercitation nulla
            exercitation proident cillum voluptate esse. Anim ut veniam nulla
            nisi veniam irure aute et aliquip id est elit dolor. Anim proident
            anim Lorem et dolore qui id ea.
          </p>
          <button className="btn">Let's Talk</button>
        </div>
      </div>
    </div>
  );
};

export default About;
