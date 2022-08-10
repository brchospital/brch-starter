import { Container, Row, Col, Button } from "react-bootstrap";

export function HomeCards() {
  return (
    <Container className="home-cards">
      <Row>
        <Col sm={12} sx={12} md={6} lg={6} xl={6}>
          <div className="card-circle"></div>
          <p>
            მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე,
            ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია.
          </p>
        </Col>
        <Col sm={12} sx={12} md={6} lg={6} xl={6}>
          <div className="card-circle"></div>
          <p>
            მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე,
            ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია.
          </p>
        </Col>

        <Col sm={12} sx={12} md={6} lg={6} xl={6}>
          <div className="card-circle"></div>
          <p>
            მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე,
            ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია.
          </p>
        </Col>
        <Col sm={12} sx={12} md={6} lg={6} xl={6}>
          <div className="card-circle"></div>
          <p>
            მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე,
            ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
