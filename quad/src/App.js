import React from "react";
import "./App.css";
// import browser router.
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import other components.
// eslint-disable-next-line
import { Navbar } from "./components/Navbar.js";
import Signup from "./components/Signup.js";
// import { UserNavBar } from "./UserNavBar.js";
// import { }
// import bootstrap.
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div>
  <Navbar />
  <Signup/>
  </div>
  );
};

export default App;