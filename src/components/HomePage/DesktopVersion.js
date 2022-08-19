import { Container, Row, Col, Card } from "react-bootstrap";

import cardiology from "../../assets/cardiology.png";
import allergology from "../../assets/allergology.png";
import oncology from "../../assets/oncology.png";
import pediatrician from "../../assets/pediatrician.png";
import radiology from "../../assets/radiology.png";

export function DesktopVersion() {
  return (
    <Container className="desktop-version-services">
      <Row>
        <Col lg={6} className="desktop-version-container  ">
          <div className="">
            <h1 className="dektop-version-title">სამედიცინო მომსახურება</h1>
            <p className="desktop-version-description">
              აქ იქნება რაიმე ტექსტი, რომელიც გასცემს კითხვაზე პასუხს რატომ
              ბათუმის რესპუბლიკური საავადმყოფო აქ იქნება რაიმე ტექსტი აქ იქნება
              რაიმე ტექსტი, რომელიც გასცემს კითხვაზე
            </p>
          </div>
        </Col>
        <Col lg={3}>
          <Card className="desktop-card">
            <Card.Img variant="top" src={cardiology} />
            <Card.Body>
              <Card.Title className="dektop-card-title">კარდიოლოგია</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className="desktop-card">
            <Card.Img variant="top" src={allergology} />
            <Card.Body>
              <Card.Title className="dektop-card-title">ალერგოლოგია</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg={3}></Col>
        <Col lg={3}>
          <Card className="desktop-card">
            <Card.Img variant="top" src={oncology} />
            <Card.Body>
              <Card.Title className="dektop-card-title">ონკოლოგია</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className="desktop-card">
            <Card.Img variant="top" src={pediatrician} />
            <Card.Body>
              <Card.Title className="dektop-card-title">პედიატრია</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className="desktop-card">
            <Card.Img variant="top" src={radiology} />
            <Card.Body>
              <Card.Title className="dektop-card-title">რადიოლოგია</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
