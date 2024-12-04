import React from "react";
import { Carousel } from "react-bootstrap";
// Import certificate images
import cert1Image from "../assets/images/cert1.jpg";
import cert2Image from "../assets/images/cert2.jpg";

const CertificateCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cert1Image}
          alt="First Certificate"
          style={{ height: '60vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Certificate 1</h3>
          <p>Short description of the certificate.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cert2Image}
          alt="Second Certificate"
          style={{ height: '60vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Certificate 2</h3>
          <p>Short description of the certificate.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CertificateCarousel;
