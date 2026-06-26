import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import '../../styles/homepage/project-detail.css';

const detailContent = {
  nl: {
    viewProject: 'Bekijk project',
    technologies: 'Technologieën',
    keyFeatures: 'Belangrijkste functies',
    projectImpact: 'Projectimpact',
    challengesTitle: 'Uitdagingen & probleemoplossing',
    challenge: 'Uitdaging',
    approach: 'Mijn aanpak',
    lessons: 'Lessen & groei',
    status: {
      'in-development': 'In ontwikkeling',
      planning: 'Gepland',
      completed: 'Voltooid',
    },
    challenges: {
      brightest: {
        challenge: 'De grootste uitdaging was het creëren van een systeem dat niet-technische gebruikers in staat stelt om geautomatiseerde tests te schrijven zonder codeerkennis, terwijl het ook gestructureerde, onderhoudbare testcode moest genereren die past binnen bestaande frameworks.',
        approach: 'Ik ontwikkelde een systeem dat de webpagina analyseert en selecteerbare elementen identificeert. Voor de codegeneratie integreerde ik OpenAI\'s API om Page Object Models te genereren die voldoen aan bestaande codestandaarden, waardoor een brug ontstond tussen de visuele interface en professionele testcode.',
        lessons: 'Dit project leerde me hoe belangrijk het is om complexe technische concepten te vertalen naar toegankelijke gebruikerservaringen. Ik verfijnde mijn vaardigheden in AI-integraties en leerde hoe ik technische barrières kan wegnemen zonder in te leveren op kwaliteit.',
      },
      time2bill: {
        challenge: 'Het bouwen van een cross-platform applicatie die goed werkt op zowel web als mobiel, terwijl er complexe bedrijfslogica voor facturatie en internationale facturatiestandaarden geïmplementeerd moest worden.',
        approach: 'Ik implementeerde een modulaire architectuur met Flutter, met een duidelijke scheiding tussen UI-logica en bedrijfsregels. Voor de facturatie ontwikkelde ik een abstractielaag die verschillende standaarden zoals UBL en Peppol ondersteunt zonder de kernfunctionaliteit te beïnvloeden.',
        lessons: 'Dit project versterkte mijn begrip van domeingedreven design en het belang van flexibele architecturen die kunnen evolueren met veranderende bedrijfsbehoeften. Ik verbeterde mijn vaardigheden in het bouwen van schaalbare, toekomstbestendige applicaties.',
      },
      purepeau: {
        challenge: 'Het creëren van CMS-functionaliteit die intuïtief genoeg was voor een niet-technische eigenaar om zelf content te beheren, terwijl het design en de merkidentiteit behouden blijven.',
        approach: 'Ik ontwierp een aangepaste content editor met React die complexe styling verbergt achter intuïtieve knoppen en drag-and-drop functionaliteit, terwijl templates de merkidentiteit beschermen ongeacht welke content wordt toegevoegd.',
        lessons: 'Ik leerde het belang van empathisch ontwerp: het begrijpen van de behoeften en beperkingen van niet-technische gebruikers. Deze ervaring heeft mijn benadering van UX/UI-ontwerp verbeterd en me geleerd hoe technologie toegankelijker kan worden gemaakt.',
      },
      default: {
        challenge: 'Het integreren van meerdere AI-systemen, zoals spraakherkenning, emotiedetectie en NLP, in een coherente real-time gebruikerservaring die zowel performant als intuïtief is.',
        approach: 'Ik ontwikkelde een microservice-architectuur waarbij elk AI-systeem onafhankelijk kon functioneren, maar synchroniseerde via een centrale state manager. Om performanceproblemen op te lossen, implementeerde ik client-side caching en intelligente debouncing van API-calls.',
        lessons: 'Dit complexe project leerde me het belang van asynchroon denken en hoe verschillende AI-subsystemen effectief georkestreerd kunnen worden. Ik verdiepte mijn begrip van real-time systemen en frontend performance onder zware belasting.',
      },
    },
  },
  en: {
    viewProject: 'View project',
    technologies: 'Technologies',
    keyFeatures: 'Key features',
    projectImpact: 'Project impact',
    challengesTitle: 'Challenges & problem solving',
    challenge: 'Challenge',
    approach: 'My approach',
    lessons: 'Lessons & growth',
    status: {
      'in-development': 'In development',
      planning: 'Planned',
      completed: 'Completed',
    },
    challenges: {
      brightest: {
        challenge: 'The biggest challenge was creating a system that allows non-technical users to create automated tests without coding knowledge, while still generating structured, maintainable test code that fits existing frameworks.',
        approach: 'I built a system that analyzes web pages and identifies selectable elements. For code generation, I integrated OpenAI\'s API to generate Page Object Models that follow existing code standards, connecting a visual interface with professional test code.',
        lessons: 'This project taught me how important it is to translate complex technical concepts into accessible user experiences. I refined my AI integration skills and learned how to remove technical barriers without compromising quality.',
      },
      time2bill: {
        challenge: 'Building a cross-platform application that works well on both web and mobile, while handling complex invoicing logic and international invoicing standards.',
        approach: 'I implemented a modular Flutter architecture with a clear separation between UI logic and business rules. For invoicing, I created an abstraction layer that supports standards like UBL and Peppol without affecting the core functionality.',
        lessons: 'This project strengthened my understanding of domain-driven design and flexible architectures that can evolve with changing business needs. It helped me improve at building scalable, future-ready applications.',
      },
      purepeau: {
        challenge: 'Creating CMS functionality that is intuitive enough for a non-technical owner to manage content independently, while preserving the design and brand identity.',
        approach: 'I designed a custom React content editor that hides complex styling behind intuitive controls and drag-and-drop functionality, while templates protect the brand identity regardless of the content being added.',
        lessons: 'I learned the importance of empathetic design: understanding the needs and limitations of non-technical users. This improved my UX/UI approach and taught me how technology can be made more accessible.',
      },
      default: {
        challenge: 'Integrating multiple AI systems, such as speech recognition, emotion detection, and NLP, into a coherent real-time experience that is both performant and intuitive.',
        approach: 'I developed a microservice architecture where each AI system could function independently while synchronizing through a central state manager. To solve performance issues, I implemented client-side caching and intelligent API-call debouncing.',
        lessons: 'This complex project taught me the importance of asynchronous thinking and how to orchestrate different AI subsystems effectively. I deepened my understanding of real-time systems and frontend performance under heavier load.',
      },
    },
  },
};

