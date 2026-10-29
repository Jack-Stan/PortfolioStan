<script setup lang="ts">
import { ref } from 'vue'
import { profile } from '../data/profile'

const open = ref(false)
const links = [
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#stack', label: 'stack' },
  { href: '#about', label: 'about' },
  { href: '#contact', label: 'contact' },
]
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <a href="#top" class="brand">~/stan<span class="cursor">_</span></a>
      <button class="burger" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <span></span><span></span>
      </button>
      <nav :class="{ open }">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false">./{{ l.label }}</a>
        <a :href="profile.cv" class="cv" target="_blank" rel="noopener">cv.pdf</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(11, 15, 20, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
.brand {
  font-family: var(--mono);
  font-weight: 700;
  color: var(--text);
}
.brand:hover {
  text-decoration: none;
}
.cursor {
  color: var(--accent);
  animation: blink 1.1s steps(1) infinite;
}
nav {
  display: flex;
  gap: 22px;
  font-family: var(--mono);
  font-size: 0.9rem;
}
nav a {
  color: var(--muted);
}
nav a:hover {
  color: var(--accent);
  text-decoration: none;
}
nav .cv {
  color: var(--accent);
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
  height: 2px;
  margin: 5px 0;
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
    padding: 14px 20px;
    border-top: 1px solid var(--line);
  }
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
