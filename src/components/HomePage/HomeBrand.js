import { useState } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import PhoneInput from "react-phone-number-input";
import "./style.css";

//assets
import posterImage from "../../assets/brch-hospital.png";

export function HomeBrand() {
  // data picker
  const [startDate, setStartDate] = useState(new Date());
  // phone number formater
  const [value, setValue] = useState();
  //alert show

  return (
    <>
      <Col className="column-reset" xs={12} sm={12} md={12} lg={6} xl={6}>
        <div>
          <Image src={posterImage} className="brand-image" />
        </div>
      </Col>
      <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <div>
          <div className="booking-form">
            <h6 className="form-title">დაჯავშნე ვიზიტი ექიმთან</h6>

            <Form>
              <Form.Group className="mt-4 mb-3">
                <Form.Label className="label-title">
                  პაციენტის პირადი ნომერი
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="label-title">
                  პაციენტის სახელი გვარი
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="label-title">ტელეფონი</Form.Label>
                <PhoneInput value={value} onChange={setValue} />
              </Form.Group>
              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <DatePicker
                      className="bootstrap-input-style select-color"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group className="mt-3 mb-3">
                    <Form.Select className="select-color">
                      <option>აირჩიეთ თავისუფალი დრო</option>
                      <option value="1">სოლომონ ფუტკარაძე</option>
                      <option value="2">ლევან კონცელიძე</option>
                      <option value="3">სულეიმან კარახასანოვი</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mt-3 mb-3">
                <Form.Select className="select-color">
                  <option>აირჩიეთ დრო</option>
                  <option value="1">10:20</option>
                  <option value="2">10:50</option>
                  <option value="3">11:20</option>
                </Form.Select>
              </Form.Group>

              <Button
                className="submit-button"
                variant="primary"
                type="submit"
                onClick={() => alert("ვებ-გვერდი მუშაობს საცდელ რეჟიმში!")}
              >
                გაგზავნა
              </Button>
            </Form>
          </div>
        </div>
      </Col>
    </>
  );
}
