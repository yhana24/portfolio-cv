import React from "react";
import { Carousel } from "react-bootstrap";
import project1Image from "../assets/images/project1.JPG";
import project2Image from "../assets/images/project2.JPG";

const PortfolioCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project1Image}
          alt="First slide"
          style={{ height: '60vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Project 1</h3>
          <p>Short description of the project.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project2Image}
          alt="Second slide"
          style={{ height: '60vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Project 2</h3>
          <p>Short description of the project.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PortfolioCarousel;
