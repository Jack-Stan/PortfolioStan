import React from 'react';
import ChromaGrid from '../ui/ChromaGrid';
import '../../styles/homepage/projects-chroma.css';

const statusLabels = {
  nl: {
    'in-development': 'In ontwikkeling',
    planning: 'Gepland',
    completed: 'Voltooid',
  },
  en: {
    'in-development': 'In development',
    planning: 'Planned',
    completed: 'Completed',
  },
};

const ProjectsChroma = ({ handleProjectSelect, projectsData, localizedText, language = 'nl' }) => {
  const labels = statusLabels[language] || statusLabels.nl;

  const chromaItems = projectsData.map((project, index) => {
    const gradients = [
      'linear-gradient(145deg, #4F46E5, #000)',
      'linear-gradient(210deg, #10B981, #000)',
      'linear-gradient(165deg, #F59E0B, #000)',
      'linear-gradient(195deg, #EF4444, #000)',
      'linear-gradient(225deg, #8B5CF6, #000)',
      'linear-gradient(135deg, #06B6D4, #000)',
    ];

    const borderColors = [
      '#4F46E5',
      '#10B981',
      '#F59E0B',
      '#EF4444',
      '#8B5CF6',
      '#06B6D4',
    ];

    const techString = project.technologies.slice(0, 3).join(' · ');
    // Lead with the result — let CSS line-clamp handle any overflow ellipsis.
    const impactSummary = project.impact && project.impact.length > 0
      ? project.impact[0]
      : '';

    return {
      image: project.imageUrl,
      title: project.title,
      subtitle: techString,
      impact: impactSummary,
      borderColor: borderColors[index % borderColors.length],
      gradient: gradients[index % gradients.length],
      url: '#',
      originalProject: project,
      developmentStatus: project.developmentStatus,
      developmentStatusLabel: labels[project.developmentStatus],
    };
  });

  return (
    <div className="projects-chroma-container">
      <div className="projects-chroma-wrapper">
        <ChromaGrid
          items={chromaItems}
          handleProjectSelect={handleProjectSelect}
        />
      </div>
      <div className="projects-chroma-instruction">
        <span className="instruction-text">{localizedText?.projectsInstruction}</span>
      </div>
    </div>
  );
};

export default ProjectsChroma;
