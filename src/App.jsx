import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// CSS
import "./scss/themeStyle.scss";
import "./scss/topNavigation.scss";

import FirstMenu from "./views/FirstMenu";

import AboutMe from "./views/FirstMenuSubpages/AboutMe";
import Portfolio from "./views/FirstMenuSubpages/Portfolio";
import Documentation from "./views/FirstMenuSubpages/Documentation";
import Other from "./views/FirstMenuSubpages/Other";

import Html from "./views/documentationSubpages/Html";
import Css from "./views/documentationSubpages/Css";
import Js from "./views/documentationSubpages/Js";
import ReactPage from "./views/documentationSubpages/ReactPage";

const Context = React.createContext();

const App = () => {
  //? Drží one source of truth
  const [theme, setTheme] = useState("theme-1");

  return (
    <Context.Provider value={[theme, setTheme]}>
      <div className={`App ${theme}`}>
        <div className="container">
            <Routes>
              <Route path="/*" element={<FirstMenu />} />
              <Route path="/aboutMe/*" element={<AboutMe />} />
              <Route path="/portfolio/*" element={<Portfolio />} />
              <Route path="/documentation/*" element={<Documentation />} />
              <Route path="/other/*" element={<Other />} />

              <Route path="/html/*" element={<Html />} />
              <Route path="/css/*" element={<Css />} />
              <Route path="/js/*" element={<Js />} />
              <Route path="/react/*" element={<ReactPage />} />
            </Routes>
        </div>
      </div>
    </Context.Provider>
  );
};

export { App, Context };
