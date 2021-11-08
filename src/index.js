import React, { createContext } from "react";
import { render } from "react-dom";
import "./assets/styles/styles.scss";
import App from "./components/app-files/AppDataSection";
import reportWebVitals from "./reportWebVitals";
import colors from "./utils/color-data.json";
import ColorProvider from "./components/color-hooks";

export const ColorContext = createContext();

render(
  <ColorProvider value={{ colors }}>
    <App />
  </ColorProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
