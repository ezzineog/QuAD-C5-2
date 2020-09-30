import React from 'react';
import { Form, Label, FormGroup, Input, Button, CustomInput } from "reactstrap";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

export default function Filter(props) {
    return (
      <div className="checkboxDiv">
        <Card className="checkbox">
          <CardHeader>Filter the posts by choise your skills :</CardHeader>
          <CardBody>
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Button id="buttonskills" color="primary">
              Filter
            </Button>
          </CardBody>
        </Card>
        <br />
        <br />
        {/* <Form className="checkbox">
          <FormGroup check>
            <Label> Filter the posts bby choise your skills :</Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
            <Label check>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check me with your skills"
              />
            </Label>
            <br />
            <br />
          </FormGroup>
          <br />
          <Button id="buttonskills" color="primary">
            Submit
          </Button>
        </Form> */}
      </div>
    );
}

 

