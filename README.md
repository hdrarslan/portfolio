# haddusha — Portfolio

Personal design portfolio built with React + Vite. Deploys automatically to GitHub Pages.

## Deploy to GitHub Pages

### Step 1 — Create repo on GitHub

Go to [github.com/new](https://github.com/new) and create a new repository (e.g. `portfolio`). Keep it **public**. Do NOT add a README (this project already has one).

### Step 2 — Check the base path

Open `vite.config.js` and make sure `base` matches your repo name:

- Repo named `portfolio` → `base: '/portfolio/'` (this is the default)
- Repo named `username.github.io` → change to `base: '/'`

### Step 3 — Install Git LFS (required for video files)

This project contains video files larger than 100 MB. Git LFS must be installed first:

```bash
brew install git-lfs    # macOS
git lfs install
```

### Step 4 — Push to GitHub

Open Terminal, navigate to this project folder, and run:

```bash
git init
git lfs install
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username and `portfolio` with your repo name.

### Step 5 — Enable GitHub Pages

1. Go to your repo on GitHub
2. **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will run automatically and deploy your site

Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

## Run locally

```bash
npm install
npm run dev
```

## Project structure

```
src/
  data/projects.js    ← Project list, categories, media
  sections/           ← Home, Work, Contact
  components/         ← Header, ProjectCard, ProjectModal
  styles/             ← Theme, fonts, grain textures
public/
  assets/projects/    ← Project images and videos
  assets/me/          ← About Me image
  assets/resume_marketing.pdf
```
