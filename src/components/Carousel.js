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
          <h3>Website</h3>
          <p>A Website related to rescuing dogs and adopting.</p>
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
          <h3>Budget Tracker</h3>
          <p>A project that will helps you tracking your Income and Expenditure in an enhanced Dashboard.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PortfolioCarousel;
