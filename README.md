# Upadrasta Harsha Vardhan — Portfolio

Modern, high-signal personal portfolio for **AI Engineer · GenAI Builder · Automation Architect**.

## What’s improved vs the Lovable version

| Area | Old (Lovable) | New |
|------|---------------|-----|
| **Open-source depth** | Only enterprise agents + 3 products | Full AI-QE ecosystem (TestDNA, VALI, ForgeLM, PAIOS, AgenticTestForge, Q-Gate, RCI, LocatorForge, Copilot for Playwright) |
| **Information density** | Clean but shallow | Dense, scannable cards with real impact metrics, stacks, and repo links |
| **Visual system** | Generic dark UI | Custom cyan/black terminal aesthetic, grid overlay, cursor glow, reveal animations |
| **Performance** | SPA framework overhead | Zero-dependency static HTML/CSS/JS — instant load |
| **Mobile** | Basic | Fully responsive with mobile nav |
| **SEO / Share** | Minimal | Proper meta + semantic structure |

## Stack

- Pure HTML5 + CSS3 + vanilla JS
- Google Fonts: Inter + JetBrains Mono
- No build step — open `index.html` or deploy to any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages)

## Local preview

```bash
# Option 1 — any static server
npx serve .
# or
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy (GitHub Pages)

1. Push this folder to a repo (or `gh-pages` branch).
2. Settings → Pages → Source: Deploy from branch.
3. Or rename / move contents into `docs/` if using main branch.

## Customize

- Update links in `index.html` (resume PDF, LinkedIn, Hashnode, GitHub repos).
- Colors live in `:root` inside `styles.css`.
- Metrics and copy are plain HTML — edit freely.

---

Built to reflect the depth of the public GitHub README while staying fast and beautiful.
