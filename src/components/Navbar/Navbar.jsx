import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-custom">
      <div className="container">
        <a className="navbar-brand" href="#">
          CHITIAN
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
         <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              to="about"
              className="nav-link"
              smooth={true}
              duration={500}
              offset={-70}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              className="nav-link"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              className="nav-link"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
