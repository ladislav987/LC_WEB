import React from 'react'
import { NavLink } from "react-router-dom";

const CssSideMenu = (props) => {
  const handleClick = () => {
    props.onClickToMenu();
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

export default CssSideMenu