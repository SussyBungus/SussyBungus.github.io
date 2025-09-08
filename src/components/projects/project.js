import React, { useState, useEffect, useRef } from "react";
import "../../styles/comps/projects/project.css";
import previewImg from "../../assets/preview.png";
import Modal from "./modal"; // ✅ Import modal

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const observerRef = useRef();

  const projects = [
    {
      title: "Drift and Relax",
      description: "A peaceful drifting game with soothing visuals and progressive difficulty.",
      fullDescription: "An immersive racing experience that combines relaxation with skill-based gameplay. Features realistic physics, beautiful environments, and a progressive difficulty system that adapts to player skill level.",
      technologies: ["Unity", "C#", "3D Graphics", "Physics"],
      status: "In Development",
      category: "Game Development",
      color: "#FF6B6B",
      images: [previewImg],
      features: ["Realistic Physics", "Beautiful Environments", "Progressive Difficulty", "Relaxing Gameplay"]
    },
    {
      title: "AI Study Planner",
      description: "An intelligent study planning system using machine learning algorithms.",
      fullDescription: "Built during a hackathon, this AI-powered application helps students create optimized study schedules based on their learning patterns, course difficulty, and available time.",
      technologies: ["Python", "Machine Learning", "React", "OpenAi APIs","Gradio"],
      status: "Completed",
      category: "AI/ML",
      color: "#4ECDC4",
      images: [previewImg],
      features: ["AI-Powered Scheduling", "Learning Pattern Analysis", "Smart Reminders", "Progress Tracking"]
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing projects, skills, and contact information.",
      fullDescription: "A modern, responsive portfolio website built with React. Features smooth animations, interactive components, and a clean design that showcases my development journey.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      status: "Live",
      category: "Web Development",
      color: "#45B7D1",
      images: [previewImg],
      features: ["Responsive Design", "Smooth Animations", "Interactive Components", "Modern UI/UX"]
    },
    {
      title: "Focus Timer",
      description: "A Pomodoro-style timer to help users focus on work and take breaks effectively.",
      fullDescription: "A productivity application implementing the Pomodoro Technique with customizable work/break intervals, task tracking, and detailed analytics to help users optimize their focus sessions.",
      technologies: ["JavaScript", "CSS", "Local Storage", "Web APIs"],
      status: "Completed",
      category: "Productivity",
      color: "#96CEB4",
      images: [previewImg],
      features: ["Customizable Timers", "Task Management", "Progress Analytics", "Notification System"]
    },
    {
      title: "AI Test Case Generator",
      description: "Generate efficient, accurate software test cases using AI-powered prompts and validation logic.",
      fullDescription: "An innovative tool that leverages artificial intelligence to automatically generate comprehensive test cases for software applications, improving testing efficiency and coverage.",
      technologies: ["Python", "AI/ML", "Natural Language Processing", "APIs"],
      status: "In Development",
      category: "AI/ML",
      color: "#FFB6A0",
      images: [previewImg],
      features: ["AI-Generated Test Cases", "Code Analysis", "Coverage Reports", "Integration Support"]
    },
    {
      title: "Budget Buddy",
      description: "A simple app to track income, expenses, and monthly savings goals.",
      fullDescription: "A comprehensive personal finance management application that helps users track spending, set budgets, and achieve their financial goals through intuitive visualizations and smart insights.",
      technologies: ["React", "Chart.js", "Local Storage", "CSS"],
      status: "Completed",
      category: "Finance",
      color: "#FFDAC1",
      images: [previewImg],
      features: ["Expense Tracking", "Budget Planning", "Savings Goals", "Financial Analytics"]
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleProjects(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
      observerRef.current?.observe(card);
    });
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "#4ECDC4";
      case "In Development": return "#FFB6A0";
      case "Live": return "#96CEB4";
      default: return "#FF9A7E";
    }
  };

  const handleModalClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={`projects-page ${isLoaded ? 'loaded' : ''}`}>
      
      {/* Decorative Background Elements */}
      <div className="projects-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      {/* Header Section */}
      <div className="projects-header">
        <h1 className="projects-title">
          <span className="title-main">My Projects</span>
          <div className="title-underline"></div>
        </h1>
        <p className="projects-description">
          Explore my journey through code — from game development to AI innovations, 
          each project represents a step forward in my programming adventure.
        </p>
        
        <div className="projects-stats">
          <div className="stat-item">
            <span className="stat-number">6</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">In Development</span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card ${visibleProjects.includes(index) ? 'visible' : ''}`}
            data-index={index}
            style={{ '--accent-color': project.color }}
          >
            <div className="card-header">
              <div className="project-category" style={{ backgroundColor: `${project.color}20`, color: project.color }}>
                {project.category}
              </div>
              <div className="project-status" style={{ backgroundColor: getStatusColor(project.status) }}>
                {project.status}
              </div>
            </div>

            <div className="card-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech-stack">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-tag" style={{ borderColor: project.color }}>
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-more">+{project.technologies.length - 3} more</span>
                )}
              </div>
            </div>

            <div className="card-footer">
              <button
                className="project-link"
                onClick={() => handleModalClick(project)}
                style={{ backgroundColor: project.color }}
              >
                <span>Explore Project</span>
                <div className="button-shine"></div>
              </button>
            </div>

            <div className="card-decoration" style={{ backgroundColor: `${project.color}10` }}></div>
          </div>
        ))}
      </div>

      {/* Modal Portal */}
      {selectedProject && (
        <Modal onClose={closeModal}>
          <div className="modal-header">
            <h2>{selectedProject.title}</h2>
            <div className="modal-badges">
              <span className="modal-category" style={{ backgroundColor: selectedProject.color }}>
                {selectedProject.category}
              </span>
              <span className="modal-status" style={{ backgroundColor: getStatusColor(selectedProject.status) }}>
                {selectedProject.status}
              </span>
            </div>
          </div>

          <div className="modal-content">
            <div className="modal-images">
              {selectedProject.images.map((img, i) => (
                <div key={i} className="image-container">
                  <img src={img} alt={selectedProject.title} />
                  <div className="image-overlay"></div>
                </div>
              ))}
            </div>

            <div className="modal-details">
              <div className="detail-section">
                <h3>Overview</h3>
                <p>{selectedProject.fullDescription}</p>
              </div>

              <div className="detail-section">
                <h3>Key Features</h3>
                <ul className="features-list">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h3>Technologies Used</h3>
                <div className="modal-tech-stack">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="modal-tech-tag" style={{ borderColor: selectedProject.color }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProjectsPage;
