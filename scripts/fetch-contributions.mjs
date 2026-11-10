// Fetches the public GitHub contribution calendar at build time and writes
// src/data/contributions.json. Never fails the build: on any error it keeps
// the last committed file, so the site still ships (the section hides when empty).
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'

const USER = 'Jack-Stan'
const out = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/contributions.json')

export function parse(html) {
  const days = []
  for (const m of html.matchAll(/<td\b[^>]*\bdata-date="(\d{4}-\d{2}-\d{2})"[^>]*>/g)) {
    const level = m[0].match(/\bdata-level="(\d)"/)
    days.push({ date: m[1], level: level ? Number(level[1]) : 0 })
  }
  days.sort((a, b) => a.date.localeCompare(b.date))
  const t = html.match(/([\d,]+)\s+contributions?\s+in the last year/i)
  return { total: t ? Number(t[1].replace(/,/g, '')) : null, days }
}

async function main() {
  try {
    const res = await fetch(`https://github.com/users/${USER}/contributions`, {
      headers: { 'User-Agent': 'portfolio-build' },
      signal: AbortSignal.timeout(15000),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = parse(await res.text())
    if (data.days.length < 300) throw new Error(`only ${data.days.length} days parsed`)
    writeFileSync(out, JSON.stringify({ user: USER, fetched: new Date().toISOString(), ...data }) + '\n')
    console.log(`contributions: ${data.total} over ${data.days.length} days`)
  } catch (e) {
    console.warn(`contributions: fetch skipped (${e.message}); keeping the committed file`)
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main()
