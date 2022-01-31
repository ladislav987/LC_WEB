import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import "./views.scss";

import Promises from "./jsSubpages/Promises";
import Async from "./jsSubpages/Async";
import Fetch from "./jsSubpages/Fetch";
import LogickeOperatory from "./jsSubpages/LogickeOperatory";
import TernarnyOperator from "./jsSubpages/TernarnyOperator";

const Js = () => {
  return (
    <div className="page-wrapper">
      <h1>JS sekcia</h1>

      <aside>
        <ul>
          <li>
            <NavLink to="promises">Promises</NavLink>
          </li>

          <li>
            <NavLink to="async">Async</NavLink>
          </li>

          <li>
            <details>
              <summary>Operátory</summary>
              <ul className="toggle">
                <li>
                  <NavLink to="logickeOperatory">Logické Operátory</NavLink>
                </li>
                <li>
                  <NavLink to="ternarnyOperator">Ternárny Operátor</NavLink>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Funkcie</summary>
              <ul className="toggle">
                <li>
                  <NavLink to="fetch">fetch()</NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </aside>

      <main>
        <Routes>
          <Route path="promises" element={<Promises />} />
          <Route path="async" element={<Async />} />
          <Route path="logickeOperatory" element={<LogickeOperatory />} />
          <Route path="ternarnyOperator" element={<TernarnyOperator />} />
          <Route path="fetch" element={<Fetch />} />
        </Routes>
      </main>
    </div>
  );
};

export default Js;
