<script setup lang="ts">
import { experience, extras } from '../data/profile'
</script>

<template>
  <section id="experience" class="container reveal">
    <p class="section-head"><span class="prompt">$</span> git log --career</p>
    <h2 class="section-title">Experience</h2>
    <ol class="timeline">
      <li v-for="job in experience" :key="job.org">
        <span class="period">{{ job.period }}</span>
        <div>
          <h3>{{ job.role }} <span class="org">· {{ job.org }}</span></h3>
          <p>{{ job.text }}</p>
        </div>
      </li>
    </ol>
    <dl class="extras">
      <div v-for="x in extras" :key="x.label">
        <dt>{{ x.label }}</dt>
        <dd>{{ x.value }}</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 1px solid var(--line-strong);
}
li {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 20px;
  padding: 0 0 26px 22px;
  position: relative;
}
li::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 8px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--bg);
  border: 1px solid var(--accent);
}
li:first-child::before {
  background: var(--accent);
}
.period {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--faint);
  padding-top: 3px;
}
h3 {
  margin: 0 0 4px;
  font-size: 1.05rem;
}
.org {
  color: var(--accent);
  font-weight: 500;
}
p {
  margin: 0;
  color: var(--muted);
  max-width: 42rem;
}
.extras {
  margin: 12px 0 0;
  display: grid;
  gap: 10px;
}
.extras div {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 20px;
}
dt {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--faint);
  padding-top: 2px;
}
dd {
  margin: 0;
  color: var(--muted);
}
@media (max-width: 600px) {
  .extras div {
    grid-template-columns: 1fr;
    gap: 2px;
  }
  li {
    grid-template-columns: 1fr;
    gap: 2px;
  }
}
</style>
