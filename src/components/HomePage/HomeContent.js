import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

import { HomeBrand } from "./HomeBrand";
import { HomeAdvert } from "./HomeAdvert";
import { NewsSection } from "./NewsSection";
import { HomeBanner } from "./HomeBanner";
import { HomeServiceCards } from "./HomeServiceCards";

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
      {/* remove container from banner */}
      <Row>
        <Col className="home-content-col">
          <HomeBanner />
        </Col>
      </Row>
      <Row>
        <HomeServiceCards />
      </Row>
    </Container>
  );
}
