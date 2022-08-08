import { Container, Row, Col } from "react-bootstrap";
import { BrandSection } from "./BrandSection";

export function HomeLayout() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <BrandSection />
        </Col>
      </Row>
    </Container>

  );
}
