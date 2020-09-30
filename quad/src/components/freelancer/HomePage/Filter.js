import React from 'react';
import { Form, Label, FormGroup, Input, Button } from "reactstrap";

export default function Filter(props) {
    return (
        <div>
            <Form>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Check me out
                    </Label>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}



