import React from "react";

import "./TheNavigation.scss";

import Home from "./Home";
import Documentation from "./Documentation";

const TheNavigation = () => {
  return (
    <>
      <nav className="navigation">
        <Home />
        <Documentation />
      </nav>
    </>
  );
};

export default TheNavigation;
