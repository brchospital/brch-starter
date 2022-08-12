import { Container, Row, Col, Card } from "react-bootstrap";
import { BsFillClockFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import newsImage from "../../assets/news-image-1.png";

export function NewsSection() {
  return (
    <Container className="news-section-container">
      <h4 className="news-section-title">სიახლეები</h4>
      <Row>
        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
          <Card className="news-card mt-3">
            <Card.Img variant="top" src={newsImage} />
            <Card.Body>
              <Container>
                <Card.Text className="card-description">
                  იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა.
                </Card.Text>
                <div className="card-foroter">
                  <p>
                    <span className="card-footer-items">
                      <BsFillClockFill />
                    </span>
                    <span> 8/11/2022</span>
                  </p>
                  <Link to="#0" className="card-footer-items">
                    სრულად
                  </Link>
                </div>
              </Container>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
          <Card className="news-card mt-3">
            <Card.Img variant="top" src={newsImage} />
            <Card.Body>
              <Container>
                <Card.Text className="card-description">
                  იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა.
                </Card.Text>
                <div className="card-foroter">
                  <p>
                    <span className="card-footer-items">
                      <BsFillClockFill />
                    </span>
                    <span> 8/11/2022</span>
                  </p>
                  <Link to="#0" className="card-footer-items">
                    სრულად
                  </Link>
                </div>
              </Container>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
          <Card className="news-card mt-3">
            <Card.Img variant="top" src={newsImage} />
            <Card.Body>
              <Container>
                <Card.Text className="card-description">
                  იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა.
                </Card.Text>
                <div className="card-foroter">
                  <p>
                    <span className="card-footer-items">
                      <BsFillClockFill />
                    </span>
                    <span> 8/11/2022</span>
                  </p>
                  <Link to="#0" className="card-footer-items">
                    სრულად
                  </Link>
                </div>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Link to="#0" className="all-news-link">
        ყველა სიახლე
      </Link>
    </Container>
  );
}
