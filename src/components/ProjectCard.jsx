import React from 'react';
import '../styles/homepage/project-card.css';

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  technologies = [], 
  liveUrl, 
  repoUrl,
  impact = [],
  onClick 
}) => {
  // Select first impact point to highlight if available
  const highlightedImpact = impact && impact.length > 0 ? impact[0] : null;

  return (
    <div className="project-card" onClick={onClick}>
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
                onClick={(e) => e.stopPropagation()} // Prevent card click when clicking on link
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
                onClick={(e) => e.stopPropagation()} // Prevent card click when clicking on link
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
        
        {/* Show key impact/result */}
        {highlightedImpact && (
          <div className="project-impact">
            <h4>Belangrijkste Resultaat:</h4>
            <p>{highlightedImpact}</p>
          </div>
        )}
        
        {technologies.length > 0 && (
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="project-view-more">
          <span>Klik voor details & alle resultaten</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
