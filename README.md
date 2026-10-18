# Reshma Angajala · Portfolio

React + Vite. Animations use Framer Motion.

## Run it on your laptop
1. Install Node.js (LTS) from nodejs.org
2. Open this folder in VS Code → Terminal → run:
   ```
   npm install
   npm run dev
   ```
3. Open the link it prints (usually http://localhost:5173)

## Edit content
Almost everything you'd change is in **`src/data.js`**: your email, LinkedIn, resume link, intro text, projects, skills and the sticky notes.

Before going live, update in `src/data.js`:
- `email` (currently a placeholder)
- `linkedin`
- put your `resume.pdf` inside the `public/` folder

## Swap images
Replace the files in `public/images/` with higher-quality versions (keep the same names):
- `hero-photo.jpg` – hero portrait (landscape, about 1160 × 730)
- `polaroid.jpg` – about-section photo (portrait, about 500 × 650)
- `reyo-results.jpg` – Reyo project card screen

For Tara, add an image and set `image: 'images/tara.jpg'` in `src/data.js`.

## Deploy on Vercel
1. Push this folder to a GitHub repo
2. vercel.com → Add New → Project → import the repo
3. Framework preset: **Vite** (auto-detected) → Deploy

## Structure
```
src/
  data.js            ← all text, links, projects
  styles.css         ← colours, fonts, layout
  components/        ← Nav, Hero, Marquee, Work, Skills, Board, Contact
  pages/             ← Home, case study pages
```
