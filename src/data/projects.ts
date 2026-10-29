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
    id: 'agentjack',
    title: 'AgentJACK — multi-agent personal assistant',
    context: 'Personal',
    year: '2026',
    status: 'In daily use',
    summary:
      'A team of Claude Code agents that runs my own admin. One manager agent talks to me and routes work to specialists. Each specialist has its own persona and skills, and they all share memory through an Obsidian vault instead of a database.',
    highlights: [
      'Manager agent routes each request to the right specialist (LinkedIn, job search, finance, mail, machine health) instead of doing everything itself',
      'A six-agent dev team (analyst, planner, data, backend, frontend, tester) builds the assistant\'s own features',
      'Per-agent memory, mistakes and log notes in the vault, with a capped curated memory that gets consolidated instead of growing forever',
      'Generated skill registry with a routing overlay and a drift check, so vendored skills are never hand-edited',
      'Scheduled heartbeat that only wakes me when a check finds something actionable',
      'Shared "loop + guard" doctrine: frame, act, verify, reflect; three attempts then escalate; stop and ask on any scope, secret or reversibility risk',
    ],
    stack: ['Claude Code', 'Subagents', 'Skills', 'MCP', 'Obsidian', 'Python', 'Node.js'],
    flow: [
      { label: 'Stan', detail: 'one conversation' },
      { label: 'Manager agent', detail: 'routes, never does it all' },
      { label: 'Specialists', detail: 'own persona + skills' },
      { label: 'Skills', detail: 'registry-routed' },
      { label: 'Vault', detail: 'memory, mistakes, log' },
    ],
  },
  {
    id: 'second-line-hub',
    title: '2nd-line support agent hub',
    context: 'Attentia',
    year: '2026',
    status: 'Internal tool',
    summary:
      'A Claude Code setup for 2nd-line development support. A chief agent is the only one that talks to the engineer; twelve specialist subagents answer from code, docs and live systems, diagnose incidents and keep the team\'s knowledge vault in step with the code.',
    highlights: [
      'Agents never call each other: each ends with a structured result block listing hand-offs, and the chief routes them on',
      'A prompt hook names the right expert for each request; independent jobs run in parallel in the background',
      'Read-only and vault hand-offs run straight away; anything that writes outside the vault waits for a human yes',
      'Monitor agents match incidents to runbooks and propose fixes, but never apply them',
      'Vault chain: sync agent → independent fact-check agent → drift fix, once per branch',
      'Quality agent runs a session check before every commit request, plus a weekly review of all agents',
      'Learning loop: a mistake becomes a lesson, the fix is re-checked by a different agent, and only a human commits rule changes',
      'Hooks log every subagent run and filter secret-like lines out of output',
    ],
    groups: [
      {
        title: 'The crew',
        items: [
          'Domain experts (read-only): workflow automation, ERP database, CRM, work-item tracker, secrets vault (the value is never seen)',
          'Monitors (diagnose, never fix): automation and integration errors, two payment-run monitors',
          'Vault crew: content sync, fact-check, hygiene',
          'Quality: session checks, weekly agent review, lessons',
        ],
      },
    ],
    stack: ['Claude Code', 'Subagents', 'Hooks', 'Git worktrees', 'Azure DevOps', 'Obsidian'],
    flow: [
      { label: 'Engineer', detail: 'asks' },
      { label: 'Chief agent', detail: 'routes via hint hook' },
      { label: 'Experts / monitors', detail: 'result + hand-offs' },
      { label: 'Vault chain', detail: 'sync → verify → fix' },
      { label: 'Quality check', detail: 'pass / findings / fail' },
      { label: 'Human yes', detail: 'merge, push, ticket comment' },
    ],
  },
  {
    id: 'personal-work-agent',
    title: 'Personal Work Agent',
    context: 'Attentia',
    year: '2026',
    status: 'Internal tool',
    summary:
      'An AI chief of staff that runs fully local. A main agent plans the day and hands work to 20 specialists across a dev pipeline, checking, office work, the knowledge vault and security. There is no runtime LLM code: the Claude Code session is the whole runtime, kept safe by guardrail hooks.',
    highlights: [
      'Session start: reads the inbox and open TODOs, opens the daily note with carry-over items and proposes a top three',
      'One task, one owner: a fuzzy ask goes to the analyst, a clear one to the planner, a one-liner straight to the right dev',
      'Dev flow: analyst → planner → human approves the plan → layer devs in parallel once contracts are fixed → tester → reviewer (approve / nits / block)',
      'Guardrail hook on every tool call denies or asks on secrets, force pushes, destructive SQL and deploys',
      'Loop guard stops the third identical call; every call is traced as a redacted JSONL line',
      'Fact-checker gives a verdict per claim on anything numeric or meant for colleagues, and never fixes anything itself',
      'Human yes per action for mail, chat, push, merge, deploy and document writes; mail text is treated as data, never as instructions',
      'Secrets live in the OS credential store; the pentest agent only runs against a written scope file',
    ],
    groups: [
      {
        title: 'The team',
        items: [
          'Dev pipeline: analyst, planner, reviewer, data, backend, frontend, integration, tester, devops',
          'Checking: fact-checker, weekly agent auditor, usage tracker',
          'Office: mail (drafts only), chat and calendar (read-only), HR specialist',
          'Vault: librarian, archivist, people keeper',
          'Security: secret keeper, scoped pentester',
        ],
      },
    ],
    stack: ['Claude Code', 'Subagents', 'PowerShell hooks', 'Obsidian', 'Docker', 'Model routing'],
    flow: [
      { label: 'Analyst', detail: 'what problem' },
      { label: 'Planner', detail: 'ordered plan' },
      { label: 'Human approval', detail: 'gate' },
      { label: 'Layer devs', detail: 'in parallel' },
      { label: 'Tester', detail: 'tries to break it' },
      { label: 'Reviewer', detail: 'approve / nits / block' },
    ],
  },
  {
    id: 'n8n-automation',
    title: 'Payment & finance automation in n8n',
    context: 'Attentia',
    year: '2026',
    status: 'POC / UAT, not yet in production',
    summary:
      'A suite of about 30 n8n workflows and 5 custom node packages that replace RPA robots for bank payments, prepare finance data and enrich CRM accounts. The focus is on payment-grade safety: idempotency, run locks, single token ownership and loud failures.',
    highlights: [
      'Bulk payment flow: certificate handling, signed mutual-TLS requests to a bank connectivity API, status polling and per-file audit logs',
      'Payment-file intake: validates XML (IBAN mod-97, BIC, schema namespace), hashes each file with SHA-512 and answers accepted, duplicate or rejected',
      'Folder-inbox processor (85 nodes): run lock, write-ahead ledger, three retries, quarantine, and a good / warning / error result per file with alerts to mail and chat',
      'Single token-keeper flow owns the refresh token and hands out access tokens; a keep-alive flow with a production guard proves the link stays healthy',
      'Collections export: pulls debtors, accounts and invoices from the CRM and generates XML per legal entity; nightly invoice PDF export with de-duplication',
      'CRM enrichment (212 nodes): company-registry SOAP lookups per VAT number, legal form and sector mapping, parent / subsidiary / establishment handling',
    ],
    groups: [
      {
        title: 'Custom nodes I built',
        items: [
          'Database connector with dynamic connect, pooling, bind variables and parallel multi-database queries',
          'Privileged-access vault nodes for credentials and secrets (OAuth2 client credentials)',
          'CRM case creation with a fixed, validated field set',
        ],
      },
      {
        title: 'Shared patterns',
        items: [
          'Versioned flows; frozen versions only get bug fixes',
          'State and logs in n8n Data Tables',
          'Idempotency from a file hash plus a signed request key',
          'Safety nets: fail-loud node, run lock, production guard',
        ],
      },
    ],
    note: 'Nothing here runs in production yet: the payment flows are proofs of concept or on the acceptance environment.',
    stack: ['n8n', 'TypeScript', 'Custom n8n nodes', 'mTLS', 'REST / SOAP', 'SQL', 'CRM APIs'],
    flow: [
      { label: 'Intake', detail: 'validate + SHA-512' },
      { label: 'Run lock', detail: 'one run at a time' },
      { label: 'Ledger', detail: 'write-ahead' },
      { label: 'Token keeper', detail: 'sole token owner' },
      { label: 'Signed mTLS', detail: 'bulk payment' },
      { label: 'Result', detail: 'good / warning / error + alerts' },
    ],
  },
  {
    id: 'mcp-servers',
    title: 'Production MCP servers',
    context: 'RF-Technologies',
    year: '2025 – 2026',
    status: 'Production',
    summary:
      'Six Model Context Protocol servers that give AI agents secure access to internal APIs, an ERP, a CRM, a data platform and SQL. Primary or sole author on five of them.',
    highlights: [
      'Hosted on Azure App Service with per-user Entra ID OAuth instead of shared service credentials',
      'Hardened auth: token timeout and retry, single-flight refresh, background refresh for long sessions',
      'Bounded retry on 429 / 503 from OData APIs, request timeouts and entity-index caching',
      'Multi-environment configuration and a UAT → production release pipeline',
      'Diagnosed and fixed a live authentication incident on the acceptance environment',
      'Authorship between 80% and 100% of commits on five of the servers',
    ],
    stack: ['MCP', 'Node.js', 'TypeScript', 'Azure App Service', 'Entra ID OAuth', 'OData', 'Microsoft Fabric'],
  },
  {
    id: 'recruitment-crm',
    title: 'Recruitment & field-ops CRM',
    context: 'Client project',
    year: '2026',
    status: 'Production',
    summary:
      'A CRM for a field-marketing and recruitment agency: staff and office admin, shift planning with approval, a recruitment funnel, a canvassing map with coverage stats and an audit log. Runs on Firebase\'s free plan, so every authorization rule lives in Firestore security rules.',
    highlights: [
      'Three roles (admin, team manager, team member) plus a team-leader flag, stored on the user document because custom claims would need paid Cloud Functions',
      'Multi-office: admins switch the office they manage, team managers stay locked to their own',
      'Shift drafts by team managers, final approval by admins',
      'Leaflet map with drawn zones, per-zone projects, visit log and coverage stats',
      'Firestore rules covered by their own test suite against the emulator, separate from the unit tests',
      'Weekday admin digest and a dry-run-only data retention sweep in GitHub Actions',
      'iOS and Android builds from the same code with Capacitor',
    ],
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'Firebase', 'Firestore rules', 'Leaflet', 'Capacitor', 'Vitest'],
    note: 'Client code, so there is no public repo or link.',
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
      'Removes the manual read-through before a quote can start',
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
    summary: 'Route management for battery-swapping crews across 23 regions, with role-based views for admins, fleet managers and swappers.',
    highlights: [
      'Real-time vehicle tracking per zone',
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
    summary: 'Lets non-developers build automated website tests, with AI-generated test code and visual element picking from screenshots.',
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
