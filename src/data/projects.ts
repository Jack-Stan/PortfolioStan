import time2billImg from '../assets/projects/Time2Bill.png'
import brightestImg from '../assets/projects/Brightest.png'

export interface FlowStep {
  label: string
  detail?: string
}

export interface DetailGroup {
  title: string
  items: string[]
}

export interface Project {
  id: string
  title: string
  context: string
  year: string
  status: string
  summary: string
  highlights: string[]
  stack: string[]
  groups?: DetailGroup[]
  flow?: FlowStep[]
  // id of a replayable agent conversation in flows.ts
  scenario?: string
  // short factual margin note, shown in handwriting next to the project
  aside?: string
  note?: string
  repoUrl?: string
  liveUrl?: string
  image?: string
}

// Attentia and client work is described by pattern and architecture only:
// no internal system, vendor, entity or ticket names leave the company.
export const featured: Project[] = [
  {
    id: 'mcp-servers',
    aside: '80–100% of the commits are mine',
    title: 'MCP servers',
    context: 'RF-Technologies',
    year: '2025 – 2026',
    status: 'Production',
    summary:
      "At RF-Technologies I built the MCP servers our AI agents used to reach the company's own systems: an ERP, a CRM, a data platform, time registration and SQL. Five of them are mostly or entirely my code.",
    highlights: [
      'Each user signs in with their own Microsoft account. No shared service account',
      'Hosted on Azure App Service, released from UAT to production through a pipeline',
      'Most of the work went into the dull parts: token refresh, timeouts, retries on 429 and 503, and caching',
      'Diagnosed a sign-in incident on the test environment',
    ],
    stack: ['MCP', 'Node.js', 'TypeScript', 'Azure App Service', 'Entra ID', 'OData'],
  },
  {
    id: 'agentjack',
    scenario: 'assistant',
    aside: 'runs my own admin, every day',
    title: 'Personal agent team',
    context: 'Personal',
    year: '2026',
    status: 'In daily use',
    summary:
      "My own assistant, built on Claude Code. I talk to one manager agent, and it hands the work to specialists: one for LinkedIn, one for job hunting, one for my finances, one for mail, one that keeps an eye on my laptop, and a small dev team that builds new features for the whole thing. They share their memory through an Obsidian vault, so I can open it and read what they know.",
    highlights: [
      'Every agent keeps its own memory, mistakes and log notes. Memory is capped, so it has to be cleaned up instead of just growing',
      'Skills live in one registry that a script rebuilds and checks for drift',
      'A daily check runs over everything and only bothers me when something is actually wrong',
      'Same rules for every agent: three tries, then stop and ask me. Anything touching secrets, or anything that can\'t be undone, waits for me too',
    ],
    stack: ['Claude Code', 'Subagents', 'Skills', 'MCP', 'Obsidian', 'Python'],
    flow: [
      { label: 'Me', detail: 'one chat' },
      { label: 'Manager', detail: 'routes the work' },
      { label: 'Specialists', detail: 'each with their own skills' },
      { label: 'Vault', detail: 'shared memory' },
    ],
  },
  {
    id: 'second-line-hub',
    scenario: 'incident',
    aside: 'nothing ships without my yes',
    title: '2nd-line support agents',
    context: 'Attentia',
    year: '2026',
    status: 'Internal tool',
    summary:
      "The setup I use for 2nd-line support. One chief agent talks to me, and twelve specialists sit behind him: some know a specific system and only read, some look at errors and match them to a runbook, and a few keep our documentation in line with the code. None of them can push, comment on a ticket or apply a fix on their own. That's always my call.",
    highlights: [
      "Agents don't call each other. Each one finishes with a short result and a list of who should pick it up next, and the chief decides",
      'The monitors diagnose and propose a fix. They never apply it',
      'When docs or code change, one agent updates the documentation and a different one checks it',
      "Mistakes get written down as lessons. Whoever fixes something doesn't get to verify their own fix",
      'Before I commit, a quality agent checks the session and says pass, pass with findings, or fail',
    ],
    stack: ['Claude Code', 'Subagents', 'Hooks', 'Git worktrees', 'Azure DevOps'],
    flow: [
      { label: 'Me' },
      { label: 'Chief' },
      { label: 'Specialists' },
      { label: 'Quality check' },
      { label: 'My yes' },
    ],
  },
  {
    id: 'personal-work-agent',
    scenario: 'dev-flow',
    aside: 'no approved plan, no code',
    title: 'Personal Work Agent',
    context: 'Attentia',
    year: '2026',
    status: 'Internal tool',
    summary:
      "A local agent team that helps me run my working day. In the morning it goes through my open to-dos and suggests what to do first. Bigger work goes through an analyst, a planner and a set of developers, then a tester and a reviewer. It's all plain Claude Code, held in check with PowerShell hooks.",
    highlights: [
      'The plan comes back to me before anyone writes code',
      'A hook on every tool call blocks or asks about secrets, force pushes, destructive SQL and deploys',
      'If an agent makes the same call three times, it gets stopped',
      'Anything with numbers in it, or anything going to a colleague, gets checked claim by claim first',
      "Nothing gets sent, pushed or deployed without my yes. Mail is read as data, so a mail can't give the agent orders",
    ],
    stack: ['Claude Code', 'Subagents', 'PowerShell hooks', 'Obsidian', 'Docker'],
    flow: [
      { label: 'Analyst' },
      { label: 'Planner' },
      { label: 'My OK' },
      { label: 'Devs' },
      { label: 'Tester' },
      { label: 'Reviewer' },
    ],
  },
  {
    id: 'n8n-automation',
    aside: 'not live yet, and it says so',
    title: 'n8n flows for payments and finance',
    context: 'Attentia',
    year: '2026',
    status: 'POC / UAT, not yet in production',
    summary:
      "Around 30 n8n workflows for payments, finance and CRM data. Because a lot of it touches money, most of the work goes into making sure nothing gets processed twice and that when something fails, someone hears about it straight away.",
    highlights: [
      'Every incoming file is validated and fingerprinted, so a duplicate gets refused instead of processed again',
      'One run at a time, a log written before anything goes out, and retries that give up loudly instead of silently',
      'Flows for finance exports and for keeping company data in the CRM up to date',
      'A few custom n8n nodes I wrote where the built-in ones fell short',
    ],
    note: "None of this runs in production yet. The payment flows are proofs of concept or still on the test environment.",
    stack: ['n8n', 'TypeScript', 'Custom n8n nodes', 'REST / SOAP', 'SQL'],
  },
  {
    id: 'recruitment-crm',
    aside: 'access rules tested in an emulator',
    title: 'Recruitment CRM',
    context: 'Client project',
    year: '2026',
    status: 'Production',
    summary:
      "A CRM for a field-marketing and recruitment agency. Team managers plan shifts and admins approve them, and recruiters move leads through a funnel. A map shows which areas each team has worked. It runs on Firebase's free plan, which means no server code, so all the access rules live in the Firestore rules.",
    highlights: [
      'Three roles plus a team-leader flag, across multiple offices',
      'Leaflet map with drawn zones and a visit log',
      'The Firestore rules have their own test suite running against the emulator',
      'iOS and Android apps from the same code with Capacitor',
    ],
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind', 'Firebase', 'Leaflet', 'Capacitor'],
    note: "Client work, so there's no public repo or link.",
  },
]

