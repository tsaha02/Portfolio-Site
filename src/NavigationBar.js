import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <NavDropdown title="All Projects" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://heroic-gelato-7eb042.netlify.app/"
                target="_blank"
              >
                Quiz App
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://magnificent-mandazi-f4b55b.netlify.app/"
                target="_blank"
              >
                Book-Finder App
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://rococo-alpaca-253a1d.netlify.app/"
                target="_blank"
              >
                Movie-Recommendation App
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://graceful-frangollo-7a0054.netlify.app/"
                target="_blank"
              >
                Shopping App
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://wondrous-faun-a99c4a.netlify.app/"
                target="_blank"
              >
                Color-Generator App
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://famous-halva-fee5b6.netlify.app/"
                target="_blank"
              >
                Birthday-Reminder App
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://transcendent-fairy-eb006c.netlify.app/"
                target="_blank"
              >
                TourListing-Site App
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://fancy-gaufre-f5c38f.netlify.app/"
                target="_blank"
              >
                Accordion-Menu App
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://poetic-semolina-d028d9.netlify.app/"
                target="_blank"
              >
                Recipe-Search App
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
