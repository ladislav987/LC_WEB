import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import "./views.scss";

import Details from "./htmlSubpages/Details";
import Summary from "./htmlSubpages/Summary";


const Html = () => {
  return (
    <div className="page-wrapper">
      <h1>HTML stránka</h1>
      <aside>
        <ul>
          <li>
            <NavLink to="details">&#60;details&gt;</NavLink>
          </li>
          <li>
            <NavLink to="summary">&#60;summary&gt;</NavLink>
          </li>
        </ul>
      </aside>

      <main>
        <Routes>
          <Route path="details" element={<Details />} />
          <Route path="summary" element={<Summary />} />
        </Routes>
      </main>
    </div>
  );
};

export default Html;
