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
      <button ref="closeBtn" class="close" aria-label="Close" @click="emit('close')">Close ✕</button>
      <div class="content">
        <p class="meta">{{ project.context }}, {{ project.year }}</p>
        <h2 :id="`title-${project.id}`">{{ project.title }}</h2>
        <StatusBadge :status="project.status" />
        <p class="summary">{{ project.summary }}</p>

        <img v-if="project.image" :src="project.image" :alt="`${project.title} screenshot`" class="shot" loading="lazy" />

        <div v-if="project.scenario" class="block">
          <h3>Watch it run</h3>
          <AgentConsole :only="project.scenario" />
        </div>
        <div v-else-if="project.flow" class="block">
          <h3>How it flows</h3>
          <FlowDiagram :steps="project.flow" />
        </div>

        <div class="block">
          <h3>What it does</h3>
          <ul>
            <li v-for="h in project.highlights" :key="h">{{ h }}</li>
          </ul>
        </div>

        <div v-for="g in project.groups" :key="g.title" class="block">
          <h3>{{ g.title }}</h3>
          <ul>
            <li v-for="item in g.items" :key="item">{{ item }}</li>
          </ul>
        </div>

        <p v-if="project.note" class="note">{{ project.note }}</p>

        <p class="stack"><span class="meta">Built with</span> {{ project.stack.join(', ') }}</p>

        <div v-if="project.repoUrl || project.liveUrl" class="links-row">
          <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener">Live site</a>
          <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noopener">Source on GitHub</a>
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
  background: rgba(8, 7, 6, 0.82);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 5vh 16px;
  overflow-y: auto;
}
.modal {
  position: relative;
  width: 100%;
  max-width: 760px;
  background: var(--bg);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
}
.close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: 0;
  color: var(--muted);
  font: inherit;
  font-size: 0.85rem;
  cursor: pointer;
}
.close:hover {
  color: var(--amber);
}
.content {
  padding: 34px 36px 38px;
}
h2 {
  margin: 6px 0 6px;
  font-size: clamp(1.7rem, 4vw, 2.3rem);
  line-height: 1.15;
  padding-right: 60px;
}
.summary {
  margin: 16px 0 0;
  font-size: 1.05rem;
}
.shot {
  width: 100%;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  margin-top: 22px;
}
.block {
  margin-top: 30px;
}
h3 {
  font-size: 1.2rem;
  margin: 0 0 10px;
}
ul {
  margin: 0;
  padding-left: 20px;
}
li {
  margin-bottom: 8px;
  color: var(--muted);
}
li::marker {
  color: var(--faint);
}
.note {
  margin: 28px 0 0;
  padding-left: 14px;
  border-left: 2px solid var(--amber);
  color: var(--amber);
  font-size: 0.95rem;
}
.stack {
  margin: 28px 0 0;
  color: var(--muted);
}
.stack .meta {
  margin-right: 8px;
}
.links-row {
  margin-top: 26px;
}
@media (max-width: 600px) {
  .content {
    padding: 26px 20px 28px;
  }
}
</style>
