import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import "./style.css";

import f from "../../assets/Rectangle.png";

export function BrandSection() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="image-box">
            <Image src={f} className="brand-image" />
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="booking">
            <h3>form</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
