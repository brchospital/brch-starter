import { Container, Row, Col, Image } from "react-bootstrap";

import f from "../../assets/border.png";

export function HomeBanner() {
  return (
    <Container className="banner-container" fluid>
      <Row>
        <Col xs={12}>
          <div>
            <Image src={f} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
