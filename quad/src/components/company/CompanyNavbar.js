import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Link } from "react-router-dom";


class CompanyNavbar extends Component {
    render(props) {
        return (
          <nav>
          <Router>

            <ul className="userNavbar">
              <li className="Ubtn">
                <Link to="/" className="Ulink">
                  Quad
                </Link>
              </li>
              <div className="buttons">
                <li className="Ubtn">
                  <Link to="/" className="Ulink">
                    Home
                  </Link>
                </li>
                <li className="Ubtn">
                  <Link to="/Profile" className="Ulink">
                    Profile
                  </Link>
                </li>
                <li className="Ubtn">
                  <Link to="/" className="Ulink">
                    Posts
                  </Link>
                </li>
                <li className="Ubtn">
                  <Link to="/logout" className="Ulink">
                    Log out
                  </Link>
                </li>
              </div>
            </ul>
          </Router>

          </nav>
        );
    }
}

export default CompanyNavbar;