<script setup lang="ts">
import type { Project } from '../data/projects'
import FlowDiagram from './FlowDiagram.vue'
import StatusBadge from './StatusBadge.vue'
import { profile } from '../data/profile'

defineProps<{ featured: Project[]; alsoBuilt: Project[] }>()
const emit = defineEmits<{ open: [project: Project] }>()
</script>

<template>
  <section id="projects" class="container">
    <div class="reveal">
      <p class="section-head"><span class="prompt">$</span> ls projects/ --featured</p>
      <h2 class="section-title">Projects</h2>
    </div>

    <div class="featured">
      <article v-for="p in featured" :key="p.id" class="card reveal">
        <button class="card-hit" :aria-label="`Open details for ${p.title}`" @click="emit('open', p)"></button>
        <header>
          <span class="context">{{ p.context }} · {{ p.year }}</span>
          <StatusBadge :status="p.status" />
        </header>
        <h3>{{ p.title }}</h3>
        <p class="summary">{{ p.summary }}</p>
        <FlowDiagram v-if="p.flow" :steps="p.flow" compact />
        <div class="tags">
          <span v-for="t in p.stack.slice(0, 5)" :key="t" class="tag">{{ t }}</span>
        </div>
        <span class="more">details →</span>
      </article>
    </div>

    <div class="also reveal">
      <p class="section-head"><span class="prompt">$</span> ls projects/ --also-built</p>
      <ul>
        <li v-for="p in alsoBuilt" :key="p.id">
          <button @click="emit('open', p)">
            <span class="name">{{ p.title }}</span>
            <span class="meta">{{ p.context }} · {{ p.year }}</span>
            <span class="stack">{{ p.stack.slice(0, 3).join(' · ') }}</span>
          </button>
        </li>
      </ul>
      <a :href="profile.github" class="btn" target="_blank" rel="noopener">more on github →</a>
    </div>
  </section>
</template>

<style scoped>
.featured {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: var(--bg-raised);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 22px;
  transition: border-color 0.2s, transform 0.2s;
}
.card:hover,
.card:focus-within {
  border-color: var(--accent-dim);
  transform: translateY(-2px);
}
.card-hit {
  position: absolute;
  inset: 0;
  width: 100%;
  background: none;
  border: 0;
  cursor: pointer;
  border-radius: var(--radius);
  z-index: 1;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.context {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--faint);
}
h3 {
  margin: 0;
  font-size: 1.2rem;
  letter-spacing: -0.01em;
}
.summary {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}
.more {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--accent);
}
.also {
  margin-top: 56px;
}
.also ul {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  border-top: 1px solid var(--line);
}
.also li {
  border-bottom: 1px solid var(--line);
}
.also button {
  width: 100%;
  display: grid;
  grid-template-columns: 1.3fr 1fr 1.2fr;
  gap: 12px;
  align-items: baseline;
  padding: 14px 4px;
  background: none;
  border: 0;
  color: var(--text);
  text-align: left;
  cursor: pointer;
  font: inherit;
}
.also button:hover .name {
  color: var(--accent);
}
.name {
  font-weight: 600;
}
.meta,
.stack {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--muted);
}
@media (max-width: 860px) {
  .featured {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .card :deep(.flow) {
    display: none;
  }
  .also button {
    grid-template-columns: 1fr;
    gap: 2px;
  }
}
</style>
