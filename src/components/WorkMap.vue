<script setup lang="ts">
import { computed, ref } from 'vue'
import { nodes, edges } from '../data/workmap'

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]))
const active = ref<string | null>(null)
const current = computed(() => (active.value ? byId[active.value] : null))

const columns = [
  { label: 'people', x: 52 },
  { label: 'agents', x: 190 },
  { label: 'built on', x: 340 },
  { label: 'systems', x: 495 },
]

// Gentle S-curve between two nodes, left to right.
function path(a: string, b: string) {
  const p = byId[a]
  const q = byId[b]
  const mid = (p.x + q.x) / 2
  return `M ${p.x} ${p.y} C ${mid} ${p.y}, ${mid} ${q.y}, ${q.x} ${q.y}`
}

function isLit(a: string, b: string) {
  return active.value === a || active.value === b
}

function width(label: string) {
  return label.length * 7.8 + 22
}

function go(id: string) {
  const link = byId[id].link
  if (!link) return
  location.hash = link.startsWith('#') ? link.slice(1) : `project/${link}`
}
</script>

<template>
  <figure class="map">
    <svg viewBox="0 0 560 330" role="group" aria-label="Map of where my work sits, from people to agents to the systems underneath">
      <text v-for="c in columns" :key="c.label" :x="c.x" y="12" class="col" text-anchor="middle">{{ c.label }}</text>

      <g v-for="([a, b], i) in edges" :key="a + b">
        <path :id="`e-${a}-${b}`" :d="path(a, b)" :class="['edge', { lit: isLit(a, b) }]" />
        <circle r="2.6" class="packet">
          <animateMotion :dur="`${2.6 + (i % 7) * 0.45}s`" begin="0s" repeatCount="indefinite">
            <mpath :href="`#e-${a}-${b}`" />
          </animateMotion>
        </circle>
      </g>

      <g
        v-for="n in nodes"
        :key="n.id"
        :class="['node', n.col, { on: active === n.id, link: !!n.link }]"
        :transform="`translate(${n.x} ${n.y})`"
        :tabindex="n.link ? 0 : -1"
        :role="n.link ? 'link' : undefined"
        :aria-label="`${n.label}: ${n.note}`"
        @mouseenter="active = n.id"
        @mouseleave="active = null"
        @focus="active = n.id"
        @blur="active = null"
        @click="go(n.id)"
        @keydown.enter="go(n.id)"
      >
        <rect :x="-width(n.label) / 2" y="-14" :width="width(n.label)" height="28" rx="14" />
        <text text-anchor="middle" dy="4.5">{{ n.label }}</text>
      </g>
    </svg>
    <figcaption>
      <template v-if="current">
        <strong>{{ current.label }}</strong> {{ current.note }}
        <span v-if="current.link" class="cta">Click to open.</span>
      </template>
      <template v-else>Hover or tap a node to see what it is. The dots are work moving through.</template>
    </figcaption>
  </figure>
</template>

<style scoped>
.map {
  margin: 0;
}
svg {
  width: 100%;
  height: auto;
  overflow: visible;
  font-family: var(--sans);
}
.col {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  fill: var(--faint);
}
.edge {
  fill: none;
  stroke: var(--line-strong);
  stroke-width: 1.2;
  transition: stroke 0.2s;
}
.edge.lit {
  stroke: var(--amber);
  stroke-width: 1.6;
}
.packet {
  fill: var(--accent);
  opacity: 0.75;
}
.node rect {
  fill: var(--bg);
  stroke: var(--line-strong);
  transition: fill 0.2s, stroke 0.2s;
}
.node text {
  font-size: 13px;
  fill: var(--text);
}
.node.people rect {
  stroke: var(--amber);
}
.node.agents rect {
  stroke: var(--accent);
}
.node.systems rect {
  fill: var(--bg-raised);
  stroke: var(--line);
}
.node.systems text {
  fill: var(--muted);
}
.node.link {
  cursor: pointer;
}
.node.on rect {
  fill: var(--bg-sunken);
  stroke-width: 1.8;
}
.node:focus {
  outline: none;
}
.node:focus-visible rect {
  stroke: var(--amber);
  stroke-width: 2.4;
}
figcaption {
  font-family: var(--sans);
  font-size: 0.88rem;
  color: var(--muted);
  min-height: 2.8em;
  margin-top: 10px;
}
figcaption strong {
  color: var(--text);
  font-weight: 600;
  margin-right: 4px;
}
.cta {
  color: var(--amber);
}
@media (prefers-reduced-motion: reduce) {
  .packet {
    display: none;
  }
}
</style>
