export interface FlowNode {
  id: string
  label: string
  x: number
  y: number
  human?: boolean
}

export interface FlowMsg {
  from: string
  to: string
  text: string
}

export interface Scenario {
  id: string
  title: string
  caption: string
  nodes: FlowNode[]
  msgs: FlowMsg[]
}

// Illustrative replays of how the agent setups route work. Roles only, no real names or dates.
// Coordinates are in the console's 400 x 190 SVG viewBox.
export const scenarios: Scenario[] = [
  {
    id: 'assistant',
    title: 'personal assistant',
    caption: 'Illustrative: how my personal agent team checks whether a job spec is worth applying for. Roles, not names.',
    nodes: [
      { id: 'me', label: 'Me', x: 45, y: 95, human: true },
      { id: 'manager', label: 'Manager', x: 185, y: 95 },
      { id: 'careers', label: 'Careers', x: 345, y: 40 },
      { id: 'finance', label: 'Finance', x: 345, y: 150 },
    ],
    msgs: [
      { from: 'me', to: 'manager', text: 'Is this job spec worth applying for?' },
      { from: 'manager', to: 'careers', text: 'Score it against my CV. No inflating.' },
      { from: 'manager', to: 'finance', text: 'Does the salary range work with my budget?' },
      { from: 'careers', to: 'manager', text: 'Good match on automation, one gap on Kubernetes.' },
      { from: 'finance', to: 'manager', text: 'The bottom of the range is tight but workable.' },
      { from: 'manager', to: 'me', text: 'Worth applying. Mention the MCP work up front.' },
    ],
  },
  {
    id: 'incident',
    title: 'support incident',
    caption: 'Illustrative: how the 2nd-line support hub routes a problem. Details anonymised.',
    nodes: [
      { id: 'eng', label: 'Engineer', x: 52, y: 95, human: true },
      { id: 'chief', label: 'Chief', x: 175, y: 95 },
      { id: 'monitor', label: 'Monitor', x: 330, y: 30 },
      { id: 'expert', label: 'Expert', x: 345, y: 95 },
      { id: 'quality', label: 'Quality', x: 330, y: 160 },
    ],
    msgs: [
      { from: 'eng', to: 'chief', text: 'An overnight run failed. What happened?' },
      { from: 'chief', to: 'monitor', text: 'Match this error against the runbooks.' },
      { from: 'chief', to: 'expert', text: 'Read-only: what changed in that flow recently?' },
      { from: 'monitor', to: 'chief', text: 'Known timeout pattern. Proposed fix attached. Not applied.' },
      { from: 'expert', to: 'chief', text: 'One recent commit touched the retry settings.' },
      { from: 'chief', to: 'eng', text: 'Likely cause plus a proposed fix. Apply it?' },
      { from: 'eng', to: 'chief', text: 'Yes.' },
      { from: 'chief', to: 'quality', text: 'Session check before the commit.' },
      { from: 'quality', to: 'chief', text: 'Pass, one finding: write the lesson down.' },
    ],
  },
  {
    id: 'dev-flow',
    title: 'build flow',
    caption: 'Illustrative: the build pipeline in my work agent. Nothing gets coded before I approve the plan.',
    nodes: [
      { id: 'me', label: 'Me', x: 40, y: 95, human: true },
      { id: 'analyst', label: 'Analyst', x: 145, y: 35 },
      { id: 'planner', label: 'Planner', x: 260, y: 35 },
      { id: 'devs', label: 'Devs', x: 355, y: 95 },
      { id: 'tester', label: 'Tester', x: 260, y: 158 },
      { id: 'reviewer', label: 'Reviewer', x: 145, y: 158 },
    ],
    msgs: [
      { from: 'me', to: 'analyst', text: 'Colleagues keep asking for the same report. Can we automate it?' },
      { from: 'analyst', to: 'planner', text: 'Problem, users, what done looks like, what is out of scope.' },
      { from: 'planner', to: 'me', text: 'Four steps, two owners, one risk. OK to start?' },
      { from: 'me', to: 'planner', text: 'Go.' },
      { from: 'planner', to: 'devs', text: 'Contracts fixed. Backend and frontend in parallel.' },
      { from: 'devs', to: 'tester', text: 'Done. Try to break it.' },
      { from: 'tester', to: 'reviewer', text: 'One edge case found and fixed. Tests green.' },
      { from: 'reviewer', to: 'me', text: 'Approve, with two nits.' },
    ],
  },
]
