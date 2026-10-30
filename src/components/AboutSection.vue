<script setup lang="ts">
import { about, profile } from '../data/profile'
</script>

<template>
  <section id="about" class="container">
    <h2 class="section-title">About</h2>
    <div class="grid">
      <img :src="profile.photo" :alt="profile.name" class="photo" width="170" height="170" loading="lazy" />
      <div class="text">
        <p v-for="(p, i) in about" :key="i">{{ p }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 28px;
  align-items: start;
}
.photo {
  width: 170px;
  height: 170px;
  border-radius: 50%;
}
.text p {
  margin: 0 0 18px;
  max-width: 40rem;
}
.text p:first-child {
  font-family: var(--serif);
  font-size: 1.35rem;
  line-height: 1.45;
}
@media (max-width: 680px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .photo {
    width: 120px;
    height: 120px;
  }
}
</style>
