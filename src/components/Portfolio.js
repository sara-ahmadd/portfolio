import React from "react";
import "../css/main.css";
import proj1 from "../images/project1.jpg";
import proj2 from "../images/project2.jpg";
import proj3 from "../images/project3.jpg";
import proj4 from "../images/project4.jpg";
import proj5 from "../images/project5.jpg";

import { Slide, Fade } from "react-awesome-reveal";

const Portfolio = () => {
  const projects = [
    {
      name: "landing Page",
      image: proj1,
      site: "http://landing-page-sara-app.surge.sh/",
      srcCode: "https://github.com/sara-ahmadd/html-css-template3",
      technologies: "Built with HTML & CSS",
    },
    {
      name: "Shopping Cart",
      image: proj2,
      site: "https://shopping-cart-sara-app.surge.sh/",
      srcCode: "https://github.com/sara-ahmadd/shopping-cart",
      technologies: "Built with : HTML, CSS, JS",
    },
    {
      name: "Decorations Website",
      image: proj5,
      site: "https://sara-ahmadd.github.io/basco-project/",
      srcCode: "https://github.com/sara-ahmadd/basco-project",
      technologies: "Built with HTML, CSS, JS",
    },
    {
      name: "Books Tracking App",
      image: proj4,
      site: "https://my-reads-sara-app.surge.sh/",
      technologies: "Built With ReactJ",
      srcCode: " https://github.com/sara-ahmadd/my-reads",
    },
    {
      name: "Online Store",
      image: proj3,
      site: "http://mystore-sara-app.surge.sh/",
      srcCode: " https://github.com/sara-ahmadd/ecommerce-app",
      technologies: "Built With ReactJ",
    },
  ];
  return (
    <div className="container portfolio">
      <Fade direction="left">
        <h2>Projects</h2>
      </Fade>
      <div className="projects">
        {projects.map((x, ind) => {
          return (
            <Slide key={x.name} direction={ind > 2 ? "left" : "right"}>
              <div className="project">
                <div className="img" data-technologies={x.technologies}>
                  <img src={x.image} alt={x.name} />
                </div>
                <p className="txt">{x.name}</p>
                <div className="btns">
                  <button className="visit">
                    <a href={x.site}>Visit Site</a>
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
