<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import type { Project } from '../data/projects'
import FlowDiagram from './FlowDiagram.vue'
import AgentConsole from './AgentConsole.vue'
import StatusBadge from './StatusBadge.vue'

defineProps<{ project: Project }>()
const emit = defineEmits<{ close: [] }>()

const closeBtn = ref<HTMLButtonElement | null>(null)
let lastFocus: Element | null = null

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(async () => {
  lastFocus = document.activeElement
  window.addEventListener('keydown', onKey)
  await nextTick()
  closeBtn.value?.focus()
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  if (lastFocus instanceof HTMLElement) lastFocus.focus()
})
</script>

<template>
  <div class="backdrop" @click.self="emit('close')">
    <div class="modal" role="dialog" aria-modal="true" :aria-labelledby="`title-${project.id}`">
      <div class="bar">
        <span class="path">~/projects/{{ project.id }}</span>
        <button ref="closeBtn" class="close" aria-label="Close" @click="emit('close')">esc ✕</button>
      </div>
      <div class="content">
        <div class="meta">
          <span>{{ project.context }} · {{ project.year }}</span>
          <StatusBadge :status="project.status" />
        </div>
        <h2 :id="`title-${project.id}`">{{ project.title }}</h2>
        <p class="summary">{{ project.summary }}</p>

        <img v-if="project.image" :src="project.image" :alt="`${project.title} screenshot`" class="shot" loading="lazy" />

        <div v-if="project.scenario" class="block">
          <h3># watch it run</h3>
          <AgentConsole :only="project.scenario" />
        </div>
        <div v-else-if="project.flow" class="block">
          <h3># flow</h3>
          <FlowDiagram :steps="project.flow" />
        </div>

        <div class="block">
          <h3># highlights</h3>
          <ul>
            <li v-for="h in project.highlights" :key="h">{{ h }}</li>
          </ul>
        </div>

        <div v-for="g in project.groups" :key="g.title" class="block">
          <h3># {{ g.title.toLowerCase() }}</h3>
          <ul>
            <li v-for="item in g.items" :key="item">{{ item }}</li>
          </ul>
        </div>

        <p v-if="project.note" class="note">! {{ project.note }}</p>

        <div class="block">
          <h3># stack</h3>
          <div class="tags">
            <span v-for="t in project.stack" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>

        <div v-if="project.repoUrl || project.liveUrl" class="links">
          <a v-if="project.liveUrl" :href="project.liveUrl" class="btn primary" target="_blank" rel="noopener">live site</a>
          <a v-if="project.repoUrl" :href="project.repoUrl" class="btn" target="_blank" rel="noopener">source on github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(3, 6, 9, 0.78);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 5vh 16px;
  overflow-y: auto;
}
.modal {
  width: 100%;
  max-width: 760px;
  background: var(--bg-raised);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  overflow: hidden;
}
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  border-bottom: 1px solid var(--line);
  background: var(--bg-sunken);
  font-family: var(--mono);
  font-size: 0.8rem;
}
.path {
  color: var(--faint);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.close {
  background: none;
  border: 1px solid var(--line-strong);
  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.75rem;
  padding: 3px 8px;
  border-radius: 6px;
  cursor: pointer;
}
.close:hover {
  color: var(--accent);
  border-color: var(--accent);
}
.content {
  padding: 26px 28px 30px;
}
.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--faint);
}
h2 {
  margin: 12px 0 10px;
  font-size: 1.6rem;
  letter-spacing: -0.02em;
}
.summary {
  color: var(--muted);
  margin: 0 0 8px;
}
.shot {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--line);
  margin-top: 16px;
}
.block {
  margin-top: 24px;
}
h3 {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--accent);
  margin: 0 0 10px;
  font-weight: 500;
}
ul {
  margin: 0;
  padding-left: 18px;
}
li {
  margin-bottom: 7px;
  font-size: 0.95rem;
}
li::marker {
  color: var(--accent-dim);
}
.note {
  margin: 24px 0 0;
  padding: 10px 14px;
  border-left: 3px solid var(--amber);
  background: rgba(251, 191, 36, 0.06);
  color: var(--amber);
  font-family: var(--mono);
  font-size: 0.82rem;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.links {
  display: flex;
  gap: 10px;
  margin-top: 28px;
  flex-wrap: wrap;
}
@media (max-width: 600px) {
  .content {
    padding: 20px 18px 24px;
  }
}
</style>
