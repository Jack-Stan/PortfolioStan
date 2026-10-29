export const profile = {
  name: 'Stan Verbruggen',
  role: 'Automation Engineer & Full-Stack Developer',
  employer: 'Attentia',
  location: 'Belgium',
  email: 'stanverbruggen@protonmail.com',
  github: 'https://github.com/Jack-Stan',
  linkedin: 'https://www.linkedin.com/in/stan-verbruggen-67b928198',
  cv: '/data/cv/StanVCV.pdf',
  photo: '/data/photo/stanpffoto.png',
  focus: ['multi-agent systems', 'MCP servers', 'n8n automation', 'Vue + .NET'],
}

export const about = [
  "I started out as a developer, moved into functional analysis, and these days I work as an Automation Engineer at Attentia. I build n8n flows, MCP servers and agent setups for my colleagues, and I do 2nd-line support on the systems they run on.",
  "What I enjoy most is working out what a business problem actually needs before anyone writes code, and then checking the fix holds up once it's built. Because I know .NET, SQL and Vue, I can read the code and test a fix myself instead of taking someone's word for it.",
  "On a team I'm usually the one asking 'wait, why are we doing it this way' before things get built the wrong way. Outside of work I'm tinkering with my own agents, including AgentJACK, the assistant further up this page, and a security agent: Claude Code driving Kali Linux in Docker, which I use for bug bounties on Intigriti, on in-scope targets only.",
]

export const experience = [
  {
    role: 'Automation Engineer',
    org: 'Attentia',
    period: 'Oct 2026 – now',
    text: 'n8n automations, MCP servers and agent setups for colleagues, 2nd-line dev support, and keeping an eye on the bank payments going through it all.',
  },
  {
    role: 'Functional Analyst & Lead Developer',
    org: 'RF-Technologies',
    period: 'Sep 2025 – Oct 2026',
    text: 'Analysis, lead development and production debugging on the apps the business ran on. Built the MCP servers our AI agents used, a CI/CD test pipeline, and an n8n + Claude flow that pulls quote details out of tender documents.',
  },
  {
    role: 'Software Developer Intern',
    org: 'Brightest',
    period: 'Feb – May 2025',
    text: 'Co-built a no-code test automation framework with AI-generated test code (React, Node, Firebase, OpenAI).',
  },
]

export const extras = [
  { label: 'education', value: 'Associate Degree in Software Development (Graduaat Programmeren), 2025 · Oracle Database 12c: SQL Fundamentals, 2022' },
  { label: 'languages', value: 'Dutch (native) · English (fluent) · French (intermediate)' },
]

export const stack: { title: string; items: string[] }[] = [
  { title: 'agents', items: ['Claude Code', 'Subagents & hooks', 'MCP servers', 'Claude API', 'OpenAI API', 'Prompt & tool design'] },
  { title: 'automation', items: ['n8n', 'Custom n8n nodes', 'Power Automate', 'REST / SOAP / OData', 'mTLS & OAuth2'] },
  { title: 'frontend', items: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'React', 'Flutter'] },
  { title: 'backend', items: ['.NET / C#', 'Node.js', 'SQL Server', 'Oracle SQL', 'Firebase'] },
  { title: 'cloud & delivery', items: ['Azure', 'Entra ID', 'Azure DevOps CI/CD', 'GitHub Actions', 'Playwright', 'Docker'] },
  { title: 'analysis', items: ['Functional analysis', 'Requirements', 'Process mapping', 'Production debugging'] },
]
