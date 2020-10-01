import React from "react";
import "./App.css";


// import browser router.
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import other components.
// eslint-disable-next-line
import { Navbar } from "./components/Navbar.js";
import Signup from "./components/Signup.js";
import FreelancerSection from "./components/freelancer/FreelancerSection.js"
// import { UserNavBar } from "./UserNavBar.js";
// import { }
// import bootstrap.
import "bootstrap/dist/css/bootstrap.css";
// import FreelancerProfile from "./components/freelancer/Profile/FreelancerProfile.js"

// const App = () => {
  
export class App extends React.Component {
constructor (props){

  super(props);
  this.state = { handelcomponents: 1 };
  this.homeFreelancer = this.homeFreelancer.bind(this);
  this.lougoutFunc = this.lougoutFunc.bind(this);
}

  homeFreelancer(){
    this.setState({handelcomponents: 2});
  }
  lougoutFunc (){
    this.setState({handelcomponents: 1 });
  }

  render() {
    let compo;
    if (this.state.handelcomponents === 1){
      compo = <div>
              <Navbar homeFreelancer = {this.homeFreelancer}/>
              <Signup />
              </div>
    }
   if (this.state.handelcomponents === 2){
     compo = <FreelancerSection lougoutFunc = {this.lougoutFunc} />
   }

  return (
    <div>
  {compo}
   </div>
  );
};}

export default App;