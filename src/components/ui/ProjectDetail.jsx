import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../../styles/homepage/project-detail.css';

const ProjectDetail = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Animation for modal opening
    if (modalRef.current && contentRef.current) {
      // Set initial state
      gsap.set(modalRef.current, { 
        opacity: 0 
      });
      
      gsap.set(contentRef.current, { 
        y: 30,
        opacity: 0 
      });
      
      // Animate modal background
      gsap.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      // Animate content
      gsap.to(contentRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0.2,
        ease: "power3.out"
      });
    }
    
    // Add event listener to close on escape key
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleCloseAnimation = () => {
    // Animation for modal closing
    gsap.to(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    });
    
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
      ease: "power2.in",
      onComplete: onClose
    });
  };

  // If no project is provided, don't render anything
  if (!project) return null;

  return (
    <div className="project-detail-overlay" ref={modalRef} onClick={handleCloseAnimation}>
      <div className="project-detail-content" ref={contentRef} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleCloseAnimation}>×</button>
        
        <div className="project-detail-header">
          <h2>{project.title}</h2>
          <div className="project-detail-links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="detail-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="detail-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Code Repository
              </a>
            )}
          </div>
        </div>
        
        {project.imageUrl && (
          <div className="project-detail-image">
            <img src={project.imageUrl} alt={project.title} />
          </div>
        )}
        
        <div className="project-detail-body">
          {project.fullDescription ? (
            <div className="project-full-description" dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
          ) : (
            <p className="project-description">{project.description}</p>
          )}
          
          {project.technologies && project.technologies.length > 0 && (
            <div className="project-technologies">
              <h3>Technologieën</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {project.features && project.features.length > 0 && (
            <div className="project-features">
              <h3>Belangrijkste Functies</h3>
              <ul className="feature-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {project.impact && (
            <div className="project-impact">
              <h3>Project Impact</h3>
              <div className="impact-points">
                {project.impact.map((point, index) => (
                  <div key={index} className="impact-point">
                    <div className="impact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="impact-text">{point}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add challenges and problem solving section */}
          <div className="project-challenges">
            <h3>Uitdagingen & Probleemoplossing</h3>
            <div className="challenge-container">
              <div className="challenge-item">
                <h4>Uitdaging</h4>                <p>{project.id === 'brightest'
                  ? 'De grootste uitdaging was het creëren van een systeem dat niet-technische gebruikers in staat stelt om geautomatiseerde tests te schrijven zonder codeerkennis, terwijl het ook gestructureerde, onderhoudbare testcode moest genereren die past binnen bestaande frameworks.'
                  : project.id === 'time2bill'
                  ? 'Het bouwen van een cross-platform applicatie die effectief functioneert op zowel web als mobiel, terwijl er complexe bedrijfslogica voor facturatie en verschillende internationale facturatiestandaarden geïmplementeerd moesten worden.'
                  : project.id === 'purepeau'
                  ? 'Het creëren van een CMS-functionaliteit die intuïtief genoeg was voor een niet-technische eigenaar om zelf content te beheren, terwijl het design en de merkauthenticiteit behouden blijft.'
                  : 'Het integreren van meerdere AI-systemen (spraakherkenning, emotiedetectie, NLP) in een coherente, real-time gebruikerservaring die zowel performant als intuïtief is.'}</p>
              </div>
              
              <div className="challenge-item">
                <h4>Mijn Aanpak</h4>                <p>{project.id === 'brightest' 
                  ? 'Ik ontwikkelde een systeem dat de webpagina analyseert en selecteerbare elementen identificeert. Voor de codegeneratie integreerde ik OpenAI\'s API om Page Object Models te genereren die voldoen aan de bestaande codestandaarden, waardoor een brug werd geslagen tussen de visuele interface en professionele testcode.'
                  : project.id === 'time2bill' 
                  ? 'Ik implementeerde een modulaire architectuur met Flutter, waarbij ik een duidelijke scheiding tussen UI-logica en bedrijfsregels handhaafde. Voor de facturatie ontwikkelde ik een abstractielaag die verschillende standaarden (UBL, Peppol) ondersteunt zonder de kernfunctionaliteit te beïnvloeden.' 
                  : project.id === 'purepeau' 
                  ? 'Ik ontwierp een aangepaste content editor met React die complexe styling verbergt achter intuïtieve knoppen en drag-and-drop functionaliteit, terwijl ik templates creëerde die de merkidentiteit beschermen ongeacht welke content wordt toegevoegd.' 
                  : 'Ik ontwikkelde een microservice-architectuur waarbij elk AI-systeem onafhankelijk kon functioneren maar synchroniseerde via een centrale state manager. Om performantieproblemen op te lossen, implementeerde ik client-side caching en intelligente debouncing van API-calls.'}</p>
              </div>
              
              <div className="challenge-item">
                <h4>Lessen & Groei</h4>                <p>{project.id === 'brightest'
                  ? 'Dit project leerde me hoe belangrijk het is om complexe technische concepten te vertalen naar toegankelijke gebruikerservaringen. Ik verfijnde mijn vaardigheden in het werken met AI-integraties en leerde hoe ik technische barrières kan wegnemen zonder compromissen te sluiten op kwaliteit.'
                  : project.id === 'time2bill'
                  ? 'Dit project versterkte mijn begrip van domein-gedreven design en het belang van flexibele architecturen die kunnen evolueren met veranderende bedrijfsbehoeften. Ik verbeterde mijn vaardigheden in het bouwen van schaalbare, toekomstbestendige applicaties.'
                  : project.id === 'purepeau'
                  ? 'Ik leerde het belang van empathisch ontwerp - het begrijpen van de behoeften en beperkingen van niet-technische gebruikers. Deze ervaring heeft mijn benadering van UX/UI-ontwerp aanzienlijk verbeterd en me geleerd hoe ik technologie kan democratiseren.'
                  : 'Dit complexe project leerde me het belang van asynchroon denken en hoe verschillende AI-subsystemen effectief te orkestreren. Ik verdiepte mijn begrip van realtime systemen en verbeterde mijn vaardigheden in het optimaliseren van frontend performance onder zware belasting.'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
