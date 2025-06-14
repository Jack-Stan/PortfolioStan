import React from 'react';
import ChromaGrid from '../ui/ChromaGrid';
import '../../styles/homepage/projects-chroma.css';

const ProjectsChroma = ({ handleProjectSelect, projectsData }) => {
  // Transform the project data to the format expected by ChromaGrid
  const chromaItems = projectsData.map((project, index) => {
    // Define different gradients for each project
    const gradients = [
      "linear-gradient(145deg, #4F46E5, #000)",
      "linear-gradient(210deg, #10B981, #000)",
      "linear-gradient(165deg, #F59E0B, #000)",
      "linear-gradient(195deg, #EF4444, #000)",
      "linear-gradient(225deg, #8B5CF6, #000)",
      "linear-gradient(135deg, #06B6D4, #000)",
    ];
    
    // Define different border colors for each project
    const borderColors = [
      "#4F46E5", // Indigo
      "#10B981", // Emerald
      "#F59E0B", // Amber
      "#EF4444", // Red
      "#8B5CF6", // Purple
      "#06B6D4", // Cyan
    ];    // Get technologies as a string
    const techString = project.technologies.slice(0, 3).join(' · ');
    
    // Get a short impact description if available
    const impactSummary = project.impact && project.impact.length > 0 
      ? project.impact[0].substring(0, 100) + '...' 
      : '';
    
    // Get a better project description with proper length
    const shortDescription = project.description.length > 150 
      ? project.description.substring(0, 150) + '...'
      : project.description;

    return {
      image: project.imageUrl, // Use the actual project image
      title: project.title,
      subtitle: techString,
      description: shortDescription,
      handle: project.id,
      impact: impactSummary,
      borderColor: borderColors[index % borderColors.length],
      gradient: gradients[index % gradients.length],
      url: "#", // We'll use the card click to trigger project detail view
      originalProject: project // Store the original project data
    };
  });

  return (
    <div className="projects-chroma-container">
      <div className="projects-chroma-wrapper">        <ChromaGrid 
          items={chromaItems}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
          columns={3}
          rows={2}
          className="projects-chroma-grid"
          handleProjectSelect={handleProjectSelect}
        />
      </div>      <div className="projects-chroma-instruction">
        <span className="instruction-text">Beweeg je cursor over de projectkaarten en klik voor volledige details</span>
      </div>
    </div>
  );
};

export default ProjectsChroma;
