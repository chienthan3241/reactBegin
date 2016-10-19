require("./module1.js");
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./pages/layout";

const app = document.getElementById("app");
ReactDOM.render(<Layout/>, app);