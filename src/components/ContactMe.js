import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as JRZImage } from "../assets/images/JRZ.svg";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling to Contact Us section

export default function ContactMe({ isMobile }) {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleCard = () => setIsMinimized(!isMinimized);

  return (
    <StyledWrapper isMinimized={isMinimized} isMobile={isMobile}>
      <div className={`card ${isMinimized ? "minimized" : ""}`}>
        <button className="toggle" onClick={toggleCard}>
          {isMinimized ? "+" : "-"}
        </button>
        {!isMinimized && (
          <>
            <div className="profile-pic">
              <JRZImage className="profile-image" />
            </div>
            <div className="bottom">
              <div className="content">
                <span className="name"><strong>Jeruz Abiera</strong></span>
                <span className="about-me"><strong>Frontend Developer skilled in React, Next.js, and modern web technologies</strong></span>
              </div>
              <div className="bottom-bottom">
                <div className="social-links-container">
                  {/* Instagram */}
                  <a href="https://www.instagram.com/jrzstflr/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="social-icon">
                      <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.71-30.71C281.09,121.28,224,121.14,224,121.14s-57.09.14-93.94,10.8A54,54,0,0,0,99.34,162.7C88.68,199.56,88.52,256,88.52,256s.16,57.09,10.82,93.94a54,54,0,0,0,30.71,30.71c36.85,10.67,93.94,10.81,93.94,10.81s57.09-.14,93.94-10.81a54,54,0,0,0,30.71-30.71c10.66-36.85,10.81-93.94,10.81-93.94S359.37,199.56,348.71,162.7ZM224,338.66A82.66,82.66,0,1,1,306.66,256,82.74,82.74,0,0,1,224,338.66Zm85.33-148a19.33,19.33,0,1,1-19.33-19.33A19.34,19.34,0,0,1,309.33,190.66Z" />
                    </svg>
                  </a>
                  {/* GitHub */}
                  <a href="https://github.com/jrzstflr" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="social-icon">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="https://facebook.com/brsrkrrr" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="social-icon">
                      <path d="M279.14 288l14.22-92.66h-88.91V134.44c0-25.35 12.42-50.06 52.24-50.06H293V6.26S273.43 0 248.4 0c-73.4 0-121.51 44.38-121.51 124.72v70.62H84v92.66h42.89V512h100.2V288z" />
                    </svg>
                  </a>
                </div>
                {/* Contact Me Button */}
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <button className="button">
                    Contact Me
                  </button>
                </ScrollLink>
              </div>
            </div>
          </>
        )}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  top: ${({ isMobile }) => (isMobile ? '1rem' : '9rem')};
  left: ${({ isMobile }) => (isMobile ? '50%' : '3rem')};
  transform: ${({ isMobile }) => (isMobile ? 'translateX(-50%)' : 'none')};
  z-index: 100;

  .card {
    width: ${({ isMinimized, isMobile }) => (isMinimized ? (isMobile ? '60px' : '80px') : (isMobile ? '90vw' : '280px'))};
    height: ${({ isMinimized, isMobile }) => (isMinimized ? '50px' : (isMobile ? 'auto' : '280px'))};
    background: rgba(255, 255, 255, 0.9);
    border-radius: ${({ isMobile }) => (isMobile ? '16px' : '32px')};
    padding: ${({ isMobile }) => (isMobile ? '8px' : '10px')};
    box-shadow: #604b4a30 0px 70px 30px -50px;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    position: relative;
  }

  .toggle {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #8080ff;
    color: white;
    border: none;
    border-radius: 10px;
    padding: ${({ isMobile }) => (isMobile ? '3px 6px' : '5px 10px')};
    cursor: pointer;
    z-index: 1;
    font-size: ${({ isMobile }) => (isMobile ? '10px' : '12px')};
  }

  .profile-pic {
    width: 100%;
    height: ${({ isMobile }) => (isMobile ? '200px' : '100%')};
    border-radius: ${({ isMobile }) => (isMobile ? '14px' : '30px')};
    overflow: hidden;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bottom {
    position: ${({ isMobile }) => (isMobile ? 'relative' : 'absolute')};
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${({ isMobile }) => (isMobile ? 'auto' : '30%')};
    background: ${({ isMobile }) => (isMobile ? 'none' : 'linear-gradient(to top, #000000, transparent)')};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: ${({ isMobile }) => (isMobile ? '10px' : '15px')};
    color: black;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .name {
    font-size: ${({ isMobile }) => (isMobile ? '16px' : '18px')};
    font-weight: bold;
    color: black;
  }

  .about-me {
    font-size: ${({ isMobile }) => (isMobile ? '10px' : '12px')};
    margin-top: 5px;
    color: black;
  }

  .bottom-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${({ isMobile }) => (isMobile ? '10px' : '15px')};
  }

  .social-links-container {
    display: flex;
    gap: ${({ isMobile }) => (isMobile ? '8px' : '10px')};
    align-items: center;
  }

  .social-links-container a {
    text-decoration: none;
  }

  .social-icon {
    width: ${({ isMobile }) => (isMobile ? '16px' : '20px')};
    height: ${({ isMobile }) => (isMobile ? '16px' : '20px')};
    fill: black;
    transition: transform 0.3s ease-in-out;
  }

  .social-icon:hover {
    transform: scale(1.2);
  }

  .button {
    background-color: #8080ff;
    color: white;
    border: none;
    padding: ${({ isMobile }) => (isMobile ? '8px 16px' : '10px 20px')};
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${({ isMobile }) => (isMobile ? '10px' : '12px')};
  }

  @media (max-width: 1024px) {
    left: ${({ isMobile }) => (isMobile ? '50%' : '1rem')};
  }
`;

