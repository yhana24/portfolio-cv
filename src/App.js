import React from "react";
import PortfolioNavbar from "./components/Navbar";
import PortfolioCarousel from "./components/Carousel";
import CertificateCarousel from "./components/Certificate";  // Corrected import
import PortfolioModal from "./components/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, Alert } from "react-bootstrap";
import { Link } from 'react-scroll'; 
import './Navbar.css';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <PortfolioNavbar />
      
      {/* Home Section */}
      <section id="home">
        <div className="container">
          <br></br>
          <br></br>
          <h2>About Me</h2>
          <p>Hello, I'm Jeruz Abiera, a passionate Frontend Developer skilled in HTML, CSS, JavaScript, and React. I love building creative and responsive web applications.</p>
          
          <h3>Work Experience</h3>
          <ul>
            <li><strong>Technical Support Engineer - 8x8 </strong> (November 07, 2022 - Present)
              <ul>
                <li>In this role, I provide crucial support to clients by troubleshooting and resolving technical issues related to VOIP systems, softphones, and network configurations. I collaborate with crossfunctional teams to ensure timely resolution, improving overall customer experience.</li>
                <li>My expertise includes setting up desk phones from major providers like Cisco, Polycom, and Yealink, while ensuring compliance with technical requirements.</li>
              </ul>
            </li>
            <li><strong>Fraud Detection Analyst - Barclays Bank US</strong> (February 2022 - June 2022)
              <ul>
                <li>As a Fraud Analyst at Barclays, I safeguarded customer accounts by analyzing and detecting suspicious activities.</li>
                <li>My role required critical thinking, attention to detail, and fast decisionmaking, all of which helped prevent fraudulent transactions and protect both the bank and its clients from financial risk.</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li><strong>Customer Assistance Advisor - 118118 Money </strong> (August 2021 - February 2022)
              <ul>
                <li>As a Customer Assistance Advisor, I provided personalized support to customers, addressing a wide range of inquiries related to financial services. </li>
                <li>My ability to quickly understand and resolve customer concerns helped build strong relationships and foster loyalty, all while meeting servicelevel agreements and performance targets</li>
              </ul>
            </li>
            <li><strong>Collection Specialist - Ally Financial Bank</strong> (May 2017 - August 2021)
              <ul>
                <li>In this role, I handled collections for auto finance accounts, contacting customers to arrange payments and negotiating successful outcomes.</li>
                <li>I consistently met or exceeded monthly targets, demonstrating my ability to work under pressure and manage challenging situations, all while maintaining high levels of professionalism and customer satisfaction.</li>
              </ul>
            </li>
          </ul>

          <h3>Skills</h3>
          <ul>
            <li>Frontend Development: HTML, CSS, JavaScript, React, Tailwind CSS</li>
            <li>Version Control: Git, GitHub</li>
            <li>Tools: Visual Studio Code, Chrome DevTools</li>
            <li>Troubleshooting Skills</li>
            <li>Managing Ticketing System "Salesforce, Zendesk etc"</li>
            <li>Networking Basics</li>
            <li>Networking Devices and Initial Configuration</li>
          </ul>

          <h3>Education</h3>
          <p><strong>BS Computer Science</strong> - Laguna Science and Technology College (2018 - 2020)</p>
          <p><strong>Programming NCIV</strong> - Laguna Science and Technology College (2015 - 2017)</p>

          <h3>Contact</h3>
          <ul>
            <li>Email: jeruz.abiera@outlook.com</li>
            <li>Phone Number: +63 969-313-4738</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/jeruzabiera">linkedin.com/in/jeruzabiera</a></li>
          </ul>
        </div>
      </section>

      <section id="about" style={{ minHeight: "100vh", backgroundColor: "#d0d0d0" }}>
        <div className="container text-center mt-5 pt-5">
          <h2>Certifications:</h2>
          {/* Using CertificateCarousel here */}
          <CertificateCarousel />
          <div className="text-center mt-5">
            <PortfolioModal />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ minHeight: "100vh", backgroundColor: "#d0d0d0" }}>
        <div className="container text-center mt-5 pt-5">
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
