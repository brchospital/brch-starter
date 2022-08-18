import { Container, Row, Col, Card } from "react-bootstrap";

import cardiology from "../../assets/cardiology.png";

export function HomeServiceCards() {
  return (
    <div className="services-card mt-5">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={6}>
            <div>
              <h4>სერვისები და ფუნქციები</h4>
              <p>
                იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა
                მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={3}>
            <Card style={{ width: "300px" }}>
              <Card.Img variant="top" src={cardiology} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={3}>
            <Card style={{ width: "300px" }}>
              <Card.Img variant="top" src={cardiology} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
