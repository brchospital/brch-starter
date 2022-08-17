import { Container, Row, Col, Card } from "react-bootstrap";

import cardiology from "../../assets/cardiology.png";

export function HomeServiceCards() {
  return (
    <div className="services-card">
      <Container>
        <Row className="services-card">
          <Col xl={6}>
            <div>
              <h3>სამედიცინო მომსახურება</h3>
              <p>
                იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა
                მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა.
              </p>
            </div>
          </Col>
          <Col className="card-width" xl={3}>
            <Card>
              <Card.Img variant="top" src={cardiology} />
              <Card.Body>
                <Card.Title className="card-route">Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="card-width" xl={3}>
            <Card>
              <Card.Img variant="top" src={cardiology} />
              <Card.Body>
                <Card.Title className="card-route">Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="services-card second-row">
          <Col className="card-width" xl={3}></Col>
          <Col className="card-width" xl={3}>
            <Card>
              <Card.Img variant="top" src={cardiology} />
              <Card.Body>
                <Card.Title className="card-route">Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="card-width" xl={3}>
            <Card>
              <Card.Img variant="top" src={cardiology} />
              <Card.Body>
                <Card.Title className="card-route">Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="card-width" xl={3}>
            <Card>
              <Card.Img variant="top" src={cardiology} />
              <Card.Body>
                <Card.Title className="card-route">Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
