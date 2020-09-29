// import react.
import React from "react";
// import browser router.

// eslint-disable-next-line
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import axios.
import axios from "axios";

// import bootstrap elements.
import { Form, FormGroup, Input, Button } from "reactstrap";

// create a new component for log in.
export class Navbar extends React.Component {
  state = {
    userName: "",
    password: "",
  };

  // submit button.
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      userName: this.state.userName,
      password: this.state.password,
    };
    
    // check
    console.log(user); 

    if (!this.state.userName || !this.state.password){
      alert("please enter user name and password")
    }else{
    axios
      .post("/users/info", user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      userName: "",
      password: "",
    });
    }
  };

  // watching the change inside value.
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(e);
  };

  render() {
    return (
        <Form className="login">
          <ul className="navbar">
            <FormGroup className="inputs">
              <li id="logo" className="btn">QuAD</li>
              <li className="btn">
                <Input
                  className="input"
                  required
                  onChange={this.handleChange}
                  id="userName"
                  type="text"
                  placeholder="Enter user name"
                />
              </li>
              <li className="btn">
                <Input
                  className="input"
                  required
                  onChange={this.handleChange}
                  id="password"
                  type="password"
                  placeholder="Enter password"
                />
              </li>
            </FormGroup>
            <li className="btn">
              <Button onClick={this.handleSubmit} id="submitLog" type="submit">
                Log in
              </Button>
            </li>
          </ul>
        </Form>
    );
  }
}
