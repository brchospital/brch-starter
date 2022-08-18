import { Nav } from "react-bootstrap";

function HeaderBrand() {
  return (
    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
      <Nav.Item>
        <Nav.Link className="address-item" eventKey="disabled" disabled>
          {"(+995) 555 555 555"}
        </Nav.Link>
        <Nav.Link className="address-item" eventKey="disabled" disabled>
          ქ.ბათუმი ტბელ აბუსერიძე 2
        </Nav.Link>
        <Nav.Link className="address-item" eventKey="disabled" disabled>
          ქ.ბათუმი ალექსანდრე პუშკინის 164
        </Nav.Link>
        <Nav.Link className="address-item" eventKey="disabled" disabled>
          info@brchospital.ge
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default HeaderBrand;
