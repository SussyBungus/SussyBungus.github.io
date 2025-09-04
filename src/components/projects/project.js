import React, { useState } from "react";
import "../../styles/comps/projects/project.css";

// ✅ Import your images directly from assets
import previewImg from "../../assets/preview.png";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Drift and Relax",
      description:
        "A peaceful drifting game with soothing visuals and progressive difficulty.",
      images: [previewImg],
    },
    {
      title: "Study Planner",
      description:
        "An app to plan study sessions, set reminders, and manage your tasks.",
      images: [previewImg],
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio showcasing projects, skills, and contact information.",
      images: [previewImg],
    },
    {
      title: "Focus Timer",
      description:
        "A Pomodoro-style timer to help users focus on work and take breaks effectively.",
      images: [previewImg],
    },
    {
      title: "AI Test Case Generator",
      description:
        "Generate efficient, accurate software test cases using AI-powered prompts and validation logic.",
      images: [previewImg],
    },
    {
      title: "Budget Buddy",
      description:
        "A simple app to track income, expenses, and monthly savings goals.",
      images: [previewImg],
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-description">
        Here are some of the projects I've been working on.
      </p>

      {/* Project Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <button
              className="project-link"
              onClick={() => setSelectedProject(project)}
            >
              View Project
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <div className="modal-content">
              {/* Left: Images */}
              <div className="modal-images">
                {selectedProject.images.map((img, i) => (
                  <img key={i} src={img} alt={selectedProject.title} />
                ))}
              </div>

              {/* Right: Details */}
              <div className="modal-details">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
