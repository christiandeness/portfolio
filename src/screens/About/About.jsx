import React from "react";
import "./About.css";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-3">
            <img
              src="/images/self-photo.JPG"
              alt="Christian"
              className="img-fluid rounded-circle mb-3"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <h2>About Me</h2>
            <p>
              Hi, I’m Christian, a 4th-year Computer Engineering student passionate about building web apps and solving problems with code. I work with React, JavaScript, C++, and more.
            </p>
            <div className="social-links mt-3">
              <a href="https://github.com/christiandeness" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaGithub size={30} color="#333333" />
              </a>
              <a href="https://linkedin.com/in/christian-benjamin-de-ness" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaLinkedin size={30} color="#0d4812" />
              </a>
              <a href="https://www.facebook.com/chrstndnss" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaFacebook size={30} color="#0d4812" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
 