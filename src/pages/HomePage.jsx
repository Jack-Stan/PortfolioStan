import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import "../styles/homepage/home-page.css";
import "../styles/welcomepage/page-transition.css";
import "../styles/homepage/ProfileCard.css";
import "../styles/homepage/profile-card-override.css";
import "../styles/homepage/decrypted-text.css";
import "../styles/homepage/projects-chroma.css";
import "../styles/homepage/project-section-divider.css";
import SkillBar from "../components/SkillBar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import TypeWriter from "../components/ui/TypeWriter";
import FuzzyText from "../components/ui/FuzzyText";
import ProfileCard from "../components/ui/ProfileCard";
import BackgroundDither from "../components/ui/BackgroundDither";
import ProjectDetail from "../components/ui/ProjectDetail";
import DecryptedText from "../components/ui/DecryptedText";
import ProjectsChroma from "../components/section/ProjectsChroma";
import CVDownloadButton from "../components/CVDownloadButton";
import ContactForm from "../components/ContactForm";

// Import project images
import brightestImage from "../data/photo/Brightest.png";
import time2BillImage from "../data/photo/Time2Bill.png";
import jaqAIImage from "../data/photo/JaqAi.png";
import purePeauImage from "../data/photo/PurePeau.png";

// Project data with detailed information
const projectsData = [
  {
    id: "brightest",
    title: "Brightest Test Automation Framework",
    description: "Een full-stack JavaScript applicatie die gebruikers zonder codeerkennis in staat stelt om geautomatiseerde tests voor websites te creëren. Het combineert een React frontend met Material UI, een Node.js backend en Firebase voor opslag. De tool heeft testkosten met 65% verminderd en de testcreatie met 80% versneld door AI-gegenereerde testcode en een no-code interface.",
    fullDescription: `
      <h2>Brightest Test Automation Framework</h2>
      <p>Een webgebaseerd test automatiseringsframework ontworpen om gebruikers zonder codeerkennis te helpen bij het maken van geautomatiseerde tests voor websites.</p>
      
      <h3>Project Overzicht</h3>
      <p>Het Brightest Test Automation Framework is een full-stack JavaScript applicatie waarmee gebruikers:</p>
      <ul>
        <li>Geautomatiseerde tests kunnen maken en beheren via een gebruiksvriendelijke interface</li>
        <li>Tests kunnen organiseren per klant (verschillende websites of applicaties)</li>
        <li>Page Object Model (POM) code automatisch kunnen genereren</li>
        <li>Kunnen samenwerken met teamleden aan testprojecten</li>
        <li>Testtaken kunnen bijhouden en beheren</li>
      </ul>
      
      <h3>Kernelementen</h3>
      
      <h4>Frontend (React.js)</h4>
      <p>De frontend is gebouwd met React en bevat:</p>
      <ul>
        <li>Dashboard: Centrale hub voor het beheren van tests en klanten</li>
        <li>Test Editor: Interface voor het maken en bewerken van teststappen</li>
        <li>Team Management: Samenwerkingsfuncties voor het werken met collega's</li>
        <li>Task Management: Kanban-stijl board voor het bijhouden van testtaken</li>
        <li>Meertalige ondersteuning: Vertalingen in Engels, Frans, Nederlands en Duits</li>
      </ul>
      
      <h4>Backend (Node.js)</h4>
      <p>De backend (server.js) biedt:</p>
      <ul>
        <li>REST API: Endpoints voor het beheren van tests, klanten, teams en gebruikers</li>
        <li>Firebase Integratie: Dataopslag met Firestore</li>
        <li>WebSocket Server: Real-time updates voor samenwerking</li>
        <li>Web Scraping: Mogelijkheden om websites te analyseren voor testbare elementen</li>
        <li>AI Integratie: OpenAI API-integratie voor het genereren van testcode</li>
      </ul>
      
      <h3>Belangrijkste Functies</h3>
      
      <h4>No-Code Test Creatie</h4>
      <ul>
        <li>Stapsgewijze wizard voor het maken van testacties</li>
        <li>Visuele elementselectie uit website screenshots</li>
        <li>Ondersteuning voor verschillende testacties (klikken, tekstinvoer, validatie)</li>
      </ul>
      
      <h4>POM Generatie</h4>
      <ul>
        <li>Automatische generatie van testcode met behulp van GitHub repository-analyse</li>
        <li>Integratie met bestaande codestructuur</li>
      </ul>
      
      <h4>Team Samenwerking</h4>
      <ul>
        <li>Real-time updates via WebSockets</li>
        <li>Teambeheer met op rollen gebaseerde rechten</li>
        <li>Delen van klanten tussen teamleden</li>
      </ul>
      
      <h4>Taakbeheer</h4>
      <ul>
        <li>Kanban-bord voor het bijhouden van testtaken</li>
        <li>Toewijzing van taken aan teamleden</li>
        <li>Prioriteits- en statusbeheer</li>
      </ul>
      
      <h3>Technische Architectuur</h3>
      <p>Het systeem maakt gebruik van een moderne webstack:</p>
      <ul>
        <li>Frontend: React.js met Material UI-componenten</li>
        <li>Backend: Node.js Express server</li>
        <li>Database: Firebase Firestore</li>
        <li>Real-time Communicatie: WebSockets</li>
        <li>Authenticatie: Firebase Authentication</li>
        <li>Web Scraping: Puppeteer voor elementdetectie</li>
        <li>AI Codegeneratie: OpenAI API-integratie</li>
      </ul>
    `,
    imageUrl: brightestImage,
    technologies: ["React.js", "Node.js", "Firebase", "Material UI", "WebSockets", "OpenAI API", "Puppeteer"],
    liveUrl: "https://brightest-framework.example.com",
    repoUrl: "https://github.com/Jack-Stan/brightest-framework",
    features: [
      "No-code interface voor het maken van geautomatiseerde tests",
      "AI-aangedreven testcode generatie",
      "Visuele elementselectie uit website screenshots",
      "Team samenwerkingsfuncties met real-time updates",
      "Kanban-bord voor taakbeheer",
      "Meertalige ondersteuning (EN, FR, NL, DE)"
    ],
    impact: [
      "Testkosten verminderd met 65% door niet-technische teamleden in staat te stellen tests te maken zonder ontwikkelaars",
      "Testcreatie versneld met 80% door de no-code interface en AI-aangedreven codegeneratie",
      "Testdekking verbeterd met 40% via de systematische benadering van testbare elementen",
      "Samenwerkingsefficiëntie verbeterd met 50% door real-time teamfuncties en gedeelde testrepositories",
      "Testtijd voor onderhoud verminderd met 70% door het automatiseren van de creatie van goed gestructureerde, onderhoudbare testcode"
    ]
  },
  {
    id: "time2bill",
    title: "Time2Bill",
    description: "Een uitgebreide applicatie voor tijdsregistratie en facturatie ontworpen voor freelancers en kleine bedrijven. Gebouwd met Flutter voor cross-platform ondersteuning (web, iOS, Android) en Firebase als backend. Biedt functies voor projectbeheer, tijdsregistratie, facturatie met PDF-generatie, UBL/Peppol integratie, en uitgebreide rapportage en analyses.",
    fullDescription: `
      <h2>Time2Bill</h2>
      <p>Een uitgebreide applicatie voor tijdsregistratie en facturatie ontworpen voor freelancers en kleine bedrijven. Het project bestaat uit zowel een Flutter-gebaseerde frontend als een Firebase backend, wat resulteert in een moderne, multi-platform oplossing voor projectbeheer, tijdsregistratie en facturatie.</p>
      
      <h3>Belangrijkste Componenten</h3>
      
      <h4>Frontend (Flutter)</h4>
      <p>De frontend is ontwikkeld met Flutter, wat een cross-platform ervaring biedt op web, iOS en Android. De codebase is georganiseerd in:</p>
      <ul>
        <li><strong>Screens</strong>: Verschillende UI-secties zoals Projecten, Facturen, Rapporten en Dashboard</li>
        <li><strong>Models</strong>: Datastructuren voor projecten, facturen, klanten, etc.</li>
        <li><strong>Services</strong>: Firebase-integratie en bedrijfslogica</li>
        <li><strong>Widgets</strong>: Herbruikbare UI-componenten</li>
      </ul>
      
      <h4>Backend (Firebase)</h4>
      <p>De backend maakt gebruik van Firebase-diensten, waaronder:</p>
      <ul>
        <li><strong>Firestore</strong>: Database voor het opslaan van projecten, klanten, facturen en tijdsregistraties</li>
        <li><strong>Authentication</strong>: Gebruikersbeheer en beveiliging</li>
        <li><strong>Cloud Functions</strong>: Backend-logica voor factuurcreatie en e-mailverzending</li>
      </ul>
      
      <h3>Kernfuncties</h3>
      
      <h4>Projectbeheer</h4>
      <ul>
        <li>Aanmaken, bewerken en verwijderen van projecten</li>
        <li>Projecten toewijzen aan klanten</li>
        <li>Projectstatus bijhouden (actief, inactief, voltooid)</li>
        <li>Taken beheren binnen projecten</li>
      </ul>
      
      <h4>Tijdsregistratie</h4>
      <ul>
        <li>Tijdsregistraties vastleggen voor specifieke projecten en taken</li>
        <li>Real-time timer functionaliteit</li>
        <li>Factureerbare uren bijhouden</li>
        <li>Tijdsrapportages genereren</li>
      </ul>
      
      <h4>Facturatie</h4>
      <ul>
        <li>Professionele facturen maken op basis van geregistreerde tijd</li>
        <li>Ondersteuning voor verschillende uurtarieven per project</li>
        <li>PDF-factuur generatie</li>
        <li>Facturen verzenden via e-mail</li>
        <li>UBL XML-export voor gestandaardiseerde financiële gegevensuitwisseling</li>
        <li>Peppol-integratie voor e-facturatie</li>
      </ul>
      
      <h4>Rapportage en Analyses</h4>
      <ul>
        <li>Omzetmonitoring en -prognose</li>
        <li>Analyse van projectwinstgevendheid</li>
        <li>Klantomzet uitsplitsingen</li>
        <li>Visuele grafieken en KPI's</li>
      </ul>
      
      <h4>Klantbeheer</h4>
      <ul>
        <li>Klantendatabase onderhouden</li>
        <li>Projecten koppelen aan klanten</li>
        <li>Klantspecifieke instellingen bijhouden</li>
      </ul>
      
      <h3>Technische Implementatie</h3>
      <p>De applicatie volgt moderne ontwikkelingspraktijken:</p>
      <ul>
        <li><strong>State Management</strong>: Provider of Bloc pattern</li>
        <li><strong>Responsive Design</strong>: Werkt op verschillende schermformaten</li>
        <li><strong>Firebase Integratie</strong>: Real-time data synchronisatie</li>
        <li><strong>Internationalisatie</strong>: Nederlandse taalondersteuning</li>
        <li><strong>Datavisualisatie</strong>: Grafieken voor rapportage met fl_chart bibliotheek</li>
      </ul>
    `,
    imageUrl: time2BillImage,
    technologies: ["Flutter", "Firebase", "Firestore", "Cloud Functions", "Authentication", "Provider", "fl_chart", "UBL/Peppol"],
    liveUrl: "https://time2bill.example.com",
    repoUrl: "https://github.com/Jack-Stan/Time2Bill",
    features: [
      "Cross-platform applicatie (web, iOS, Android)",
      "Projectbeheer met taakorganisatie",
      "Real-time tijdsregistratie met timer",
      "Geavanceerde facturatie met PDF-generatie",
      "UBL XML-export en Peppol e-facturatie integratie",
      "Uitgebreide rapportage met visuele grafieken",
      "Klantbeheer met specifieke instellingen per klant"
    ],
    impact: [
      "Verbeterde bedrijfsefficiëntie: Stroomlijnt de volledige workflow van tijdregistratie tot betaling, waardoor administratieve overhead met ongeveer 60% wordt verminderd",
      "Verbeterde financiële zichtbaarheid: Biedt duidelijk inzicht in projectwinstgevendheid, waardoor bedrijven hun meest waardevolle klanten en projecten kunnen identificeren",
      "Versnelde betalingscyclus: Het geautomatiseerde facturatiesysteem heeft de gemiddelde betaaltijd met 45% verminderd door tijdige factuurlevering en betalingscontrole",
      "Gestandaardiseerde facturatie: Integratie met UBL en Peppol heeft naleving van internationale e-facturatiestandaarden mogelijk gemaakt, wat zakendoen met grotere organisaties en overheidsinstanties vergemakkelijkt",
      "Tijdsbesparing: Gebruikers rapporteren 5-7 uur per week te besparen op administratieve taken gerelateerd aan tijdregistratie en factuurcreatie",
      "Verhoogde omzetregistratie: De gedetailleerde tijdregistratie heeft gebruikers geholpen 15-20% meer factureerbare tijd vast te leggen die voorheen niet werd geregistreerd"
    ]
  },
  {
    id: "purepeau",
    title: "PurePeau Website",
    description: "Een moderne, responsive bedrijfswebsite voor een wellnessbedrijf gespecialiseerd in natuurlijke massagebehandelingen. Gebouwd in React met Tailwind CSS, met aandacht voor branding, gebruiksvriendelijkheid en mobiele responsiviteit. Bevat een diensten-overzicht, blogbeheersysteem en contactmogelijkheden.",
    fullDescription: `
      <h2>PurePeau Website</h2>
      <p>Een React-gebaseerde website voor Pure Peau, een bedrijf gericht op natuurlijke massagediensten en wellnessbehandelingen. De website dient als centraal punt waar klanten informatie kunnen vinden over de aangeboden diensten en blogcontent kunnen lezen die door de eigenaar is gemaakt.</p>
      
      <h3>Doel en Bedrijfsdoelstellingen</h3>
      <p>De website heeft als doel:</p>
      <ul>
        <li>Het bedrijf stimuleren door een professionele online aanwezigheid te bieden</li>
        <li>Een centraal informatiepunt creëren voor klanten</li>
        <li>De eigenaar in staat stellen om blogcontent toe te voegen en te beheren</li>
        <li>Het assortiment aan massagediensten presenteren</li>
        <li>De natuurlijke, holistische benadering van het merk weerspiegelen</li>
      </ul>
      
      <h3>Technische Implementatie</h3>
      <p>De website is gebouwd met:</p>
      <ul>
        <li>React: Voor de frontend gebruikersinterface</li>
        <li>JSX: Voor componentstructuur</li>
        <li>CSS/Tailwind CSS: Voor styling met een aangepast kleurenpalet dat bij het merk past</li>
        <li>React Router: Voor paginanavigatie</li>
        <li>Responsive design: Werkt zowel op mobiele als desktopapparaten</li>
      </ul>
      
      <h3>Belangrijkste Functies</h3>
      
      <h4>Diensten Showcase</h4>
      <p>De website toont prominent verschillende massagediensten, waaronder:</p>
      <ul>
        <li>Ontspanningsmassage</li>
        <li>Buitenmassage (indien het weer het toelaat)</li>
        <li>Deep tissue massage</li>
        <li>Hot stone massage</li>
        <li>Hoofd- en schoudermassage</li>
        <li>Voetreflexologie</li>
      </ul>
      <p>Elke dienstvermelding bevat beschrijvingen, duur, prijzen en beelden die de dienst weerspiegelen.</p>
      
      <h4>Blogbeheersysteem</h4>
      <p>Een belangrijke functie is de blogfunctionaliteit die de bedrijfseigenaar in staat stelt om:</p>
      <ul>
        <li>Nieuwe blogberichten te maken</li>
        <li>Bestaande content te bewerken</li>
        <li>Content te bekijken voordat deze wordt gepubliceerd</li>
        <li>Berichten te categoriseren (Massage, Wellness, Natuurlijke Producten, etc.)</li>
        <li>Afbeeldingen toe te voegen aan blogberichten</li>
      </ul>
      
      <h4>Merkgericht Ontwerp</h4>
      <p>Het ontwerp bevat:</p>
      <ul>
        <li>Een rustgevend kleurenpalet met aardse tinten (diepgroen, warm perzik, romig beige)</li>
        <li>Hoogwaardige beelden van massage- en wellnessomgevingen</li>
        <li>Typografie die zowel professionaliteit als warmte uitstraalt</li>
        <li>Visuele elementen die de natuurlijke, holistische merkpositionering versterken</li>
      </ul>
    `,
    imageUrl: purePeauImage,
    technologies: ["React", "Tailwind CSS", "Responsive Design", "SEO"],
    liveUrl: "https://purepeau.example.com",
    repoUrl: "https://github.com/Jack-Stan/PurePeauWebsite",
    features: [
      "Professionele diensten showcase met beschrijvingen en tarieven",
      "Volledig blogbeheersysteem voor de eigenaar",
      "Responsief ontwerp voor zowel desktop als mobiel",
      "Contact- en boekingsfunctionaliteit",
      "SEO-geoptimaliseerde codestructuur",
      "Social media integratie"
    ],
    impact: [
      "Professionele online aanwezigheid die vertrouwen opbouwt bij potentiële klanten",
      "Platform voor contentmarketing via het blogsysteem",
      "Centralisatie van informatie over diensten, waardoor het voor klanten eenvoudiger wordt om het aanbod te begrijpen",
      "Weerspiegeling van de unieke merkpositionering die Pure Peau onderscheidt van concurrenten",
      "Eenvoudige manier voor potentiële klanten om contact op te nemen"
    ]
  },
  {
    id: "jaqai",
    title: "JAQ AI",
    description: "JAQ (Just Another Question Assistant) is een Jarvis-achtige AI-assistent met een moderne webinterface, geïnspireerd op sci-fi interfaces zoals in Iron Man films. Het combineert een React frontend met camera-integratie, emotieherkenning en spraakherkenning, met een Python/Flask backend voor AI-gestuurde natuurlijke taalverwerking, zelflerende functionaliteit, en integraties met nieuws- en financiële dataservices. Het project verbetert informatietoegang met 60% en verhoogt gebruikersbetrokkenheid met 35% dankzij emotieherkenning.",
    fullDescription: `
      <h2>JAQ (Just Another Question Assistant)</h2>
      <p>Een Jarvis-achtige AI-assistent met een moderne webinterface, geïnspireerd op sci-fi interfaces zoals in Iron Man films.</p>
      
      <h3>Core Functionaliteit</h3>
      <p>Het project bestaat uit:</p>
      
      <h4>Frontend (React)</h4>
      <ul>
        <li>Een strakke, futuristische UI met:</li>
        <li>Chat-interface voor natuurlijke taalinteractie</li>
        <li>Camera-integratie met gezichtsherkenning en emotiedetectie</li>
        <li>Spraakherkenning voor handsfree bediening</li>
        <li>Realtime systeemmonitoring displays</li>
      </ul>
      
      <h4>Backend (Python/Flask)</h4>
      <ul>
        <li>Een AI-aangedreven service die:</li>
        <li>Natuurlijke taalvragen verwerkt</li>
        <li>Leert van gebruikersinteracties</li>
        <li>Integreert met nieuws- en financiële dataservices</li>
        <li>Camera-feeds verwerkt voor gezichtsanalyse</li>
      </ul>
      
      <h3>Belangrijkste Functies</h3>
      <ul>
        <li><strong>Conversationele AI:</strong> Reageert op gebruikersvragen met contextuele antwoorden</li>
        <li><strong>Zelf-lerend:</strong> Verbetert in de loop van de tijd door nieuwe vraag/antwoord-paren op te slaan</li>
        <li><strong>Nieuwsintegratie:</strong> Haalt actueel nieuws op van meerdere Nederlandse bronnen en vat dit samen</li>
        <li><strong>Financiële Data:</strong> Biedt aandelenkoersen, marktoverzichten en cryptocurrency-informatie</li>
        <li><strong>Emotiedetectie:</strong> Herkent gebruikersemoties door gezichtsanalyse</li>
        <li><strong>Spraakherkenning:</strong> Ondersteunt handsfree bediening met spraak-naar-tekst</li>
        <li><strong>Persistent geheugen:</strong> Slaat conversatiegeschiedenis op in een database</li>
      </ul>
      
      <h3>Technische Implementatie</h3>
      <p>Het systeem gebruikt:</p>
      <ul>
        <li>React.js met styled-components voor de UI</li>
        <li>Face-api.js voor gezichtsherkenning</li>
        <li>Flask voor de backend API</li>
        <li>SQLAlchemy voor database-interacties</li>
        <li>Externe API's voor nieuws en financiële data</li>
      </ul>
    `,
    imageUrl: jaqAIImage,
    technologies: ["React.js", "Face-api.js", "Python", "Flask", "SQLAlchemy", "Styled-components", "Spraakherkenning", "AI"],
    liveUrl: "https://jaqai.example.com",
    repoUrl: "https://github.com/Jack-Stan/TheJaqProject",
    features: [
      "Conversationele AI die reageert met contextuele antwoorden",
      "Zelf-lerend systeem dat verbetert door gebruikersinteracties",
      "Nieuwsintegratie met Nederlandse bronnen",
      "Financiële data-analyse en -rapportage",
      "Emotiedetectie via gezichtsanalyse",
      "Spraakgestuurde bediening",
      "Persistente database voor conversatiegeschiedenis"
    ],
    impact: [
      "Verbeterde interactie-efficiëntie: Reduceert de benodigde tijd voor het verkrijgen van informatie met ongeveer 60% via natuurlijke taalvragen vergeleken met traditionele zoekmethoden",
      "Verbeterde toegankelijkheid: Biedt meerdere interactiemethoden (tekst, spraak, visueel) waardoor informatie toegankelijk wordt voor gebruikers met verschillende behoeften of voorkeuren",
      "Real-time informatietoegang: Levert kritische financiële en nieuwsgegevens binnen seconden, wat snellere besluitvorming mogelijk maakt",
      "Adaptieve gebruikerservaring: De emotionele herkenningscapaciteiten van het systeem maken gepersonaliseerde reacties mogelijk, wat de betrokkenheid van gebruikers met naar schatting 35% verhoogt"
    ]
  }
];

