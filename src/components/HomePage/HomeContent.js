import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

import { HomeBrand } from "./HomeBrand";
import { HomeAdvert } from "./HomeAdvert";

export function HomeContent() {
  return (
    <Container fluid>
      <Row>
        <HomeBrand />
      </Row>
      <Row>
        <Col>
          <HomeAdvert />
        </Col>
      </Row>
    </Container>
  );
}
