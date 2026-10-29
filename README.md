# PortfolioStan

My portfolio site: [sjvportfolio.netlify.app](https://sjvportfolio.netlify.app).

Vue 3 + TypeScript + Vite, no UI framework. All the content (projects, experience, stack) lives in
`src/data/`, so updating the site means editing data, not components.

```bash
npm ci
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
```

Deployed on Netlify from `main` (`netlify.toml`).

Work projects for employers and clients are described by what they do and how they're built,
without internal system names, so there are no repo links for those.
