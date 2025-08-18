# Personal Website (Single Page, React + Vite + Tailwind)

This is a modular, single-page portfolio with **Contact first** (top). It’s ready to deploy to **GitHub Pages** via Actions.

## Quick Start
```bash
npm install
npm run dev
```

Edit your content in `src/content/site.json`.

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. **Create a repo on GitHub**.
   - For a **user site** (recommended): name it `YOUR_USERNAME.github.io`.
   - For a **project site**: any name is fine, e.g., `portfolio`.

2. **Set the Vite base path** (only for project sites).
   - Open `vite.config.ts`, set `base: '/REPO_NAME/'`.
   - For user sites, keep `base: '/'`.

3. **Push to GitHub** (main branch) and enable Pages:
   - Go to **Settings → Pages → Source = GitHub Actions**.
   - The workflow at `.github/workflows/deploy.yml` will build and publish automatically on every push to `main`.

4. **URL**:
   - User site: `https://YOUR_USERNAME.github.io`
   - Project site: `https://YOUR_USERNAME.github.io/REPO_NAME/`

> The workflow copies `dist/index.html` to `dist/404.html` to support SPA routing refreshes.

## Customize
- Update `src/content/site.json` (links, experience, projects, etc.).
- To show a **Resume** button, set `links.resumeUrl` to `/resume.pdf` and place a file at `public/resume.pdf`.

## Tech
- React 18, TypeScript, Vite 5
- Tailwind CSS (class-based styling, dark mode via `class`)
- GitHub Actions for Pages deploy
