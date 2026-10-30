<script setup lang="ts">
import { stack } from '../data/profile'
</script>

<template>
  <div class="stack">
    <h3>Tools I reach for</h3>
    <dl>
      <div v-for="group in stack" :key="group.title">
        <dt>{{ group.title }}</dt>
        <dd>{{ group.items.join(', ') }}</dd>
      </div>
    </dl>
  </div>
</template>

<style scoped>
.stack {
  margin-top: 56px;
}
h3 {
  font-size: 1.3rem;
  margin: 0 0 12px;
}
dl {
  margin: 0;
}
dl div {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 28px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
}
dt {
  font-family: var(--sans);
  font-size: 0.8rem;
  color: var(--faint);
  padding-top: 3px;
  text-transform: capitalize;
}
dd {
  margin: 0;
  color: var(--muted);
}
@media (max-width: 680px) {
  dl div {
    grid-template-columns: 1fr;
    gap: 2px;
  }
}
</style>
