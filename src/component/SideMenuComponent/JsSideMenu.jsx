import React from "react";
import { NavLink } from "react-router-dom";

const JsSideMenu = (props) => {
  const handleClick = () => {
    if (window.innerWidth < 700) {
      props.onClickToMenu();
    }
  };

  return (
    <>
      <ul>
        <li>
          <NavLink onClick={handleClick} to="promises">
            Promises
          </NavLink>
        </li>

        <li>
          <NavLink onClick={handleClick} to="async">
            Async
          </NavLink>
        </li>

        <li>
          <NavLink onClick={handleClick} to="dynamicObjectProperties">
            Dynamic Object Properties
          </NavLink>
        </li>

        <li>
          <NavLink onClick={handleClick} to="switch">
            Switch
          </NavLink>
        </li>

        <li>
          <details>
            <summary>Operátory</summary>
            <ul className="toggle">
              <li>
                <NavLink onClick={handleClick} to="logickeOperatory">
                  Logické Operátory
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="ternarnyOperator">
                  Ternárny Operátor
                </NavLink>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Funkcie</summary>
            <ul className="toggle">
              <li>
                <NavLink onClick={handleClick} to="fetch">
                  fetch()
                </NavLink>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Metódy</summary>
            <ul className="toggle">
              <li>
                <NavLink onClick={handleClick} to="addEventListener">
                  addEventListener()
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="getItem">
                  getItem()
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="setItem">
                  setItem()
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="getElementById">
                  getElementById()
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="getElementsByClassName">
                  getElementsByClassName()
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </>
  );
};

export default JsSideMenu;
