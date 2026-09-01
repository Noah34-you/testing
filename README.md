# MODU — The Look You Saved

Fashion editorial × street-style archive × affordable shopping destination.
Japanese and Korean-inspired fashion, translated for everyday budgets.

## Stack

Plain static site — no build step, no dependencies:

- `index.html` — single-page site (hero, look archive, 5 look features, shop grid, editorial, footer)
- `styles.css` — full design system
- `app.js` — header state, scroll reveals, archive hover preview, demo newsletter
- `images/` — 13 brand photos (JPEG, optimized)

## Deploy on GitHub Pages

1. Make this repository **public** (Settings → Danger Zone → Change visibility) — Pages requires a public repo on the free plan.
2. Settings → Pages → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save.
3. Site goes live at `https://<username>.github.io/testing/`.

All asset paths are relative, so project-page URLs work as-is.
