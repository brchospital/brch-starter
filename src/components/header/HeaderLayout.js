// bs import
import { Container, Navbar, Form, Button, Image } from "react-bootstrap";
// custom style import
import "./style.css";
// logo import
import logo from "../../assets/brch-logo.png";
//sub components import
import HeaderAddresses from "./HeaderAddresses";
import HeaderSocials from "./HeaderSocials";
import HeaderPages from "./HeaderPages";

export function HeaderLayout() {
  return (
    <Navbar className="header" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image className="header-logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* ADDRESS BAR */}
          <HeaderAddresses />
          {/* END OF ADDRESS BAR */}
          <div className="search-box">
            {/* SOCIALS */}
            <HeaderSocials />
            {/* END OF SOCIALS */}
            <Form className="search-formm d-flex">
              <Form.Control
                type="search"
                placeholder="ძებნა"
                className="search-bar me-2"
                aria-label="Search"
              />
              <Button className="btn-book-visit" variant="outline-success">
                ვიზიტის დაჯავშნა
              </Button>
            </Form>
            {/* PAGES */}
            <HeaderPages />
            {/* END OF PAGES */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
