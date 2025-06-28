import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website built using React and Bootstrap.',
    link: 'https://github.com/christiandeness/portfolio',
  },
  {
    title: 'Hotel Reservation System',
    description: 'A hotel reservation system with user authentication, room booking, and payment processing. (PayPal integration)',
    link: 'https://github.com/jjalcantara1/GoGetFrontend',
  },
  {
    title: 'Learning Management System',
    description: 'A full-stack LMS for teachers and students, featuring course creation, assignments, and performance tracking.',
    link: 'https://github.com/Smiruu/NotED',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
