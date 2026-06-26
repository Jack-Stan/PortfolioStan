// Project data with translations for both languages
const projectsData = {
  nl: [
    {
      id: "enterprise-ops-platform",
      title: "Enterprise Operations & Compliance Platform",
      description: "Een centraal platform voor het opvolgen van operationele processen, controles en verantwoordelijkheden binnen een grote organisatie. De focus ligt op betrouwbare data, duidelijke workflows en traceerbaarheid voor dagelijks gebruik.",
      fullDescription: `
        <h2>Enterprise Operations & Compliance Platform</h2>
        <p>Een operationeel platform dat helpt om processen, controles en opvolging samen te brengen in één overzichtelijke applicatie.</p>

        <h3>Project Overzicht</h3>
        <p>Een operationeel platform dat helpt om processen, controles en opvolging samen te brengen in één overzichtelijke applicatie.</p>
        <ul>
          <li>Centralisatie van operationele workflows in één platform</li>\n          <li>Duidelijke schermen voor status, acties en verantwoordelijkheden</li>\n          <li>Modulaire opbouw per bedrijfsdomein voor schaalbaarheid</li>\n          <li>Event-gedreven integratie tussen modules voor betrouwbare communicatie</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","Azure","SQL"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Centralisatie van operationele workflows in één platform",
                "Duidelijke schermen voor status, acties en verantwoordelijkheden",
                "Modulaire opbouw per bedrijfsdomein voor schaalbaarheid",
                "Event-gedreven integratie tussen modules voor betrouwbare communicatie"
        ],
      impact:       [
                "Meer overzicht: gebruikers zien sneller lopende acties, statussen en prioriteiten",
                "Betere opvolging: processen worden consistenter beheerd door centrale data",
                "Hogere betrouwbaarheid: resiliente architectuur met retry-beleid vermindert verstoringen"
        ],
      developmentStatus: "completed"
    },
    {
      id: "data-analytics-tool",
      title: "Data Analytics & Decision Support Tool",
      description: "Een tool die complexe, sterk genormaliseerde data omzet naar overzichtelijke informatie voor besluitvorming. De focus ligt op heldere visualisatie en een modulaire opzet voor verdere uitbreiding.",
      fullDescription: `
        <h2>Data Analytics & Decision Support Tool</h2>
        <p>Brengt data, logica en gebruikersinteractie samen in een overzichtelijke tool voor analyse en besluitvorming.</p>

        <h3>Project Overzicht</h3>
        <p>Brengt data, logica en gebruikersinteractie samen in een overzichtelijke tool voor analyse en besluitvorming.</p>
        <ul>
          <li>Heldere visualisatie van belangrijke informatie</li>\n          <li>Ondersteuning voor gestructureerde analyseflows</li>\n          <li>Database-architectuur met gecontroleerde schema-evolutie</li>\n          <li>Modulaire opzet voor verdere uitbreiding</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","Azure"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Heldere visualisatie van belangrijke informatie",
                "Ondersteuning voor gestructureerde analyseflows",
                "Database-architectuur met gecontroleerde schema-evolutie",
                "Modulaire opzet voor verdere uitbreiding"
        ],
      impact:       [
                "Snellere interpretatie van complexe informatie",
                "Betere beslissingen door vertaling van data naar concrete inzichten",
                "Schaalbare basis die zonder onderbrekingen kan meegroeien met nieuwe rapportagebehoeften"
        ],
      developmentStatus: "completed"
    },
    {
      id: "inventory-visibility-dashboard",
      title: "Inventory Visibility Dashboard",
      description: "Een voorraadgerichte applicatie die detailinformatie rond stock, bewegingen en beschikbaarheid overzichtelijk maakt. De applicatie ondersteunt efficiëntere opvolging en betere datakwaliteit.",
      fullDescription: `
        <h2>Inventory Visibility Dashboard</h2>
        <p>Helpt gebruikers om voorraadgegevens sneller te raadplegen, interpreteren en opvolgen.</p>

        <h3>Project Overzicht</h3>
        <p>Helpt gebruikers om voorraadgegevens sneller te raadplegen, interpreteren en opvolgen.</p>
        <ul>
          <li>Overzichtelijke weergave van stockdetails</li>\n          <li>Ondersteuning voor filtering, detailanalyse en opvolging</li>\n          <li>Gestructureerde logging voor snel inzicht in fouten</li>\n          <li>Combinatie van unit-, integratie- en performancetests</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","SQL","Azure"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Overzichtelijke weergave van stockdetails",
                "Ondersteuning voor filtering, detailanalyse en opvolging",
                "Gestructureerde logging voor snel inzicht in fouten",
                "Combinatie van unit-, integratie- en performancetests"
        ],
      impact:       [
                "Meer transparantie in voorraadgegevens",
                "Efficiëntere opvolging door minder verspreide informatie",
                "Betere datakwaliteit en vroegere detectie van regressies"
        ],
      developmentStatus: "completed"
    },
    {
      id: "approval-workflow-engine",
      title: "Enterprise Approval Workflow Engine",
      description: "Een automatiseringsoplossing voor goedkeuringsprocessen. Het project vermindert manuele stappen door aanvragen, controles en beslissingen in een duidelijke digitale flow te brengen.",
      fullDescription: `
        <h2>Enterprise Approval Workflow Engine</h2>
        <p>Digitaliseert goedkeuringsstromen zodat aanvragen sneller, consistenter en traceerbaarder verwerkt kunnen worden.</p>

        <h3>Project Overzicht</h3>
        <p>Digitaliseert goedkeuringsstromen zodat aanvragen sneller, consistenter en traceerbaarder verwerkt kunnen worden.</p>
        <ul>
          <li>Digitale goedkeuringsflow met duidelijke stappen</li>\n          <li>Automatische opvolging van statussen en beslissingen</li>\n          <li>Minder manuele communicatie rond approvals</li>\n          <li>Betere traceerbaarheid van acties en verantwoordelijkheden</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Power Automate","SharePoint","Microsoft 365","Azure"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Digitale goedkeuringsflow met duidelijke stappen",
                "Automatische opvolging van statussen en beslissingen",
                "Minder manuele communicatie rond approvals",
                "Betere traceerbaarheid van acties en verantwoordelijkheden"
        ],
      impact:       [
                "Minder manueel werk door automatisering van terugkerende stappen",
                "Snellere doorlooptijd van aanvragen",
                "Betere controle door centrale zichtbaarheid van beslissingen en statussen"
        ],
      developmentStatus: "completed"
    },
    {
      id: "ai-document-to-quote",
      title: "AI-Powered Document-to-Quote Automation",
      description: "Een AI-aangedreven automatisering die documenten gedeeld in Microsoft Teams automatisch analyseert en omzet naar een bruikbare offerte. Gebouwd met n8n en de Claude API om manuele documentverwerking te elimineren.",
      fullDescription: `
        <h2>AI-Powered Document-to-Quote Automation</h2>
        <p>Een geautomatiseerde workflow die documenten in Microsoft Teams herkent, analyseert en automatisch vertaalt naar offerte-informatie.</p>

        <h3>Project Overzicht</h3>
        <p>Zodra een gebruiker een document in een Teams-kanaal plaatst, leest een n8n-workflow het document uit en stuurt de inhoud naar de Claude API voor analyse. De AI haalt de relevante informatie eruit en levert die gestructureerd terug zodat ze direct te gebruiken is voor de offerte.</p>
        <ul>
          <li>Automatische detectie van documenten in Microsoft Teams</li>\n          <li>AI-gestuurde analyse van documenten via de Claude API</li>\n          <li>Geautomatiseerde n8n-workflow van document tot offerte-informatie</li>\n          <li>Sterke vermindering van manuele documentverwerking</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["n8n","Claude API","Microsoft Teams","Workflow Automation"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Automatische detectie van documenten in Microsoft Teams",
                "AI-gestuurde analyse van documenten via de Claude API",
                "Geautomatiseerde n8n-workflow van document tot offerte-informatie",
                "Sterke vermindering van manuele documentverwerking"
        ],
      impact:       [
                "Minder manueel werk: documenten worden automatisch uitgelezen",
                "Snellere doorlooptijd: offerte-informatie beschikbaar zodra het document gedeeld wordt",
                "Consistentere output dankzij herhaalbare gestructureerde AI-analyse"
        ],
      developmentStatus: "completed"
    },
    {
      id: "enterprise-pricing-engine",
      title: "Enterprise Pricing Engine",
      description: "Een module voor het modelleren en beheren van kortingsstructuren. De engine maakt complexe voorwaarden inzichtelijker en helpt gebruikers kortingen op een gecontroleerde manier te beheren.",
      fullDescription: `
        <h2>Enterprise Pricing Engine</h2>
        <p>Visualiseert en beheert kortingslogica in een boomstructuur, zodat complexe prijsafspraken overzichtelijker worden.</p>

        <h3>Project Overzicht</h3>
        <p>Visualiseert en beheert kortingslogica in een boomstructuur, zodat complexe prijsafspraken overzichtelijker worden.</p>
        <ul>
          <li>Structureren van kortingsregels en voorwaarden</li>\n          <li>Overzichtelijke boomstructuur voor complexe logica</li>\n          <li>Ondersteuning voor validatie en beheer</li>\n          <li>Gebruiksvriendelijke interface voor commerciële teams</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","SQL"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Structureren van kortingsregels en voorwaarden",
                "Overzichtelijke boomstructuur voor complexe logica",
                "Ondersteuning voor validatie en beheer",
                "Gebruiksvriendelijke interface voor commerciële teams"
        ],
      impact:       [
                "Meer inzicht in complexe kortingsregels",
                "Betere controle door consistenter beheer van voorwaarden",
                "Minder fouten door duidelijke structuur in prijslogica"
        ],
      developmentStatus: "completed"
    },
    {
      id: "cicd-test-pipeline",
      title: "CI/CD Test Automation Pipeline",
      description: "Een test- en CI/CD-opzet voor meerdere bedrijfskritische applicaties. Het project focust op betrouwbaardere releases door geautomatiseerde controles en herhaalbare pipelines.",
      fullDescription: `
        <h2>CI/CD Test Automation Pipeline</h2>
        <p>De testpipelines ondersteunen stabielere opleveringen door automatische controles toe te voegen aan de ontwikkel- en releaseflow.</p>

        <h3>Project Overzicht</h3>
        <p>De testpipelines ondersteunen stabielere opleveringen door automatische controles toe te voegen aan de ontwikkel- en releaseflow.</p>
        <ul>
          <li>Geautomatiseerde teststappen in de pipeline</li>\n          <li>Ondersteuning voor herhaalbare builds en controles</li>\n          <li>Betere feedback bij wijzigingen</li>\n          <li>Basis voor stabielere releases over meerdere projecten</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Azure DevOps","CI/CD","Automated Testing","Vue",".NET"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Geautomatiseerde teststappen in de pipeline",
                "Ondersteuning voor herhaalbare builds en controles",
                "Betere feedback bij wijzigingen",
                "Basis voor stabielere releases over meerdere projecten"
        ],
      impact:       [
                "Betrouwbaardere releases: fouten worden vroeger in het proces zichtbaar",
                "Snellere feedback voor ontwikkelaars bij wijzigingen",
                "Meer vertrouwen door automatische checks over meerdere projecten"
        ],
      developmentStatus: "completed"
    },
    {
      id: "ai-data-agent",
      title: "AI Data Agent for Enterprise Analytics",
      description: "Een AI-agentconcept rond data-analyse binnen een enterprise dataplatform. Het project verkent hoe gebruikers sneller inzichten kunnen vinden via een agent die data, context en acties samenbrengt.",
      fullDescription: `
        <h2>AI Data Agent for Enterprise Analytics</h2>
        <p>Onderzoekt hoe AI kan helpen om data binnen een enterprise dataplatform toegankelijker en actiegerichter te maken.</p>

        <h3>Project Overzicht</h3>
        <p>Onderzoekt hoe AI kan helpen om data binnen een enterprise dataplatform toegankelijker en actiegerichter te maken.</p>
        <ul>
          <li>Agentgerichte interactie met data en context</li>\n          <li>Ondersteuning voor snellere analyse en vraagstelling</li>\n          <li>Validatieregels per laag om datakwaliteit te bewaken</li>\n          <li>Basis voor verdere uitbreiding met automatisering</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Microsoft Fabric","AI Agents","Azure","Data Analytics"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Agentgerichte interactie met data en context",
                "Ondersteuning voor snellere analyse en vraagstelling",
                "Validatieregels per laag om datakwaliteit te bewaken",
                "Basis voor verdere uitbreiding met automatisering"
        ],
      impact:       [
                "Toegankelijkere data: gebruikers kunnen sneller richting inzichten werken",
                "Meer productiviteit door een agentgerichte analyseflow",
                "Innovatieve basis voor AI-ondersteunde dataworkflows"
        ],
      developmentStatus: "completed"
    },
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
      id: "enterprise-ops-platform",
      title: "Enterprise Operations & Compliance Platform",
      description: "A centralized platform for tracking operational processes, controls, and responsibilities within a large organization. The focus is on reliable data, clear workflows, and traceability for daily use.",
      fullDescription: `
        <h2>Enterprise Operations & Compliance Platform</h2>
        <p>An operational platform that brings processes, controls, and follow-up into one clear application.</p>

        <h3>Project Overview</h3>
        <p>An operational platform that brings processes, controls, and follow-up into one clear application.</p>
        <ul>
          <li>Centralization of operational workflows in one platform</li>\n          <li>Clear screens for statuses, actions, and responsibilities</li>\n          <li>Modular setup per business domain for scalability</li>\n          <li>Event-driven integration between modules for reliable communication</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","Azure","SQL"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Centralization of operational workflows in one platform",
                "Clear screens for statuses, actions, and responsibilities",
                "Modular setup per business domain for scalability",
                "Event-driven integration between modules for reliable communication"
        ],
      impact:       [
                "More overview: users see ongoing actions, statuses, and priorities faster",
                "Better follow-up: processes are managed more consistently through centralized data",
                "Higher reliability: resilient architecture with retry policies reduces disruptions"
        ],
      developmentStatus: "completed"
    },
    {
      id: "data-analytics-tool",
      title: "Data Analytics & Decision Support Tool",
      description: "A tool that turns complex, highly normalized data into clear information for decision-making. The focus is on clear visualization and a modular setup for further expansion.",
      fullDescription: `
        <h2>Data Analytics & Decision Support Tool</h2>
        <p>Combines data, logic, and user interaction in a clear tool for analysis and decision-making.</p>

        <h3>Project Overview</h3>
        <p>Combines data, logic, and user interaction in a clear tool for analysis and decision-making.</p>
        <ul>
          <li>Clear visualization of important information</li>\n          <li>Support for structured analysis flows</li>\n          <li>Database architecture with controlled schema evolution</li>\n          <li>Modular setup for further expansion</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","Azure"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Clear visualization of important information",
                "Support for structured analysis flows",
                "Database architecture with controlled schema evolution",
                "Modular setup for further expansion"
        ],
      impact:       [
                "Faster interpretation of complex information",
                "Better decisions through translating data into concrete insights",
                "Scalable foundation that grows with new reporting needs without disruption"
        ],
      developmentStatus: "completed"
    },
    {
      id: "inventory-visibility-dashboard",
      title: "Inventory Visibility Dashboard",
      description: "An inventory-focused application that makes detailed stock information, movements, and availability easier to understand. The application supports more efficient follow-up and better data quality.",
      fullDescription: `
        <h2>Inventory Visibility Dashboard</h2>
        <p>Helps users consult, interpret, and follow up inventory data faster.</p>

        <h3>Project Overview</h3>
        <p>Helps users consult, interpret, and follow up inventory data faster.</p>
        <ul>
          <li>Clear display of stock details</li>\n          <li>Support for filtering, detailed analysis, and follow-up</li>\n          <li>Structured logging for fast insight into failures</li>\n          <li>Combination of unit, integration, and performance tests</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","SQL","Azure"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Clear display of stock details",
                "Support for filtering, detailed analysis, and follow-up",
                "Structured logging for fast insight into failures",
                "Combination of unit, integration, and performance tests"
        ],
      impact:       [
                "More transparency in inventory data",
                "More efficient follow-up with less scattered information",
                "Better data quality and earlier detection of regressions"
        ],
      developmentStatus: "completed"
    },
    {
      id: "approval-workflow-engine",
      title: "Enterprise Approval Workflow Engine",
      description: "An automation solution for approval processes. The project reduces manual steps by bringing requests, checks, and decisions into a clear digital flow.",
      fullDescription: `
        <h2>Enterprise Approval Workflow Engine</h2>
        <p>Digitizes approval flows so requests can be processed faster, more consistently, and with better traceability.</p>

        <h3>Project Overview</h3>
        <p>Digitizes approval flows so requests can be processed faster, more consistently, and with better traceability.</p>
        <ul>
          <li>Digital approval flow with clear steps</li>\n          <li>Automatic follow-up of statuses and decisions</li>\n          <li>Less manual communication around approvals</li>\n          <li>Better traceability of actions and responsibilities</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Power Automate","SharePoint","Microsoft 365","Azure"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Digital approval flow with clear steps",
                "Automatic follow-up of statuses and decisions",
                "Less manual communication around approvals",
                "Better traceability of actions and responsibilities"
        ],
      impact:       [
                "Less manual work through automation of recurring steps",
                "Faster turnaround on requests",
                "Better control through centralized visibility of decisions and statuses"
        ],
      developmentStatus: "completed"
    },
    {
      id: "ai-document-to-quote",
      title: "AI-Powered Document-to-Quote Automation",
      description: "An AI-powered automation that analyzes documents shared in Microsoft Teams and turns them into a usable quote. Built with n8n and the Claude API to eliminate manual document processing.",
      fullDescription: `
        <h2>AI-Powered Document-to-Quote Automation</h2>
        <p>An automated workflow that detects documents in Microsoft Teams, analyzes them, and automatically translates them into quote information.</p>

        <h3>Project Overview</h3>
        <p>As soon as a user drops a document into a Teams channel, an n8n workflow picks it up and sends the content to the Claude API for analysis. The AI extracts the relevant information and returns it in a structured format ready to use for the quote.</p>
        <ul>
          <li>Automatic detection of documents in Microsoft Teams</li>\n          <li>AI-driven analysis of documents via the Claude API</li>\n          <li>Automated n8n workflow from document to quote information</li>\n          <li>Significant reduction in manual document processing</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["n8n","Claude API","Microsoft Teams","Workflow Automation"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Automatic detection of documents in Microsoft Teams",
                "AI-driven analysis of documents via the Claude API",
                "Automated n8n workflow from document to quote information",
                "Significant reduction in manual document processing"
        ],
      impact:       [
                "Less manual work: documents are read automatically instead of reviewed by hand",
                "Faster turnaround: quote information is available as soon as the document is shared",
                "More consistent output thanks to repeatable, structured AI analysis"
        ],
      developmentStatus: "completed"
    },
    {
      id: "enterprise-pricing-engine",
      title: "Enterprise Pricing Engine",
      description: "A module for modeling and managing discount structures. The engine makes complex conditions easier to understand and helps users manage discounts in a controlled way.",
      fullDescription: `
        <h2>Enterprise Pricing Engine</h2>
        <p>Visualizes and manages discount logic in a tree structure, making complex pricing agreements clearer.</p>

        <h3>Project Overview</h3>
        <p>Visualizes and manages discount logic in a tree structure, making complex pricing agreements clearer.</p>
        <ul>
          <li>Structuring discount rules and conditions</li>\n          <li>Clear tree structure for complex logic</li>\n          <li>Support for validation and management</li>\n          <li>User-friendly interface for commercial teams</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","SQL"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Structuring discount rules and conditions",
                "Clear tree structure for complex logic",
                "Support for validation and management",
                "User-friendly interface for commercial teams"
        ],
      impact:       [
                "More insight into complex discount rules",
                "Better control through more consistent management of conditions",
                "Fewer mistakes thanks to clear structure in pricing logic"
        ],
      developmentStatus: "completed"
    },
    {
      id: "cicd-test-pipeline",
      title: "CI/CD Test Automation Pipeline",
      description: "A testing and CI/CD setup for multiple business-critical applications. The project focuses on more reliable releases through automated checks and repeatable pipelines.",
      fullDescription: `
        <h2>CI/CD Test Automation Pipeline</h2>
        <p>The test pipelines support more stable delivery by adding automated checks to the development and release flow.</p>

        <h3>Project Overview</h3>
        <p>The test pipelines support more stable delivery by adding automated checks to the development and release flow.</p>
        <ul>
          <li>Automated test steps in the pipeline</li>\n          <li>Support for repeatable builds and checks</li>\n          <li>Better feedback when changes are introduced</li>\n          <li>Foundation for more stable releases across multiple projects</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Azure DevOps","CI/CD","Automated Testing","Vue",".NET"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Automated test steps in the pipeline",
                "Support for repeatable builds and checks",
                "Better feedback when changes are introduced",
                "Foundation for more stable releases across multiple projects"
        ],
      impact:       [
                "More reliable releases: issues become visible earlier in the process",
                "Faster feedback for developers when changes are made",
                "More confidence through automated checks across multiple projects"
        ],
      developmentStatus: "completed"
    },
    {
      id: "ai-data-agent",
      title: "AI Data Agent for Enterprise Analytics",
      description: "An AI agent concept around data analysis within an enterprise data platform. The project explores how users can find insights faster through an agent that combines data, context, and actions.",
      fullDescription: `
        <h2>AI Data Agent for Enterprise Analytics</h2>
        <p>Explores how AI can make data within an enterprise data platform more accessible and action-oriented.</p>

        <h3>Project Overview</h3>
        <p>Explores how AI can make data within an enterprise data platform more accessible and action-oriented.</p>
        <ul>
          <li>Agent-oriented interaction with data and context</li>\n          <li>Support for faster analysis and questioning</li>\n          <li>Per-layer validation rules to safeguard data quality</li>\n          <li>Foundation for further automation expansion</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Microsoft Fabric","AI Agents","Azure","Data Analytics"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Agent-oriented interaction with data and context",
                "Support for faster analysis and questioning",
                "Per-layer validation rules to safeguard data quality",
                "Foundation for further automation expansion"
        ],
      impact:       [
                "More accessible data: users can move toward insights faster",
                "More productivity through an agent-driven analysis flow",
                "Innovative foundation for AI-supported data workflows"
        ],
      developmentStatus: "completed"
    },
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
