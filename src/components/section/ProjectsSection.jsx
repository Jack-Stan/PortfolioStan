import React from 'react';
import Folder from '../ui/Folder';
import ProjectCard from '../ProjectCard';
import '../../styles/homepage/projects-section.css';

const ProjectsSection = () => {
  // Sample project data - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React",
      tech: ["React", "CSS", "JavaScript"],
      color: "#5227FF"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Online store with payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      color: "#27CFFF"
    },
    {
      id: 3,
      title: "Weather App",
      description: "Real-time weather forecasting application",
      tech: ["React", "API Integration", "CSS"],
      color: "#FF5733"
    },
    {
      id: 4,
      title: "Task Management Tool",
      description: "Productivity app for organizing tasks",
      tech: ["React", "Redux", "Firebase"],
      color: "#33FF57"
    }
  ];

  // Create project cards as items for folders
  const createProjectItem = (project) => (
    <div className="project-item">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-tags">
        {project.tech.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <p className="section-description">
        Click on a folder to explore my work. Each folder contains details about a project I've worked on.
      </p>
      
      <div className="project-folder-container">
        {projects.map((project) => (
          <div key={project.id} className="project-folder-wrapper">
            <Folder 
              color={project.color} 
              size={1.5} 
              className="custom-folder"
              items={[
                createProjectItem(project),
                <div className="project-details">
                  <ProjectCard 
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                  />
                </div>,
                null
              ]}
            />
            <div className="folder-label">{project.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
