import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Svg from "../../component/Svg";
import HomeButton from "../../component/HomeButton";
import DocumentationNav from "../../component/DocumentationNav";
import ThemeButton from "../../component/ThemeButton";

import Promises from "../jsSubpages/Promises";
import Async from "../jsSubpages/Async";
import Fetch from "../jsSubpages/Fetch";
import LogickeOperatory from "../jsSubpages/LogickeOperatory";
import TernarnyOperator from "../jsSubpages/TernarnyOperator";
import DynamicObjectProperties from "../jsSubpages/DynamicObjectProperties";
import AddEventListener from "../jsSubpages/AddEventListener";
import GetItem from "../jsSubpages/GetItem";
import SetItem from "../jsSubpages/SetItem";
import GetElementById from "../jsSubpages/GetElementById";
import GetElementsByClassName from "../jsSubpages/GetElementsByClassName";
import Switch from "../jsSubpages/Switch";

const Js = () => {
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
              <NavLink to="dynamicObjectProperties">
                Dynamic Object Properties
              </NavLink>
            </li>

            <li>
              <NavLink to="switch">Switch</NavLink>
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

            <li>
              <details>
                <summary>Metódy</summary>
                <ul className="toggle">
                  <li>
                    <NavLink to="addEventListener">addEventListener()</NavLink>
                  </li>
                  <li>
                    <NavLink to="getItem">getItem()</NavLink>
                  </li>
                  <li>
                    <NavLink to="setItem">setItem()</NavLink>
                  </li>
                  <li>
                    <NavLink to="getElementById">getElementById()</NavLink>
                  </li>
                  <li>
                    <NavLink to="getElementsByClassName">
                      getElementsByClassName()
                    </NavLink>
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
            <Route
              path="dynamicObjectProperties"
              element={<DynamicObjectProperties />}
            />
            <Route path="addEventListener" element={<AddEventListener />} />
            <Route path="getItem" element={<GetItem />} />
            <Route path="setItem" element={<SetItem />} />
            <Route path="getElementById" element={<GetElementById />} />
            <Route
              path="getElementsByClassName"
              element={<GetElementsByClassName />}
            />
            <Route path="switch" element={<Switch />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default Js;
