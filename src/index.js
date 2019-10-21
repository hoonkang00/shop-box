import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles.css";
import "./styles.scss";


var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);