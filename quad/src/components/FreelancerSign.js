import React from "react";
import axios from "axios";
import { Form,  Input, Button } from "reactstrap";
// FormGroup, Label,
class FreelancerSign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.getSign = this.getSign.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // console.log("=====>",event.target.value)
  }

  async getSign() {
    console.log('Clicked !')
    let body = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Password: this.state.Password,
    }
    axios.post('/signup', body)
      .then(res => console.log('saved successfully'))
      .catch(err => console.log('[client side] error',err))
  }

  render() {
    return (
    <Form>
      <div>
        <Input
          type="text"
          name="FirstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <Input
          type="text"
          name="LastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        <Input
          type="Email"
          name="Email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <br />
        <Input
          type="Password"
          name="Password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <br />
        <Button onClick={this.getSign}>Submit</Button>
      </div>
      </Form>
    );
  }
}

export default FreelancerSign;
