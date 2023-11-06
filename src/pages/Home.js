import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../img/1593399819_logo_site_sabor_local_va.webp";

import "./Home.css";

const data = [
  {
    image: require("../img/arranjo-liso-leigo-de-legumes-em-fundo-de-madeira.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("../img/cliente-feliz-comprando-visao-lateral-de-negociacao.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("../img/vista-frutas-e-vegetal-tenda-em-mercado.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
];

function Home() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div style={{background:"black"}}>
      <div style={{textAlign:"center"}}>
      <img
        src={Logo}
        style={{ resizeMode: "contain", height: 100, width: 200}}
      />
      ;</div>
      <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Sabor Local</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/entrar">Entrar</Nav.Link>
              <Nav.Link href="/criar">Cadastro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*carousel*/}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide, i) => {
          return (
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={slide.image}
                alt="slider image"
              />
              <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>


      <Card bg="dark" text="white">
      <Card.Body>
        <Col>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Col>
      </Card.Body>
      <Card.Footer className="text-white text-right">
        &copy; {new Date().getFullYear()} Your Company
      </Card.Footer>
    </Card>
    </div>
  );
}

export default Home;
