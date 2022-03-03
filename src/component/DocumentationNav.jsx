import React from "react";

import { NavLink } from "react-router-dom";

const DocumentationNav = () => {
  return (
    <div className="documentation_nav">
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
    </div>
  );
};

export default DocumentationNav;
