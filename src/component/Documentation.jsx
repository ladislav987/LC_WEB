import React from 'react'
import { NavLink } from "react-router-dom";

const Documentation = () => {
  return (
    <>
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
    </>
  );
}

export default Documentation