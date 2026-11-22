# Sectile Docs

A documentation website built with the latest [Starlight](https://starlight.astro.build/)

## Requirements

- **Node.js 22.23.4 or newer** (Astro 7 requirement)
- npm 9.6.5 or newer (or pnpm / Yarn)

Check your version with:

```sh
node --version
```

## Install

```sh
npm install
```

## Run locally

Start the development server at `http://localhost:4321`:

```sh
npm run dev
```

Edits to Markdown, MDX, CSS and configuration reload automatically.

## Build for production

```sh
npm run build
```

The static site is generated in the `dist/` directory and is ready to be
deployed to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).

## Preview the production build

```sh
npm run preview
```

This serves the contents of `dist/` locally so you can verify the final output.

## Other useful commands

| Command           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Start the local development server                       |
| `npm run build`   | Build the static site into `dist/`                       |
| `npm run preview` | Preview the production build locally                     |
| `npm run check`   | Type-check the project with `astro check`                |

You can also call the Astro CLI directly with `npm run astro -- <command>`.

## Project structure

```text
.
├── astro.config.mjs          # Starlight configuration (title, logo, sidebar, theme)
├── public/
│   ├── favicon.svg               # Site favicon
│   ├── sectile-logo-dark.svg     # Mark for dark backgrounds
│   └── sectile-logo-light.svg    # Mark for light backgrounds
├── src/
│   ├── assets/
│   │   ├── sectile-logo-dark.svg   # Logo for the dark theme
│   │   └── sectile-logo-light.svg  # Logo for the light theme
│   ├── content.config.ts     # Content collections (Starlight loaders/schemas)
│   ├── content/
│   │   ├── docs/
│   │   │   ├── index.mdx                    # Landing page (hero + chapter cards)
│   │   │   ├── 404.md                       # Custom not-found page
│   │   │   ├── 01-introduction/             # Chapters 01-03
│   │   │   ├── 02-plugin-fundamentals/      # Chapters 04-06
│   │   │   ├── 03-building-gameplay/        # Chapters 07-10
│   │   │   └── 04-networking-and-protocol/  # Chapters 11-12
│   │   └── i18n/
│   │       └── en.json       # Placeholder for future UI translations
│   └── styles/
│       └── custom.css        # Brand palette and custom styling
└── tsconfig.json
```

## Writing documentation

Pages live in `src/content/docs/`. Every file needs at least a `title` in its
frontmatter:

```md
---
title: My Page
description: A short description used in metadata and search.
---

Hello, world!
```

Markdown files (`.md`) are great for text-heavy pages. Use `.mdx` when you want
to import and render components:

```mdx
---
title: My MDX Page
---

import { Aside, Card, CardGrid } from '@astrojs/starlight/components';

<Aside type="tip">This is a tip written in MDX.</Aside>
```

Link to other pages using their final route
(`/01-introduction/01-why-sectile/`), not the source filename
(`./01-why-sectile.mdx`). The sidebar groups in `astro.config.mjs` are generated
automatically from the numbered chapter directories.

See `src/content/docs/02-plugin-fundamentals/04-your-first-plugin.mdx` for a full example.

## Customizing the brand

The color palette is defined as CSS custom properties in `src/styles/custom.css`.
Starlight's design tokens (`--sl-color-*`) are overridden there for both the dark
and light themes, so changing a color in one place updates the whole site.

The header logo variants are configured in `astro.config.mjs` under `logo`.
Replace the files in `src/assets/` to use your own artwork.

## Deploy

Set the `site` value in `astro.config.mjs` to your real deployment URL before
publishing. This enables the generated sitemap and ensures canonical URLs are
correct.

## License

MIT
