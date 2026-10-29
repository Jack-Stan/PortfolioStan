<script setup lang="ts">
import type { FlowStep } from '../data/projects'

defineProps<{ steps: FlowStep[]; compact?: boolean }>()
</script>

<template>
  <ol class="flow" :class="{ compact }" aria-label="Flow">
    <li v-for="(s, i) in steps" :key="i">
      <span class="node">{{ s.label }}</span>
      <span v-if="s.detail && !compact" class="detail">{{ s.detail }}</span>
    </li>
  </ol>
</template>

<style scoped>
.flow {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px 0;
  font-family: var(--mono);
}
li {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-right: 26px;
}
li:not(:last-child)::after {
  content: '→';
  position: absolute;
  right: 7px;
  top: 4px;
  color: var(--accent-dim);
}
.node {
  font-size: 0.78rem;
  padding: 4px 9px;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  background: var(--bg-sunken);
  color: var(--text);
  white-space: nowrap;
}
li:first-child .node {
  border-color: var(--accent-dim);
  color: var(--accent);
}
.detail {
  font-size: 0.7rem;
  color: var(--faint);
  margin-top: 4px;
  max-width: 130px;
}
.compact .node {
  font-size: 0.72rem;
  padding: 3px 7px;
}
.compact li {
  padding-right: 22px;
}
.compact li:not(:last-child)::after {
  right: 5px;
  top: 2px;
}
</style>
