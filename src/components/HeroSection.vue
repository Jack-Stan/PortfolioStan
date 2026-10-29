<script setup lang="ts">
import AgentConsole from './AgentConsole.vue'
import { profile } from '../data/profile'
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero-grid">
      <div class="intro">
        <img :src="profile.photo" :alt="profile.name" class="avatar" width="72" height="72" />
        <h1>{{ profile.name }}</h1>
        <p class="role">{{ profile.role }}</p>
        <p class="lede">
          I build agents that hand work to each other, and the n8n flows and MCP servers they run on. Right now at Attentia;
          before that I was primary author of five production MCP servers at RF-Technologies.
        </p>
        <p class="hint">That console is a replay of how my agents actually talk. Switch flows at the top.</p>
        <div class="ctas">
          <a href="#projects" class="btn primary">view projects</a>
          <a :href="profile.cv" class="btn" target="_blank" rel="noopener">download cv</a>
          <a :href="profile.github" class="btn" target="_blank" rel="noopener">github</a>
        </div>
      </div>
      <AgentConsole />
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 72px;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 48px;
  align-items: center;
}
.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid var(--accent-dim);
  padding: 3px;
  margin-bottom: 18px;
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
  margin: 0 0 12px;
}
.hint {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--faint);
  margin: 0 0 26px;
}
.ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
@media (max-width: 860px) {
  .hero {
    padding-top: 48px;
  }
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .hint {
    display: none;
  }
}
</style>
