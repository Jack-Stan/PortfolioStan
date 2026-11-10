// Injects the server-rendered app into dist/index.html after `vite build`.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { resolve, dirname } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const { render } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href)
const html = await render()
const file = resolve(root, 'dist/index.html')
const page = readFileSync(file, 'utf8')
if (!page.includes('<div id="app"></div>')) throw new Error('#app placeholder not found in dist/index.html')
writeFileSync(file, page.replace('<div id="app"></div>', `<div id="app">${html}</div>`))
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`prerendered ${html.length} chars into dist/index.html`)
