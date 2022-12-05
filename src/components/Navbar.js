import React from "react";
import "../css/main.css";
import { ImHome } from "react-icons/im";
import { ImWoman } from "react-icons/im";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { BiCommand } from "react-icons/bi";
import { FiAward } from "react-icons/fi";

const NavBar = () => {
  return (
    <ul className="nav">
      <li>
        <a href="#header">
          <ImHome />
        </a>
      </li>
      <li>
        <a href="#about">
          <ImWoman />
        </a>
      </li>
      <li>
        <a href="#experience">
          <FiAward />
        </a>
      </li>
      <li>
        <a href="#services">
          <BiCommand />
        </a>
      </li>
      <li>
        <a href="#portfolio">
          <BiCodeAlt />
        </a>
      </li>
      <li>
        <a href="#contact">
          <BsFillEnvelopeOpenFill />
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
