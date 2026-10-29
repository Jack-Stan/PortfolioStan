<script setup lang="ts">
import { stack } from '../data/profile'
</script>

<template>
  <section id="stack" class="container reveal">
    <p class="section-head"><span class="prompt">$</span> ls -R stack/</p>
    <h2 class="section-title">Stack</h2>
    <div class="grid">
      <div v-for="group in stack" :key="group.title" class="group">
        <h3>{{ group.title }}/</h3>
        <ul>
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}
.group {
  background: var(--bg-raised);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 18px 20px;
}
@media (max-width: 860px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 520px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
h3 {
  font-family: var(--mono);
  font-size: 0.95rem;
  color: var(--accent);
  margin: 0 0 10px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.93rem;
}
li {
  padding: 3px 0;
  color: var(--text);
}
li::before {
  content: '├─ ';
  font-family: var(--mono);
  color: var(--faint);
}
li:last-child::before {
  content: '└─ ';
}
</style>
