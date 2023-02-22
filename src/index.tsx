import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { RootStateProvider } from "./store/RootStateContext";
import "react-virtualized/styles.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <RootStateProvider>
    <App />
  </RootStateProvider>
);
