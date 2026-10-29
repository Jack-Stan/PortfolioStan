<script setup lang="ts">
import { about, profile } from '../data/profile'
</script>

<template>
  <section id="about" class="container reveal">
    <p class="section-head"><span class="prompt">$</span> cat about.md</p>
    <h2 class="section-title">About</h2>
    <div class="grid">
      <img :src="profile.photo" :alt="profile.name" class="photo" width="220" height="220" loading="lazy" />
      <div class="text">
        <p v-for="(p, i) in about" :key="i">{{ p }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 40px;
  align-items: start;
}
.photo {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  padding: 4px;
  border: 1px solid var(--accent-dim);
  box-shadow: 0 0 0 6px var(--bg), 0 0 40px -8px rgba(94, 234, 212, 0.35);
}
.text p {
  margin: 0 0 16px;
  color: var(--muted);
  max-width: 44rem;
}
.text p:first-child {
  color: var(--text);
}
@media (max-width: 680px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .photo {
    width: 140px;
    height: 140px;
  }
}
</style>
