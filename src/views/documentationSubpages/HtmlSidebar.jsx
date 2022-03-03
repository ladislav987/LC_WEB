import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import HtmlMenu from "./HtmlMenu";

const HtmlSidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const Toogle = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="navbar sidebar">
        <NavLink to="#" className="menu-bars">
          <GiHamburgerMenu onClick={Toogle} />
        </NavLink>
      </div>

      <nav className={sidebar ? "nav_menu active" : "nav_menu"}>
        <HtmlMenu onClickToMenu={Toogle} />
      </nav>
    </>
  );
};

export default HtmlSidebar;
