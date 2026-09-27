# ⚖️ YUKTI-KAAR (युक्ति-कार)
### AI-Powered Intellectual Property (IP) Advisory & Facilitation Platform for Innovators

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](https://opensource.org/licenses/MIT)
[![React 19](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/TailwindCSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Firestore-orange.svg)](https://firebase.google.com/)

**YUKTI-KAAR** is a specialized, production-ready Intellectual Property (IP) advisory system designed to democratize IP awareness, statutory navigation, prior-art analysis, and legal facilitation for Indian innovators, startups, MSMEs, and researchers.

---

## 🌟 Key Highlights

- **🧠 Specialized IP Assistant Workspace:** Interactive natural language advisory engine grounded in statutory law, providing clear legal categorization, actionable recommendations, and statutory references.
- **📜 Statutory Legal Citations:** Grounded directly in Indian IP acts:
  - *The Patents Act, 1970* (Sections 2, 3, 10, 25, 39, etc.)
  - *The Trade Marks Act, 1999* (Sections 9, 11, 27, 29)
  - *The Copyright Act, 1957* (Sections 13, 14, 51, 52)
  - *The Designs Act, 2000* (Sections 2, 4, 5, 22)
  - *The Geographical Indications of Goods Act, 1999*
- **🌐 8 Regional Indian Languages:** Real-time localized interface supporting English, Hindi (हिंदी), Bengali (বাংলা), Tamil (தமிழ்), Telugu (తెలుగు), Marathi (मराठी), Gujarati (ગુજરાતી), and Kannada (ಕನ್ನಡ).
- **🗺️ Multi-Jurisdiction Analysis:** Instant comparison between Indian Law (CGPDTM / IPO) and International PCT / WIPO frameworks.
- **🛡️ 6 IP Asset Domains:** Complete coverage across Patents, Trademarks, Copyrights, Industrial Designs, Trade Secrets, and Geographical Indications (GI).
- **🤝 IP Facilitator Escalation:** Direct referral channel connecting innovators to registered patent facilitators and trademark attorneys under national startup schemes.
- **🔐 Firebase Authentication:** Integrated Google Sign-In & Email/Password authentication with user profile management.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Authentication & DB** | [Firebase Authentication](https://firebase.google.com/docs/auth) & [Cloud Firestore](https://firebase.google.com/docs/firestore) |
| **AI Integration** | [@google/genai](https://www.npmjs.com/package/@google/genai) SDK architecture |

---

## 📂 Project Structure

```
YuktiKaar_SIH26/
├── public/
├── src/
│   ├── components/
│   │   ├── about/            # About project & SIH mission
│   │   ├── assistant/        # AI Assistant Workspace, AnswerCard, CitationPanel
│   │   ├── auth/             # Firebase Authentication Modal & Domain Helper
│   │   ├── common/           # Jurisdiction toggles, confidence meters, headings
│   │   ├── explore/          # 6 IP Category Deep-Dive Explorer
│   │   ├── home/             # Hero, RAG architecture, features, authoritative sources
│   │   ├── howItWorks/       # 4-Step IP lifecycle guide
│   │   ├── knowledge/        # Searchable knowledge base & statutory articles
│   │   └── layout/           # Sticky Navbar, Footer, Facilitator Escalation Modal
│   ├── context/
│   │   ├── AuthContext.tsx    # Firebase Auth provider & user state
│   │   └── LanguageContext.tsx# 8-language localization provider
│   ├── data/                 # Statutory sources, IP metadata, sample inquiries
│   ├── i18n/                 # Multi-language translation dictionaries
│   ├── services/
│   │   ├── assistantService.ts# RAG retrieval logic & legal response generation
│   │   └── firebase.ts       # Firebase SDK initialization & auth helpers
│   ├── types/                # TypeScript interfaces & domain types
│   ├── App.tsx               # Root application router & providers
│   ├── main.tsx              # Application entrypoint
│   └── index.css             # Tailwind v4 theme & global styles
├── .env.example              # Environment variables template
├── package.json              # Dependencies & build scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite bundler configuration
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** or **bun** / **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mushtaqraza927-byte/YuktiKaar_SIH26.git
   cd YuktiKaar_SIH26
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env` (optional for local mock mode, required for live Firebase project):
   ```bash
   cp .env.example .env
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The app will run at `http://localhost:3000`.

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Type check & Lint:**
   ```bash
   npm run lint
   ```

---

## 🔐 Firebase Configuration

This project is connected to Firebase for authentication:
- **Project ID:** `yukti-kaar`
- **Supported Auth Providers:**
  - Google One-Click OAuth
  - Email & Password Sign Up / Sign In
  - Self-service password reset

### Whitelisting Domains for Google Sign-In
To enable Google Sign-In on your custom domain or deployment URL:
1. Open the [Firebase Console > Authentication > Settings](https://console.firebase.google.com/project/yukti-kaar/authentication/settings).
2. Go to **Authorized domains** and click **Add domain**.
3. Add your deployment hostname (e.g. `your-domain.com`).

---

## 🏛️ Statutory Sources Referenced

- **Office of Controller General of Patents, Designs and Trade Marks (CGPDTM):** [ipindia.gov.in](https://ipindia.gov.in)
- **World Intellectual Property Organization (WIPO):** [wipo.int](https://www.wipo.int)
- **Patent Cooperation Treaty (PCT) Guidelines:** WIPO PCT Applicant's Guide
- **Startup India IP Facilitation Scheme (SIPP):** DPIIT, Government of India

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
