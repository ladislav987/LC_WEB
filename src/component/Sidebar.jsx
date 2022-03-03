import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

import HtmlSideMenu from "./SideMenuComponent/HtmlSideMenu";
import ReactSideMenu from "./SideMenuComponent/ReactSideMenu";
import CssSideMenu from "./SideMenuComponent/CssSideMenu";
import JsSideMenu from "./SideMenuComponent/JsSideMenu";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  let Component;

  let pathname = window.location.pathname.replace("/", "").split("/")[0];

  switch (pathname) {
    case "html":
      Component = HtmlSideMenu;
      break;
    case "react":
      Component = ReactSideMenu;
      break;

    case "css":
      Component = CssSideMenu;
      break;

    case "js":
      Component = JsSideMenu;
      break;

    default:
      console.error("Unknow case in switch (Sidebar.jsx)");
      break;
  }

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
        <Component onClickToMenu={Toogle} />
      </nav>
    </>
  );
};

export default Sidebar;
