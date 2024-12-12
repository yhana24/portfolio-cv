import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaUserAlt, FaFolder, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-scroll';
import DarkModeToggle from './DarkModeToggle';
import jrzLogo from '../assets/images/jrzlogo.png';
import '../Navbar.css';

const PortfolioNavbar = ({ darkMode, setDarkMode }) => {
  return (
    <BootstrapNavbar expand="sm" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} fixed="top">
      <Container fluid>
        <BootstrapNavbar.Brand href="#home">
          <img src={jrzLogo} alt="Avatar Logo" style={{ width: "40px" }} className="rounded-pill" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" smooth={true} duration={500}>
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={500}>
              <FaUserAlt /> Certifications
            </Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500}>
              <FaFolder /> Projects
            </Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500}>
              <FaEnvelope /> Contact Me
            </Nav.Link>
          </Nav>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default PortfolioNavbar;
