import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import "./views.scss";

import Props from "./reactPageSubpages/Props";
import PropsChildren from "./reactPageSubpages/PropsChildren";

const ReactPage = () => {
  return (
    <div className="page-wrapper">
      <h1>React stránka</h1>
      <aside>
        <ul>
          <li>
            <NavLink to="props">Props</NavLink>
          </li>
          <li>
            <NavLink to="propsChildren">Props Children</NavLink>
          </li>
        </ul>
      </aside>

      <main>
        <Routes>
          <Route path="props" element={<Props />} />
          <Route path="propsChildren" element={<PropsChildren />} />
        </Routes>
      </main>
    </div>
  );
};

export default ReactPage;
