import React from "react";
import { Nav } from "react-bootstrap";

function HeaderPages() {
  return (
    <Nav className="pages">
      <Nav.Item>
        <Nav.Link className="pages-item" href="/about">
          ჩვენ შესახებ
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="pages-item" href="/news">
          სიახლეები
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="pages-item" href="#news">
          დეპარტამანტები
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="pages-item" href="#news">
          ვაკანსიები
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default HeaderPages;