export const alsoBuilt: Project[] = [
  {
    id: 'rf-enterprise',
    title: 'Enterprise applications',
    context: 'RF-Technologies',
    year: '2025 – 2026',
    status: 'Production',
    summary:
      'The day job at RF-Technologies: functional analysis, leading the technical side, and debugging in production on the apps the business ran on.',
    highlights: [
      'A workflow and compliance platform, split into modules per domain, that talks to other systems through events',
      'A data analysis tool where schema changes go through a controlled process',
      'A visual editor for discount rules, plus modules for tracking inventory',
      'Pulled the Playwright suites together into one automated test pipeline in Azure DevOps',
      'Moved approval workflows that used to be manual into Power Automate and SharePoint',
      'Exploration only: a Microsoft Fabric medallion setup that AI agents could query',
    ],
    stack: ['Vue', 'TypeScript', '.NET', 'SQL Server', 'Azure DevOps', 'Power Automate'],
  },
  {
    id: 'document-to-quote',
    title: 'AI document-to-quote automation',
    context: 'RF-Technologies',
    year: '2026',
    status: 'Completed',
    summary:
      'Drop a document in a Teams channel and n8n picks it up, runs it through the Claude API and hands back the details you need to start a quote.',
    highlights: [
      'n8n spots new documents in Teams by itself',
      'Claude pulls the information out into a fixed structure',
      'Nobody has to read the whole document by hand before starting a quote',
    ],
    stack: ['n8n', 'Claude API', 'Microsoft Teams'],
  },
  {
    id: 'time2bill',
    title: 'Time2Bill',
    context: 'Personal',
    year: '2025',
    status: 'Completed',
    summary: 'Time tracking and invoicing for freelancers, all the way from the timer to a Peppol e-invoice.',
    highlights: [
      'Web, iOS and Android from one Flutter codebase',
      'Projects and tasks, with a timer that runs live',
      'PDF invoices, UBL XML export and Peppol e-invoicing',
    ],
    stack: ['Flutter', 'Firebase', 'Cloud Functions', 'UBL / Peppol'],
    repoUrl: 'https://github.com/Jack-Stan/Time2Bill',
    image: time2billImg,
  },
  {
    id: 'route-manager',
    title: 'Battery-swap route manager',
    context: 'Personal',
    year: '2025',
    status: 'Completed',
    summary: 'A concept I built for planning battery-swap rounds, modelled on 23 regions. Admins, fleet managers and swappers each get their own view.',
    highlights: [
      'Vehicle tracking per zone',
      'Works out the swap rounds and flags vehicles running low on battery',
      'Flags vehicles that leave their zone. Access per role with JWT',
    ],
    stack: ['.NET Core', 'React Native', 'TypeScript', 'SQL Server', 'Entity Framework'],
    repoUrl: 'https://github.com/Jack-Stan/AutomatedRoutePlanner',
  },
  {
    id: 'brightest',
    title: 'No-code test automation framework',
    context: 'Brightest (internship)',
    year: '2025',
    status: 'Completed',
    summary: 'Co-built during my internship: a tool that lets people who don\'t code build automated website tests. The AI writes the test code, and you pick page elements by clicking on a screenshot.',
    highlights: [
      'Build a test without code, and the OpenAI API writes the code behind it',
      'Pick page elements straight from a screenshot',
      'A kanban board so a team can work on tests together',
    ],
    stack: ['React', 'Node.js', 'Firebase', 'OpenAI API', 'Puppeteer'],
    image: brightestImg,
  },
  {
    id: 'booking-system',
    title: 'Booking system',
    context: 'Personal',
    year: '2025',
    status: 'Completed',
    summary: 'A small booking system with a Vue frontend and a separate Express + TypeScript backend.',
    highlights: ['Vite + Vue SPA with client-side routing', 'Express + TypeScript API', 'Netlify deployment'],
    stack: ['Vue', 'Vite', 'TypeScript', 'Express'],
    repoUrl: 'https://github.com/Jack-Stan/BookingSysteem',
  },
]
