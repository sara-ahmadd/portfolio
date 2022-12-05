import React, { useState } from "react";
import "../css/main.css";
import pic from "../images/email.png";
import mailIcon from "../images/email-icon.png";
import { Bounce, Slide } from "react-awesome-reveal";
import SocialMedia from "./SocialMedia";
import ScrollBtn from "./ScrollBtn";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formElement, setFormElement] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        
      )
      .then(
        (result) => {
          setFormElement({
            name: "",
            email: "",
            message: "",
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputFields = (e) => {
    setFormElement({
      ...formElement,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container contact" id="contact">
      <Slide direction="left">
        <div className="title">
          <img src={mailIcon} alt="icon" />
          <h2>Contact Me</h2>
        </div>
      </Slide>
      <div className="content">
        <Bounce className="left">
          <img src={pic} alt="img" />
        </Bounce>
        <Slide direction="right" className="right">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              value={formElement.name}
              onChange={(e) => {
                handleInputFields(e);
              }}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formElement.email}
              onChange={(e) => {
                handleInputFields(e);
              }}
              placeholder="Your E-mail"
              required
            />
            <textarea
              placeholder="Your Message"
              required
              name="message"
              value={formElement.message}
              onChange={(e) => {
                handleInputFields(e);
              }}
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </Slide>
        <SocialMedia />
      </div>
      <div className="up-btn" id="up">
        <ScrollBtn direction={"up"} Id={"#header"} />
      </div>
    </div>
  );
};

export default Contact;
