import React from "react";
import '../../styles/comps/projects/project.css';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Drift and Relax",
      description: "A peaceful drifting game with soothing visuals and progressive difficulty.",
      link: "#",
    },
    {
      title: "Study Planner",
      description: "An app to plan study sessions, set reminders, and manage your tasks.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing projects, skills, and contact information.",
      link: "/",
    },
    {
      title: "Focus Timer",
      description: "A Pomodoro-style timer to help users focus on work and take breaks effectively.",
      link: "#",
    },
    {
      title: "Ai Test Case Generator",
      description: "Generate efficient, accurate software test cases using AI-powered prompts and validation logic.",
      link: "#",
    },
    {
      title: "Budget Buddy",
      description: "A simple app to track income, expenses, and monthly savings goals.",
      link: "#",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-description">
        Here are some of the projects I've been working on.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
