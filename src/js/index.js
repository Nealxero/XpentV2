//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// include your styles into the webpack bundle
import "../styles/index.css";
import { BudgetsProvider } from "./contexts/BudgetsContext";
//import your own components
import Home from "./component/home.jsx";
import i18n from "../i18n/index.js";
//render your react application
ReactDOM.render(
  <BudgetsProvider>
    <Home />
  </BudgetsProvider>,
  document.querySelector("#app")
);
