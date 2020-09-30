import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from 'axios';


class PublicProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {personalProfile : ''}

    }

    componentDidMount() {
        axios.get(``)
          .then(res => {
            const personalProfile = res.data;
            this.setState({personalProfile});
          })
      }
    
    render() {
     return null   
    }
}

export default PublicProfile;