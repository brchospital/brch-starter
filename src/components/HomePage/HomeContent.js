import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

import { HomeBrand } from "./HomeBrand";
import { HomeAdvert } from "./HomeAdvert";
import { NewsSection } from "./NewsSection";

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
      <Row>
        <Col>
          <NewsSection />
        </Col>
      </Row>
    </Container>
  );
}
