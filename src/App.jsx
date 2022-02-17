import React from "react";

import { Routes, Route } from "react-router-dom";

//? komponenty
import TheNavigation from "./component/TheNavigation";

//? views
import Home from "./views/Home";
import Html from "./views/Html";
import Css from "./views/Css";
import Js from "./views/Js";
import ReactPage from "./views/ReactPage";

//?dark_light_theme
import ThemeHandler from "./theme/ThemeHandler";
import "./theme/ThemeStyle.scss";

import AboutMe from "./views/AboutMe";
import Portfolio from "./views/Portfolio";
import Documentation from "./views/Documentation";
import Other from "./views/Other";



const App = () => {
  //?dark_light_theme
  const [theme, changeTheme] = ThemeHandler();

  return (
    <div className={`App ${theme}`}>
      <div className="container">
        <header>
          <nav className="hornaNav">
            <TheNavigation changeTheme={changeTheme} />
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/html/*" element={<Html />} />
            <Route path="/css/*" element={<Css />} />
            <Route path="/js/*" element={<Js />} />
            <Route path="/react/*" element={<ReactPage />} />

            <Route path="/aboutMe/*" element={<AboutMe />} />
            <Route path="/portfolio/*" element={<Portfolio />} />
            <Route path="/documentation/*" element={<Documentation />} />
            <Route path="/other/*" element={<Other />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
