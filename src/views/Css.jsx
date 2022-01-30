import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import "./views.scss";

import Cursor from "./cssSubpages/Cursor";

const Css = () => {
  return (
    <div className="page-wrapper">
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
  );
};

export default Css;
