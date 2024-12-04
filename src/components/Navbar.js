import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaHome, FaUserAlt, FaFolder, FaEnvelope } from "react-icons/fa";

const PortfolioNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home"><FaHome /> Home</Nav.Link>
          <Nav.Link href="#about"><FaUserAlt /> About</Nav.Link>
          <Nav.Link href="#projects"><FaFolder /> Projects</Nav.Link>
          <Nav.Link href="#contact"><FaEnvelope /> Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PortfolioNavbar;
