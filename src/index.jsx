import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//? css
import "./scss/general.scss";
import "./scss/tileGrid.scss";
import "./scss/asideNavigation.scss";

import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
