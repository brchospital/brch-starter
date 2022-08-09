import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

import { HomeBrand } from "./HomeBrand";

export function HomeContent() {
  return (
    <Container fluid>
      <Row>
        <HomeBrand />
      </Row>
      <Row>
        <Col>
          <h1>other content</h1>
        </Col>
      </Row>
    </Container>
  );

  // return (
  //   <Container fluid>
  //     <Row>
  //       <Col xs={12} sm={12} md={6} lg={6}>
  //         <div className="image-box">
  //           <Image src={f} className="brand-image" />
  //         </div>
  //       </Col>
  //       <Col xs={12} sm={12} md={6} lg={6}>
  //         <div className="booking">
  //           <div>
  //             <h3>form</h3>
  //             <Form>
  //               <Form.Group className="mb-3" controlId="formBasicEmail">
  //                 <Form.Label>Email address</Form.Label>
  //                 <Form.Control type="email" placeholder="Enter email" />
  //                 <Form.Text className="text-muted">
  //                   We'll never share your email with anyone else.
  //                 </Form.Text>
  //               </Form.Group>

  //               <Form.Group className="mb-3" controlId="formBasicPassword">
  //                 <Form.Label>Password</Form.Label>
  //                 <Form.Control type="password" placeholder="Password" />
  //               </Form.Group>
  //               <Form.Group className="mb-3" controlId="formBasicCheckbox">
  //                 <Form.Check type="checkbox" label="Check me out" />
  //               </Form.Group>
  //               <Button variant="primary" type="submit">
  //                 Submit
  //               </Button>
  //             </Form>
  //           </div>
  //         </div>
  //       </Col>
  //     </Row>
  //   </Container>
  // );
}
