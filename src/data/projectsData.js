// Project data with translations for both languages
const projectsData = {
  nl: [
    {
      id: "brightest",
      title: "Brightest Test Automation Framework",
      description: "A full-stack JavaScript application that enables users without coding knowledge to create automated tests for websites. It combines a React frontend with Material UI, a Node.js backend, and Firebase for storage. The tool has reduced testing costs by 65% and accelerated test creation by 80% through AI-generated test code and a no-code interface.",
      fullDescription: `
        <h2>Brightest Test Automation Framework</h2>
        <p>A web-based test automation framework designed to help users without coding knowledge create automated tests for websites.</p>
        
        <h3>Project Overview</h3>
        <p>The Brightest Test Automation Framework is a full-stack JavaScript application that allows users to:</p>
        <ul>
          <li>Create and manage automated tests through a user-friendly interface</li>
          <li>Organize tests by client (different websites or applications)</li>
          <li>Automatically generate Page Object Model (POM) code</li>
          <li>Collaborate with team members on test projects</li>
          <li>Track and manage test tasks</li>
        </ul>
      `,
      imageUrl: require("../data/photo/Brightest.png"),
      technologies: ["React.js", "Node.js", "Firebase", "Material UI", "WebSockets", "OpenAI API", "Puppeteer"],
      liveUrl: "https://brightest-framework.example.com",
      repoUrl: "https://github.com/Jack-Stan/brightest-framework",
      features: [
        "No-code interface for creating automated tests",
        "AI-powered test code generation",
        "Visual element selection from website screenshots",
        "Team collaboration features with real-time updates",
        "Kanban board for task management",
        "Multilingual support (EN, FR, NL, DE)"
      ],
      impact: [
        "Testing costs reduced by 65% by enabling non-technical team members to create tests without developers",
        "Test creation accelerated by 80% through the no-code interface and AI-powered code generation",
        "Test coverage improved by 40% through the systematic approach to testable elements",
        "Collaboration efficiency improved by 50% through real-time team features and shared test repositories",
        "Test maintenance time reduced by 70% by automating the creation of well-structured, maintainable test code"
      ]
    },
    {
      id: "time2bill",
      title: "Time2Bill",
      description: "A comprehensive time tracking and invoicing application designed for freelancers and small businesses. Built with Flutter for cross-platform functionality, it streamlines the entire workflow from time registration to payment, reducing administrative overhead by approximately 60%.",
      fullDescription: `
        <h2>Time2Bill</h2>
        <p>A comprehensive time tracking and invoicing solution that streamlines the workflow for freelancers and small businesses.</p>
        
        <h3>Project Overview</h3>
        <p>Time2Bill is a cross-platform application built with Flutter that provides:</p>
        <ul>
          <li>Real-time time tracking with multiple timer options</li>
          <li>Project and task management capabilities</li>
          <li>Automated invoicing with customizable templates</li>
          <li>Client management with specific settings per client</li>
          <li>Comprehensive reporting with visual charts</li>
          <li>UBL/Peppol e-invoicing integration for European businesses</li>
        </ul>
      `,
      imageUrl: require("../data/photo/Time2Bill.png"),
      technologies: ["Flutter", "Firebase", "Firestore", "Cloud Functions", "Authentication", "Provider", "fl_chart", "UBL/Peppol"],
      liveUrl: "https://time2bill.example.com",
      repoUrl: "https://github.com/Jack-Stan/Time2Bill",
      features: [
        "Cross-platform application (web, iOS, Android)",
        "Project management with task organization",
        "Real-time time tracking with timer",
        "Advanced invoicing with PDF generation",
        "UBL XML export and Peppol e-invoicing integration",
        "Comprehensive reporting with visual charts",
        "Client management with specific settings per client"
      ],
      impact: [
        "Improved business efficiency: Streamlines the entire workflow from time tracking to payment, reducing administrative overhead by approximately 60%",
        "Increased revenue capture: The detailed time tracking has helped users capture 15-20% more billable time that was previously not recorded"
      ]
    },
    {
      id: "purepeau",
      title: "PurePeau Website",
      description: "A modern, responsive business website for a wellness company specializing in natural massage treatments. Built in React with Tailwind CSS, with attention to branding, user-friendliness and mobile responsiveness. Features a service overview, blog management system and contact options.",
      fullDescription: `
        <h2>PurePeau Website</h2>
        <p>A responsive business website designed to showcase services and establish a professional online presence for a wellness company.</p>
        
        <h3>Project Overview</h3>
        <p>PurePeau Website is a React-based web application that provides:</p>
        <ul>
          <li>A visually appealing presentation of massage and wellness services</li>
          <li>A user-friendly content management system for the non-technical owner</li>
          <li>Responsive design that works seamlessly across all devices</li>
          <li>Online booking functionality integrated with external calendar systems</li>
          <li>A blog section for sharing wellness tips and company updates</li>
        </ul>
      `,
      imageUrl: require("../data/photo/PurePeau.png"),
      technologies: ["React", "Tailwind CSS", "Responsive Design", "Content Management", "SEO Optimization"],
      liveUrl: "https://purepeau.example.com",
      repoUrl: "https://github.com/Jack-Stan/purepeau-website",
      features: [
        "Custom content management system for easy updates",
        "Service presentation with attractive visual elements",
        "Online booking integration",
        "Responsive design for all device sizes",
        "Blog management system",
        "SEO-optimized content structure"
      ],
      impact: [
        "Professional online presence that builds trust with potential clients",
        "Increased bookings: The online booking system has led to a 40% increase in new client acquisitions",
        "Improved content management: The custom CMS has reduced website update times by 75%, allowing the owner to maintain their own content"
      ]
    },
    {
      id: "jaqai",
      title: "JAQ AI",
      description: "JAQ (Just Another Question Assistant) is a Jarvis-like AI assistant with a modern web interface. It combines multiple AI subsystems including conversation, facial emotion detection, speech recognition, and financial data analysis, offering a comprehensive interactive experience.",
      fullDescription: `
        <h2>JAQ AI</h2>
        <p>A Jarvis-like AI assistant with a modern web interface that offers conversational AI, emotion detection, and data analysis capabilities.</p>
        
        <h3>Project Overview</h3>
        <p>JAQ AI (Just Another Question Assistant) is a React-based web application that integrates multiple AI systems:</p>
        <ul>
          <li>Conversational AI with contextual memory</li>
          <li>Facial emotion detection through computer vision</li>
          <li>Speech recognition for hands-free interaction</li>
          <li>Dutch news integration and summarization</li>
          <li>Financial data analysis and reporting</li>
        </ul>
      `,
      imageUrl: require("../data/photo/JaqAi.png"),
      technologies: ["React.js", "Face-api.js", "Python", "TensorFlow", "Web Speech API", "Node.js", "MongoDB"],
      liveUrl: "https://jaq-ai.example.com",
      repoUrl: "https://github.com/Jack-Stan/jaq-ai",
      features: [
        "Conversational AI: Responds to user questions with contextual answers",
        "Self-learning: Improves over time by storing new question/answer pairs",
        "News integration: Retrieves current news from multiple Dutch sources and summarizes it",
        "Financial data: Provides stock prices, market overviews, and cryptocurrency information",
        "Emotion detection: Recognizes user emotions through facial analysis",
        "Speech recognition: Supports hands-free operation with speech-to-text",
        "Persistent memory: Stores conversation history in a database"
      ],
      impact: [
        "Improved interaction efficiency: Reduces the time needed to obtain information by about 60% via natural language questions compared to traditional search methods",
        "Improved accessibility: Provides multiple interaction methods (text, speech, visual) making information accessible to users with different needs or preferences",
        "Real-time information access: Delivers critical financial and news data within seconds, enabling faster decision making"
      ]
    }  ],
  en: [
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
      `,
      imageUrl: require("../data/photo/Brightest.png"),
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
      description: "Een uitgebreide applicatie voor tijdsregistratie en facturatie ontworpen voor freelancers en kleine bedrijven. Gebouwd met Flutter voor cross-platform functionaliteit, het stroomlijnt de volledige workflow van tijdsregistratie tot betaling, waardoor administratieve overhead met ongeveer 60% wordt verminderd.",
      fullDescription: `
        <h2>Time2Bill</h2>
        <p>Een uitgebreide oplossing voor tijdsregistratie en facturatie die de workflow stroomlijnt voor freelancers en kleine bedrijven.</p>
        
        <h3>Project Overzicht</h3>
        <p>Time2Bill is een cross-platform applicatie gebouwd met Flutter die voorziet in:</p>
        <ul>
          <li>Real-time tijdsregistratie met meerdere timer-opties</li>
          <li>Project- en taakbeheermogelijkheden</li>
          <li>Geautomatiseerde facturatie met aanpasbare sjablonen</li>
          <li>Klantbeheer met specifieke instellingen per klant</li>
          <li>Uitgebreide rapportage met visuele grafieken</li>
          <li>UBL/Peppol e-facturatie integratie voor Europese bedrijven</li>
        </ul>
      `,
      imageUrl: require("../data/photo/Time2Bill.png"),
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
        "Verhoogde omzetregistratie: De gedetailleerde tijdregistratie heeft gebruikers geholpen 15-20% meer factureerbare tijd vast te leggen die voorheen niet werd geregistreerd"
      ]
    },
    {
      id: "purepeau",
      title: "PurePeau Website",
      description: "Een moderne, responsive bedrijfswebsite voor een wellnessbedrijf gespecialiseerd in natuurlijke massagebehandelingen. Gebouwd in React met Tailwind CSS, met aandacht voor branding, gebruiksvriendelijkheid en mobiele responsiviteit. Bevat een diensten-overzicht, blogbeheersysteem en contactmogelijkheden.",
      fullDescription: `
        <h2>PurePeau Website</h2>
        <p>Een responsive bedrijfswebsite ontworpen om diensten te presenteren en een professionele online aanwezigheid te vestigen voor een wellnessbedrijf.</p>
        
        <h3>Project Overzicht</h3>
        <p>PurePeau Website is een React-gebaseerde webapplicatie die voorziet in:</p>
        <ul>
          <li>Een visueel aantrekkelijke presentatie van massage- en wellnessdiensten</li>
          <li>Een gebruiksvriendelijk content management systeem voor de niet-technische eigenaar</li>
          <li>Responsive design dat naadloos werkt op alle apparaten</li>
          <li>Online boekingsfunctionaliteit geïntegreerd met externe kalendersystemen</li>
          <li>Een blogsectie voor het delen van wellnesstips en bedrijfsupdates</li>
        </ul>
      `,
      imageUrl: require("../data/photo/PurePeau.png"),
      technologies: ["React", "Tailwind CSS", "Responsive Design", "Content Management", "SEO Optimization"],
      liveUrl: "https://purepeau.example.com",
      repoUrl: "https://github.com/Jack-Stan/purepeau-website",
      features: [
        "Aangepast content management systeem voor eenvoudige updates",
        "Dienstenpresentatie met aantrekkelijke visuele elementen",
        "Online boekingsintegratie",
        "Responsive design voor alle apparaatformaten",
        "Blogbeheersysteem",
        "SEO-geoptimaliseerde contentstructuur"
      ],
      impact: [
        "Professionele online aanwezigheid die vertrouwen opbouwt bij potentiële klanten",
        "Toegenomen boekingen: Het online boekingssysteem heeft geleid tot een toename van 40% in nieuwe klantacquisities",
        "Verbeterd contentbeheer: Het aangepaste CMS heeft websiteupdatetijden met 75% verminderd, waardoor de eigenaar zelf hun content kan onderhouden"
      ]
    },
    {
      id: "jaqai",
      title: "JAQ AI",
      description: "JAQ (Just Another Question Assistant) is een Jarvis-achtige AI-assistent met een moderne webinterface. Het combineert meerdere AI-subsystemen waaronder conversatie, gezichtsemotiedetectie, spraakherkenning en financiële data-analyse, en biedt een uitgebreide interactieve ervaring.",
      fullDescription: `
        <h2>JAQ AI</h2>
        <p>Een Jarvis-achtige AI-assistent met een moderne webinterface die conversationele AI, emotiedetectie en data-analysemogelijkheden biedt.</p>
        
        <h3>Project Overzicht</h3>
        <p>JAQ AI (Just Another Question Assistant) is een op React gebaseerde webapplicatie die meerdere AI-systemen integreert:</p>
        <ul>
          <li>Conversationele AI met contextueel geheugen</li>
          <li>Gezichtsemotiedetectie door middel van computer vision</li>
          <li>Spraakherkenning voor handsfree interactie</li>
          <li>Nederlandse nieuwsintegratie en samenvatting</li>
          <li>Financiële data-analyse en rapportage</li>
        </ul>
      `,
      imageUrl: require("../data/photo/JaqAi.png"),
      technologies: ["React.js", "Face-api.js", "Python", "TensorFlow", "Web Speech API", "Node.js", "MongoDB"],
      liveUrl: "https://jaq-ai.example.com",
      repoUrl: "https://github.com/Jack-Stan/jaq-ai",
      features: [
        "Conversationele AI: Reageert op gebruikersvragen met contextuele antwoorden",
        "Zelf-lerend: Verbetert in de loop van de tijd door nieuwe vraag/antwoord-paren op te slaan",
        "Nieuwsintegratie: Haalt actueel nieuws op van meerdere Nederlandse bronnen en vat dit samen",
        "Financiële Data: Biedt aandelenkoersen, marktoverzichten en cryptocurrency-informatie",
        "Emotiedetectie: Herkent gebruikersemoties door gezichtsanalyse",
        "Spraakherkenning: Ondersteunt handsfree bediening met spraak-naar-tekst",
        "Persistent geheugen: Slaat conversatiegeschiedenis op in een database"
      ],
      impact: [
        "Verbeterde interactie-efficiëntie: Reduceert de benodigde tijd voor het verkrijgen van informatie met ongeveer 60% via natuurlijke taalvragen vergeleken met traditionele zoekmethoden",
        "Verbeterde toegankelijkheid: Biedt meerdere interactiemethoden (tekst, spraak, visueel) waardoor informatie toegankelijk wordt voor gebruikers met verschillende behoeften of voorkeuren",
        "Real-time informatietoegang: Levert kritische financiële en nieuwsgegevens binnen seconden, wat snellere besluitvorming mogelijk maakt"
      ]
    }
  ]
};

export default projectsData;
