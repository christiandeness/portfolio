import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, description, link }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div className="project-card card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
