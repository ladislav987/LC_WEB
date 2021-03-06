import React from "react";
import { NavLink } from "react-router-dom";

import HomeButton from "../../component/HomeButton";
import Svg from "../../component/Svg";
import ThemeButton from "../../component/ThemeButton";

const Documentation = () => {
  return (
    <div>
      <header>
        <nav className="topNavigationContainer">
          <Svg />
          <HomeButton />
          <ThemeButton />
        </nav>
      </header>
      <div className="gridMenu">
        <div className="gridMenuContainer">
          <NavLink to="/html" className="item">
            HTML
          </NavLink>
          <NavLink to="/css" className="item">
            CSS
          </NavLink>
          <NavLink to="/js" className="item">
            JS
          </NavLink>
          <NavLink to="/react" className="item">
            React
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
