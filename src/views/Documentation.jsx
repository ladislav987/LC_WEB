import React from "react";
import { NavLink } from "react-router-dom";

const Documentation = () => {
  return (
    <div>
      <div className="appSkuska">
        <div className="containerSkuska">
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
