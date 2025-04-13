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
      title: "LeetCode Tracker",
      description: "A web tool to track coding streaks, problems solved, and daily goals.",
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
      link: "#",
    },
    {
      title: "WeatherNow",
      description: "A minimal weather app using live API data to show forecasts in real-time.",
      link: "#",
    },
    {
      title: "Focus Timer",
      description: "A Pomodoro-style timer to help users focus on work and take breaks effectively.",
      link: "#",
    },
    {
      title: "Flashcard Master",
      description: "Study smarter with custom flashcards, spaced repetition, and progress tracking.",
      link: "#",
    },
    {
      title: "Crypto Tracker",
      description: "Live cryptocurrency prices, charts, and portfolio management tool.",
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
        Here are some of the projects I've been working on. I'm always building and learning!
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
