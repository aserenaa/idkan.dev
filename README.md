# Blog

A blog built with Next.js, MDX and Tailwind CSS. Posts are markdown files in `data/blog`,
with tags, search, pagination, RSS, dark mode and giscus comments.

Built with Next.js 16 (Pages Router), React 19, Tailwind CSS 4 and mdx-bundler.

## Requirements

Node.js 20.9 or newer. The repo ships an `.nvmrc`, so `nvm use` picks the right version.

## Getting started

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Writing posts

Add a markdown file to `data/blog`. The filename becomes the URL slug. Frontmatter:

```yaml
---
title: My Post
date: '2026-01-31'
authors: ['default']
tags: ['javascript', 'tips']
draft: false
summary: A short summary used in listings and social previews.
layout: PostLayout
---
```

`layout` is either `PostLayout` (author sidebar, tags, prev/next links) or `SimpleLayout`.
Setting `draft: true` hides the post behind an "under construction" page.

## Configuration

- `data/siteMetadata.js` — title, description, URLs, social links, comment settings.
- `data/headerNavLinks.js` — navigation links.
- `data/authors/default.md` — default post author.
- `tailwind.config.js` — theme colours and typography.
- `.env.example` — copy to `.env.local` and fill in to enable comments.

All values ship as placeholders; update them before deploying.

## Scripts

- `npm run dev` — start the development server.
- `npm run build` — build for production.
- `npm start` — serve the production build.
- `npm run lint` — lint with [standard](https://standardjs.com).
- `npm run lint:fix` — lint and auto-fix.

## Notes

- `public/feed.xml` is generated at build time and is gitignored.
- `public/social-media-banner.png` is the Open Graph preview image; replace it with your own.
