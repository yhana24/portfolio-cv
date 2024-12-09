import React from "react";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import { FaHome, FaUserAlt, FaFolder, FaEnvelope } from "react-icons/fa"; // React Icons
import { Link } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling
import '../Navbar.css'; // Ensure this path is correct

// Import the logo image
import jrzLogo from '../assets/images/jrzlogo.png'; // Adjust the path if needed

const PortfolioNavbar = () => {
  return (
    <BootstrapNavbar expand="sm" bg="dark" variant="dark" fixed="top">
      <div className="container-fluid">
        <BootstrapNavbar.Brand href="#home">
          <img src={jrzLogo} alt="Avatar Logo" style={{ width: "40px" }} className="rounded-pill" />
        </BootstrapNavbar.Brand>
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
                <FaUserAlt /> Certifications
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="projects" smooth={true} duration={500}>
                <FaFolder /> Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contact" smooth={true} duration={500}>
                <FaEnvelope /> Contact Me
              </Link>
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};

export default PortfolioNavbar;
