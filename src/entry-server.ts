import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'

// Used only at build time by scripts/prerender.mjs, so crawlers and
// link previews get the real page instead of an empty #app.
export async function render(): Promise<string> {
  return renderToString(createSSRApp(App))
}
