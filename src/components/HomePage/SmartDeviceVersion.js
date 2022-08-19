import { Container, Col, Card } from "react-bootstrap";

import cardiology from "../../assets/cardiology.png";
import allergology from "../../assets/allergology.png";
import oncology from "../../assets/oncology.png";
import pediatrician from "../../assets/pediatrician.png";
import radiology from "../../assets/radiology.png";

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
          <Card className="smart-dvc-card">
            <Card.Img variant="top" src={cardiology} />
            <Card.Body>
              <Card.Title className="text-title-text">კარდიოლოგია</Card.Title>
            </Card.Body>
          </Card>
          <Card className="smart-dvc-card">
            <Card.Img variant="top" src={radiology} />
            <Card.Body>
              <Card.Title className="text-title-text">რადიოლოგია</Card.Title>
            </Card.Body>
          </Card>
          <Card className="smart-dvc-card">
            <Card.Img variant="top" src={pediatrician} />
            <Card.Body>
              <Card.Title className="text-title-text">პედიატრია</Card.Title>
            </Card.Body>
          </Card>
          <Card className="smart-dvc-card">
            <Card.Img variant="top" src={oncology} />
            <Card.Body>
              <Card.Title className="text-title-text">ონკოლოგია</Card.Title>
            </Card.Body>
          </Card>
          <Card className="smart-dvc-card">
            <Card.Img variant="top" src={allergology} />
            <Card.Body>
              <Card.Title className="text-title-text">ალერგოლოგია</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Container>
  );
}
