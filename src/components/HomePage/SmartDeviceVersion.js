import { Container, Col, Card } from "react-bootstrap";
import db from "../../mocks/db.json";

export function SmartDeviceVersion() {
  return (
    <Container className="smart-dvc-version-services">
      <Col xs={12} sm={8} md={8}>
        <div className="smart-dvc-container">
          <h1 className="smart-dvc-title">სამედიცინო მომსახურება</h1>
          <p className="smart-dvc-description">
            აქ იქნება რაიმე ტექსტი, რომელიც გასცემს კითხვაზე პასუხს რატომ
            ბათუმის რესპუბლიკური საავადმყოფო აქ იქნება რაიმე ტექსტი აქ იქნება
            რაიმე ტექსტი, რომელიც გასცემს კითხვაზე
          </p>
        </div>
      </Col>
      <Col xs={12} sm={12} md={12}>
        <div className="scrolling-wrapper">
          {db.mediCards.map(({ id, title, src }) => {
            return (
              <Card className="smart-dvc-card" key={id}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                  <Card.Title className="text-title-text">{title}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Col>
    </Container>
  );
}
