import React from "react";
import ReactDOM from "react-dom";
import { Teste } from "./App";
import { GlobalStyles } from "./globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Teste />
  </React.StrictMode>,
  document.getElementById("root")
);
