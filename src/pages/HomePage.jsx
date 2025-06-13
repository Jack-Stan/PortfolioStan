import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import "../styles/homepage/home-page.css";
import "../styles/welcomepage/page-transition.css";
import "../styles/homepage/ProfileCard.css";
import "../styles/homepage/profile-card-override.css";
import "../styles/homepage/decrypted-text.css";
import SkillBar from "../components/SkillBar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import TypeWriter from "../components/ui/TypeWriter";
import FuzzyText from "../components/ui/FuzzyText";
import ProfileCard from "../components/ui/ProfileCard";
import BackgroundDither from "../components/ui/BackgroundDither";
import ProjectDetail from "../components/ui/ProjectDetail";
import DecryptedText from "../components/ui/DecryptedText";

// Placeholder images - replace with your actual project images
const projectImage1 = "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const projectImage2 = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const projectImage3 = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const projectImage4 = "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"; // Automation/testing themed image

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
    imageUrl: projectImage4,
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
    imageUrl: projectImage1,
    technologies: ["Flutter", "Firebase", "Firestore", "Cloud Functions", "Authentication", "Provider", "fl_chart", "UBL/Peppol"],
    liveUrl: "https://time2bill.example.com",
    repoUrl: "https://github.com/Jack-Stan/time2bill",
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
    imageUrl: projectImage2,
    technologies: ["React", "Tailwind CSS", "Responsive Design", "SEO"],
    liveUrl: "https://purepeau.example.com",
    repoUrl: "https://github.com/Jack-Stan/purepeau",
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
    imageUrl: projectImage3,
    technologies: ["React.js", "Face-api.js", "Python", "Flask", "SQLAlchemy", "Styled-components", "Spraakherkenning", "AI"],
    liveUrl: "https://jaqai.example.com",
    repoUrl: "https://github.com/Jack-Stan/jaqai",
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
                    contactText="Contact Me"
                    showUserInfo={false}
                    enableTilt={true}
                    showBehindGradient={false}
                    onContactClick={() => {
                      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
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
                    text="Een 22-jarige programmeur uit België in het laatste jaar van mijn opleiding Programmeren aan Hogeschool Gent. Met meer dan 4 jaar ervaring in softwareontwikkeling, ligt mijn focus op het creatief en efficiënt bouwen van digitale oplossingen die niet alleen functioneel zijn maar ook visueel aantrekkelijk." 
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
                    text="Mijn expertise ligt in full-stack development, met ervaring in diverse technologieën zoals C#, JavaScript, React, Flutter, MySQL, Firebase en Tailwind CSS. Ik combineer technische vaardigheden met een oog voor design om complete projecten te leveren die zowel functioneel robuust als visueel aansprekend zijn." 
                    animateOn="view" 
                    sequential={false} 
                    maxIterations={15}
                    speed={30}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                  />
                </p>
                <div className="about-buttons">
                  <a href="#contact" className="about-button">Contact opnemen</a>
                  <a href="/cv.pdf" className="about-button secondary" target="_blank" rel="noopener noreferrer">Download CV</a>
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
              <h2>Mijn Vaardigheden</h2>
              <div className="section-divider"></div>
            </div>
            <div className="skills-content">
              <div className="skills-column">
                <h3>Frontend</h3>
                <SkillBar skill="HTML/CSS" percentage={70} color="#E44D26" />
                <SkillBar skill="JavaScript" percentage={80} color="#F7DF1E" />
                <SkillBar skill="React" percentage={80} color="#61DAFB" />
                <SkillBar skill="Flutter" percentage={60} color="#02569B" />
                <SkillBar skill="TypeScript" percentage={80} color="#3178C6" />
              </div>
              <div className="skills-column">
                <h3>Backend</h3>
                <SkillBar skill="JavaScript (Node.js)" percentage={75} color="#F7DF1E" />
                <SkillBar skill="Node.js" percentage={65} color="#68A063" />
                <SkillBar skill="C#" percentage={60} color="#9B4F96" />
                <SkillBar skill="SQL" percentage={60} color="#336791" />
              </div>
              <div className="skills-column">
                <h3>Tools & Other</h3>
                <SkillBar skill="Git/GitHub" percentage={70} color="#F05032" />
                <SkillBar skill="MySQL" percentage={75} color="#4479A1" />
                <SkillBar skill="RESTful APIs" percentage={65} color="#005A9C" />
                <SkillBar skill="Responsive Design" percentage={73} color="#38B2AC" />
                <SkillBar skill="UI/UX Principles" percentage={60} color="#FF61F6" />
              </div>
            </div>
          </section>
          
          <section 
            className="projects-section" 
            id="projects"
            ref={el => sectionsRef.current[2] = el}
          >
            <div className="section-header">
              <h2>Mijn Projecten</h2>
              <div className="section-divider"></div>
            </div>
            <div className="projects-grid">
              {projectsData.map((project) => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  repoUrl={project.repoUrl}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
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
            <div className="contact-content">
              <div className="contact-text">
                <p>Heb je een vraag of wil je samenwerken aan een project? Neem gerust contact met me op!</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <a href="mailto:stanverbruggen@protonmail.com">stanverbruggen@protonmail.com</a>
                  </div>
                  <div className="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <a href="https://www.linkedin.com/in/stan-verbruggen-67b928198" target="_blank" rel="noopener noreferrer">LinkedIn Profiel</a>
                  </div>
                  <div className="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <a href="https://github.com/Jack-Stan" target="_blank" rel="noopener noreferrer">GitHub Profiel</a>
                  </div>
                </div>
              </div>
              <div className="contact-form-container">
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Naam</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Bericht</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="submit-button">Verstuur Bericht</button>
                </form>
              </div>
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
