import React from "react";
import "../css/main.css";
import services from "../images/services.svg";
import { Slide, Fade } from "react-awesome-reveal";
import { BiCodeAlt } from "react-icons/bi";

const Services = () => {
  return (
    <div className="container services" id="services">
      <Fade direction="left" triggerOnce={true}>
        <h2>Services</h2>
      </Fade>
      <div className="services-content">
        <Slide direction="left" className="parag" triggerOnce={true}>
          <div>
            <div className="title">
              <i>
                <BiCodeAlt />
              </i>
              <h3>Front-end Web Development</h3>
            </div>
            <p>
              I'm a front-end web developer who can build your website
              responsive UI for small and medium sized businesses. If you want a
              portfolio or a website to list your services, I can help you with
              pleasure. - I'm experienced in HTML5, CSS3, JS(ES6), Bootstrap and
              ReactJs.
            </p>
          </div>
        </Slide>
        <Slide direction="right" className="img" triggerOnce={true}>
          <div>
            <img src={services} alt="img" />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Services;
