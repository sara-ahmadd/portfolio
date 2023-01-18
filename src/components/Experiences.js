import React from "react";
import "../css/main.css";
import { Icon } from "@iconify/react";
import html5 from "@iconify/icons-logos/html-5";
import { DiCss3Full } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";

import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { SiJquery, SiRedux } from "react-icons/si";
import tailwindIcon from "../images/tailwind-logo.svg";
import typescriptIcon from "../images/typescript-logo.svg";

import { Zoom, Fade } from "react-awesome-reveal";

const Experiences = () => {
  const skills = {
    front: [
      { skill: "HTML5", level: "Experienced", icon: <DiHtml5 /> },
      { skill: "CSS3", level: "Experienced", icon: <DiCss3Full /> },
      {
        skill: "JavaScript(ES6)",
        level: "Experienced",
        icon: <DiJavascript1 />,
      },
      {
        skill: "jQuery",
        level: "Intermediate",
        icon: <SiJquery />,
      },
      { skill: "Bootstrap", level: "Experienced", icon: <DiBootstrap /> },
      { skill: "ReactJs", level: "Experienced", icon: <DiReact /> },
      { skill: "Redux Toolkit", level: "Intrmediate", icon: <SiRedux /> },
      {
        skill: "Tailwind",
        level: "Intermediate",
        icon: <img src={tailwindIcon} alt="img" />,
      },
      { skill: "Sass(SCSS)", level: "Experienced", icon: <DiSass /> },
      {
        skill: "TypeScript",
        level: "Intermediate",
        icon: <img src={typescriptIcon} alt="img" />,
      },
      { skill: "Node.js", level: "Basics", icon: <DiNodejsSmall /> },
    ],
  };
  return (
    <div className="container experience" id="experience">
      <Fade direction="left">
        <h2>My Experience</h2>
      </Fade>
      <div className="content">
        <div className="front-end">
          <div className="title">
            <Fade direction="right">
              <h2>Front-end Development Skills</h2>
            </Fade>
          </div>
          <div className="skills">
            {skills.front.map((x) => {
              return (
                <Zoom direction="in" key={x.skill}>
                  <div className="skill">
                    <div className="skill-title">
                      <i>{x.icon}</i>
                      <h3>{x.skill}</h3>
                    </div>
                    <div className="text">
                      <h5>{x.level}</h5>
                    </div>
                  </div>
                </Zoom>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
