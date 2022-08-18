import { Container, Row, Col, Card } from "react-bootstrap";

import cardiology from "../../assets/cardiology.png";

export function DesktopVersion() {
  return (
    <Container className="desktop-version-services">
      <Row>
        <Col lg={6}>1</Col>
        <Col lg={3}>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={cardiology} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3}>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={cardiology} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={3}></Col>
        <Col lg={3}>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={cardiology} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3}>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={cardiology} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3}>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={cardiology} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
