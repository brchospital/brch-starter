import { Container, Row, Col, Card, Button } from "react-bootstrap";

import cardiology from "../../assets/cardiology.png";

export function HomeServiceCards() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div style={{ backgroundColor: "red" }}>
              <h2>sdsadadasdsadasdsadasdas</h2>
              <p>sdsaufduwefge9fhwef97wegfewf</p>
            </div>
          </Col>
          <Col>
            <div
              style={{
                width: "300px",
                height: "30px",
                backgroundColor: "brown",
              }}
            ></div>
          </Col>
          <Col>
            <div
              style={{
                width: "300px",
                height: "30px",
                backgroundColor: "brown",
              }}
            ></div>
          </Col>
          <Col>
            <div
              style={{
                width: "300px",
                height: "30px",
                backgroundColor: "brown",
              }}
            ></div>
          </Col>
          <Col>
            <div
              style={{
                width: "300px",
                height: "30px",
                backgroundColor: "brown",
              }}
            ></div>
          </Col>
          <Col>
            <div
              style={{
                width: "300px",
                height: "30px",
                backgroundColor: "brown",
              }}
            ></div>
          </Col>
          <Col>
            <div
              style={{
                width: "300px",
                height: "30px",
                backgroundColor: "brown",
              }}
            ></div>
          </Col>
        </Row>
        {/* <div>
          <h6>sdsasdaswqewqrwq</h6>
          <p>sdadwqrwregertgre</p>
        </div>
        <div class="scrolling-wrapper">
          <div class="card">
            <h2>Card</h2>
          </div>
          <div class="card">
            <h2>Card</h2>
          </div>
          <div class="card">
            <h2>Card</h2>
          </div>
          <div class="card">
            <h2>Card</h2>
          </div>
          <div class="card">
            <h2>Card</h2>
          </div>
          <div class="card">
            <h2>Card</h2>
          </div>
        </div> */}
      </Container>
    </div>
  );
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
