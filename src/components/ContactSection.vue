<script setup lang="ts">
import { profile } from '../data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <section id="contact" class="container reveal">
    <p class="section-head"><span class="prompt">$</span> ./contact --open</p>
    <h2 class="section-title">Let's talk</h2>
    <p class="lede">Happy to talk automation, agents and MCP. Mail is the fastest way to reach me.</p>
    <div class="links">
      <a :href="`mailto:${profile.email}`" class="btn primary">{{ profile.email }}</a>
      <a :href="profile.linkedin" class="btn" target="_blank" rel="noopener">linkedin</a>
      <a :href="profile.github" class="btn" target="_blank" rel="noopener">github</a>
      <a :href="profile.cv" class="btn" target="_blank" rel="noopener">cv.pdf</a>
    </div>
  </section>
  <footer class="container footer">
    <span>© {{ year }} {{ profile.name }}</span>
    <span>built with vue + vite · <a href="#top">cd ~</a></span>
  </footer>
</template>

<style scoped>
.lede {
  color: var(--muted);
  max-width: 36rem;
  margin: 0 0 24px;
}
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.links .primary {
  overflow-wrap: anywhere;
}
.footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 88px;
  padding-top: 24px;
  padding-bottom: 32px;
  border-top: 1px solid var(--line);
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--faint);
}
</style>
