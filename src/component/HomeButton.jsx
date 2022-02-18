import React from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";

const HomeButton = () => {
  return (
    <>
      <button className="btn">
        <NavLink to="/">
          <AiOutlineHome />
        </NavLink>
      </button>
    </>
  );
};

export default HomeButton;
