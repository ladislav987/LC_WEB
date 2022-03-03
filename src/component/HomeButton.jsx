import React from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";

import { IconContext } from "react-icons";

const HomeButton = () => {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <button className="btn home_btn">
        <NavLink to="/">
          <AiOutlineHome />
        </NavLink>
      </button>
    </IconContext.Provider>
  );
};

export default HomeButton;
