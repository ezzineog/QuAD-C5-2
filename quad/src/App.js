import React from "react";
import "./App.css";
import axios from 'axios'
import FreelancerSection from "./components/freelancer/FreelancerSection";
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
import FreelancerProfile from "./components/freelancer/Profile/FreelancerProfile.js"

const App = () => {
  return (
    <div>
  <Navbar />
  {/* <Signup/> */}
  <FreelancerSection/>
  </div>
  );
};

export default App;