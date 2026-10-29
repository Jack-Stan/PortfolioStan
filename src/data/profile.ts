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
  "I started out as a developer, moved into functional analysis, and now work as an Automation Engineer at Attentia. I build n8n automations, MCP servers and agent setups that take repetitive work off people's plates, and I do 2nd-line development support on the systems behind them.",
  "The part I enjoy most is working out what a business problem actually needs before anyone writes code, and then making sure the solution still holds up in production. A background in Vue, .NET and SQL means I can read the code, question a design choice, and check a fix myself.",
  "Before Attentia I was Functional Analyst and Lead Developer at RF-Technologies, where I owned business-critical applications from analysis to production debugging and built the company's production MCP servers. Outside work I build my own agents, including a multi-agent personal assistant and a Claude Code + Kali Linux setup for security testing.",
]

export const stack: { title: string; items: string[] }[] = [
  { title: 'agents', items: ['Claude Code', 'Subagents & hooks', 'MCP servers', 'Claude API', 'OpenAI API', 'Prompt & tool design'] },
  { title: 'automation', items: ['n8n', 'Custom n8n nodes', 'Power Automate', 'REST / SOAP / OData', 'mTLS & OAuth2'] },
  { title: 'frontend', items: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'React', 'Flutter'] },
  { title: 'backend', items: ['.NET / C#', 'Node.js', 'SQL Server', 'Oracle SQL', 'Firebase'] },
  { title: 'cloud & delivery', items: ['Azure', 'Entra ID', 'Azure DevOps CI/CD', 'GitHub Actions', 'Playwright', 'Docker'] },
  { title: 'analysis', items: ['Functional analysis', 'Requirements', 'Process mapping', 'Production debugging'] },
]
