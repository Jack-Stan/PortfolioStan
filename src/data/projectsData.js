// Project data with translations for both languages
const projectsData = {
  nl: [
    {
      id: "shield",
      title: "SHIELD",
      description: "Een bedrijfsapplicatie gericht op het centraliseren, beveiligen en overzichtelijk maken van operationele processen. De focus ligt op duidelijke workflows, betrouwbare data en een gebruiksvriendelijke interface voor dagelijkse opvolging.",
      fullDescription: `
        <h2>SHIELD</h2>
        <p>SHIELD is een operationeel platform dat helpt om processen, controles en opvolging samen te brengen in één overzichtelijke applicatie.</p>

        <h3>Project Overzicht</h3>
        <p>SHIELD is een operationeel platform dat helpt om processen, controles en opvolging samen te brengen in één overzichtelijke applicatie.</p>
        <ul>
          <li>Gestroomlijnde workflow voor operationele opvolging</li>\n          <li>Duidelijke schermen voor status, acties en verantwoordelijkheden</li>\n          <li>Focus op betrouwbaarheid, traceerbaarheid en gebruiksgemak</li>\n          <li>Ondersteuning voor schaalbare bedrijfsprocessen</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","Azure","SQL"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Gestroomlijnde workflow voor operationele opvolging",
                "Duidelijke schermen voor status, acties en verantwoordelijkheden",
                "Focus op betrouwbaarheid, traceerbaarheid en gebruiksgemak",
                "Ondersteuning voor schaalbare bedrijfsprocessen"
        ],
      impact:       [
                "Meer overzicht: gebruikers krijgen sneller zicht op lopende acties, statussen en prioriteiten",
                "Betere opvolging: processen worden consistenter beheerd door duidelijke stappen en centrale data",
                "Professionelere workflow: de applicatie helpt manuele opvolging te vervangen door een gestructureerde digitale flow"
        ],
      developmentStatus: "completed"
    },
    {
      id: "bird",
      title: "BIRD",
      description: "Een applicatieconcept rond gestructureerde data, analyse en workflowondersteuning. BIRD focust op het omzetten van complexe informatie naar bruikbare inzichten en duidelijke acties.",
      fullDescription: `
        <h2>BIRD</h2>
        <p>BIRD brengt data, logica en gebruikersinteractie samen in een overzichtelijke tool voor analyse en besluitvorming.</p>

        <h3>Project Overzicht</h3>
        <p>BIRD brengt data, logica en gebruikersinteractie samen in een overzichtelijke tool voor analyse en besluitvorming.</p>
        <ul>
          <li>Heldere visualisatie van belangrijke informatie</li>\n          <li>Ondersteuning voor gestructureerde analyseflows</li>\n          <li>Gebruiksvriendelijke interface voor complexe data</li>\n          <li>Modulaire opzet voor verdere uitbreiding</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","Azure"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Heldere visualisatie van belangrijke informatie",
                "Ondersteuning voor gestructureerde analyseflows",
                "Gebruiksvriendelijke interface voor complexe data",
                "Modulaire opzet voor verdere uitbreiding"
        ],
      impact:       [
                "Snellere interpretatie: complexe informatie wordt toegankelijker gemaakt voor gebruikers",
                "Betere beslissingen: data wordt vertaald naar concrete inzichten",
                "Schaalbare basis: de oplossing kan verder uitgebreid worden met extra modules en automatisering"
        ],
      developmentStatus: "completed"
    },
    {
      id: "stockdetail",
      title: "StockDetail",
      description: "Een voorraadgerichte applicatie die detailinformatie rond stock, bewegingen en beschikbaarheid overzichtelijk maakt. De applicatie ondersteunt efficiëntere opvolging en betere datakwaliteit.",
      fullDescription: `
        <h2>StockDetail</h2>
        <p>StockDetail helpt gebruikers om voorraadgegevens sneller te raadplegen, interpreteren en opvolgen.</p>

        <h3>Project Overzicht</h3>
        <p>StockDetail helpt gebruikers om voorraadgegevens sneller te raadplegen, interpreteren en opvolgen.</p>
        <ul>
          <li>Overzichtelijke weergave van stockdetails</li>\n          <li>Ondersteuning voor filtering, detailanalyse en opvolging</li>\n          <li>Focus op datakwaliteit en transparantie</li>\n          <li>Gebruiksvriendelijke schermen voor operationele gebruikers</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","SQL","Azure"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Overzichtelijke weergave van stockdetails",
                "Ondersteuning voor filtering, detailanalyse en opvolging",
                "Focus op datakwaliteit en transparantie",
                "Gebruiksvriendelijke schermen voor operationele gebruikers"
        ],
      impact:       [
                "Meer transparantie: voorraadgegevens worden sneller en duidelijker raadpleegbaar",
                "Efficiëntere opvolging: gebruikers verliezen minder tijd aan verspreide informatie",
                "Betere datakwaliteit: detailinformatie wordt consistenter zichtbaar gemaakt"
        ],
      developmentStatus: "completed"
    },
    {
      id: "approval-automation",
      title: "Approval Automation",
      description: "Een automatiseringsoplossing voor goedkeuringsprocessen. Het project vermindert manuele stappen door aanvragen, controles en beslissingen in een duidelijke digitale flow te brengen.",
      fullDescription: `
        <h2>Approval Automation</h2>
        <p>Approval Automation digitaliseert goedkeuringsstromen zodat aanvragen sneller, consistenter en traceerbaarder verwerkt kunnen worden.</p>

        <h3>Project Overzicht</h3>
        <p>Approval Automation digitaliseert goedkeuringsstromen zodat aanvragen sneller, consistenter en traceerbaarder verwerkt kunnen worden.</p>
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
                "Minder manueel werk: terugkerende goedkeuringsstappen worden geautomatiseerd",
                "Snellere doorlooptijd: aanvragen kunnen efficiënter opgevolgd worden",
                "Betere controle: beslissingen en statussen blijven centraal zichtbaar"
        ],
      developmentStatus: "completed"
    },
    {
      id: "tender-2-quote",
      title: "Tender 2 Quote",
      description: "Een AI-aangedreven automatisering die tenderdocumenten gedeeld in Microsoft Teams automatisch analyseert en omzet naar een bruikbare offerte. Gebouwd met n8n en de Claude API om manuele documentverwerking te elimineren.",
      fullDescription: `
        <h2>Tender 2 Quote</h2>
        <p>Tender 2 Quote is een geautomatiseerde workflow die tenderdocumenten in Microsoft Teams herkent, analyseert en automatisch vertaalt naar offerte-informatie.</p>

        <h3>Project Overzicht</h3>
        <p>Zodra een gebruiker een tenderdocument in een Teams-kanaal plaatst, leest een n8n-workflow het document uit en stuurt de inhoud naar de Claude API voor analyse. De AI haalt de relevante informatie eruit en levert die gestructureerd terug zodat ze direct te gebruiken is voor de offerte.</p>
        <ul>
          <li>Automatische detectie van documenten in Microsoft Teams</li>\n          <li>AI-gestuurde analyse van tenderdocumenten via de Claude API</li>\n          <li>Geautomatiseerde n8n-workflow van document tot offerte-informatie</li>\n          <li>Sterke vermindering van manuele documentverwerking</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["n8n","Claude API","Microsoft Teams","Workflow Automation"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Automatische detectie van documenten in Microsoft Teams",
                "AI-gestuurde analyse van tenderdocumenten via de Claude API",
                "Geautomatiseerde n8n-workflow van document tot offerte-informatie",
                "Sterke vermindering van manuele documentverwerking"
        ],
      impact:       [
                "Minder manueel werk: tenderdocumenten worden automatisch uitgelezen in plaats van handmatig nagekeken",
                "Snellere doorlooptijd: offerte-informatie is beschikbaar zodra het document gedeeld wordt",
                "Consistentere output: de AI-analyse levert herhaalbaar gestructureerde informatie op"
        ],
      developmentStatus: "completed"
    },
    {
      id: "discount-tree",
      title: "Discount Tree",
      description: "Een module binnen SHIELD voor het modelleren en beheren van kortingsstructuren. Discount Tree maakt complexe voorwaarden inzichtelijker en helpt gebruikers kortingen op een gecontroleerde manier te beheren.",
      fullDescription: `
        <h2>Discount Tree</h2>
        <p>Discount Tree is een module binnen het SHIELD-platform die kortingslogica visualiseert en beheert in een boomstructuur, zodat complexe prijsafspraken overzichtelijker worden.</p>

        <h3>Project Overzicht</h3>
        <p>Als onderdeel van SHIELD visualiseert en beheert Discount Tree kortingslogica in een boomstructuur, zodat complexe prijsafspraken overzichtelijker worden.</p>
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
                "Meer inzicht: complexe kortingsregels worden makkelijker te begrijpen",
                "Betere controle: voorwaarden kunnen consistenter beheerd worden",
                "Minder fouten: duidelijke structuur helpt verwarring in prijslogica te verminderen"
        ],
      developmentStatus: "completed"
    },
    {
      id: "testpipelines-shield-stockdetail",
      title: "Testpipelines SHIELD & StockDetail",
      description: "Een test- en CI/CD-opzet voor SHIELD en StockDetail. Het project focust op betrouwbaardere releases door geautomatiseerde controles en herhaalbare pipelines.",
      fullDescription: `
        <h2>Testpipelines SHIELD & StockDetail</h2>
        <p>De testpipelines ondersteunen stabielere opleveringen door automatische controles toe te voegen aan de ontwikkel- en releaseflow.</p>

        <h3>Project Overzicht</h3>
        <p>De testpipelines ondersteunen stabielere opleveringen door automatische controles toe te voegen aan de ontwikkel- en releaseflow.</p>
        <ul>
          <li>Geautomatiseerde teststappen in de pipeline</li>\n          <li>Ondersteuning voor herhaalbare builds en controles</li>\n          <li>Betere feedback bij wijzigingen</li>\n          <li>Basis voor stabielere releases</li>
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
                "Basis voor stabielere releases"
        ],
      impact:       [
                "Betrouwbaardere releases: fouten worden vroeger in het proces zichtbaar",
                "Snellere feedback: ontwikkelaars krijgen duidelijkere signalen bij wijzigingen",
                "Meer vertrouwen: automatische checks ondersteunen kwaliteit over meerdere projecten"
        ],
      developmentStatus: "completed"
    },
    {
      id: "fabric-agent",
      title: "Fabric Agent",
      description: "Een AI-agentconcept rond Microsoft Fabric en data-analyse. Het project verkent hoe gebruikers sneller inzichten kunnen vinden via een agent die data, context en acties samenbrengt.",
      fullDescription: `
        <h2>Fabric Agent</h2>
        <p>Fabric Agent onderzoekt hoe AI kan helpen om data binnen Microsoft Fabric toegankelijker en actiegerichter te maken.</p>

        <h3>Project Overzicht</h3>
        <p>Fabric Agent onderzoekt hoe AI kan helpen om data binnen Microsoft Fabric toegankelijker en actiegerichter te maken.</p>
        <ul>
          <li>Agentgerichte interactie met data en context</li>\n          <li>Ondersteuning voor snellere analyse en vraagstelling</li>\n          <li>Focus op bruikbare inzichten in plaats van losse data</li>\n          <li>Basis voor verdere uitbreiding met automatisering</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Microsoft Fabric","AI Agents","Azure","Data Analytics"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Agentgerichte interactie met data en context",
                "Ondersteuning voor snellere analyse en vraagstelling",
                "Focus op bruikbare inzichten in plaats van losse data",
                "Basis voor verdere uitbreiding met automatisering"
        ],
      impact:       [
                "Toegankelijkere data: gebruikers kunnen sneller richting inzichten werken",
                "Meer productiviteit: analysevragen worden ondersteund door een agentgerichte flow",
                "Innovatieve basis: het project legt de basis voor AI-ondersteunde dataworkflows"
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
      id: "shield",
      title: "SHIELD",
      description: "A business application focused on centralizing, securing, and clarifying operational processes. The focus is on clear workflows, reliable data, and a user-friendly interface for daily follow-up.",
      fullDescription: `
        <h2>SHIELD</h2>
        <p>SHIELD is an operational platform that brings processes, controls, and follow-up into one clear application.</p>

        <h3>Project Overview</h3>
        <p>SHIELD is an operational platform that brings processes, controls, and follow-up into one clear application.</p>
        <ul>
          <li>Streamlined workflow for operational follow-up</li>\n          <li>Clear screens for statuses, actions, and responsibilities</li>\n          <li>Focus on reliability, traceability, and usability</li>\n          <li>Support for scalable business processes</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","Azure","SQL"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Streamlined workflow for operational follow-up",
                "Clear screens for statuses, actions, and responsibilities",
                "Focus on reliability, traceability, and usability",
                "Support for scalable business processes"
        ],
      impact:       [
                "More overview: users can see ongoing actions, statuses, and priorities faster",
                "Better follow-up: processes are managed more consistently through clear steps and centralized data",
                "More professional workflow: the application helps replace manual tracking with a structured digital flow"
        ],
      developmentStatus: "completed"
    },
    {
      id: "bird",
      title: "BIRD",
      description: "An application concept around structured data, analysis, and workflow support. BIRD focuses on turning complex information into usable insights and clear actions.",
      fullDescription: `
        <h2>BIRD</h2>
        <p>BIRD combines data, logic, and user interaction in a clear tool for analysis and decision-making.</p>

        <h3>Project Overview</h3>
        <p>BIRD combines data, logic, and user interaction in a clear tool for analysis and decision-making.</p>
        <ul>
          <li>Clear visualization of important information</li>\n          <li>Support for structured analysis flows</li>\n          <li>User-friendly interface for complex data</li>\n          <li>Modular setup for further expansion</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","Azure"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Clear visualization of important information",
                "Support for structured analysis flows",
                "User-friendly interface for complex data",
                "Modular setup for further expansion"
        ],
      impact:       [
                "Faster interpretation: complex information becomes more accessible to users",
                "Better decisions: data is translated into concrete insights",
                "Scalable foundation: the solution can be extended with extra modules and automation"
        ],
      developmentStatus: "completed"
    },
    {
      id: "stockdetail",
      title: "StockDetail",
      description: "An inventory-focused application that makes detailed stock information, movements, and availability easier to understand. The application supports more efficient follow-up and better data quality.",
      fullDescription: `
        <h2>StockDetail</h2>
        <p>StockDetail helps users consult, interpret, and follow up inventory data faster.</p>

        <h3>Project Overview</h3>
        <p>StockDetail helps users consult, interpret, and follow up inventory data faster.</p>
        <ul>
          <li>Clear display of stock details</li>\n          <li>Support for filtering, detailed analysis, and follow-up</li>\n          <li>Focus on data quality and transparency</li>\n          <li>User-friendly screens for operational users</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Vue","TypeScript",".NET","SQL","Azure"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Clear display of stock details",
                "Support for filtering, detailed analysis, and follow-up",
                "Focus on data quality and transparency",
                "User-friendly screens for operational users"
        ],
      impact:       [
                "More transparency: inventory data becomes faster and clearer to consult",
                "More efficient follow-up: users spend less time searching through scattered information",
                "Better data quality: detailed information is made more consistently visible"
        ],
      developmentStatus: "completed"
    },
    {
      id: "approval-automation",
      title: "Approval Automation",
      description: "An automation solution for approval processes. The project reduces manual steps by bringing requests, checks, and decisions into a clear digital flow.",
      fullDescription: `
        <h2>Approval Automation</h2>
        <p>Approval Automation digitizes approval flows so requests can be processed faster, more consistently, and with better traceability.</p>

        <h3>Project Overview</h3>
        <p>Approval Automation digitizes approval flows so requests can be processed faster, more consistently, and with better traceability.</p>
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
                "Less manual work: recurring approval steps are automated",
                "Faster turnaround: requests can be followed up more efficiently",
                "Better control: decisions and statuses remain centrally visible"
        ],
      developmentStatus: "completed"
    },
    {
      id: "tender-2-quote",
      title: "Tender 2 Quote",
      description: "An AI-powered automation that analyzes tender documents shared in Microsoft Teams and turns them into a usable quote. Built with n8n and the Claude API to eliminate manual document processing.",
      fullDescription: `
        <h2>Tender 2 Quote</h2>
        <p>Tender 2 Quote is an automated workflow that detects tender documents in Microsoft Teams, analyzes them, and automatically translates them into quote information.</p>

        <h3>Project Overview</h3>
        <p>As soon as a user drops a tender document into a Teams channel, an n8n workflow picks it up and sends the content to the Claude API for analysis. The AI extracts the relevant information and returns it in a structured format ready to use for the quote.</p>
        <ul>
          <li>Automatic detection of documents in Microsoft Teams</li>\n          <li>AI-driven analysis of tender documents via the Claude API</li>\n          <li>Automated n8n workflow from document to quote information</li>\n          <li>Significant reduction in manual document processing</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["n8n","Claude API","Microsoft Teams","Workflow Automation"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Automatic detection of documents in Microsoft Teams",
                "AI-driven analysis of tender documents via the Claude API",
                "Automated n8n workflow from document to quote information",
                "Significant reduction in manual document processing"
        ],
      impact:       [
                "Less manual work: tender documents are read automatically instead of reviewed by hand",
                "Faster turnaround: quote information is available as soon as the document is shared",
                "More consistent output: the AI analysis produces repeatable, structured information"
        ],
      developmentStatus: "completed"
    },
    {
      id: "discount-tree",
      title: "Discount Tree",
      description: "A module within SHIELD for modeling and managing discount structures. Discount Tree makes complex conditions easier to understand and helps users manage discounts in a controlled way.",
      fullDescription: `
        <h2>Discount Tree</h2>
        <p>Discount Tree is a module within the SHIELD platform that visualizes and manages discount logic in a tree structure, making complex pricing agreements clearer.</p>

        <h3>Project Overview</h3>
        <p>As part of SHIELD, Discount Tree visualizes and manages discount logic in a tree structure, making complex pricing agreements clearer.</p>
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
                "More insight: complex discount rules become easier to understand",
                "Better control: conditions can be managed more consistently",
                "Fewer mistakes: clear structure helps reduce confusion in pricing logic"
        ],
      developmentStatus: "completed"
    },
    {
      id: "testpipelines-shield-stockdetail",
      title: "Testpipelines SHIELD & StockDetail",
      description: "A testing and CI/CD setup for SHIELD and StockDetail. The project focuses on more reliable releases through automated checks and repeatable pipelines.",
      fullDescription: `
        <h2>Testpipelines SHIELD & StockDetail</h2>
        <p>The test pipelines support more stable delivery by adding automated checks to the development and release flow.</p>

        <h3>Project Overview</h3>
        <p>The test pipelines support more stable delivery by adding automated checks to the development and release flow.</p>
        <ul>
          <li>Automated test steps in the pipeline</li>\n          <li>Support for repeatable builds and checks</li>\n          <li>Better feedback when changes are introduced</li>\n          <li>Foundation for more stable releases</li>
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
                "Foundation for more stable releases"
        ],
      impact:       [
                "More reliable releases: issues become visible earlier in the process",
                "Faster feedback: developers get clearer signals when changes are made",
                "More confidence: automated checks support quality across multiple projects"
        ],
      developmentStatus: "completed"
    },
    {
      id: "fabric-agent",
      title: "Fabric Agent",
      description: "An AI agent concept around Microsoft Fabric and data analysis. The project explores how users can find insights faster through an agent that combines data, context, and actions.",
      fullDescription: `
        <h2>Fabric Agent</h2>
        <p>Fabric Agent explores how AI can make data in Microsoft Fabric more accessible and action-oriented.</p>

        <h3>Project Overview</h3>
        <p>Fabric Agent explores how AI can make data in Microsoft Fabric more accessible and action-oriented.</p>
        <ul>
          <li>Agent-oriented interaction with data and context</li>\n          <li>Support for faster analysis and questioning</li>\n          <li>Focus on usable insights instead of isolated data</li>\n          <li>Foundation for further automation expansion</li>
        </ul>
      `,
      imageUrl: null,
      technologies: ["Microsoft Fabric","AI Agents","Azure","Data Analytics"],
      liveUrl: "",
      repoUrl: "",
      features:       [
                "Agent-oriented interaction with data and context",
                "Support for faster analysis and questioning",
                "Focus on usable insights instead of isolated data",
                "Foundation for further automation expansion"
        ],
      impact:       [
                "More accessible data: users can move toward insights faster",
                "More productivity: analysis questions are supported by an agent-driven flow",
                "Innovative foundation: the project creates a basis for AI-supported data workflows"
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
