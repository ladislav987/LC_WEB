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
import { ThemeProvider } from "styled-components";
import useDarkMode from "./dark_light_theme/useDarkMode";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "./dark_light_theme/globalStyles";


const App = () => {
  //?dark_light_theme
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div>
        <header>
          <nav>
            <TheNavigation toggleTheme={toggleTheme} />
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
    </ThemeProvider>
  );
};

export default App;
