<script setup lang="ts">
import { experience, extras } from '../data/profile'
import StackSection from './StackSection.vue'
</script>

<template>
  <section id="experience" class="container">
    <h2 class="section-title">Experience</h2>
    <ol class="jobs">
      <li v-for="job in experience" :key="job.org">
        <span class="meta">{{ job.period }}</span>
        <div>
          <h3>{{ job.role }}, <span class="org">{{ job.org }}</span></h3>
          <p>{{ job.text }}</p>
        </div>
      </li>
      <li v-for="x in extras" :key="x.label" class="extra">
        <span class="meta">{{ x.label }}</span>
        <p>{{ x.value }}</p>
      </li>
    </ol>
    <StackSection />
  </section>
</template>

<style scoped>
.jobs {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 28px;
  padding: 22px 0;
  border-bottom: 1px solid var(--line);
}
li:first-child {
  padding-top: 0;
}
li .meta {
  padding-top: 6px;
  text-transform: capitalize;
}
h3 {
  margin: 0 0 6px;
  font-size: 1.3rem;
}
.org {
  font-style: italic;
}
p {
  margin: 0;
  color: var(--muted);
  max-width: 42rem;
}
.extra {
  padding: 12px 0;
}
.extra .meta {
  padding-top: 3px;
}
@media (max-width: 680px) {
  li {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
</style>
