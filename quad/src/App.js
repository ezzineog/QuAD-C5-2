import React from "react";
import "./App.css";
import FreelancerSection from './components/freelancer/FreelancerSection'

import { Navbar } from "./components/Navbar.js";
import Signup from "./components/Signup.js";

import "bootstrap/dist/css/bootstrap.css";
// import FreelancerProfile from "./components/freelancer/Profile/FreelancerProfile.js"

const App = () => {
  return (
    <div>
  {/* <Navbar />

  <Signup/> */}
  <FreelancerSection/>
  </div>
  );
};

export default App;