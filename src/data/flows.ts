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

// Coordinates are in the console's 400 x 190 SVG viewBox.
export const scenarios: Scenario[] = [
  {
    id: 'this-site',
    title: 'this site, today',
    caption: 'How this portfolio got rebuilt: my message to JACK, and the agents he pulled in. Lightly trimmed.',
    nodes: [
      { id: 'stan', label: 'Stan', x: 45, y: 95, human: true },
      { id: 'jack', label: 'JACK', x: 190, y: 95 },
      { id: 'dec', label: 'DEC', x: 345, y: 40 },
      { id: 'tadhg', label: 'TADHG', x: 345, y: 150 },
    ],
    msgs: [
      { from: 'stan', to: 'jack', text: 'i wanna overhaul my portfolio. vue, new style, and add my attentia stuff' },
      { from: 'jack', to: 'stan', text: "Grand. The Attentia work goes on anonymised: no system, vendor or bank names." },
      { from: 'stan', to: 'jack', text: "it's a bit AI slop lad" },
      { from: 'jack', to: 'dec', text: 'Run a humanizer pass over every line of copy. Flag what still reads as AI.' },
      { from: 'jack', to: 'tadhg', text: 'Read it like a Dublin recruiter. What overclaims, what gives too much away?' },
      { from: 'tadhg', to: 'jack', text: 'MCP servers are the strongest line and they are buried. Put them first.' },
      { from: 'dec', to: 'jack', text: 'The also-built cards read like a CV. Nobody is talking in them.' },
      { from: 'jack', to: 'stan', text: 'Both folded in, build is green. Merge?' },
      { from: 'stan', to: 'jack', text: 'merge it' },
    ],
  },
  {
    id: 'incident',
    title: '2nd-line incident',
    caption: 'How the support hub at Attentia routes a problem. Illustrative, details anonymised.',
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
      { from: 'chief', to: 'expert', text: 'Read-only: what changed in that flow this week?' },
      { from: 'monitor', to: 'chief', text: 'Known timeout pattern. Proposed fix attached. Not applied.' },
      { from: 'expert', to: 'chief', text: 'One commit on Tuesday touched the retry settings.' },
      { from: 'chief', to: 'eng', text: 'Likely cause plus a proposed fix. Want me to apply it?' },
      { from: 'eng', to: 'chief', text: 'yes' },
      { from: 'chief', to: 'quality', text: 'Session check before the commit.' },
      { from: 'quality', to: 'chief', text: 'Pass, one finding: write the lesson down.' },
    ],
  },
  {
    id: 'dev-flow',
    title: 'dev flow',
    caption: 'The build pipeline in my Personal Work Agent. Nothing gets coded before I approve the plan.',
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
      { from: 'me', to: 'planner', text: 'go' },
      { from: 'planner', to: 'devs', text: 'Contracts fixed. Backend and frontend in parallel.' },
      { from: 'devs', to: 'tester', text: 'Done. Try to break it.' },
      { from: 'tester', to: 'reviewer', text: 'One edge case found and fixed. Tests green.' },
      { from: 'reviewer', to: 'me', text: 'APPROVE, with two nits.' },
    ],
  },
]
