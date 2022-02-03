import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import "./views.scss";

import Props from "./reactPageSubpages/Props";
import PropsChildren from "./reactPageSubpages/PropsChildren";
import Fragment from "./reactPageSubpages/Fragment";
import PrevState from "./reactPageSubpages/PrevState";
import Map from "./reactPageSubpages/Map";
import CallbackFunction from "./reactPageSubpages/CallbackFunction";
import UseState from "./reactPageSubpages/UseState";
import UseEffect from "./reactPageSubpages/UseEffect";
import Hook from "./reactPageSubpages/Hook";
import MultipleReturns from "./reactPageSubpages/MultipleReturns";
import Forms from "./reactPageSubpages/Forms";
import UseRef from "./reactPageSubpages/UseRef";
import HowCreateID from "./reactPageSubpages/HowCreateID";
import UseReducer from "./reactPageSubpages/UseReducer";

const ReactPage = () => {
  return (
    <div className="page-wrapper">
      <h1>React sekcia</h1>
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
            <NavLink to="prevState">prevState</NavLink>
          </li>
          <li>
            <NavLink to="multipleReturns">MultipleReturns</NavLink>
          </li>
          <li>
            <NavLink to="forms">Forms</NavLink>
          </li>
          <li>
            <NavLink to="howCreateID">How Create ID</NavLink>
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
                <li>
                  <NavLink to="useRef">useRef()</NavLink>
                </li>
                <li>
                  <NavLink to="useReducer">useReducer()</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Funkcie</summary>
              <ul className="toggle">
                <li>
                  <NavLink to="callbackFunction">Callback funkcia</NavLink>
                </li>
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
          <Route path="prevState" element={<PrevState />} />
          <Route path="multipleReturns" element={<MultipleReturns />} />
          <Route path="forms" element={<Forms />} />
          <Route path="hook" element={<Hook />} />
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="callbackFunction" element={<CallbackFunction />} />
          <Route path="map" element={<Map />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="howCreateID" element={<HowCreateID />} />
          <Route path="useReducer" element={<UseReducer />} />
        </Routes>
      </main>
    </div>
  );
};

export default ReactPage;
