import "../css/main.css";
import React from "react";
import { FiChevronsUp } from "react-icons/fi";
import { FiChevronsDown } from "react-icons/fi";

function ScrollBtn({ direction, Id }) {
  return (
    <button className="scroll">
      <a href={Id}>
        <i> {direction === "up" ? <FiChevronsUp /> : <FiChevronsDown />}</i>
      </a>
    </button>
  );
}

export default ScrollBtn;
