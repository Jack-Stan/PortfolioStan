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
  "The part I actually enjoy most is figuring out what a business problem really needs before anyone writes a line of code, and then making sure the solution holds up once it's built. Knowing .NET, SQL and Vue helps a lot there: I can read the code, question a design choice, and check a fix myself instead of just trusting whatever I'm told.",
  "On a team I'm usually the one asking 'wait, why are we doing it this way' before things get built the wrong way. Outside of work I'm tinkering with my own agents, including a personal assistant that runs half my admin and Claude Code running Kali Linux in Docker so it can pentest websites with real Kali tools.",
]

export const experience = [
  {
    role: 'Automation Engineer',
    org: 'Attentia',
    period: '2026 – now',
    text: 'n8n automations, MCP servers and agent setups for colleagues, 2nd-line dev support, and keeping an eye on bank payments going through the systems.',
  },
  {
    role: 'Functional Analyst & Lead Developer',
    org: 'RF-Technologies',
    period: '2025 – 2026',
    text: 'Owned business-critical enterprise apps from analysis to production debugging. Built the MCP servers our AI agents used, a CI/CD test pipeline, and an n8n + Claude flow that turns tender documents into quotes.',
  },
  {
    role: 'Student Developer',
    org: 'Brightest',
    period: '2025',
    text: 'Internship. Co-built a no-code test automation framework with AI-generated test code (React, Node, Firebase, OpenAI).',
  },
]

export const stack: { title: string; items: string[] }[] = [
  { title: 'agents', items: ['Claude Code', 'Subagents & hooks', 'MCP servers', 'Claude API', 'OpenAI API', 'Prompt & tool design'] },
  { title: 'automation', items: ['n8n', 'Custom n8n nodes', 'Power Automate', 'REST / SOAP / OData', 'mTLS & OAuth2'] },
  { title: 'frontend', items: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'React', 'Flutter'] },
  { title: 'backend', items: ['.NET / C#', 'Node.js', 'SQL Server', 'Oracle SQL', 'Firebase'] },
  { title: 'cloud & delivery', items: ['Azure', 'Entra ID', 'Azure DevOps CI/CD', 'GitHub Actions', 'Playwright', 'Docker'] },
  { title: 'analysis', items: ['Functional analysis', 'Requirements', 'Process mapping', 'Production debugging'] },
]
