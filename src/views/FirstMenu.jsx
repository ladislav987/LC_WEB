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
          <NavLink to="/aboutMe" className="item">
            O mne
          </NavLink>
          <NavLink to="/portfolio" className="item">
            Portfólio
          </NavLink>
          <NavLink to="/documentation" className="item">
            Dokumentácia
          </NavLink>
          <NavLink to="/other" className="item">
            Iné niečo
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default FirstMenu;
