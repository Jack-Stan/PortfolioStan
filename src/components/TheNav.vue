<script setup lang="ts">
import { ref } from 'vue'
import { profile } from '../data/profile'

const open = ref(false)
const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <a href="#top" class="brand">{{ profile.name }}</a>
      <button class="burger" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <span></span><span></span>
      </button>
      <nav :class="{ open }">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false">{{ l.label }}</a>
        <a :href="profile.cv" target="_blank" rel="noopener">CV</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
.brand {
  font-family: var(--serif);
  font-size: 1.15rem;
  font-weight: 600;
  text-decoration: none;
}
nav {
  display: flex;
  gap: 26px;
  font-family: var(--sans);
  font-size: 0.92rem;
}
nav a {
  color: var(--muted);
  text-decoration: none;
}
nav a:hover {
  color: var(--text);
}
.burger {
  display: none;
  background: none;
  border: 0;
  padding: 8px;
  cursor: pointer;
}
.burger span {
  display: block;
  width: 22px;
  height: 1.5px;
  margin: 6px 0;
  background: var(--text);
}
@media (max-width: 680px) {
  .burger {
    display: block;
  }
  nav {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--bg);
    border-bottom: 1px solid var(--line);
  }
  nav.open {
    display: flex;
  }
  nav a {
    padding: 14px 24px;
    border-top: 1px solid var(--line);
  }
}
</style>
