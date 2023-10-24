import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>,
  document.getElementById("root")
);
