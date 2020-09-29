import React from "react";
import "./App.css";
// import browser router.
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import other components.
// import { Home } from "./Home.jsx";
// import { Profile } from "./Profile.jsx";
import { Aplications } from "./Aplications.js";

// import bootstrap elements.
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

// import bootstrap.
import "bootstrap/dist/css/bootstrap.css";


export class UserNavBar extends React.Component {

    render() {
          return (
            <Router>
              <nav>
                <ul className="userNavbar">
                  <li className="Ubtn">
                    <Link className="Ulink" to="/">
                      Quad
                    </Link>
                  </li>

                  {/* <div className="serachBar">
                    <li className="Ubtn">
                      <Input
                        id="search"
                        type="text"
                        placeholder="Search for a job"
                      ></Input>
                    </li>
                    <li className="Ubtn">
                      <Button> Search </Button>
                    </li>
                  </div> */}

                  <div className="buttons">
                    <li className="Ubtn">
                      <Link className="Ulink" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="Ubtn">
                      <Link className="Ulink" to="/Profile">
                        Profile
                      </Link>
                    </li>
                    <li className="Ubtn">
                      <Link className="Ulink" to="/Aplications">
                        Aplications
                      </Link>
                    </li>
                    <li className="Ubtn">
                      <Link className="Ulink" to="/logout">
                        Log out
                      </Link>
                    </li>
                  </div>
                </ul>
              </nav>
              <Switch>
                <Route exact path="/" component={Aplications} />
                <Route path="/Profile" component={Aplications} />
                <Route path="/Aplications" component={Aplications} />
                <Route path="/logout" component={Aplications} />
              </Switch>
            </Router>
          );
    }
}





