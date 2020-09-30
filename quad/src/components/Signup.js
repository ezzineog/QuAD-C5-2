import React from "react";
import CompanySign from "./CompanySign.js";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import FreelancerSign from "./FreelancerSign.js";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signupType: 2 };
    this.handelCompanySign = this.handelCompanySign.bind(this);
    this.handelFreelancerSign = this.handelFreelancerSign.bind(this);
  }

  handelCompanySign() {
    this.setState({ signupType: 1 });
  }
  handelFreelancerSign() {
    this.setState({ signupType: 2 });
  }

  render() {
    let compo;
    if (this.state.signupType === 2) {
      compo = <FreelancerSign />;
    }
    if (this.state.signupType === 1) {
      compo = <CompanySign />;
    }
    return (
      <div className="signup">
        <Label id="logotext"> You don't have an account? Create one </Label>

        <Button
          outline
          color="primary"
          className="buttonChange"
          onClick={this.handelFreelancerSign}
        >
          Freelancer
        </Button>
        <Button
          outline
          color="primary"
          className="buttonChange"
          onClick={this.handelCompanySign}
        >
          Company
        </Button>
        {compo}
      </div>
    );
  }
}

export default Signup;
