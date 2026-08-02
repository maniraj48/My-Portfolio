# Maniraj Kyatham — Interactive Software Engineering Portfolio

A modern, high-performance developer portfolio and personal intelligence platform built for **Maniraj Kyatham**, a B.Tech IT Graduate & Python / REST API Developer specializing in **FastAPI, Flask, SQL Query Optimization, and Machine Learning Platform Engineering**.

---

## 🚀 Key Highlights & Features

- **⚡ Interactive Terminal CLI**: Embedded terminal emulator supporting interactive commands (`help`, `skills`, `projects`, `contact`, `hire`, `clear`, `resume`, `fasttrack`).
- **📊 GitHub & LeetCode Activity Heatmap**: Real-time coding consistency tracker featuring a 52-week contribution matrix, commit metrics, and LeetCode problem-solving breakdown (Easy, Medium, Hard).
- **📄 Instant PDF Resume Generation**: Simulated on-the-fly client-side PDF document generator allowing recruiters to download Maniraj's resume instantly.
- **🛠 Interactive Project Showcase**: Detailed project cards with live architecture breakdowns, key performance benchmarks, and direct links to GitHub repositories.
- **🎓 Academic & Certifications Grid**: Highlights B.Tech IT academic records (CGPA 8.36/10) and certifications from Infosys Springboard, AICTE / Edunet Foundation, Cisco, Simplilearn, and TCS iON.
- **📬 Interactive Contact Module**: Fast message dispatch system with toast notifications and direct communication channels.

---

## 🛠 Tech Stack & Architecture

### **Frontend**
- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)

### **Backend & APIs**
- **Server**: [Express.js](https://expressjs.com/) (Node.js)
- **Runtime**: `tsx` for direct TypeScript execution in development
- **Bundler**: `esbuild` for single-file CommonJS production builds (`dist/server.cjs`)
- **AI Integration**: [@google/genai](https://www.npmjs.com/package/@google/genai) SDK (`gemini-3.6-flash`)

---

## 📂 Project Directory Structure

```
├── server.ts                 # Full-stack Express backend server & Vite middleware
├── index.html                # HTML entry point
├── package.json              # Project scripts and dependencies
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript compiler settings
├── .env.example              # Environment variables template
└── src/
    ├── main.tsx              # React application entry point
    ├── App.tsx               # Main component & layout orchestration
    ├── index.css             # Tailwind CSS global styles
    ├── components/
    │   ├── Header.tsx        # Responsive navigation bar with sound effects
    │   ├── Hero.tsx          # Hero section with resume download & CLI launcher
    │   ├── CodingActivity.tsx# GitHub & LeetCode heatmap and consistency stats
    │   ├── Projects.tsx      # Interactive project cards & metrics
    │   ├── Experience.tsx    # Experience timeline & education/certifications
    │   ├── Skills.tsx        # Technical skills matrix & proficiencies
    │   ├── ContactSection.tsx# Contact form & social connections
    │   ├── TerminalModal.tsx # Interactive terminal CLI modal
    │   └── Footer.tsx        # Footer section
    ├── data/
    │   └── portfolioData.ts  # Personal info, project details, skills & timeline
    └── utils/
        └── soundEffects.ts   # Web Audio API sound effect synthesis
```

---

## 💻 How to Run Locally

Follow these step-by-step instructions to get the project running on your local development machine:

### **1. Prerequisites**
Ensure you have the following installed on your system:
- **Node.js** (v18.0.0 or higher recommended) — [Download Node.js](https://nodejs.org/)
- **npm** (v9.0.0 or higher, comes bundled with Node.js)
- **Git** — [Download Git](https://git-scm.com/)

---

### **2. Clone or Download the Repository**
```bash
git clone https://github.com/maniraj48/portfolio.git
cd portfolio
```

---

### **3. Install Project Dependencies**
Install all required Node.js dependencies using `npm`:
```bash
npm install
```

---

### **4. Start Development Server**
Launch the Vite development server with hot-reload support:
```bash
npm run dev
```

Open your browser and navigate to the local server URL printed in your terminal (typically `http://localhost:5173`).

---

### **5. Build for Production**
To generate a fully bundled, production-ready static release:

1. **Compile Static Assets**:
   ```bash
   npm run build
   ```
   This compiles all frontend assets into the `dist/` directory.

2. **Verify Production Build Locally**:
   ```bash
   npm start
   ```
   This runs the Vite preview server locally (typically at `http://localhost:3000`), allowing you to verify the build output.

---

## 📜 NPM Scripts Overview

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches the Vite dev server with hot-reload |
| `npm run build` | Compiles frontend assets into `dist/` for production |
| `npm start` | Launches Vite preview server on port 3000 to verify build output |
| `npm run lint` | Runs `tsc --noEmit` to verify type safety across the project |
| `npm run clean` | Removes the compiled `dist` folder |

---

## 👤 Developer Contact & Profiles

- **Developer**: Maniraj Kyatham
- **Email**: [manirajkyatham@gmail.com](mailto:manirajkyatham@gmail.com)
- **Phone**: +91 7671822839
- **GitHub**: [github.com/maniraj48](https://github.com/maniraj48)
- **LeetCode**: [leetcode.com/u/maniraj48](https://leetcode.com/u/maniraj48)
- **LinkedIn**: [linkedin.com/in/maniraj-kyatham](https://linkedin.com/in/maniraj-kyatham)

---

© 2026 Maniraj Kyatham. Built with React, TypeScript & Tailwind CSS.
