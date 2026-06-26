// Project data with translations for both languages
const projectsData = {
  nl: [
    {
      id: "brightest",
      title: "Brightest Test Automation Framework",
      description: "Een full-stack JavaScript applicatie die gebruikers zonder codeerkennis in staat stelt om geautomatiseerde tests voor websites te creëren. Het combineert een React frontend met Material UI, een Node.js backend en Firebase voor opslag.",
      fullDescription: `
        <h2>Brightest Test Automation Framework</h2>
        <p>Het Brightest Test Automation Framework is een webgebaseerde tool om testautomatisering toegankelijker te maken voor niet-technische gebruikers.</p>

        <h3>Project Overzicht</h3>
        <p>Het Brightest Test Automation Framework is een webgebaseerde tool om testautomatisering toegankelijker te maken voor niet-technische gebruikers.</p>
        <ul>
          <li>No-code interface voor het maken van geautomatiseerde tests</li>\n          <li>AI-aangedreven testcodegeneratie</li>\n          <li>Visuele elementselectie uit website screenshots</li>\n          <li>Teamfuncties voor samenwerking en opvolging</li>\n          <li>Kanban-bord voor taakbeheer</li>
        </ul>
      `,
      imageUrl: require("../data/photo/Brightest.png"),
      technologies: ["React.js","Node.js","Firebase","Material UI","OpenAI API","Puppeteer"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "No-code interface voor het maken van geautomatiseerde tests",
                "AI-aangedreven testcodegeneratie",
                "Visuele elementselectie uit website screenshots",
                "Teamfuncties voor samenwerking en opvolging",
                "Kanban-bord voor taakbeheer"
        ],
      impact:       [
                "Lagere testkosten: niet-technische teamleden kunnen tests opzetten zonder afhankelijkheid van developers",
                "Snellere testcreatie: de no-code interface versnelt het opzetten van testscenario’s",
                "Betere onderhoudbaarheid: gegenereerde testcode volgt een duidelijke structuur"
        ],
      developmentStatus: "completed"
    },
    {
      id: "time2bill",
      title: "Time2Bill",
      description: "Een uitgebreide applicatie voor tijdsregistratie en facturatie, ontworpen voor freelancers en kleine bedrijven. Gebouwd met Flutter voor cross-platform gebruik en gericht op de volledige flow van tijdsregistratie tot betaling.",
      fullDescription: `
        <h2>Time2Bill</h2>
        <p>Time2Bill is een cross-platform oplossing die tijdsregistratie, projectbeheer en facturatie samenbrengt in één workflow.</p>

        <h3>Project Overzicht</h3>
        <p>Time2Bill is een cross-platform oplossing die tijdsregistratie, projectbeheer en facturatie samenbrengt in één workflow.</p>
        <ul>
          <li>Cross-platform applicatie voor web, iOS en Android</li>\n          <li>Projectbeheer met taakorganisatie</li>\n          <li>Real-time tijdsregistratie met timer</li>\n          <li>Facturatie met PDF-generatie</li>\n          <li>UBL XML-export en Peppol e-facturatie-integratie</li>
        </ul>
      `,
      imageUrl: require("../data/photo/Time2Bill.png"),
      technologies: ["Flutter","Firebase","Firestore","Cloud Functions","Provider","UBL/Peppol"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Cross-platform applicatie voor web, iOS en Android",
                "Projectbeheer met taakorganisatie",
                "Real-time tijdsregistratie met timer",
                "Facturatie met PDF-generatie",
                "UBL XML-export en Peppol e-facturatie-integratie"
        ],
      impact:       [
                "Minder administratie: de workflow van tijdsregistratie tot facturatie wordt gestroomlijnd",
                "Betere omzetregistratie: gedetailleerde tijdsregistratie helpt factureerbare tijd beter vast te leggen",
                "Professionelere facturatie: facturen en exportformaten worden consistenter beheerd"
        ],
      developmentStatus: "completed"
    },
    {
      id: "purepeau",
      title: "PurePeau Website",
      description: "Een moderne, responsive bedrijfswebsite voor een wellnessbedrijf gespecialiseerd in natuurlijke massagebehandelingen. De focus ligt op branding, gebruiksvriendelijkheid en mobiele responsiviteit.",
      fullDescription: `
        <h2>PurePeau Website</h2>
        <p>PurePeau Website presenteert diensten, merkidentiteit en contactmogelijkheden in een professionele online ervaring.</p>

        <h3>Project Overzicht</h3>
        <p>PurePeau Website presenteert diensten, merkidentiteit en contactmogelijkheden in een professionele online ervaring.</p>
        <ul>
          <li>Responsive design voor verschillende schermformaten</li>\n          <li>Dienstenpresentatie met visuele elementen</li>\n          <li>Contactmogelijkheden en online aanwezigheid</li>\n          <li>SEO-gerichte contentstructuur</li>
        </ul>
      `,
      imageUrl: require("../data/photo/PurePeau.png"),
      technologies: ["React","Tailwind CSS","Responsive Design","SEO Optimization"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Responsive design voor verschillende schermformaten",
                "Dienstenpresentatie met visuele elementen",
                "Contactmogelijkheden en online aanwezigheid",
                "SEO-gerichte contentstructuur"
        ],
      impact:       [
                "Professionelere online aanwezigheid: bezoekers krijgen sneller vertrouwen in het merk",
                "Betere gebruikservaring: de site is duidelijk en mobielvriendelijk opgebouwd",
                "Eenvoudigere communicatie: diensten en contactopties zijn overzichtelijk beschikbaar"
        ],
      developmentStatus: "completed"
    }
  ],
  en: [
    {
      id: "brightest",
      title: "Brightest Test Automation Framework",
      description: "A full-stack JavaScript application that enables users without coding knowledge to create automated tests for websites. It combines a React frontend with Material UI, a Node.js backend, and Firebase for storage.",
      fullDescription: `
        <h2>Brightest Test Automation Framework</h2>
        <p>The Brightest Test Automation Framework is a web-based tool that makes test automation more accessible for non-technical users.</p>

        <h3>Project Overview</h3>
        <p>The Brightest Test Automation Framework is a web-based tool that makes test automation more accessible for non-technical users.</p>
        <ul>
          <li>No-code interface for creating automated tests</li>\n          <li>AI-powered test code generation</li>\n          <li>Visual element selection from website screenshots</li>\n          <li>Team features for collaboration and follow-up</li>\n          <li>Kanban board for task management</li>
        </ul>
      `,
      imageUrl: require("../data/photo/Brightest.png"),
      technologies: ["React.js","Node.js","Firebase","Material UI","OpenAI API","Puppeteer"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "No-code interface for creating automated tests",
                "AI-powered test code generation",
                "Visual element selection from website screenshots",
                "Team features for collaboration and follow-up",
                "Kanban board for task management"
        ],
      impact:       [
                "Lower testing costs: non-technical team members can set up tests without depending on developers",
                "Faster test creation: the no-code interface accelerates test scenario setup",
                "Better maintainability: generated test code follows a clear structure"
        ],
      developmentStatus: "completed"
    },
    {
      id: "time2bill",
      title: "Time2Bill",
      description: "A comprehensive time tracking and invoicing application designed for freelancers and small businesses. Built with Flutter for cross-platform use and focused on the full flow from time registration to payment.",
      fullDescription: `
        <h2>Time2Bill</h2>
        <p>Time2Bill is a cross-platform solution that brings time tracking, project management, and invoicing together in one workflow.</p>

        <h3>Project Overview</h3>
        <p>Time2Bill is a cross-platform solution that brings time tracking, project management, and invoicing together in one workflow.</p>
        <ul>
          <li>Cross-platform application for web, iOS, and Android</li>\n          <li>Project management with task organization</li>\n          <li>Real-time time tracking with timer</li>\n          <li>Invoicing with PDF generation</li>\n          <li>UBL XML export and Peppol e-invoicing integration</li>
        </ul>
      `,
      imageUrl: require("../data/photo/Time2Bill.png"),
      technologies: ["Flutter","Firebase","Firestore","Cloud Functions","Provider","UBL/Peppol"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Cross-platform application for web, iOS, and Android",
                "Project management with task organization",
                "Real-time time tracking with timer",
                "Invoicing with PDF generation",
                "UBL XML export and Peppol e-invoicing integration"
        ],
      impact:       [
                "Less administration: the workflow from time tracking to invoicing is streamlined",
                "Better revenue capture: detailed time tracking helps record billable time more accurately",
                "More professional invoicing: invoices and export formats are managed more consistently"
        ],
      developmentStatus: "completed"
    },
    {
      id: "purepeau",
      title: "PurePeau Website",
      description: "A modern, responsive business website for a wellness company specializing in natural massage treatments. The focus is on branding, usability, and mobile responsiveness.",
      fullDescription: `
        <h2>PurePeau Website</h2>
        <p>PurePeau Website presents services, brand identity, and contact options in a professional online experience.</p>

        <h3>Project Overview</h3>
        <p>PurePeau Website presents services, brand identity, and contact options in a professional online experience.</p>
        <ul>
          <li>Responsive design for different screen sizes</li>\n          <li>Service presentation with visual elements</li>\n          <li>Contact options and online presence</li>\n          <li>SEO-oriented content structure</li>
        </ul>
      `,
      imageUrl: require("../data/photo/PurePeau.png"),
      technologies: ["React","Tailwind CSS","Responsive Design","SEO Optimization"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Responsive design for different screen sizes",
                "Service presentation with visual elements",
                "Contact options and online presence",
                "SEO-oriented content structure"
        ],
      impact:       [
                "More professional online presence: visitors gain trust in the brand faster",
                "Better user experience: the site is clear and mobile-friendly",
                "Simpler communication: services and contact options are easy to find"
        ],
      developmentStatus: "completed"
    }
  ]
};

export default projectsData;
