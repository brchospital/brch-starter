import { useRef } from "react";
import { Link } from "react-router-dom";

// bs import
import { Container, Navbar, Form, Button, Image } from "react-bootstrap";
// custom style import
import "./style.css";
// logo import
import logo from "../../assets/brch-logo.png";
import smLogo from "../../assets/brch-logo-mobile.png";
//sub components import
import HeaderAddresses from "./HeaderAddresses";
import HeaderSocials from "./HeaderSocials";
import HeaderPages from "./HeaderPages";

export function HeaderLayout() {
  const countRef = useRef(0);

  const handle = () => {
    let hvr = document.getElementById("testId");
    countRef.current++;
    if (countRef.current % 2 === 1) {
      hvr.style.height = "500px";
    } else {
      hvr.style.height = "111px";
    }
  };

  return (
    <div className="header-navigation">
      <div className="mobile-version-navigation" id="testId">
        <div className="mobile-navigation-visible">
          <Image src={smLogo} width={48} height={48} />
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handle}
          >
            <path
              d="M7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2793 6 19.8978 6 19.5V7.50299C6 7.10517 6.15804 6.72364 6.43934 6.44233C6.72064 6.16103 7.10218 6.00299 7.5 6.00299H19.5C19.8978 6.00299 20.2794 6.16103 20.5607 6.44233C20.842 6.72364 21 7.10517 21 7.50299V19.5C21 19.8978 20.842 20.2793 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H7.5ZM28.5 21C28.1022 21 27.7206 20.842 27.4393 20.5607C27.158 20.2793 27 19.8978 27 19.5V7.50299C27 7.10517 27.158 6.72364 27.4393 6.44233C27.7206 6.16103 28.1022 6.00299 28.5 6.00299H40.497C40.8948 6.00299 41.2764 6.16103 41.5577 6.44233C41.839 6.72364 41.997 7.10517 41.997 7.50299V19.5C41.997 19.8978 41.839 20.2793 41.5577 20.5607C41.2764 20.842 40.8948 21 40.497 21H28.5ZM7.5 42C7.10218 42 6.72064 41.842 6.43934 41.5607C6.15804 41.2794 6 40.8978 6 40.5V28.5C6 28.1022 6.15804 27.7206 6.43934 27.4393C6.72064 27.158 7.10218 27 7.5 27H19.5C19.8978 27 20.2794 27.158 20.5607 27.4393C20.842 27.7206 21 28.1022 21 28.5V40.5C21 40.8978 20.842 41.2794 20.5607 41.5607C20.2794 41.842 19.8978 42 19.5 42H7.5ZM28.5 42C28.1022 42 27.7206 41.842 27.4393 41.5607C27.158 41.2794 27 40.8978 27 40.5V28.5C27 28.1022 27.158 27.7206 27.4393 27.4393C27.7206 27.158 28.1022 27 28.5 27H40.497C40.8948 27 41.2764 27.158 41.5577 27.4393C41.839 27.7206 41.997 28.1022 41.997 28.5V40.5C41.997 40.8978 41.839 41.2794 41.5577 41.5607C41.2764 41.842 40.8948 42 40.497 42H28.5Z"
              fill="white"
            />
          </svg>
        </div>
        <div clasname="mobile-navigation-overflow" style={{ margin: "25px" }}>
          <div className="languages">
            <span>
              <Link to="#0" className="language-link">
                GEO
              </Link>
            </span>
            <span>
              <Link to="#0" className="language-link m-2">
                ENG
              </Link>
            </span>
          </div>
          <div className="navigation-routes">
            <ul className="navigation-routes-linls">
              <li>
                <Link className="navigation-route-link" to="#0">
                  ჩვენ შესახებ
                </Link>
              </li>
              <li>
                <Link className="navigation-route-link" to="#0">
                  სიახლეები
                </Link>
              </li>
              <li>
                <Link className="navigation-route-link" to="#0">
                  დეპარტამენტები
                </Link>
              </li>
              <li>
                <Link className="navigation-route-link" to="#0">
                  ვაკანსიები
                </Link>
              </li>
            </ul>
          </div>
          <div className="mobile-navigation-book-btn">
            <Button className="mobile-navigation-text">დაჯავშნე ვიზიტი</Button>
          </div>
          <div className="socials">
            <span className="socials-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-facebook text-white"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </span>
            <span className="socials-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-youtube text-white"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </span>
            <span className="socials-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-instagram text-white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="desktop-version-navigation">
        <h1>desktop</h1>
      </div>
    </div>
  );

  return (
    <Navbar className="header" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image className="header-logo" src={logo} />
        </Navbar.Brand>
        {/* BURGER ICON */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* BURGER ICON */}
        <Navbar.Collapse id="navbarScroll">
          {/* ADDRESS BAR */}
          <HeaderAddresses />
          {/* END OF ADDRESS BAR */}
          <div className="search-box">
            {/* SOCIALS */}
            <HeaderSocials />
            {/* END OF SOCIALS */}
            <Form className="search-form d-flex">
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