const ProjectDetail = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const { i18n } = useTranslation();
  const language = i18n.language === 'en' ? 'en' : 'nl';
  const labels = detailContent[language];
  const challengeText = labels.challenges[project?.id] || labels.challenges.default;

  useEffect(() => {
    if (modalRef.current && contentRef.current) {
      gsap.set(modalRef.current, {
        opacity: 0
      });

      gsap.set(contentRef.current, {
        y: 30,
        opacity: 0
      });

      gsap.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(contentRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0.2,
        ease: 'power3.out'
      });
    }

    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleCloseAnimation = () => {
    gsap.to(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in'
    });

    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
      ease: 'power2.in',
      onComplete: onClose
    });
  };

  if (!project) return null;

  return (
    <div className="project-detail-overlay" ref={modalRef} onClick={handleCloseAnimation}>
      <div className="project-detail-content" ref={contentRef} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleCloseAnimation}>×</button>
        <div className="project-detail-header">
          <h2>{project.title}</h2>
          {project.developmentStatus && (
            <div className={`detail-development-status ${project.developmentStatus}`}>
              {labels.status[project.developmentStatus] || labels.status.completed}
              {project.developmentInfo && (project.developmentStatus === 'in-development' || project.developmentStatus === 'planning') && (
                <p className="development-info">{project.developmentInfo}</p>
              )}
            </div>
          )}
          <div className="project-detail-links">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="detail-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                {labels.viewProject}
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
              <h3>{labels.technologies}</h3>
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
              <h3>{labels.keyFeatures}</h3>
              <ul className="feature-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.impact && (
            <div className="project-impact">
              <h3>{labels.projectImpact}</h3>
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

          <div className="project-challenges">
            <h3>{labels.challengesTitle}</h3>
            <div className="challenge-container">
              <div className="challenge-item">
                <h4>{labels.challenge}</h4>
                <p>{challengeText.challenge}</p>
              </div>

              <div className="challenge-item">
                <h4>{labels.approach}</h4>
                <p>{challengeText.approach}</p>
              </div>

              <div className="challenge-item">
                <h4>{labels.lessons}</h4>
                <p>{challengeText.lessons}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
