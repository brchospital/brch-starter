import { Container, Nav, Navbar, Form, Button, Image } from "react-bootstrap";
import "./style.css";
import logo from "../../assets/brch-logo.png";

export function HeaderLayout() {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Container className="header-container">
        <Navbar.Brand href="/">
          <Image src={logo} width={146} height={146} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <ul>
                <li>{"(+995) 555 555 555"}</li>
                <li>ქ.ბათუმი ტბელ აბუსერიძე 2/ ალექსანდრე პუშკინის 164</li>
                <li>info@brchospital.ge</li>
              </ul>
            </Nav.Link>
          </Nav>
          <div className="header-form">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">ვიზიტის დაჯავშნა</Button>
            </Form>
            <Nav style={{ maxHeight: "100px", float: "right", marginTop: "50px" }} navbarScroll>
              <Nav.Link href="#action1">ჩვენს შესახებ</Nav.Link>
              <Nav.Link href="#action2">სიახლეები</Nav.Link>
              <Nav.Link href="#action2">დეპარტამენტები</Nav.Link>
              <Nav.Link href="#action2">ვაკანსიები</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
