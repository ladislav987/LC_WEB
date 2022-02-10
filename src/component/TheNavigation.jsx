import React from "react";
import { NavLink } from "react-router-dom";

import "./TheNavigation.scss";

const TheNavigation = ({ changeTheme }) => {
  return (
    <div className="NavContainer">
      <svg
        width="255"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
        className="navLogo"
      >
        <g>
          <title>Layer 1</title>
          <text
            transform="matrix(1.54375 0 0 1.63151 -118.359 -118.786)"
            stroke="#000"
            fontWeight="bold"
            textAnchor="start"
            fontFamily="'Fraunces'"
            fontSize="28"
            id="svg_3"
            y="94.25404"
            x="77.06263"
            strokeWidth="0"
          >
            LC Web Docs
          </text>
        </g>
      </svg>

      <nav className="navigation">
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink to="/html" className="">
          HTML
        </NavLink>
        <NavLink to="/css" className="">
          CSS
        </NavLink>
        <NavLink to="/js" className="">
          JS
        </NavLink>
        <NavLink to="/react" className="">
          React
        </NavLink>
      </nav>
      <button className="btn" onClick={changeTheme}>
        White/Black
      </button>
    </div>
  );
};

export default TheNavigation;
