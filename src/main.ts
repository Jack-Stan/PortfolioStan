import { createSSRApp } from 'vue'
import App from './App.vue'
import './style.css'

// Hydrates the HTML that scripts/prerender.mjs baked in at build time.
createSSRApp(App).mount('#app')
