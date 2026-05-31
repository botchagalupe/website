# John Willis / Botchagalupe Static Website

This is a production-ready static personal website for John Willis, also known online as Botchagalupe. It is built with Astro, TypeScript, Markdown content collections, and plain CSS.

The site is intentionally simple: static files only, no backend, no database, no login, no CMS, no forms, no analytics, no third-party JavaScript, no cookies, and no secrets.

## Why This Site Is Secure And Low-Maintenance

- Static HTML, CSS, and local assets are generated at build time.
- There is no backend service to patch, scale, authenticate, or secure.
- There is no database, user account system, contact form, admin dashboard, or API route.
- There are no environment variables or secrets required for local development or deployment.
- External scripts and external CSS are intentionally avoided.
- Security headers for Cloudflare Pages are included in `public/_headers`.
- Content updates mostly happen in Markdown and small TypeScript data files.

## Local Setup

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Run type and Astro checks:

```sh
npm run check
```

Build the static site:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Where To Edit Site Content

- Profile and bio: `src/data/profile.ts`
- Books: `src/data/books.ts`
- Projects: `src/data/projects.ts`
- Public links: `src/data/links.ts`
- Resume content: `src/data/resume.ts`
- Writing posts: `src/content/posts/`
- Writing schema and collection loader: `src/content.config.ts`
- Global styles: `src/styles/global.css`
- Site URL: `astro.config.mjs`

## How To Add A Book

Edit `src/data/books.ts` and add a new object to the `books` array:

```ts
{
  title: "Book Title",
  description: "Short book description.",
  year: "2026",
  tags: ["DevOps", "Leadership"],
  url: "https://www.amazon.com/...",
  featured: true,
  notes: "Optional notes."
}
```

Set `featured: true` to show the book on the home page Books section.

## How To Add A Project

Edit `src/data/projects.ts` and add a new object to the `projects` array:

```ts
{
  title: "Project Name",
  description: "Short project description.",
  status: "active",
  year: "2026",
  tags: ["Astro", "Static Site"],
  url: "https://example.com",
  repo: "https://github.com/example/example",
  featured: true,
  notes: "Optional notes."
}
```

Use one of these status values: `active`, `paused`, `archived`, or `experimental`.

## How To Add A Writing Post

Create a Markdown file in `src/content/posts/`, for example `src/content/posts/my-post.md`:

```md
---
title: "My Post"
description: "A short summary of the post."
date: 2026-05-28
tags: ["personal", "notes"]
draft: false
---

Write the post here.
```

Set `draft: true` to keep a post out of the writing index, RSS feed, and generated writing pages.

## How To Update Contact Links

Edit `src/data/profile.ts` for the primary email address and `src/data/links.ts` for public profile links. Contact methods are displayed as ordinary links only. There is no contact form and no message collection.

## How To Replace The Favicon

Replace `public/favicon.svg` with a new local SVG favicon. Keep the filename the same unless you also update `src/components/BaseHead.astro`.

## How To Add A Resume PDF

Place the file at:

```txt
public/files/resume.pdf
```

The resume page will show a download link automatically when that file is present at build time.

## Deploy To Cloudflare Pages

1. Push this repository to GitHub.
2. Create a new Cloudflare Pages project.
3. Connect the GitHub repository.
4. Use the Astro framework preset.
5. Deploy.

Recommended Cloudflare Pages settings:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Environment variables: none required
- Functions, Workers, KV, R2, D1, and databases: not required

## Deploy To Other Static Hosts

This project builds to plain static files in `dist`. It can also be deployed to GitHub Pages, Netlify, or any static file host that can run `npm run build`.

## Security Notes

- This is a static site.
- There is no backend to attack.
- There is no login system.
- There is no database.
- There are no forms.
- There are no secrets.
- There are no API routes or server endpoints.
- External scripts are intentionally avoided.
- External CSS and external fonts are intentionally avoided.
- Security headers are included in `public/_headers` for Cloudflare Pages.
- The Content Security Policy does not allow third-party scripts.

## Dependency Maintenance

- Run `npm outdated` occasionally.
- Update dependencies deliberately and test with `npm run check` and `npm run build`.
- Avoid adding packages unless they are clearly necessary.
- Avoid packages that load remote scripts, inject analytics, require credentials, or add runtime services.
- Keep the site static-first and content-driven.
