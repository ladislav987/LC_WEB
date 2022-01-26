import React from "react";

import { Routes, Route } from "react-router-dom";

//? komponenty
import TheNavigation from "./component/TheNavigation";
//! noeco

//? views
import Home from "./views/Home";
import Html from "./views/Html";
import Css from "./views/Css";
import Js from "./views/Js";
import ReactPage from "./views/ReactPage";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <TheNavigation />
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/js" element={<Js />} />
          <Route path="/react" element={<ReactPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
