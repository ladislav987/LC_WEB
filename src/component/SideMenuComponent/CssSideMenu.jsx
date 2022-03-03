import React from "react";
import { NavLink } from "react-router-dom";

const CssSideMenu = (props) => {
  const handleClick = () => {
    if (window.innerWidth < 700) {
      props.onClickToMenu();
    }
  };

  return (
    <>
      <ul>
        <li>
          <NavLink onClick={handleClick} to="cursor">
            Cursor
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default CssSideMenu;
