<script setup lang="ts">
import type { Project } from '../data/projects'
import StatusBadge from './StatusBadge.vue'
import { profile } from '../data/profile'

defineProps<{ featured: Project[]; alsoBuilt: Project[] }>()
const emit = defineEmits<{ open: [project: Project] }>()
</script>

<template>
  <section id="projects" class="container">
    <h2 class="section-title">Projects</h2>

    <ol class="featured">
      <li v-for="p in featured" :key="p.id">
        <div class="side">
          <span class="meta">{{ p.year }}</span>
          <span class="meta">{{ p.context }}</span>
        </div>
        <div class="body">
          <h3>
            <button class="title" @click="emit('open', p)">{{ p.title }}</button>
          </h3>
          <p class="summary">{{ p.summary }}</p>
          <p class="foot">
            <StatusBadge :status="p.status" />
            <span class="stack">{{ p.stack.slice(0, 5).join(', ') }}</span>
          </p>
          <button class="more" @click="emit('open', p)">
            {{ p.scenario ? 'Read more and watch it run' : 'Read more' }} →
          </button>
        </div>
      </li>
    </ol>

    <h3 class="also-title">Also built</h3>
    <ul class="also">
      <li v-for="p in alsoBuilt" :key="p.id">
        <button @click="emit('open', p)">
          <span class="name">{{ p.title }}</span>
          <span class="meta">{{ p.context }}, {{ p.year }}</span>
        </button>
      </li>
    </ul>
    <p class="gh">The personal ones have their code on <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>.</p>
  </section>
</template>

<style scoped>
.featured {
  list-style: none;
  margin: 0;
  padding: 0;
}
.featured li {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 28px;
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
}
.featured li:first-child {
  padding-top: 0;
}
.side {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 8px;
}
h3 {
  margin: 0 0 10px;
  font-size: 1.65rem;
  line-height: 1.2;
}
button {
  font: inherit;
  color: inherit;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  text-align: left;
}
.title:hover {
  color: var(--amber);
}
.summary {
  margin: 0 0 14px;
  color: var(--muted);
  max-width: 44rem;
}
.foot {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 18px;
  margin: 0 0 12px;
}
.stack {
  font-size: 0.85rem;
  color: var(--faint);
}
.more {
  font-size: 0.9rem;
  text-decoration: underline;
  text-decoration-color: var(--amber);
  text-underline-offset: 4px;
}
.more:hover {
  color: var(--amber);
}
.also-title {
  font-size: 1.3rem;
  margin: 64px 0 8px;
}
.also {
  list-style: none;
  margin: 0;
  padding: 0;
}
.also li {
  border-bottom: 1px solid var(--line);
}
.also button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 13px 0;
}
.also button:hover .name {
  color: var(--amber);
}
.gh {
  margin-top: 22px;
  font-size: 0.92rem;
  color: var(--muted);
}
@media (max-width: 680px) {
  .featured li {
    grid-template-columns: 1fr;
    gap: 6px;
  }
  .side {
    flex-direction: row;
    gap: 10px;
    padding: 0;
  }
  h3 {
    font-size: 1.4rem;
  }
  .also button {
    flex-direction: column;
    gap: 0;
  }
}
</style>
