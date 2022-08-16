import { Container, Row, Col } from "react-bootstrap";

export function HomeBanner() {
  return (
    <Container className="banner-container">
      <Row>
        <Col className="home-banner-col">
          <div className="banner-content">
            <div className="banner-content-info">
              <div className="banner-item">
                <h4 className="banner-text banner-info-number">300</h4>
                <p className="banner-text banner-info-text">პაციენტი</p>
              </div>
              <div className="banner-item">
                <h4 className="banner-text banner-info-number">600</h4>
                <p className="banner-text banner-info-text">
                  კვალიფიცირებული თანამშრომელი
                </p>
              </div>
              <div className="banner-item">
                <h4 className="banner-text banner-info-number">20</h4>
                <p className="banner-text banner-info-text">
                  წლიანი გამოცდილება
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
