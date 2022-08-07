import React from "react";
import { Nav } from "react-bootstrap";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";

function HeaderSocials() {
  return (
    <Nav className="social-icons" style={{ marginBottom: "10px" }}>
      <Nav.Item style={{ marginRight: "5px" }}>
        <Nav.Link>
          <BsFacebook size={24} color="#1877F2" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ marginRight: "5px" }}>
        <Nav.Link>
          <BsYoutube size={24} color="#FF0000" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <BsInstagram size={24} color="#DD4281" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default HeaderSocials;
