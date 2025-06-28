import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
