import React from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class FreelancerSign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.getSign = this.getSign.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // console.log("=====>",event.target.value)
  }

  async getSign() {
    let body = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("", body)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (<Form>
      <div>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <br />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <br />
        <Button>Submit</Button>
      </div>
      </Form>
    );
  }
}

export default FreelancerSign;
