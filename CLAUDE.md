# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Next.js 16** (App Router, Turbopack) with React 19
- **Tailwind v4** via `@tailwindcss/postcss` — design tokens declared in `app/globals.css` under `@theme`, no `tailwind.config.*` file
- **Fonts**: Geist Sans/Mono + Newsreader (italic display) via `next/font/google`
- **Icons**: `@phosphor-icons/react/dist/ssr` (skill mandate — do not switch to Lucide)
- **Package manager**: `bun` (lockfile is `bun.lock`)
- **Deploy target**: Cloudflare Workers via `@opennextjs/cloudflare`

## Commands

```bash
bun install              # install
bun dev                  # next dev --turbopack on :3000
bun run build            # next production build (also runs typecheck)
bun run typecheck        # tsc --noEmit
bun run cf:preview       # build + run locally on Workers (wrangler dev)
bun run cf:deploy        # build + deploy to Cloudflare Workers
bun run cf:typegen       # regenerate cloudflare-env.d.ts from wrangler bindings
```

## Architecture

- All routes are static (`generateStaticParams` for `/journal/[slug]`). 16 prerendered pages.
- `app/layout.tsx` wraps every page with `<Nav>` and `<Footer>`. Page components do not include their own chrome.
- `<PageHeader>` is the eyebrow + display headline + lede block reused across `/work`, `/about`, `/journal`, `/contact`.
- `<Reveal>` is the only motion primitive — IntersectionObserver-driven CSS keyframe (`osmon-rise`). Do not introduce a motion library without removing this first.
- `<CommandMenu>` lives in `<Nav>` — `cmd/ctrl+k` and `/` open it; route + journal items are hardcoded inside the component.
- `app/icon.tsx` and `app/opengraph-image.tsx` use `next/og` `ImageResponse`. Both run at the edge; system fonts only — no font fetches.

## Design rules (do not bend)

- **Color #56B6FC is accent only** — fails WCAG AA on white as text (~2.5:1). Use only as background, hover, focus ring, or paired with `text-sky-deep` (#1F6C9F) on `bg-sky-pale`.
- White canvas, `text-ink` (#0B0F14), `border-line` (#EAEAEA) hairlines. No heavy shadows; max one tier of `0 2px 8px rgba(0,0,0,0.04)` lift.
- Typography mixes Geist sans (UI, body) with Newsreader serif italic (display emphasis). Mono is reserved for eyebrows, kbd, metadata.
- All `<Reveal>`-wrapped sections must be staggered (`delay={i * 80}`) — never mount everything at once.
