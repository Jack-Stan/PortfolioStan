<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { scenarios, type FlowNode } from '../data/flows'

// `only` pins the console to one scenario (used in project details); otherwise it cycles.
const props = defineProps<{ only?: string }>()

const list = computed(() => (props.only ? scenarios.filter((s) => s.id === props.only) : scenarios))
const index = ref(0)
const scenario = computed(() => list.value[index.value])

const shown = ref<{ from: string; to: string; text: string }[]>([])
const active = ref<{ from: string; to: string } | null>(null)
const progress = ref(0)
const done = ref(false)
const log = ref<HTMLElement | null>(null)
const root = ref<HTMLElement | null>(null)

let run = 0
let observer: IntersectionObserver | null = null
const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const nodeById = computed(() => Object.fromEntries(scenario.value.nodes.map((n) => [n.id, n])) as Record<string, FlowNode>)

const edges = computed(() => {
  const seen = new Set<string>()
  return scenario.value.msgs
    .map((m) => [m.from, m.to].sort().join('|'))
    .filter((k) => !seen.has(k) && seen.add(k))
    .map((k) => k.split('|'))
})

const dot = computed(() => {
  if (!active.value) return null
  const a = nodeById.value[active.value.from]
  const b = nodeById.value[active.value.to]
  return { x: a.x + (b.x - a.x) * progress.value, y: a.y + (b.y - a.y) * progress.value }
})

function label(id: string) {
  return nodeById.value[id]?.label ?? id
}

function isHuman(id: string) {
  return !!nodeById.value[id]?.human
}

function isActiveEdge(a: string, b: string) {
  const e = active.value
  return !!e && ((e.from === a && e.to === b) || (e.from === b && e.to === a))
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

function scrollLog() {
  nextTick(() => {
    if (log.value) log.value.scrollTop = log.value.scrollHeight
  })
}

function animateDot(id: number) {
  return new Promise<void>((resolve) => {
    const start = performance.now()
    const step = (t: number) => {
      if (id !== run) return resolve()
      progress.value = Math.min(1, (t - start) / 650)
      if (progress.value < 1) requestAnimationFrame(step)
      else resolve()
    }
    requestAnimationFrame(step)
  })
}

async function play() {
  const id = ++run
  shown.value = []
  done.value = false
  active.value = null

  if (reduced) {
    shown.value = scenario.value.msgs.map((m) => ({ ...m }))
    done.value = true
    scrollLog()
    return
  }

  await wait(400)
  for (const m of scenario.value.msgs) {
    if (id !== run) return
    active.value = { from: m.from, to: m.to }
    progress.value = 0
    await animateDot(id)
    if (id !== run) return
    const entry = { from: m.from, to: m.to, text: '' }
    shown.value.push(entry)
    const current = shown.value[shown.value.length - 1]
    for (const ch of m.text) {
      if (id !== run) return
      current.text += ch
      if (current.text.length % 3 === 0) {
        scrollLog()
        await wait(14)
      }
    }
    scrollLog()
    await wait(isHuman(m.from) ? 900 : 650)
  }
  active.value = null
  done.value = true

  if (list.value.length > 1) {
    await wait(4500)
    if (id !== run) return
    index.value = (index.value + 1) % list.value.length
    play()
  }
}

function select(i: number) {
  index.value = i
  play()
}

onMounted(() => {
  if (!root.value) return
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        observer?.disconnect()
        play()
      }
    },
    { threshold: 0.3 },
  )
  observer.observe(root.value)
})

onBeforeUnmount(() => {
  run++
  observer?.disconnect()
})
</script>

