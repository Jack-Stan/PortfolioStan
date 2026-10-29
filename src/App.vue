<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import ProjectModal from './components/ProjectModal.vue'
import { featured, alsoBuilt, type Project } from './data/projects'

const all = [...featured, ...alsoBuilt]
const selected = ref<Project | null>(null)

// Project details are deep-linkable as #project/<id>.
function syncFromHash() {
  const match = location.hash.match(/^#project\/(.+)$/)
  selected.value = match ? all.find((p) => p.id === match[1]) ?? null : null
}

function open(project: Project) {
  location.hash = `project/${project.id}`
}

function close() {
  history.pushState(null, '', location.pathname + '#projects')
  selected.value = null
}

watch(selected, (p) => {
  document.body.style.overflow = p ? 'hidden' : ''
})

onMounted(() => {
  syncFromHash()
  window.addEventListener('hashchange', syncFromHash)
})
</script>

<template>
  <TheNav />
  <main>
    <HeroSection />
    <ProjectsSection :featured="featured" :also-built="alsoBuilt" @open="open" />
    <ExperienceSection />
    <AboutSection />
    <ContactSection />
  </main>
  <ProjectModal v-if="selected" :project="selected" @close="close" />
</template>
