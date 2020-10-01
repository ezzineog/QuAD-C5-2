import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from 'axios';


class PublicProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {personalProfile : ''}

    }

   
    
    render() {
      console.log(this.props.freelance)
     return (
       <div>Hello numbers
       <h1>First Name: {this.props.freelance.FirstName}</h1>
       <h1>Last Name: {this.props.freelance.LastName}</h1>
       <h1>Age: {this.props.freelance.Age}</h1>
       <h1>Email: {this.props.freelance.Email}</h1>
       <h1>Phone: {this.props.freelance.PhoneNumber}</h1>
       <h1>Description: {this.props.freelance.Description}</h1>
       <h1>Skills: {this.props.freelance.Skills}</h1>
       </div>
     )   
    }
}

export default PublicProfile;