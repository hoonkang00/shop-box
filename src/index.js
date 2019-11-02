import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/App.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);
