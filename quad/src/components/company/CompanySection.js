import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Profile from "./Profile";
import Posts from "./Home/Posts/Posts";

export default class CompanySection extends Component {
    
    render() {
        return (
          <Router>
            <UserNavBar />
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/" component={Posts} />
            <Route path="/Profile" component={Profile} />
            <Route path="/logout" component={} />
          </Router>
        );
    }
}
