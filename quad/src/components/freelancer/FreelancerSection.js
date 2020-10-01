import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserNavBar  from '../freelancer/UserNavBar';
import Home from './HomePage/Home';
import FreelancerProfile from './Profile/FreelancerProfile'
import Aplications from './Aplications';


export default class FreelancerSection extends Component {

    render() {
        return (
            <Router>
                <UserNavBar/>  
                <Route exact path="/" component={Home} />
                <Route path="/Profile" component={FreelancerProfile} />
                <Route path="/Aplications" component={Aplications} />
                <Route path="/logout" component={Aplications} />            
            </Router>
        );
    }
}


