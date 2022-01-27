import React from "react";
import { NavLink } from "react-router-dom";

//? import scss
import styles from "./TheNavigation.module.scss";

//? import logo
import logo from "../assets/logo3.svg";

const TheNavigation = ({changeTheme }) => {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.navLogo} alt="logo" />

      <nav className={styles.navigation}>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? styles.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/html"
          className={(navData) => (navData.isActive ? styles.active : "")}
        >
          HTML
        </NavLink>
        <NavLink
          to="/css"
          className={(navData) => (navData.isActive ? styles.active : "")}
        >
          CSS
        </NavLink>
        <NavLink
          to="/js"
          className={(navData) => (navData.isActive ? styles.active : "")}
        >
          JS
        </NavLink>
        <NavLink
          to="/react"
          className={(navData) => (navData.isActive ? styles.active : "")}
        >
          React
        </NavLink>
      </nav>
      <button className={styles.btn} onClick={changeTheme}>
        White/Black
      </button>
    </div>
  );
};

export default TheNavigation;
