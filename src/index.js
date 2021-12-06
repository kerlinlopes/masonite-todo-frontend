import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Import Milligram for Some Default Styling
import "milligram";
// Import the BrowserRouter Component and Rename it Router
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);