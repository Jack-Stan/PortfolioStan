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
      'enterprise-ops-platform': {
        challenge: 'Operationele processen en controles liepen verspreid over meerdere tools en handmatige stappen, wat het overzicht en de traceerbaarheid bemoeilijkte.',
        approach: 'Ik werkte mee aan een .NET-backend met een Vue/TypeScript-frontend, opgebouwd uit afzonderlijke modules per bedrijfsdomein. Voor betrouwbare communicatie tussen modules gebruikte ik event-gedreven integratie via Azure Event Grid en resilience-/retrybeleid via Polly bij externe aanroepen.',
        lessons: 'Dit project leerde me hoe belangrijk een duidelijke modulaire opdeling is wanneer veel verschillende operationele domeinen samenkomen in dezelfde applicatie. Ik verdiepte mijn kennis van resiliente architecturen en gestructureerde logging om problemen sneller te herleiden.',
      },
      'data-analytics-tool': {
        challenge: 'De tool moest complexe, sterk genormaliseerde data omzetten naar overzichtelijke informatie voor gebruikers, terwijl de onderliggende structuur regelmatig moest evolueren zonder bestaande rapportages te breken.',
        approach: 'Ik bouwde de tool als eigen domeinmodule binnen een breder platform, met een .NET-laag voor de datalogica en een Vue-frontend voor visualisatie. Ik besteedde extra aandacht aan database-architectuur en migraties zodat schema-aanpassingen gecontroleerd konden verlopen.',
        lessons: 'Ik leerde hoe belangrijk vroege schemavalidatie en duidelijke rollen/rechten zijn in een tool die door meerdere teams gebruikt wordt. Dit scherpte mijn aanpak rond data-architectuur en het beheren van wijzigingen in een levende databron.',
      },
      'inventory-visibility-dashboard': {
        challenge: 'Voorraadgegevens kwamen uit meerdere bronnen en moesten betrouwbaar en met lage latency raadpleegbaar zijn voor operationele gebruikers, ook bij pieken in datavolume.',
        approach: 'Ik ontwikkelde een .NET 8 Web API met een aparte data- en migratielaag, en zette gestructureerde logging op met Serilog om sneller inzicht te krijgen in fouten. De testlaag combineerde unit-, integratie- en performancetests om regressies vroeg op te sporen.',
        lessons: 'Dit project versterkte mijn focus op datakwaliteit en observability: zonder goede logging en tests is het moeilijk om vertrouwen te houden in voorraadcijfers. Ik leerde hoe testlagen met verschillende doelen elkaar aanvullen.',
      },
      'approval-workflow-engine': {
        challenge: 'Goedkeuringsprocessen liepen via e-mail en handmatige opvolging, wat traceerbaarheid en consistentie lastig maakte, vooral bij meerdere goedkeurders of uitzonderingen.',
        approach: 'Ik digitaliseerde de flow met Power Automate en SharePoint als basis, met duidelijke stappen voor aanvraag, beoordeling en beslissing. Ik bouwde notificaties en statusopvolging in zodat betrokkenen automatisch op de hoogte blijven zonder manuele check-ins.',
        lessons: 'Ik leerde hoe je met low-code automatisering processen kan digitaliseren zonder een volledige applicatie te bouwen, en waar de grenzen van die aanpak liggen. Dit scherpte mijn inzicht in wanneer Power Automate volstaat en wanneer een eigen applicatie nodig is.',
      },
      'ai-document-to-quote': {
        challenge: 'Documenten werden manueel opgevolgd nadat ze in een Teams-kanaal terechtkwamen, wat veel herhaaldelijk leeswerk en kans op gemiste of verkeerd geïnterpreteerde details met zich meebracht.',
        approach: 'Ik bouwde een n8n-workflow die automatisch reageert wanneer een document in Teams wordt gedeeld, het document doorstuurt naar de Claude API voor analyse, en de geëxtraheerde informatie gestructureerd teruggeeft als basis voor de offerte.',
        lessons: 'Dit project leerde me hoe je AI-documentanalyse betrouwbaar inbedt in een bestaande workflow-tool zoals n8n, en hoe belangrijk goede prompting en output-structurering zijn als de AI rechtstreeks input levert voor een zakelijk proces.',
      },
      'enterprise-pricing-engine': {
        challenge: 'Kortingsregels konden sterk in elkaar grijpen met voorwaarden die van elkaar afhingen, waardoor het voor gebruikers moeilijk was te begrijpen welke regel uiteindelijk toegepast werd.',
        approach: 'Ik bouwde de engine als module binnen een bestaand platform, met een Vue-component die de kortingslogica als boomstructuur toont en een .NET/SQL-laag die afhankelijkheden tussen voorwaarden valideert. Zo bleven nieuwe of aangepaste takken consistent met de rest van de structuur.',
        lessons: 'Ik leerde hoe visuele structuren zoals een boom complexe logica veel toegankelijker maken dan platte regelformulieren, en hoe je een nieuwe module netjes inpast in een bestaand platform zonder de rest van de applicatie te verstoren.',
      },
      'cicd-test-pipeline': {
        challenge: 'Meerdere applicaties moesten betrouwbaarder releasen, maar het ontbrak aan geautomatiseerde controles die regressies, kwetsbaarheden of secrets vroeg in het proces opvangen.',
        approach: 'Ik zette aparte Azure DevOps-pipelines op voor build, unit-/smoketests en periodieke validatie, met een mix van self-hosted agents voor backend-tests en Microsoft-hosted agents voor dependency- en secret-scanning. Playwright-e2e-tests vulden de testlaag aan om kritieke gebruikersflows te bewaken.',
        lessons: 'Dit project leerde me hoe je teststrategie en pipeline-architectuur op elkaar afstemt: niet elke test moet op dezelfde agent of in dezelfde stage draaien. Ik verdiepte mijn kennis van CI/CD-pipelineontwerp, inclusief scheduling, security scanning en het bewaken van pipelineduur.',
      },
      'ai-data-agent': {
        challenge: 'Ruwe bronsystemen leverden data in een structuur die niet direct geschikt was voor analyse, waardoor gebruikers veel handmatig werk nodig hadden om tot bruikbare inzichten te komen.',
        approach: 'Ik verkende een medallion-architectuur (landing zone, verrijkte laag, analysegerede laag) binnen een enterprise dataplatform en onderzocht hoe een AI-agent op die gestructureerde lagen kan bevragen en samenvatten. Validatieregels per laag hielpen om datakwaliteit te bewaken voordat data de analyselaag bereikte.',
        lessons: 'Dit project leerde me hoe belangrijk een degelijke datafundering is vóór je een AI-agent erop loslaat: zonder gestructureerde, gevalideerde lagen geeft een agent net zo makkelijk verkeerde als juiste inzichten. Ik verdiepte mijn begrip van medallion-architecturen en het ontwerpen van AI-interacties rond data.',
      },
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
      'enterprise-ops-platform': {
        challenge: 'Operational processes and controls ran across separate tools and manual steps, which made overview and traceability difficult.',
        approach: 'I worked on a .NET backend paired with a Vue/TypeScript frontend, structured into separate modules per business domain. For reliable communication between modules I used Azure Event Grid for event-driven integration and Polly for resilience and retry policies on external calls.',
        lessons: 'This project taught me how important a clear modular split is when many different operational domains come together in the same application. I deepened my knowledge of resilient architectures and structured logging to trace issues faster.',
      },
      'data-analytics-tool': {
        challenge: 'The tool needed to turn complex, highly normalized data into clear information for users, while the underlying structure had to keep evolving without breaking existing reports.',
        approach: 'I built the tool as its own domain module within a broader platform, with a .NET layer for data logic and a Vue frontend for visualization. I paid extra attention to database architecture and migrations so schema changes could roll out in a controlled way.',
        lessons: 'I learned how important early schema validation and clear roles/permissions are in a tool used by multiple teams. This sharpened my approach to data architecture and managing change in a live data source.',
      },
      'inventory-visibility-dashboard': {
        challenge: 'Inventory data came from multiple sources and had to be reliably accessible with low latency for operational users, even during spikes in data volume.',
        approach: 'I built a .NET 8 Web API with a separate data and migration layer, and set up structured logging with Serilog to get faster insight into failures. The test layer combined unit, integration, and performance tests to catch regressions early.',
        lessons: 'This project strengthened my focus on data quality and observability: without good logging and tests, it is hard to keep trust in inventory figures. I learned how test layers with different goals complement each other.',
      },
      'approval-workflow-engine': {
        challenge: 'Approval processes ran through email and manual follow-up, which made traceability and consistency difficult, especially with multiple approvers or exceptions.',
        approach: 'I digitized the flow using Power Automate and SharePoint as the foundation, with clear steps for request, review, and decision. I built in notifications and status tracking so stakeholders stay informed automatically without manual check-ins.',
        lessons: 'I learned how low-code automation can digitize processes without building a full application, and where the limits of that approach lie. This sharpened my judgment on when Power Automate is enough and when a dedicated application is needed.',
      },
      'ai-document-to-quote': {
        challenge: 'Documents were followed up manually after landing in a Teams channel, which meant repetitive reading work and a real risk of missing or misreading important details.',
        approach: 'I built an n8n workflow that automatically triggers when a document is shared in Teams, sends it to the Claude API for analysis, and returns the extracted information in a structured format ready to use for the quote.',
        lessons: 'This project taught me how to reliably embed AI document analysis into an existing workflow tool like n8n, and how important careful prompting and output structuring are when the AI directly feeds into a business process.',
      },
      'enterprise-pricing-engine': {
        challenge: 'Discount rules could be tightly interdependent, with conditions relying on each other, making it hard for users to understand which rule would ultimately apply.',
        approach: 'I built the engine as a module inside an existing platform, with a Vue component that visualizes the discount logic as a tree and a .NET/SQL layer that validates dependencies between conditions, so new or modified branches stayed consistent with the rest of the structure.',
        lessons: 'I learned how visual structures like a tree make complex logic far more accessible than flat rule forms, and how to fit a new module cleanly into an existing platform without disrupting the rest of the application.',
      },
      'cicd-test-pipeline': {
        challenge: 'Multiple applications needed more reliable releases, but lacked automated checks that would catch regressions, vulnerabilities, or leaked secrets early in the process.',
        approach: 'I set up separate Azure DevOps pipelines for builds, unit/smoke tests, and periodic validation, using a mix of self-hosted agents for backend tests and Microsoft-hosted agents for dependency and secret scanning. Playwright e2e tests complemented the test layer to guard critical user flows.',
        lessons: 'This project taught me how to align test strategy with pipeline architecture: not every test needs to run on the same agent or in the same stage. I deepened my knowledge of CI/CD pipeline design, including scheduling, security scanning, and keeping pipeline duration in check.',
      },
      'ai-data-agent': {
        challenge: 'Raw source systems delivered data in a structure that was not directly suited for analysis, requiring users to do a lot of manual work to reach usable insights.',
        approach: 'I explored a medallion architecture (landing zone, enriched layer, analysis-ready layer) within an enterprise data platform and looked at how an AI agent could query and summarize across those structured layers. Per-layer validation rules helped safeguard data quality before data reached the analysis layer.',
        lessons: 'This project taught me how important a solid data foundation is before pointing an AI agent at it: without structured, validated layers, an agent can surface wrong insights just as easily as right ones. I deepened my understanding of medallion architectures and designing AI interactions around data.',
      },
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
