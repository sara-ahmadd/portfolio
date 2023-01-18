import React from "react";
import "../css/main.css";
import proj1 from "../images/project1.jpg";
import proj2 from "../images/project2.jpg";
import proj3 from "../images/project3.jpg";
import proj4 from "../images/project4.jpg";
import proj5 from "../images/project5.jpg";
import proj7 from "../images/project7.jpg";
import proj8 from "../images/project8.jpg";
import proj9 from "../images/project9.jpg";
import proj10 from "../images/project10.jpg";
import proj11 from "../images/project11.jpg";
import proj12 from "../images/project12.jpg";

import { Slide, Fade } from "react-awesome-reveal";

const Portfolio = () => {
  const projects = [
    {
      name: "Agency Landing Page",
      image: proj5,
      site: "https://realestate-landing-page-three.vercel.app/",
      srcCode: "https://github.com/sara-ahmadd/agency-landing-page",
      technologies: "Built with HTML, CSS(SCSS), JS , Jquery & Bootstrap",
    },
    {
      name: "Landing Page",
      image: proj1,
      site: "http://landing-page-sara-app.surge.sh/",
      srcCode: "https://github.com/sara-ahmadd/html-css-template3",
      technologies: "Built with HTML & CSS",
    },
    {
      name: "Landing page",
      image: proj9,
      site: "https://bank-landingpage.surge.sh/",
      srcCode: "https://github.com/sara-ahmadd/bank-landing-page",
      technologies: "Built with : ReactJs, Tailwind",
    },

    {
      name: "Landing Page",
      image: proj7,
      site: "https://sara-ahmadd.github.io/html-css-template-one/",
      srcCode: "https://github.com/sara-ahmadd/html-css-template-one",
      technologies: "Built with HTML & CSS",
    },
    {
      name: "Quiz Application",
      image: proj8,
      site: "https://quiz-app-sara-app.vercel.app/",
      srcCode: "https://github.com/sara-ahmadd/quiz-app",
      technologies: "Built with HTML(PugJs), CSS(SCSS), JS",
    },
    {
      name: "Menu Application",
      image: proj12,
      site: "https://menu-project-sara-app.vercel.app/#meals",
      srcCode: "https://github.com/sara-ahmadd/menu",
      technologies: "Built with HTML, CSS(SCSS), JS",
    },
    {
      name: "Landing Page",
      image: proj11,
      site: "https://realestate-landing-page-sara-app.surge.sh/",
      srcCode: "https://github.com/sara-ahmadd/realestate-landing-page",
      technologies: "Built with HTML & CSS",
    },

    {
      name: "Landing Page",
      image: proj10,
      site: "https://landing-page-temp2-sara-app.surge.sh",
      srcCode: "https://github.com/sara-ahmadd/html-css-template2",
      technologies: "Built with HTML, CSS",
    },
    {
      name: "Shopping Cart",
      image: proj2,
      site: "https://shopping-cart-sara-app.surge.sh/",
      srcCode: "https://github.com/sara-ahmadd/shopping-cart",
      technologies: "Built with : HTML, CSS, JS",
    },
    {
      name: "Online Store",
      image: proj3,
      site: "http://mystore-sara-app.surge.sh/",
      srcCode: " https://github.com/sara-ahmadd/ecommerce-app",
      technologies: "Built With ReactJs, Bootstrap",
    },
    {
      name: "Books Tracking App",
      image: proj4,
      site: "https://my-reads-sara-app.surge.sh/",
      technologies: "Built With ReactJs",
      srcCode: " https://github.com/sara-ahmadd/my-reads",
    },
  ];
  return (
    <div className="container portfolio" id="portfolio">
      <Fade direction="left">
        <h2>Projects</h2>
      </Fade>
      <div className="projects">
        {projects.map((x, ind) => {
          return (
            <Slide key={x.image} direction={ind % 2 === 0 ? "left" : "right"}>
              <div className="project">
                <div className="img" data-technologies={x.technologies}>
                  <img src={x.image} alt={x.name} />
                </div>
                <p className="txt">{x.name}</p>
                <div className="btns">
                  <button className="visit">
                    <a href={x.site} target="_blank" rel="noreferrer">
                      Visit Site
                    </a>
                  </button>
                  <button className="src-code">
                    <a href={x.srcCode}>Source Code</a>
                  </button>
                </div>
              </div>
            </Slide>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
