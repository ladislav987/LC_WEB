import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import "./views.scss";

import Props from "./reactPageSubpages/Props";
import PropsChildren from "./reactPageSubpages/PropsChildren";
import Fragment from "./reactPageSubpages/Fragment";
import Map from "./reactPageSubpages/Map";
import UseState from "./reactPageSubpages/UseState";
import UseEffect from "./reactPageSubpages/UseEffect";
import Hook from "./reactPageSubpages/Hook";

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
          <li>
            <NavLink to="fragment">Fragment</NavLink>
          </li>
          <li>
            <details>
              <summary>Hooks</summary>
              <ul className="toggle">
                <li>
                  <NavLink to="hook">Hook</NavLink>
                </li>
                <li>
                  <NavLink to="useState">useState()</NavLink>
                </li>
                <li>
                  <NavLink to="useEffect">useEffect()</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Funkcie</summary>
              <ul className="toggle">
                <li>
                  <NavLink to="map">map()</NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </aside>

      <main>
        <Routes>
          <Route path="props" element={<Props />} />
          <Route path="propsChildren" element={<PropsChildren />} />
          <Route path="fragment" element={<Fragment />} />
          <Route path="hook" element={<Hook />} />
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="map" element={<Map />} />
        </Routes>
      </main>
    </div>
  );
};

export default ReactPage;
