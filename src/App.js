import React from "react";
import PortfolioNavbar from "./components/Navbar";
import PortfolioCarousel from "./components/Carousel";
import PortfolioModal from "./components/Modal";
import { Breadcrumb, Alert } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <PortfolioNavbar />
      <div className="container mt-5 pt-5">
        <Alert variant="info" dismissible>
          Welcome to my portfolio!
        </Alert>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">About</Breadcrumb.Item>
          <Breadcrumb.Item active>Projects</Breadcrumb.Item>
        </Breadcrumb>
        <PortfolioCarousel />
        <div className="text-center mt-5">
          <PortfolioModal />
        </div>
      </div>
    </div>
  );
};

export default App;
