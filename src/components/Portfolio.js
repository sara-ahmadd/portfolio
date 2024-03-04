import React from "react";
import "../css/main.css";
import proj1 from "../images/project1.jpg";
import ecommerce from "../images/ecommerce.jpg";
import proj4 from "../images/project4.jpg";
import proj5 from "../images/project5.jpg";
import proj8 from "../images/project8.jpg";
import proj9 from "../images/project9.jpg";
import linkedin from "../images/linkedin.jpg";
import proj11 from "../images/react-ts-ecommerce.jpg";
import proj12 from "../images/project12.jpg";
import onlineShop from "../images/online-shop.jpg";
import freshCart from "../images/freshCart.jpg";
import books from "../images/bokks.jpg";
import youtube from "../images/youtube_clone.jpg";

import { Slide, Fade } from "react-awesome-reveal";

const Portfolio = () => {
  const projects = [
    {
      name: "Fresh Cart",
      image: freshCart,
      site: "https://fresh-cart-final-route.vercel.app/",
      srcCode: "https://github.com/sara-ahmadd/fresh-cart-final-route",
      technologies: "Built with Angular16, Bootstrap, sweet-alert",
    },
    {
      name: "Online Shop",
      image: onlineShop,
      site: "https://online-shop-nextjs.vercel.app/",
      srcCode: "https://github.com/sara-ahmadd/online-shop-nextjs",
      technologies:
        "Built with NextJs, TailwindCSS, Typescript, Next-Auth, MongoDB, bcrypt-ts",
    },
    {
      name: "Books Tracker",
      image: books,
      site: "https://sara-ahmad-books-tracker.vercel.app/",
      srcCode: "https://github.com/sara-ahmadd/books-tracker",
      technologies:
        "Built with NextJs, TailwindCSS, Typescript, Next-Auth, MongoDB, bcrypt-ts",
    },

    {
      name: "Youtube Clone",
      image: youtube,
      site: "https://youtube-clone-sara-app.surge.sh/",
      srcCode: " https://github.com/sara-ahmadd/youtube_clone",
      technologies: "Built With ReactJs, SASS(SCSS), Youtube/V3 Api",
    },
    {
      name: "Linked-In Clone",
      image: linkedin,
      site: "https://linkedin-clone-sara-app.surge.sh/",
      srcCode: " https://github.com/sara-ahmadd/linkedin-clone",
      technologies: "Built With ReactJs, Firebase, Redux, Styled components",
    },
    {
      name: "Ecommerce App",
      image: proj11,
      site: "https://ts-react-ecommerce-app.vercel.app/",
      srcCode: "https://github.com/sara-ahmadd/ts-react-ecommerce-app",
      technologies:
        "Built with ReactJs, TailwindCSS, Typescript, SwiperJs, SweetAlert",
    },
    {
      name: "Menu Application",
      image: proj12,
      site: "https://menu-project-sara-app.vercel.app/#meals",
      srcCode: "https://github.com/sara-ahmadd/menu",
      technologies: "Built with HTML, CSS(SCSS), JS",
    },
    {
      name: "Landing page",
      image: proj9,
      site: "https://bank-landingpage.surge.sh/",
      srcCode: "https://github.com/sara-ahmadd/bank-landing-page",
      technologies: "Built with : ReactJs, Tailwind",
    },
    {
      name: "HTML CSS Template",
      image: proj1,
      site: "http://landing-page-sara-app.surge.sh/",
      srcCode: "https://github.com/sara-ahmadd/html-css-template3",
      technologies: "Built with HTML & CSS",
    },
    {
      name: "Books Tracking App",
      image: proj4,
      site: "https://my-reads-sara-app.surge.sh/",
      technologies: "Built With ReactJs",
      srcCode: " https://github.com/sara-ahmadd/my-reads",
    },
    {
      name: "Quiz Application",
      image: proj8,
      site: "https://quiz-app-sara-app.vercel.app/",
      srcCode: "https://github.com/sara-ahmadd/quiz-app",
      technologies: "Built with HTML(PugJs), CSS(SCSS), JS",
    },
    {
      name: "Ecommerce Application",
      image: ecommerce,
      site: "https://ecommerceapp-sara-app.surge.sh/",
      srcCode: " https://github.com/sara-ahmadd/advanced-ecommerce-app",
      technologies:
        "Built With ReactJs, Bootstrap, Firebase, Redux Toolkit, Sass(SCSS)",
    },
    {
      name: "Agency Landing Page",
      image: proj5,
      site: "https://agency-landing-page-sara-app.vercel.app/",
      srcCode: "https://github.com/sara-ahmadd/agency-landing-page",
      technologies: "Built with HTML, CSS(SCSS), JS & Jquery",
    },
  ];
  return (
    <div className="container portfolio" id="portfolio">
      <Fade direction="left" triggerOnce={true}>
        <h2>Projects</h2>
      </Fade>
      <div className="projects">
        {projects.map((x, ind) => {
          return (
            <Slide
              key={x.image}
              direction={ind % 2 === 0 ? "left" : "right"}
              triggerOnce={true}
            >
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
                    <a href={x.srcCode} target="_blank" rel="noreferrer">
                      Source Code
                    </a>
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
