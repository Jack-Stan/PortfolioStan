<script setup lang="ts">
import { computed } from 'vue'
import data from '../data/contributions.json'
import { profile } from '../data/profile'

type Day = { date: string; level: number }
const days = data.days as Day[]

// Columns are weeks starting on Sunday, like GitHub's own calendar.
const weeks = computed(() => {
  if (!days.length) return [] as (Day | null)[][]
  const first = new Date(days[0].date + 'T00:00:00Z').getUTCDay()
  const cells: (Day | null)[] = [...Array(first).fill(null), ...days]
  const out: (Day | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) out.push(cells.slice(i, i + 7))
  return out
})
</script>

<template>
  <figure v-if="days.length" class="contrib" aria-label="GitHub contributions over the last year">
    <figcaption>
      <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>:
      <template v-if="data.total !== null">{{ data.total }} contributions in the last year</template>
      <template v-else>the last year</template>
    </figcaption>
    <div class="grid" role="img" :aria-label="`${data.total ?? ''} GitHub contributions in the last year`">
      <div v-for="(w, i) in weeks" :key="i" class="week">
        <span v-for="(d, j) in w" :key="j" class="cell" :class="d ? `l${d.level}` : 'pad'" :title="d?.date" />
      </div>
    </div>
    <p class="note">Private and client repos count here too, without showing any of their code.</p>
  </figure>
</template>

<style scoped>
.contrib { margin: 28px 0 0; }
figcaption { font-family: var(--sans); font-size: 0.9rem; color: var(--muted); margin-bottom: 10px; }
.grid { display: flex; gap: 3px; overflow-x: auto; padding-bottom: 4px; }
.week { display: grid; grid-template-rows: repeat(7, 11px); gap: 3px; }
.cell { width: 11px; height: 11px; border-radius: 2px; background: var(--bg-sunken); }
.cell.pad { background: transparent; }
.l1 { background: #d6dfcc; }
.l2 { background: var(--accent-dim); }
.l3 { background: #74905f; }
.l4 { background: var(--accent); }
.note { font-family: var(--sans); font-size: 0.8rem; color: var(--faint); margin: 8px 0 0; }
</style>
