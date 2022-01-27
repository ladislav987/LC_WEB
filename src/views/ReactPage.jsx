import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import "./ReactPage.scss";
import Props from "./reactPageSubpages/Props";

const ReactPage = () => {
  return (
    <div className="page-wrapper">
      <h1>React stránka</h1>
      <aside>
        <ul>
          <NavLink to="props">Props</NavLink>
          <NavLink to="dalsie">Dalšie</NavLink>
        </ul>
      </aside>

      <main>
        <Routes>
          <Route path="props" element={<Props />} />
          <Route path="dalsie" element={<h1>Dalšie</h1>} />
        </Routes>
      </main>
    </div>
  );
};

export default ReactPage;
