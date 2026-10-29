<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ status: string }>()

const tone = computed(() => {
  const s = props.status.toLowerCase()
  if (s.includes('poc') || s.includes('uat')) return 'amber'
  if (s.includes('production') || s.includes('daily')) return 'green'
  if (s.includes('internal')) return 'violet'
  return 'grey'
})
</script>

<template>
  <span class="badge" :class="tone"><span class="led"></span>{{ status }}</span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid currentColor;
}
.led {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}
.green {
  color: var(--accent);
}
.amber {
  color: var(--amber);
}
.violet {
  color: var(--violet);
}
.grey {
  color: var(--muted);
}
</style>
