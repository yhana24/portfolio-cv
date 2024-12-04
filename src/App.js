import React from "react";
import PortfolioNavbar from "./components/Navbar";
import PortfolioCarousel from "./components/Carousel";
import PortfolioModal from "./components/Modal";
import { Breadcrumb, Alert } from "react-bootstrap";
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css'; // Import custom Navbar styling

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <PortfolioNavbar />
      
      {/* Home Section */}
      <section id="home" style={{ minHeight: "100vh", backgroundColor: "#f0f0f0" }}>
        <div className="container text-center mt-5 pt-5">
          <Alert variant="info" dismissible>
            Welcome to my portfolio!
          </Alert>
          <h1>Welcome to My Portfolio</h1>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" style={{ minHeight: "100vh", backgroundColor: "#e0e0e0" }}>
        <div className="container text-center mt-5 pt-5">
          <h2>About Me</h2>
          <p>This is where I talk about myself and my background.</p>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" style={{ minHeight: "100vh", backgroundColor: "#d0d0d0" }}>
        <div className="container text-center mt-5 pt-5">
          <Breadcrumb>
            <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#about">About</Breadcrumb.Item>
            <Breadcrumb.Item active>Projects</Breadcrumb.Item>
          </Breadcrumb>
          <h2>My Projects</h2>
          <PortfolioCarousel />
          <div className="text-center mt-5">
            <PortfolioModal />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ minHeight: "100vh", backgroundColor: "#c0c0c0" }}>
        <div className="container text-center mt-5 pt-5">
          <h2>Contact Me</h2>
          <p>If you'd like to get in touch, feel free to reach out!</p>
        </div>
      </section>
    </div>
  );
};

export default App;
