import { Container, Row, Col } from "react-bootstrap";

export function HomeCards() {
  return (
    <Container className="home-cards">
      <Row>
        <Col sm={12} sx={12} md={12} lg={6} xl={6}>
            <div
              className="card-circle"
              style={{ backgroundColor: "#1b3a98" }}
            ></div>
            <p>
              მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან
              დღემდე, ელექტრონული ტიპოგრაფიის დრომდწექექექეწქეწქეც უცვლელად მოაღწია.
            </p>
        </Col>
        <Col sm={12} sx={12} md={12} lg={6} xl={6}>
          <div
            className="card-circle"
            style={{ backgroundColor: "#1B3A98" }}
          ></div>
          <p>
            მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე,
            ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია.
          </p>
        </Col>

        <Col sm={12} sx={12} md={12} lg={6} xl={6}>
          <div
            className="card-circle"
            style={{ backgroundColor: "#1B3A98" }}
          ></div>
          <p>
            მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე,
            ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია.
          </p>
        </Col>
        <Col sm={12} sx={12} md={12} lg={6} xl={6}>
          <div
            className="card-circle"
            style={{ backgroundColor: "#1B3A98" }}
          ></div>
          <p>
            მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე,
            ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
