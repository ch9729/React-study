import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {/* <a
          href="https://react-vite-projects-1-birthday-buddy.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={p1} alt="birthday buddy" className="img" />
          <h5>birthday buddy</h5>
        </a> */}
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="project"
          >
            <img src={project.image} alt="birthday buddy" className="img" />
            <h5>{project.title}</h5>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
