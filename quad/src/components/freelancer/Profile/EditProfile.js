import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  handelProfile = () => {
    this.props.handelPofile()
  }

  render() {
    return <div>
        <Label for="avatar">Avatar</Label>
        <Input type="file" name="avatar" accept="image/*"/>
        <Label for="firstName">First Name:</Label>
        <Input type="text" name="firstName" /><br/>
        <Label for="lastName">Last Name:</Label>
        <Input type="text" name="lastName"/><br/>
        <Label for="email">Email:</Label><br/>
        <Input type="email" name="email"/><br/>
        <Label for="password">Password:</Label><br/>
        <Input type="password" name="password"/><br/>
        <Label for="profile">Profile:</Label><br/>
        <Input type="text" name="profile" placeholder="Describe yourself.."/><br/>
        <Label for="technicalSkills">Technical Skills:</Label><br/>
        <Input type="text" name="technicalSkills" /><br/>
        <Label for="additionalSkills">Additional Skills:</Label><br/>
        <Input type="text" name="additionalSkills" /><br/>
        <Label for="experience">Experience</Label><br/>
        <Input type="text" name="experience" /><br/>
        <Button onClick={this.handelProfile}>Cancel</Button>
        <Button onClick={this.handelProfile}>Save</Button>
    </div>;
  }
}

export default EditProfile;
