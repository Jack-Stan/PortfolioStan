<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ status: string }>()

// Only a not-yet-in-production status gets colour; it is the one a reader must not miss.
const warn = computed(() => /poc|uat/i.test(props.status))
</script>

<template>
  <span class="status" :class="{ warn }">{{ status }}</span>
</template>

<style scoped>
.status {
  font-family: var(--serif);
  font-size: 0.9rem;
  font-style: italic;
  color: var(--muted);
}
.warn {
  color: var(--amber);
}
</style>
