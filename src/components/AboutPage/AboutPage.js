import { Container } from "react-bootstrap";
import "./style.css";
import cover from "../../assets/about.png";

export function AboutPage() {
  return (
    <div className="about-page-container">
      <div className="about-page-banner">
        <img src={cover} className="about-page-banner-image" />
      </div>
      <div className="about-page-description">
        <Container>
          <h4 className="about-page-description-title">ჩვენს შესახებ</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
            lectus posuere integer nulla turpis. Hac dis dignissim enim,
            dignissim dolor adipiscing tincidunt. Enim nibh aliquam ipsum
            viverra sollicitudin nam a risus blandit. Urna sit cras aenean
            commodo vulputate dui. Viverra velit sed tristique viverra. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar lectus
            posuere integer nulla turpis. Hac dis dignissim enim, dignissim
            dolor adipiscing tincidunt. Enim nibh aliquam ipsum viverra
            sollicitudin nam a risus blandit. Urna sit cras aenean commodo
            vulputate dui. Viverra velit sed tristique viverra.
          </p>
        </Container>
      </div>
      <div className="medical-services">
        <h3>სამედიცინო მომსახურება</h3>
      </div>
    </div>
  );
}
