import { Container } from "react-bootstrap";
import {
  BsClockFill,
  BsTelephoneFill,
  BsFillGeoAltFill,
  BsMailbox2,
} from "react-icons/bs";
import "./style.css";

export function Footer() {
  return (
    <div>
      <Container>
        <div className="footer-container">
          <div className="footer-item">
            <BsClockFill color="#fff" />
            <span className="footer-text">
              ორშაბათი - პარასკევი: 10:00 - 18:00
            </span>
          </div>
          <div className="footer-item">
            <BsTelephoneFill color="#fff" />
            <span className="footer-text">{`(+995) 555 55 55 55`}</span>
          </div>
          <div className="footer-item">
            <BsFillGeoAltFill color="#fff" />
            <span className="footer-text">
              ქ.ბათუმი ტბელ აბუსერიძე 2 / ქ.ბათუმი ალექსანდრე პუშკინის 164
            </span>
          </div>
          <div className="footer-item">
            <BsMailbox2 color="#fff" />
            <span className="footer-text">info@brchospital.ge</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
