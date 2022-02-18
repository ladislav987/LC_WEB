import React from "react";
import { NavLink } from "react-router-dom";

import ThemeButton from "../component/ThemeButton";
import Svg from "../component/Svg";
import "../scss/Home.scss";



const FirstMenu = () => {
  return (
    <>
      <header>
        <nav className="hornaNav">
          <Svg />
          <ThemeButton />
          
        </nav>
      </header>
      <div className="appSkuska">
        <div className="containerSkuska">
          <NavLink to="/aboutMe" className="item">
            O mne
          </NavLink>
          <NavLink to="/portfolio" className="item">
            Portfólio
          </NavLink>
          <NavLink to="/documentation" className="item">
            Dokumentácia
          </NavLink>
          <NavLink to="/other" className="item">
            Iné niečo
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default FirstMenu;