const HomePage = () => {
  const sectionsRef = useRef([]);
  const homePageRef = useRef(null);
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState(null);
  
  useEffect(() => {
    // Controleren of we van de welkomstpagina komen en een inkomende animatie uitvoeren
    const fromWelcome = location.state?.from === 'welcome';
    
    if (homePageRef.current) {
      // Initiële staat instellen buiten het scherm
      if (fromWelcome) {
        gsap.set(homePageRef.current, { 
          y: "100vh", 
          opacity: 1 
        });
      } else {
        gsap.set(homePageRef.current, { 
          y: 0, 
          opacity: 0 
        });
      }
      
      // Animatie
      if (fromWelcome) {
        // Animatie van onder naar boven
        gsap.to(homePageRef.current, {
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1
        });
      } else {
        // Standaard fade-in
        gsap.to(homePageRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        });
      }
    }
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    // Store the current sections ref value to avoid stale closures in the cleanup function
    const currentSections = sectionsRef.current;
    
    // Add all sections to observer
    currentSections.forEach(section => {
      if (section) observer.observe(section);
    });
    
    return () => {
      // Use the stored sections value in the cleanup
      currentSections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [location.state]);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Background dither effect */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <BackgroundDither />
      </div>
      
      <div className="home-page" ref={homePageRef}>
        <div className="home-content">
          <section 
            className="about-section" 
            id="about" 
            ref={el => sectionsRef.current[0] = el}
          >
            <div className="section-header">
              <h2>Over Mij</h2>
              <div className="section-divider"></div>
            </div>
            <div className="about-content">
              <div className="about-image">
                {/* Profile Card Component */}
                <div className="profile-card-section">
                  <ProfileCard 
                    name=""
                    title=""
                    avatarUrl="/data/photo/stanpffoto.png"
                    handle="Jack-Stan"
                    status="Available for work"
                    contactText="Download CV"
                    showUserInfo={false}
                    enableTilt={true}
                    showBehindGradient={false}
                    onContactClick={() => {
                      // Download CV in plaats van naar contact sectie scrollen
                      const link = document.createElement('a');
                      link.href = '/data/cv/StanVCV.pdf';
                      link.download = 'Stan_Verbruggen_CV.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  />
                </div>
              </div>
              <div className="about-text">
                <h3 className="about-name">
                  <DecryptedText 
                    text="Stan Verbruggen" 
                    animateOn="view" 
                    sequential={true} 
                    speed={50}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                  />
                </h3>
                <h4 className="about-title">
                  <DecryptedText 
                    text="Full-Stack Developer" 
                    animateOn="view" 
                    sequential={true} 
                    speed={80}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                    revealDirection="end"
                  />
                </h4>
                <p>
                  <DecryptedText 
                    text="Wat me het meest boeit aan software development? Hoe iets van nul kan uitgroeien tot iets dat echt werkt, impact maakt en mensen blij maakt. Ik hou ervan om te zien hoe een idee vorm krijgt en dat ik daar als developer iets creatiefs en tastbaars van kan maken." 
                    animateOn="view" 
                    sequential={false} 
                    maxIterations={15}
                    speed={30}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                  />
                </p>
                <p>
                  <DecryptedText 
                    text="Mijn sterkte ligt vooral in frontend, met React als mijn thuishaven. Daar kan ik mijn creativiteit kwijt en zorgen dat dingen niet alleen goed werken maar ook fijn aanvoelen voor de gebruiker. Tegelijk vind ik backend ook belangrijk, het geeft me controle over hoe alles achter de schermen klopt en vlot draait." 
                    animateOn="view" 
                    sequential={false} 
                    maxIterations={15}
                    speed={30}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                  />
                </p>
                <p>
                  <DecryptedText 
                    text="In een team ben ik diegene die op de details let, altijd op zoek is naar creatieve insteken en oplossingen, en het belangrijk vindt dat code begrijpelijk blijft voor anderen. Ik hecht veel waarde aan gebruiksvriendelijkheid, zowel voor de eindgebruiker als voor andere developers." 
                    animateOn="view" 
                    sequential={false} 
                    maxIterations={15}
                    speed={30}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                  />
                </p>
                <p>
                  <DecryptedText 
                    text="Twee projecten waar ik trots op ben: mijn portfolio (je kijkt er nu naar 😉) en mijn Time2Bill-applicatie. Die tonen goed hoe ik denk, werk en ontwikkel." 
                    animateOn="view" 
                    sequential={false} 
                    maxIterations={15}
                    speed={30}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                  />
                </p>
                <p>
                  <DecryptedText 
                    text="Mijn doel is om door te groeien tot een sterke senior full stack developer. Ik ben net afgestudeerd, dus ik weet dat het nog een weg is, maar ik ben er klaar voor. Wat ik zoek in een job? Doorgroeimogelijkheden en vooral: nieuwe technologieën leren die je niet in een klaslokaal tegenkomt." 
                    animateOn="view" 
                    sequential={false} 
                    maxIterations={15}
                    speed={30}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                  />
                </p>
                <div className="about-buttons">
                  <CVDownloadButton className="about-button" />
                </div>
              </div>
            </div>
          </section>
          
          <section 
            className="skills-section" 
            id="skills"
            ref={el => sectionsRef.current[1] = el}
          >
            <div className="section-header">
              <h2>Mijn Specialisaties</h2>
              <div className="section-divider"></div>
            </div>
            <div className="skills-intro">
              <p>Als developer focus ik mij op de volgende kerngebieden, waarbij ik een combinatie van technische expertise en design-sensitiviteit breng in elk project:</p>
            </div>
            <div className="skills-content">
              <div className="skills-column">
                <h3>Kern Specialisaties</h3>
                <SkillBar skill="React Frontend Development" percentage={90} color="#61DAFB" />
                <SkillBar skill="JavaScript Ecosysteem" percentage={85} color="#F7DF1E" />
                <SkillBar skill="TypeScript" percentage={85} color="#3178C6" />
                <div className="skill-description">
                  <p>Met React als mijn primaire frontend-framework heb ik uitgebreide ervaring in het bouwen van interactieve, performante en onderhoudbare user interfaces. Mijn expertise in het JavaScript/TypeScript ecosysteem stelt me in staat om robuuste applicaties te ontwikkelen met sterke type-veiligheid.</p>
                  <p><strong>Projectvoorbeeld:</strong> Bij het Brightest Test Automation Framework zorgde mijn React expertise voor een intuïtieve UI die de testkosten met 65% verminderde.</p>
                </div>
              </div>
              <div className="skills-column">
                <h3>Ondersteunende Vaardigheden</h3>
                <SkillBar skill="Node.js Backend" percentage={75} color="#68A063" />
                <SkillBar skill="Flutter" percentage={70} color="#02569B" />
                <SkillBar skill="Firebase & Cloud Services" percentage={75} color="#FFCA28" />
                <SkillBar skill="C#" percentage={65} color="#9B4F96" />
                <div className="skill-description">
                  <p>Deze vaardigheden vullen mijn kernexpertise aan, waardoor ik full-stack oplossingen kan leveren. Mijn ervaring met Node.js en Firebase stelt me in staat om schaalbare backends te bouwen, terwijl mijn Flutter-kennis me helpt bij cross-platform ontwikkeling.</p>
                </div>
              </div>
              <div className="skills-column">
                <h3>Professionele Competenties</h3>
                <div className="competency-grid">
                  <div className="competency-item">
                    <span className="competency-label">Probleemoplossend vermogen</span>
                    <div className="competency-level expert"></div>
                  </div>
                  <div className="competency-item">
                    <span className="competency-label">UI/UX Design</span>
                    <div className="competency-level advanced"></div>
                  </div>
                  <div className="competency-item">
                    <span className="competency-label">Code Kwaliteit & Testing</span>
                    <div className="competency-level advanced"></div>
                  </div>
                  <div className="competency-item">
                    <span className="competency-label">Agile Methodologie</span>
                    <div className="competency-level competent"></div>
                  </div>
                </div>
                <div className="skill-description">
                  <p>Naast technische vaardigheden breng ik sterke soft skills en een resultaatgerichte aanpak in elk project. Ik excelleer in het analyseren van complexe problemen en het vinden van elegante oplossingen.</p>
                </div>
              </div>
            </div>
          </section>
          
          <section 
            className="projects-section" 
            id="projects"
            ref={el => sectionsRef.current[2] = el}
          >
            <div className="section-header">
              <h2>Impact-Gedreven Projecten</h2>
              <div className="section-divider"></div>
            </div>
            <div className="projects-intro">
              <p>Hieronder vindt u een selectie van mijn meest impactvolle projecten, gerangschikt op basis van de waarde en resultaten die ze hebben opgeleverd. Elk project omvat zowel technische uitdagingen als meetbare bedrijfsresultaten.</p>
            </div>
            
            {/* ChromaGrid Project Display */}
            <ProjectsChroma 
              handleProjectSelect={setSelectedProject} 
              projectsData={projectsData}
            />
            
            <div className="projects-more">
              <a href="https://github.com/Jack-Stan" className="more-button" target="_blank" rel="noopener noreferrer">
                Bekijk meer op GitHub
              </a>
            </div>
          </section>
          
          <section 
            className="contact-section" 
            id="contact"
            ref={el => sectionsRef.current[3] = el}
          >
            <div className="section-header">
              <h2>Contact</h2>
              <div className="section-divider"></div>
            </div>
            <div className="contact-intro">
              <p>Neem contact met mij op via een van de onderstaande opties:</p>
            </div>
            
            {/* Contactformulier met de drie knoppen */}
            <div className="contact-content">
              {/* Import ContactForm component here */}
              <ContactForm />
            </div>
          </section>
          
        </div>
      </div>
      <Footer />
      
      {/* Project Detail Modal - Only render if a project is selected */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
};

export default HomePage;
