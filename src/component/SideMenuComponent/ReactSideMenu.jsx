import React from "react";
import { NavLink } from "react-router-dom";

const ReactSideMenu = (props) => {
  const handleClick = () => {
    if (window.innerWidth < 700) {
      props.onClickToMenu();
    }
  };

  return (
    <>
      <ul>
        <li>
          <NavLink onClick={handleClick} to="props">
            Props
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="propsChildren">
            Props Children
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="fragment">
            Fragment
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="prevState">
            prevState
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="multipleReturns">
            MultipleReturns
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="forms">
            Forms
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="howCreateID">
            How Create ID
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="propTypes">
            Prop Types
          </NavLink>
        </li>

        <li>
          <details>
            <summary>Hooks</summary>
            <ul className="toggle">
              <li>
                <NavLink onClick={handleClick} to="hook">
                  Hook
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="customHooks">
                  Custom Hooks
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="useState">
                  useState()
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="useEffect">
                  useEffect()
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="useRef">
                  useRef()
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="useReducer">
                  useReducer()
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="useContext">
                  useContext()
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
                <NavLink onClick={handleClick} to="callbackFunction">
                  Callback funkcia
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="map">
                  map()
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </>
  );
};

export default ReactSideMenu;
