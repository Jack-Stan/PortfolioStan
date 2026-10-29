<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { profile } from '../data/profile'

interface Line {
  cmd: string
  out: string
}

const script: Line[] = [
  { cmd: 'whoami', out: `${profile.name}, ${profile.role}` },
  { cmd: 'cat now.txt', out: `${profile.employer}: n8n flows, MCP servers, agents for colleagues` },
  { cmd: 'ls focus/', out: profile.focus.join('   ') },
]

// Each entry is the visible part of a line; output lines appear whole once their command is typed.
const shown = ref<{ cmd: string; out: string | null }[]>([])
const done = ref(false)

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = script.map((l) => ({ ...l }))
    done.value = true
    return
  }
  const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))
  await wait(300)
  for (const line of script) {
    const entry = { cmd: '', out: null as string | null }
    shown.value.push(entry)
    const current = shown.value[shown.value.length - 1]
    for (const ch of line.cmd) {
      current.cmd += ch
      await wait(45)
    }
    await wait(220)
    current.out = line.out
    await wait(380)
  }
  done.value = true
})
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero-grid">
      <div class="intro">
        <h1>{{ profile.name }}</h1>
        <p class="role">{{ profile.role }}</p>
        <p class="lede">
          Automation Engineer at Attentia, building n8n flows and Claude Code agent setups. Before that I was primary author
          of five production MCP servers on Azure, with per-user Entra sign-in.
        </p>
        <div class="ctas">
          <a href="#projects" class="btn primary">view projects</a>
          <a :href="profile.cv" class="btn" target="_blank" rel="noopener">download cv</a>
          <a :href="profile.github" class="btn" target="_blank" rel="noopener">github</a>
        </div>
      </div>

      <div class="terminal" role="img" aria-label="Terminal showing who Stan is and what he works on">
        <div class="bar">
          <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
          <span class="title">stan@portfolio: ~</span>
        </div>
        <div class="body" aria-hidden="true">
          <template v-for="(l, i) in shown" :key="i">
            <div><span class="ps">$</span> {{ l.cmd }}<span v-if="l.out === null" class="caret"></span></div>
            <div v-if="l.out !== null" class="out">{{ l.out }}</div>
          </template>
          <div v-if="done"><span class="ps">$</span> <span class="caret"></span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 96px 0 40px;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 48px;
  align-items: center;
}
.kicker {
  font-family: var(--mono);
  color: var(--faint);
  font-size: 0.9rem;
  margin: 0 0 14px;
}
h1 {
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  line-height: 1.05;
  margin: 0;
  letter-spacing: -0.03em;
}
.role {
  font-family: var(--mono);
  color: var(--accent);
  margin: 12px 0 18px;
}
.lede {
  color: var(--muted);
  max-width: 34rem;
  margin: 0 0 28px;
}
.ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.terminal {
  background: var(--bg-sunken);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  box-shadow: 0 30px 80px -30px rgba(94, 234, 212, 0.18);
  overflow: hidden;
  font-family: var(--mono);
  font-size: 0.88rem;
}
.bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--line);
  background: var(--bg-raised);
}
.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.dot.r {
  background: #ff5f57;
}
.dot.y {
  background: #febc2e;
}
.dot.g {
  background: #28c840;
}
.title {
  margin-left: 10px;
  color: var(--faint);
  font-size: 0.8rem;
}
.body {
  padding: 18px 18px 22px;
  min-height: 230px;
  line-height: 1.75;
  overflow-wrap: anywhere;
}
.ps {
  color: var(--accent);
}
.out {
  color: var(--muted);
  margin-bottom: 8px;
}
.caret {
  display: inline-block;
  width: 8px;
  height: 1.05em;
  vertical-align: -2px;
  background: var(--accent);
  animation: blink 1.1s steps(1) infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
@media (max-width: 860px) {
  .hero {
    padding-top: 56px;
  }
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>
