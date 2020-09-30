import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";



class Edit extends React.Component {
    constructor(props) {
        super(props);

    }

    handelEdit = () => {
        this.props.handelEdit()
    }

    render() {
        return <Button onClick={this.handelEdit} >Edit</Button>
    }

}


export default Edit;