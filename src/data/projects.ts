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
    title: 'MCP servers',
    context: 'RF-Technologies',
    year: '2025 – 2026',
    status: 'Production',
    summary:
      "At RF-Technologies I built the MCP servers our AI agents used to reach the company's own systems: an ERP, a CRM, a data platform, time registration and SQL. I wrote most or all of five of them.",
    highlights: [
      'Each user signs in with their own Microsoft account. No shared service account',
      'Hosted on Azure App Service, with a UAT → production release pipeline',
      'Most of the work went into the dull parts: token refresh, timeouts, retries on 429 and 503, and caching',
      'Diagnosed a sign-in incident on the test environment',
    ],
    stack: ['MCP', 'Node.js', 'TypeScript', 'Azure App Service', 'Entra ID', 'OData'],
  },
  {
    id: 'agentjack',
    title: 'AgentJACK',
    context: 'Personal',
    year: '2026',
    status: 'In daily use',
    summary:
      "My own assistant, built on Claude Code. I talk to one agent, JACK, and he hands the work to specialists: one for LinkedIn, one for job hunting, one for my finances, one for mail, one that keeps an eye on my laptop, and a small dev team that builds new features for the whole thing. They share their memory through an Obsidian vault, so I can open it and read what they know.",
    highlights: [
      'Every agent keeps its own memory, mistakes and log notes. Memory is capped, so it has to be cleaned up instead of just growing',
      'Skills live in one registry that a script rebuilds and checks for drift',
      'A daily check runs over everything and only bothers me when something is actually wrong',
      'Same rules for every agent: three tries, then stop and ask me. Same for anything touching secrets or that can\'t be undone',
    ],
    stack: ['Claude Code', 'Subagents', 'Skills', 'MCP', 'Obsidian', 'Python'],
    flow: [
      { label: 'Me', detail: 'one chat' },
      { label: 'JACK', detail: 'routes the work' },
      { label: 'Specialists', detail: 'each with their own skills' },
      { label: 'Vault', detail: 'shared memory' },
    ],
  },
  {
    id: 'second-line-hub',
    title: '2nd-line support agents',
    context: 'Attentia',
    year: '2026',
    status: 'Internal tool',
    summary:
      "The setup I use for 2nd-line support. One chief agent talks to me, and twelve specialists sit behind him: some know a specific system and only read, some look at errors and match them to a runbook, and a few keep our documentation in line with the code. None of them can push, comment on a ticket or apply a fix without me saying yes.",
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
    title: 'n8n flows for payments and finance',
    context: 'Attentia',
    year: '2026',
    status: 'POC / UAT, not yet in production',
    summary:
      "Around 30 n8n workflows for payments, finance and CRM data. Because a lot of it touches money, most of the work goes into making sure nothing gets processed twice and that a failure is loud instead of silent.",
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
      'Functional analysis, technical lead and production debugging on business-critical enterprise applications.',
    highlights: [
      'Operational workflow and compliance platform with modular domains and event-driven integration',
      'Data analysis tool with controlled schema evolution',
      'Visual discount-rule engine and inventory tracking modules',
      'Automated Azure DevOps CI/CD test pipeline with unified Playwright suites',
      'Approval workflows digitized with Power Automate and SharePoint',
      'Microsoft Fabric medallion architecture with AI-agent data querying (exploration)',
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
      'Documents dropped in a Teams channel are picked up by n8n, analysed with the Claude API and returned as structured quote information.',
    highlights: [
      'Automatic detection of new documents in Microsoft Teams',
      'Structured extraction with the Claude API',
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
    summary: 'Cross-platform time tracking and invoicing for freelancers, from timer to Peppol e-invoice.',
    highlights: [
      'Web, iOS and Android from one Flutter codebase',
      'Projects, tasks and a real-time timer',
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
    summary: 'A route-manager concept for battery-swap crews, modelled on 23 regions, with role-based views for admins, fleet managers and swappers.',
    highlights: [
      'Vehicle tracking per zone',
      'Route optimisation for swap rounds and low-battery detection',
      'Out-of-zone detection and JWT role-based access',
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
    summary: 'Co-built during my internship: lets non-developers build automated website tests, with AI-generated test code and visual element picking from screenshots.',
    highlights: [
      'No-code test builder with AI test-code generation',
      'Visual element selection from website screenshots',
      'Team collaboration and a kanban board',
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
