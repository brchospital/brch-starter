import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

import { HomeBrand } from "./HomeBrand";
import { HomeAdvert } from "./HomeAdvert";
import { NewsSection } from "./NewsSection";
import { HomeBanner } from "./HomeBanner";

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
      <Row>
        <Col className="home-content-col">
          <HomeBanner />
        </Col>
      </Row>
    </Container>
  );
}
