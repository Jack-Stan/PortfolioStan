<script setup lang="ts">
import { profile } from '../data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <section id="contact" class="container">
    <h2 class="section-title">Contact</h2>
    <p class="lede">Happy to talk automation, agents or MCP. Mail is the quickest way to reach me:</p>
    <p class="mail"><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></p>
    <div class="links-row">
      <a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
      <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
      <a :href="profile.cv" target="_blank" rel="noopener">CV (PDF)</a>
    </div>
  </section>
  <footer class="container footer">
    <span>© {{ year }} {{ profile.name }}</span>
    <span>Built by hand with Vue, and some help from my agents.</span>
  </footer>
</template>

<style scoped>
.lede {
  color: var(--muted);
  margin: 0 0 8px;
}
.mail {
  font-family: var(--serif);
  font-size: clamp(1.4rem, 4vw, 2.2rem);
  margin: 0 0 22px;
  overflow-wrap: anywhere;
}
.footer {
  font-family: var(--sans);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 110px;
  padding-top: 22px;
  padding-bottom: 36px;
  border-top: 1px solid var(--line);
  font-size: 0.82rem;
  color: var(--faint);
}
</style>
