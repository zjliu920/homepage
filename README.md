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

## Update From a New Environment

Only the owner of `zjliu920/homepage` should update and deploy this homepage.

1. Clone the repository:

   ```bash
   git clone https://github.com/zjliu920/homepage.git
   cd homepage
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

4. Modify the content files listed in the `Update Personal Content` section.

5. Verify the production build:

   ```bash
   npm run build
   ```

6. Commit and push changes:

   ```bash
   git add .
   git commit -m "Update homepage content"
   git push origin master
   ```

After the push, GitHub Actions deploys the updated site to:

```text
https://zjliu920.github.io/homepage/
```

## Owner-Only Modification Policy

This is a public repository, so anyone can view or fork the source code. However, only the owner of `zjliu920/homepage` should be able to modify the published homepage.

- Do not add collaborators with write access unless they are allowed to change the live site.
- Do not add deploy keys, GitHub Apps, or personal access tokens that grant write access to this repository.
- Keep GitHub Pages configured to deploy from GitHub Actions.
- The deployment workflow is restricted to the canonical repository and owner account: `zjliu920/homepage` triggered by `zjliu920`.
- For stronger protection, keep the `master` branch protected in GitHub settings and restrict who can push to it.

## Theme Behavior

The site follows the system color scheme by default using `prefers-color-scheme`. When visitors click the theme toggle, the selected `light` or `dark` theme is saved in `localStorage`.

## Deployment

- GitHub Pages: push the repository to GitHub, enable Pages with GitHub Actions as the source, and the workflow in `.github/workflows/deploy.yml` will build and deploy `dist`.
- Netlify: connect the repository, set the build command to `npm run build`, and set the publish directory to `dist`.
- Vercel: import the repository as a Vite project. Vercel should detect the build command and output directory automatically; otherwise use `npm run build` and `dist`.
