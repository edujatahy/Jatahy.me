# jatahy.me — development guidelines

Personal website of Eduardo Jatahy. Astro static site, deployed to GitHub Pages via Actions
on every push to `main`.

## Architecture
- **Framework:** Astro (`output: 'static'`) + Tailwind CSS v4 (`@tailwindcss/vite`) + TypeScript.
- **Deploy:** `.github/workflows/deploy.yml` → GitHub Pages. Push to `main` = live in ~1–2 min.
- **Hosting:** GitHub Pages only (no Cloudflare). DNS at GoDaddy.
- **`base`:** currently `/Jatahy.me` so the site previews at `edujatahy.github.io/Jatahy.me/`.
  When `jatahy.me` DNS is pointed at Pages, switch `base` to `/` in `astro.config.mjs` and add
  `public/CNAME` containing `jatahy.me`. All internal paths go through `import.meta.env.BASE_URL`
  (see `BaseLayout.astro`), so the switch is a one-liner.

## Visual identity — warm black + ancap gold
- Single, deliberate dark world. **No light theme.**
- Tokens live in `src/styles/global.css` (`@theme`). Use them, never raw hex:
  `bg-ink`, `bg-ink-soft`, `border-border`/`border-border-gold`, `text-fg`/`text-fg-muted`,
  `text-gold`/`bg-gold`, `font-display` (Sora), `font-sans` (Inter), `font-mono` (JetBrains Mono).
- **Gold is used with restraint** — black is the room, gold is the light. Accent on eyebrows,
  key links, one hero moment, CTAs. Never flood a surface with gold (reads caution-sign).
- The `.flag-wash` / `.gold-rule` helpers are the only nod to the ancap flag's diagonal — keep
  it a suggestion, never a literal flag.

## Language
- **The site is in English.** The one exception is the future **"A Grande Caminhada"** page,
  which is in Portuguese (pass `lang="pt-BR"` to `BaseLayout`). Content there must have flawless
  PT accentuation (`ç`, `ã/õ`, crase `à`, `você`, `-ção`). Never mix languages within a page.

## Conventions
- Code, comments, commits, branches, PRs: **English**.
- Reuse `SiteNav` / `SiteFooter`. New top-level pages go in `src/pages/<name>.astro`.
- Keep pages accessible: real focus states, `alt` text, semantic headings, `prefers-reduced-motion`
  respected (already handled globally).

## Roadmap (phases)
1. ✅ Astro skeleton + landing + deploy pipeline (this).
2. Blog — Markdown content collection ("things I'm building with AI").
3. Podcast — the YouTube episodes, their own page.
4. A Grande Caminhada — the AI-written children's book (Portuguese; keep kids privacy-safe).
