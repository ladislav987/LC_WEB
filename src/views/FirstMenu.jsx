import React from "react";
import { NavLink } from "react-router-dom";

import ThemeButton from "../component/ThemeButton";
import Svg from "../component/Svg";

import "../scss/FirstMenu.scss";

const FirstMenu = () => {
  return (
    <>
      <header>
        <nav className="topNavigationContainer">
          <Svg />
          <ThemeButton />
        </nav>
      </header>
      <div className="gridMenu">
        <div className="gridMenuContainer">
          <NavLink to="/aboutMe" className="item aboutMe">
            <p className="aboutMeP">O mne</p>
          </NavLink>
          <NavLink to="/portfolio" className="item portfolio">
            <p className="portfolioP">Portfólio</p>
          </NavLink>
          <NavLink to="/documentation" className="item documentation">
            <p className="documentationP">Dokumentácia</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default FirstMenu;
