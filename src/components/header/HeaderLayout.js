import { Container, Nav, Navbar, Form, Button, Image } from "react-bootstrap";
import "./style.css";
import { BsFacebook } from "react-icons/bs";
import logo from "../../assets/brch-logo.png";

export function HeaderLayout() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
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
            <Nav.Link href="#0">
              <ul className="address-list">
                <li className="address-item">{"(+995) 555 555 555"}</li>
                <li className="address-item">
                  ქ.ბათუმი ტბელ აბუსერიძე 2/ ალექსანდრე პუშკინის 164
                </li>
                <li className="address-item">info@brchospital.ge</li>
              </ul>
            </Nav.Link>
          </Nav>
          <div>
            <div style={{marginBottom: "10px"}}>
              <Nav>
                <Nav.Link href="#action1">
                  <BsFacebook size={24} color="#1877F2"/>
                </Nav.Link>
              </Nav>
            </div>
            <Form className="d-flex search-form">
              <Form.Control
                type="search"
                placeholder="ძებნა"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success form-button">
                ვიზიტის დაჯავშნა
              </Button>
            </Form>
            <Nav
              className="navigation-links me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="navigation-item" href="/about">
                ჩვენს შესახებ
              </Nav.Link>
              <Nav.Link className="navigation-item" href="/news">
                სიახლეები
              </Nav.Link>
              <Nav.Link className="navigation-item" href="/departmnets">
                დეპარტამენტები
              </Nav.Link>
              <Nav.Link className="navigation-item" href="/vacancies">
                ვაკანსიები
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

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
            <span>s</span>
            <span>s</span>
            <span>s</span>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">ვიზიტის დაჯავშნა</Button>
            </Form>
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
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
