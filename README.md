# Manav Bhatt — Professional Portfolio Website

A personal portfolio website for **Manav Bhatt**, Computer Science Engineering student at Manipal University Jaipur (Class of 2027) and Software Development Intern at Vicharanashala Lab for Education Design (VLED), IIT Ropar.

Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 🌟 Visual Identity & Creative Direction

Inspired by modern dark editorial portfolio aesthetics (referencing clean design standards with rich dark surfaces `#0b0c10` and vibrant crimson/coral `#ff3b30` accents):
- **Hero Section**: Editorial split-layout featuring Manav Bhatt's authentic portrait photo framed in a signature crimson shield/heart backdrop, paired with bold typography (`Space Grotesk` & `Plus Jakarta Sans`) and quick action buttons.
- **Socials Ribbon**: Direct pill-cards for GitHub, LinkedIn, IIT Ropar internship, and direct email inquiries.
- **About Me**: Editorial profile layout showcasing Manav's background, key technical pillars, and a floating **16+ Notable Repositories** metric badge.
- **Services & Core Domains**: 4 interactive domain cards highlighting *Backend & Systems Architecture*, *Applied AI & Neural Models*, *Full-Stack Web Development*, and *Network Defense & Intrusion Detection*.
- **Stats Ribbon**: Live metrics displaying `8.84 CGPA`, `16+ Repositories`, `125K+ Evaluated Flow Samples`, and `2 National Hackathon Honors`.
- **Featured Portfolio Showcase**: Filterable project gallery with deep-dive technical modals, architectural diagrams, and verified metrics.
- **My Resume (Experience & Education)**: Two-column timeline layout covering the VLED IIT Ropar internship, Manipal University Jaipur degree, and national hackathon honors (IIT Madras Shaastra 2026 finalist & IIM Indore HackWise 2026 qualifier).
- **Interactive PDF Resume Viewer**: In-browser curriculum vitae viewer with one-click direct PDF download.
- **Contact & Opportunities Banner**: "Have an opening or project in mind?" recruiter callout with direct email, one-click copy feedback, phone, and professional network links.

---

## 🚀 Verified Project Showcase

1. **TransitIQ** *(Full-Stack Logistics & ML)*
   - **Stack**: Next.js 14, FastAPI, scikit-learn (`RandomForestRegressor`), Open-Meteo Weather API, Tailwind CSS
   - **Features**: Real-time route risk scoring, dynamic weather retrieval, driver rating weighting, map route previews
   - **Links**: [Live Demo](https://transit-iq.vercel.app/) • [GitHub Repository](https://github.com/Mann65121/TransitIQ)

2. **Sentinel-AI (Intrusion-Detection-System)** *(AI & Cybersecurity)*
   - **Stack**: Python, TensorFlow, Scikit-learn, GANs, XGBoost, Random Forest, CNN-LSTM, NSL-KDD
   - **Features**: Dual-tier defense with GAN anomaly gatekeeper and 5-model soft-voting committee; reported 92% accuracy and 98% attack precision
   - **Links**: [GitHub Repository](https://github.com/Mann65121/Intrusion-Detection-System)

3. **Atlas RAG Studio (document-qa-llm-rag)** *(Local LLM & Systems)*
   - **Stack**: Python, Flask, Ollama, LLaMA 3.2, PyMuPDF, pypdf, Vector Retrieval
   - **Features**: 100% local document QA with zero cloud API leakage, sliding-window chunking, grounded answers with confidence labels
   - **Links**: [GitHub Repository](https://github.com/Mann65121/document-qa-llm-rag)

4. **BDH Memory Visualization** *(AI Interpretability & Sparse Activations)*
   - **Stack**: Python, NetworkX, NumPy, Matplotlib, Jupyter Notebook
   - **Features**: Graph-based sparse memory dynamics and Hebbian learning experiments inspired by the Dragon Hatchling (BDH) architecture
   - **Honors**: Finalist at Synaptix Frontier AI Hackathon, Shaastra 2026 (IIT Madras)
   - **Links**: [GitHub Repository](https://github.com/Mann65121/BDH-MEMORY-VISUALIZATION)

5. **TruthLens** *(Explainable NLP & Misinformation Detection)*
   - **Stack**: React, TypeScript, Tailwind CSS, Python, TF-IDF + Logistic Regression, Generative AI summaries
   - **Links**: [GitHub Repository](https://github.com/Mann65121/TruthLens---fake-news-detection)

6. **Text-Gen-Studio** *(Generative AI Playground)*
   - **Stack**: Python, Hugging Face Transformers (GPT-2), Streamlit/Flask
   - **Links**: [GitHub Repository](https://github.com/Mann65121/Text-Gen-Studio)

---

## 🛠️ Local Development & Setup

### Prerequisites
- Node.js 18+ (tested with Node v24.14.0)
- npm or pnpm

### Quick Start
```bash
# Clone or navigate to the workspace
cd "c:\Users\bhatt\Maddy Portfolio"

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build & Preview
```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment to Vercel

The portfolio is built as an optimized static Single Page Application (SPA):

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio redesign matching editorial aesthetic"
   git branch -M main
   git remote add origin https://github.com/Mann65121/portfolio.git
   git push -u origin main
   ```
2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) -> **Add New Project**.
   - Select your repository.
   - Framework preset: **Vite**.
   - Build Command: `npm run build`.
   - Output Directory: `dist`.
   - Click **Deploy**!
