import { Container, Row, Col } from "react-bootstrap";
import { HomeContent } from "./HomeContent";

export function HomeLayout() {
  return (
    <Container fluid>
      <Row>
        <Col className="column-reset">
          <HomeContent />
        </Col>
      </Row>
    </Container>
  );
}
