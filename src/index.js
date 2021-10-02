import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./Components/Redux/Store/Store.js";
ReactDOM.render(
  <>
    <Provider store={Store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
