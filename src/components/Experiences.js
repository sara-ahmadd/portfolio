import React from "react";
import "../css/main.css";
import { BiBadgeCheck } from "react-icons/bi";

const Experiences = () => {
  const skills = {
    front: [
      { skill: "HTML", level: "Experienced" },
      { skill: "CSS", level: "Experienced" },
      { skill: "JavaScript", level: "Experienced" },
      { skill: "ReactJs", level: "Experienced" },
      { skill: "Bootstrap", level: "Experienced" },
      { skill: "Tailwind", level: "Intermediate" },
      { skill: "Sass(SCSS)", level: "Experienced" },
    ],
    back: [
      { skill: "Node.js", level: "Basics" },
      { skill: "PostgreSQL", level: "Basics" },
      { skill: "TypeScript", level: "Basics" },
    ],
  };
  return (
    <div className="container experience">
      <h2>My Experience</h2>
      <div className="content">
        <div className="front-end">
          <div className="title">
            <h2>Front-end Development</h2>
          </div>
          <div className="skills">
            {skills.front.map((x) => {
              return (
                <div className="skill" key={x.skill}>
                  <div className="skill-title">
                    <i>
                      <BiBadgeCheck />
                    </i>
                    <h3>{x.skill}</h3>
                  </div>
                  <div className="text">
                    <h5>{x.level}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="back-end">
          <div className="title">
            <h2>Back-end Development</h2>
          </div>
          <div className="skills">
            {skills.back.map((x) => {
              return (
                <div className="skill" key={x.skill}>
                  <div className="skill-title">
                    <i>
                      <BiBadgeCheck />
                    </i>
                    <h3>{x.skill}</h3>
                  </div>
                  <div className="text">
                    <h5>{x.level}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
