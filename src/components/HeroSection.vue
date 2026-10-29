<script setup lang="ts">
import AgentConsole from './AgentConsole.vue'
import { profile } from '../data/profile'
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero-grid">
      <div class="intro">
        <img :src="profile.photo" :alt="profile.name" class="avatar" width="64" height="64" />
        <h1>{{ profile.name }}</h1>
        <p class="role">{{ profile.role }}</p>
        <p class="lede">
          I build agents that hand work to each other, and the n8n flows and MCP servers they run on. Right now at Attentia.
          Before that I was primary author of five production MCP servers at RF-Technologies.
        </p>
        <p class="hint">The console is a replay of how my agents actually talk. <span class="human">Amber</span> is a person, <span class="agent">green</span> is an agent.</p>
        <div class="links-row">
          <a href="#projects">See the projects</a>
          <a :href="profile.cv" target="_blank" rel="noopener">CV (PDF)</a>
          <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
          <a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
      <AgentConsole />
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 80px;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 56px;
  align-items: center;
}
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: 22px;
}
h1 {
  font-size: clamp(2.6rem, 6vw, 4rem);
  line-height: 1;
  margin: 0;
}
.role {
  color: var(--muted);
  font-style: italic;
  margin: 14px 0 22px;
}
.lede {
  font-size: 1.08rem;
  max-width: 32rem;
  margin: 0 0 14px;
}
.hint {
  font-size: 0.85rem;
  color: var(--faint);
  margin: 0 0 28px;
  max-width: 30rem;
}
.human {
  color: var(--amber);
}
.agent {
  color: var(--accent);
}
@media (max-width: 860px) {
  .hero {
    padding-top: 48px;
  }
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
