import React from "react";
import ReactDOM from "react-dom";
import { Teste } from "./App";
import { GlobalStyles } from "./globalStyles";

const arr = [
  {
    "id": "63ee1ab6f864499825d60ae9",
    "name": "Soma de domicilio",
    "type": "NUMBER",
    "operation": "SUM"
  },
  {
    "id": "63ee1b2ef864499825d60b63",
    "name": "Rendimento mensal médio",
    "type": "NUMBER",
    "operation": "AVERAGE"
  },
]


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Teste props={arr} />
  </React.StrictMode>,
  document.getElementById("root")
);
