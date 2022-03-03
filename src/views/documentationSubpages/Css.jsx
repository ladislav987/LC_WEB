import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Svg from "../../component/Svg";
import HomeButton from "../../component/HomeButton";
import DocumentationNav from "../../component/DocumentationNav";
import ThemeButton from "../../component/ThemeButton";

import Cursor from "../cssSubpages/Cursor.jsx";

const Css = () => {
  return (
    <>
      <header>
        <nav className="topNavigationContainer">
          <Svg />
          <HomeButton />
          <DocumentationNav />
          <ThemeButton />
        </nav>
      </header>
      <div className="page_wrapper">
        <h1>CSS sekcia</h1>

        <aside>
          <ul>
            <li>
              <NavLink to="cursor">Cursor</NavLink>
            </li>
          </ul>
        </aside>

        <main>
          <Routes>
            <Route path="cursor" element={<Cursor />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default Css;