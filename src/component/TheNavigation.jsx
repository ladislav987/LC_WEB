import React from "react";
import { NavLink } from "react-router-dom";

import "./TheNavigation.scss";

//? import logo
import logo from "../assets/logo3.svg";

const TheNavigation = ({ changeTheme }) => {
  return (
    <div className="NavContainer">
      <img src={logo} className="navLogo" alt="logo" />

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
