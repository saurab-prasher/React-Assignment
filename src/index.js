import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { AppProvider } from "./context";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector("#root")
);
