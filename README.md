# Karthikeya Kondaveeti — Personal Portfolio

A clean, modern, single-page personal portfolio for **Karthikeya Kondaveeti**, Computer Science undergraduate at SRM University AP focused on applied Machine Learning, Computer Vision, and full-stack engineering (MERN).

Designed with editorial Claude-style typography, solid colors from a curated palette, zero gradients, zero emojis, and zero AI slop.

---

## 🎨 Color Palette & Typography

- **Deep Indigo**: `#1F06AC` (rgb(31, 6, 172))
- **Cobalt Blue**: `#0F42C0` (rgb(15, 66, 192))
- **Cornflower Blue**: `#5882E8` (rgb(88, 130, 232))
- **Chartreuse Accent**: `#E3EF4F` (rgb(227, 239, 79))
- **Background**: `#0b0e1b` (Near-black navy)
- **Zero Gradients**: Pure solid colors, clean borders, crisp contrast.
- **Claude Typography**: 
  - Headings & Editorial Accents: **Newsreader** (Classical Editorial Serif)
  - Body & UI: **Inter** (Clean Humanist Sans)
  - Code & Badges: **JetBrains Mono** (Engineered Monospace)

---

## ⚡ Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design System
- **Interactions**: Framer Motion
- **Icons**: Lucide React & Clean SVGs (Zero Emojis)
- **Signature Bubble Effect**: 60fps Canvas particle engine utilizing exact palette colors `#1F06AC`, `#0F42C0`, `#5882E8`, and `#E3EF4F`
- **Logo**: User's provided Sanji avatar logo (`/logo.jpg`)
- **Resume**: Interactive Resume Viewer modal + direct PDF opener (`/resume.pdf`)

---

## 🚀 Running Locally

```bash
# Clone or navigate to the repository
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## 📝 Editing Content

All textual content, project details, skills, certifications, and links are kept in a single file:
👉 **[`src/data/content.js`](file:///d:/ML%20Projects/Portfolio/src/data/content.js)**

### Updating Resume
- Replace [`public/resume.pdf`](file:///d:/ML%20Projects/Portfolio/public/resume.pdf) with any updated version. Clicking the "Resume" button in the Navbar, Hero, or Footer automatically opens and renders it.

### Updating Logo
- Replace [`public/logo.jpg`](file:///d:/ML%20Projects/Portfolio/public/logo.jpg) with any updated image. It is loaded across the site and as the browser favicon.

---

## 🌐 Deployment

### Deploying to Vercel
1. Push this repository to GitHub.
2. In Vercel, click "New Project" and import the repository.
3. Build Command: `npm run build`, Output Directory: `dist`.
4. Click Deploy.

### Deploying to Netlify
1. Run `npm run build` locally.
2. Drag and drop the `dist/` directory into Netlify, or link the GitHub repo with build command `npm run build` and publish directory `dist`.

---

## 📄 License
MIT © 2026 Karthikeya Kondaveeti
