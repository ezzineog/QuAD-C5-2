import React, { Component } from "react";
import { Card, Button, CardTitle, CardImg, Row, Col } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = () => this.setState({ modal: !this.state.modal });

  render(props) {
    return (
      <Row className="feed">
        <Col sm="6">
          <Card className="feedCard" body>
            <div className="feedCardS">
              <CardTitle>Company name : {this.props.feed.name}</CardTitle>
              <CardTitle>Job Title : Some stuffs to do</CardTitle>
              <CardImg
                width="100%"
                src="https://reactstrap.github.io/assets/318x180.svg"
                alt="company image"
              />
              <br />
              <br />
              <Button color="primary" id="detailsBtn" onClick={this.toggle}>
                More details
              </Button>
            </div>
          </Card>
          <br />
          <br />
          <Modal isOpen={this.state.modal}>
            <ModalHeader>Job description</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.toggle}>
                Apply
              </Button>{" "}
              <Button color="danger" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    );
  }
}
