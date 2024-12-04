import React from "react";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import { FaHome, FaUserAlt, FaFolder, FaEnvelope } from "react-icons/fa"; // React Icons
import { Link } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling
import '../Navbar.css'; // Ensure this path is correct

const PortfolioNavbar = () => {
  return (
    <BootstrapNavbar expand="lg" fixed="top" className="navbar">
      <BootstrapNavbar.Brand href="#home">My Portfolio</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
      <BootstrapNavbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="home" smooth={true} duration={500}>
              <FaHome /> Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="about" smooth={true} duration={500}>
              <FaUserAlt /> About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="projects" smooth={true} duration={500}>
              <FaFolder /> Projects
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="contact" smooth={true} duration={500}>
              <FaEnvelope /> Contact
            </Link>
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default PortfolioNavbar;
