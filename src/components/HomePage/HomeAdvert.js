import { Container, Row, Col } from "react-bootstrap";
import { HomeTitle } from "./HomeTitle";
import { HomeCards } from "./HomeCards";

export function HomeAdvert() {
  return (
    <Container className="advert-content">
      <Row>
        <Col className="advert-title-col" sx={12} sm={12} md={6} lg={6} xl={6}>
          <HomeTitle />
        </Col>
        <Col className="advert-title-col" sx={12} sm={12} md={6} lg={6} xl={6}>
          <HomeCards />
        </Col>
      </Row>
    </Container>
  );
}
