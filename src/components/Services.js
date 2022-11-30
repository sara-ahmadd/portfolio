import React from "react";
import "../css/main.css";
import services from "../images/services.svg";
import { Slide, Fade } from "react-awesome-reveal";

const Services = () => {
  return (
    <div className="container services">
      <Fade direction="left">
        <h2>Services</h2>
      </Fade>
      <div className="services-content">
        <Slide direction="left" className="parag">
          <p>
            I'm a front-end web developer who can build your website responsive
            UI for small and medium sized businesses. If you want a portfolio,
            website to list your services or create an online store , I can help
            you with pleasure. - I'm experienced in HTML5, CSS3, JS(ES6),
            Bootstrap and ReactJs.
          </p>
        </Slide>
        <Slide direction="right" className="img">
          <div>
            <img src={services} alt="img" />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Services;
