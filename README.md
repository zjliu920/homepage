# Zhenjie Liu Academic Homepage

A clean, responsive academic personal website built with Vite, React, and TypeScript. It includes a short introduction, research interests, recent news, selected publications, scholarly links, and light/dark theme support.

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Update Personal Content

- Personal information and academic links: edit `src/components/Hero.tsx`.
- Profile photo: place your image at `public/profile.jpg`. The page already references `/profile.jpg`.
- Research interests: edit `src/data/research.ts`.
- News items: edit `src/data/news.ts`.
- Publications: edit `src/data/publications.ts`.
- Footer update text: edit `src/components/Footer.tsx`.

## Theme Behavior

The site follows the system color scheme by default using `prefers-color-scheme`. When visitors click the theme toggle, the selected `light` or `dark` theme is saved in `localStorage`.

## Deployment

- GitHub Pages: push the repository to GitHub, enable Pages with GitHub Actions as the source, and the workflow in `.github/workflows/deploy.yml` will build and deploy `dist`.
- Netlify: connect the repository, set the build command to `npm run build`, and set the publish directory to `dist`.
- Vercel: import the repository as a Vite project. Vercel should detect the build command and output directory automatically; otherwise use `npm run build` and `dist`.
