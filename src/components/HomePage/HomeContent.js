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
}
