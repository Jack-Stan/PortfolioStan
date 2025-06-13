import React from 'react';
import '../styles/homepage/project-card.css';

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  technologies = [], 
  liveUrl, 
  repoUrl 
}) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="project-overlay">
          <div className="project-links">
            {liveUrl && (
              <a 
                href={liveUrl} 
                className="project-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
            {repoUrl && (
              <a 
                href={repoUrl} 
                className="project-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Code Repository
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {technologies.length > 0 && (
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
