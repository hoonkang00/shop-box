import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./styles.scss";
import App from "./components/app.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";


var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);
