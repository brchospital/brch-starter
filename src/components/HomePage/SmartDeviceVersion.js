import { Container, Col } from "react-bootstrap";
import { ScrollCards } from "../ScrollCards";
import db from "../../mocks/db.json";

export function SmartDeviceVersion() {
  console.log(db);
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
          {db.departments.map(({ id, title, src }) => {
            return <ScrollCards key={id} title={title} src={src} route={id} />;
          })}
        </div>
      </Col>
    </Container>
  );
}
