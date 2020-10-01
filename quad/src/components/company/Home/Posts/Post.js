// import React, { Component } from "react";
// import { Card, Button, CardTitle, CardImg, Row, Col } from "reactstrap";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import axios from "axios";

// class Post extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     axios
//       .get("/jobs")
//       .then((res) => console.log("res ===>", res))
//       .then((res) =>
//         this.setState({
//           CompanyName: res.CompanyName,
//           jobTitle: res.JobTitle,
//         })
//       )
//       .catch((err) => console.log("[client side err]", err));
//   }
//   Delete() {
//     axios
//       .delete("/jobs")
//       .then((res) => console.log("res ===>", res))
//       .catch((err) => console.log("[client side err]", err));
//   }
//   getFreeLancersTable() {
//     axios.get("/freelancers").then((res) =>
//       this.setState({
//         freeLancerName: res.FirstName,
//         freeLancerLastName: res.LastName,
//         freeLancerEmail: res.Email,
//       })
//     );
//     atch((err) => console.log("[client side err]", err));
//   }
//   render() {
//     var post = this.state.posts.map((post) => {
//       <Row>
//         <Col>
//           <Card className="feedCard" body>
//             <div className="CompanyCards">
//               <CardTitle>{post.CompanyName}</CardTitle>
//               <CardTitle>{post.jobTitle}</CardTitle>
//               <CardImg
//                 width="100%"
//                 src="https://reactstrap.github.io/assets/318x180.svg"
//                 alt="company image"
//               />
//               <Button color="primary" id="detailsBtn" onclick={this.Delete}>
//                 Delete
//               </Button>
//               <Button
//                 color="primary"
//                 id="detailsBtn"
//                 onclick={this.getFreeLancersTable}
//               >
//                 Freelancers-Applys
//               </Button>
//             </div>
//           </Card>
//         </Col>
//         <Modal></Modal>
//       </Row>;
//     });
//     return { post };
//   }
// }

// export default Post;
