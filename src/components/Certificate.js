import React from "react";
import { Card, Button } from "react-bootstrap";
import cert1Image from "../assets/images/cert1.jpg";
import cert2Image from "../assets/images/cert2.jpg";
import "./Projects.css";

const projects = [
  {
    title: "Networking Basics",
    description: "Networking Basics",
    image: cert1Image,
    link: "#",
  },
  {
    title: "Networking 2",
    description: "Networking.",
    image: cert2Image,
    link: "#",
  },
];

const PortfolioCarousel = () => {
  return (
    <div className="projects-container">
      {projects.map((certificates, index) => (
        <Card key={index} className="project-card">
          <Card.Img
            variant="top"
            src={certificates.image}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{certificates.title}</Card.Title>
            <Card.Text>{certificates.description}</Card.Text>
            <Button variant="primary" href={certificates.link}>
              View Details
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PortfolioCarousel;