<template>
  <div ref="root" class="console">
    <div class="bar">
      <span class="live">replay</span>
      <div v-if="list.length > 1" class="tabs" role="tablist" aria-label="Agent flows">
        <button
          v-for="(s, i) in list"
          :key="s.id"
          role="tab"
          :aria-selected="i === index"
          :class="{ on: i === index }"
          @click="select(i)"
        >
          {{ s.title }}
        </button>
      </div>
      <button class="replay" aria-label="Replay this flow" @click="play">↻</button>
    </div>

    <svg viewBox="-12 0 424 190" class="graph" aria-hidden="true">
      <line
        v-for="[a, b] in edges"
        :key="a + b"
        :x1="nodeById[a].x"
        :y1="nodeById[a].y"
        :x2="nodeById[b].x"
        :y2="nodeById[b].y"
        :class="['edge', { hot: isActiveEdge(a, b) }]"
      />
      <circle v-if="dot" :cx="dot.x" :cy="dot.y" r="4.5" class="dot" />
      <g
        v-for="n in scenario.nodes"
        :key="n.id"
        :class="['node', { human: n.human, lit: active && (active.from === n.id || active.to === n.id) }]"
        :transform="`translate(${n.x} ${n.y})`"
      >
        <rect :x="-(n.label.length * 4 + 14)" y="-13" :width="n.label.length * 8 + 28" height="26" rx="13" />
        <text text-anchor="middle" dy="4">{{ n.label }}</text>
      </g>
    </svg>

    <div ref="log" class="log" aria-live="off">
      <div v-for="(m, i) in shown" :key="i" :class="['msg', { human: isHuman(m.from) }]">
        <span class="route">{{ label(m.from) }} → {{ label(m.to) }}</span>
        <span class="text">{{ m.text }}<span v-if="i === shown.length - 1 && !done" class="caret"></span></span>
      </div>
    </div>

    <p class="caption">{{ scenario.caption }}</p>
  </div>
</template>

<style scoped>
.console {
  background: var(--bg-sunken);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  overflow: hidden;
  font-family: var(--mono);
}
.bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px 8px 14px;
  border-bottom: 1px solid var(--line);
  background: var(--bg-raised);
}
.live {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.75rem;
  color: var(--muted);
  flex-shrink: 0;
}
.tabs {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1;
}
.tabs button,
.replay {
  font-family: var(--mono);
  font-size: 0.72rem;
  background: none;
  border: 1px solid transparent;
  color: var(--faint);
  padding: 3px 8px;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
}
.tabs button:hover,
.replay:hover {
  color: var(--text);
}
.tabs button.on {
  color: var(--accent);
  border-color: var(--accent-dim);
}
.replay {
  margin-left: auto;
  font-size: 0.9rem;
}
.graph {
  display: block;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  height: auto;
  padding: 10px 6px 0;
}
.edge {
  stroke: var(--line-strong);
  stroke-width: 1.2;
  stroke-dasharray: 3 4;
  transition: stroke 0.2s;
}
.edge.hot {
  stroke: var(--accent);
  stroke-dasharray: none;
}
.dot {
  fill: var(--accent);
}
.node rect {
  fill: var(--bg-raised);
  stroke: var(--line-strong);
  transition: stroke 0.2s, fill 0.2s;
}
.node text {
  fill: var(--muted);
  font-family: var(--mono);
  font-size: 11px;
}
.node.human rect {
  stroke: rgba(251, 191, 36, 0.45);
}
.node.human text {
  fill: var(--amber);
}
.node.lit rect {
  stroke: var(--accent);
  fill: #e7eedf;
}
.node.lit text {
  fill: var(--text);
}
.node.human.lit rect {
  stroke: var(--amber);
  fill: #f7e4da;
}
.log {
  height: 196px;
  overflow-y: auto;
  padding: 6px 14px 10px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  scrollbar-width: thin;
}
.msg {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.8rem;
  line-height: 1.5;
}
.route {
  font-size: 0.68rem;
  color: var(--accent);
}
.msg.human .route {
  color: var(--amber);
}
.text {
  color: var(--text);
  font-family: var(--sans);
  font-size: 0.86rem;
}
.caret {
  display: inline-block;
  width: 7px;
  height: 0.95em;
  margin-left: 2px;
  vertical-align: -1px;
  background: var(--accent);
  animation: blink 1s steps(1) infinite;
}
.caption {
  margin: 0;
  padding: 8px 14px 10px;
  border-top: 1px solid var(--line);
  font-size: 0.7rem;
  color: var(--faint);
  font-family: var(--sans);
}
@media (max-width: 480px) {
  .live {
    font-size: 0;
    gap: 0;
  }
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
