import React from "react";
import { NavLink } from "react-router-dom";

import ThemeButton from "../component/ThemeButton";
import Svg from "../component/Svg";

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
            O mne
          </NavLink>
          <NavLink to="/portfolio" className="item portfolio">
            Portfólio
          </NavLink>
          <NavLink to="/documentation" className="item documentation">
            Dokumentácia
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default FirstMenu;
