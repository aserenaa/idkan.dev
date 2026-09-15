# Blog

A blog built with Next.js, MDX and TailwindCSS. Posts live as markdown files in `data/blog`,
with tags, search, pagination, RSS and giscus comments.

## Getting started

```bash
npm install
npm run dev
```

## Configuration

- `data/siteMetadata.js` — site title, description, URLs, social links and comment settings.
- `data/headerNavLinks.js` — navigation links.
- `data/authors/default.md` — default post author.
- `.env.example` — copy to `.env.local` and fill in for comments.

## Scripts

- `npm run dev` — start the development server.
- `npm run build` — build for production.
- `npm start` — serve the production build.
- `npm run lint` — lint the project.
