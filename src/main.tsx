import React from "react";
import ReactDOM from "react-dom/client";
import  Teste  from "./App";
import { GlobalStyles } from "./globalStyles";
import { resetServerContext } from "react-beautiful-dnd";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Teste />
  </React.StrictMode>
);
resetServerContext();
