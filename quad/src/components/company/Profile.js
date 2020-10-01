import React, { Component } from "react";
import {
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Card, CardHeader, CardFooter } from "reactstrap";
import { Media } from "reactstrap";
import Image from "react-bootstrap/Image";
import { Col } from "react-bootstrap";
// import Rater from "react-rater";

import "react-rater/lib/react-rater.css";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          comapnyName: "",
          comapnyDescrepsion: "",
          rating: {},
        };
    }
  render() {
    return (
      <div>
        <Card className="company-profile">
          <Col xs={6} md={4}>
            <Image
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_174e4544934%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_174e4544934%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.875%22%20y%3D%2295.2828125%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              roundedCircle
            />
          </Col>
          <br />
          <CardBody>
            <CardTitle>comapny name</CardTitle>
            <CardSubtitle>company descriptions</CardSubtitle>
            <CardText>
              company descriptions // == Some quick example text to build on the
              card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
        <Card className="company-profile">
          <CardHeader tag="h3">Rate this company</CardHeader>
          <CardBody className="starts">
            {/* <Rater total={5} rating={0} /> */}
          </CardBody>
          <CardFooter className="text-muted">Footer</CardFooter>
        </Card>
      </div>
    );
  }
}
