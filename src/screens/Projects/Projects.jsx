import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Projects() {
  return (
    <div>
      <section id="projects">
        <h2>My Projects</h2>
        <ProjectCard
          title="Project 1"
          description="This is a description of Project 1."
          link="https://example.com/project1"
        ></ProjectCard>
        <ProjectCard
          title="Project 2"
          description="This is a description of Project 2."
          link="https://example.com/project2"
        />
        <ProjectCard
          title="Project 3"
          description="This is a description of Project 3."
          link="https://example.com/project3"
        />
      </section>
    </div>
  );
}

export default Projects;
