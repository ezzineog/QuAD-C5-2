import React from 'react';
import { Form, Label, FormGroup, Input, Button, CustomInput } from "reactstrap";

export default function Filter(props) {
    return (
      <div>
        <Form>
          <FormGroup className="form-group" check>
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>
      </div>
    );
}



