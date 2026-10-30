export interface MapNode {
  id: string
  label: string
  x: number
  y: number
  col: 'people' | 'agents' | 'tools' | 'systems'
  note: string
  // project id to open, or a section anchor
  link?: string
}

// A map of where my work sits, from the people it serves to the systems underneath.
// Systems are named by kind only. Coordinates are in a 560 x 330 viewBox.
export const nodes: MapNode[] = [
  { id: 'me', label: 'Me', x: 52, y: 110, col: 'people', note: 'Functional analyst turned automation engineer.', link: '#about' },
  { id: 'colleagues', label: 'Colleagues', x: 52, y: 220, col: 'people', note: 'The people most of this work is for.' },

  { id: 'personal', label: 'Personal agents', x: 190, y: 60, col: 'agents', note: 'My own assistant team. Runs my admin every day.', link: 'agent-team' },
  { id: 'work', label: 'Work agent', x: 190, y: 165, col: 'agents', note: 'A main agent and twenty specialists for my working day.', link: 'personal-work-agent' },
  { id: 'support', label: 'Support agents', x: 190, y: 270, col: 'agents', note: 'A chief and twelve specialists for 2nd-line support.', link: 'second-line-hub' },

  { id: 'mcp', label: 'MCP servers', x: 340, y: 95, col: 'tools', note: 'Five production servers, each user signs in as themselves.', link: 'mcp-servers' },
  { id: 'n8n', label: 'n8n flows', x: 340, y: 200, col: 'tools', note: 'Around 30 flows. The payment ones are still POC / UAT.', link: 'n8n-automation' },
  { id: 'apps', label: 'Web apps', x: 340, y: 295, col: 'tools', note: 'Vue and Firebase apps, like a recruitment CRM in production.', link: 'recruitment-crm' },

  { id: 'erp', label: 'ERP', x: 495, y: 40, col: 'systems', note: 'The systems underneath. Named by kind only, never by product.' },
  { id: 'crm', label: 'CRM', x: 495, y: 105, col: 'systems', note: 'The systems underneath. Named by kind only, never by product.' },
  { id: 'data', label: 'Data', x: 495, y: 170, col: 'systems', note: 'The systems underneath. Named by kind only, never by product.' },
  { id: 'bank', label: 'Banking', x: 495, y: 235, col: 'systems', note: 'The systems underneath. Named by kind only, never by product.' },
  { id: 'sql', label: 'SQL', x: 495, y: 300, col: 'systems', note: 'The systems underneath. Named by kind only, never by product.' },
]

export const edges: [string, string][] = [
  ['me', 'personal'],
  ['me', 'work'],
  ['colleagues', 'support'],
  ['colleagues', 'apps'],
  ['personal', 'mcp'],
  ['work', 'mcp'],
  ['work', 'n8n'],
  ['support', 'mcp'],
  ['support', 'n8n'],
  ['mcp', 'erp'],
  ['mcp', 'crm'],
  ['mcp', 'data'],
  ['mcp', 'sql'],
  ['n8n', 'crm'],
  ['n8n', 'bank'],
  ['apps', 'sql'],
]
