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
    return (
        <Form>
        <div>
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
        <Label for="Birthday">Birthday:</Label><br/>
        <Input type="date" name="Birthday"/><br/>
        <Label for="PhoneNumber">Phone Number:</Label><br/>
        <Input type="tel" name="PhoneNumber"/><br/>
        <Label for="Descreption">Profile:</Label><br/>
        <Input type="text" name="Descreption" placeholder="Describe yourself.."/><br/>
        <Label for="Skills">Skills:</Label><br/>
        <Input type="text" name="Skills" placeholder="Describe your skills.."/><br/>
        <Button onClick={this.handelProfile}>Cancel</Button>
        <Button onClick={this.handelProfile}>Save</Button>
    </div>
    </Form>
    );
  }
}

export default EditProfile;
