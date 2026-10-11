import type { Project, ExperienceItem, EducationItem, AchievementItem, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Manav Bhatt',
  role: 'Software Engineer & Applied AI/ML Developer',
  headline: 'Building intelligent systems. Engineering useful software.',
  introduction:
    "I'm a Computer Science Engineering student focused on software engineering, backend systems, and applied AI/ML. I enjoy turning technical ideas into practical, well-engineered applications.",
  email: 'bhattmanav20@gmail.com',
  phone: '+91 8097798195',
  location: 'Mumbai, India',
  githubUrl: 'https://github.com/Mann65121',
  linkedinUrl: 'https://www.linkedin.com/in/manavbhatt6656/',
  avatarUrl: '/manav-bhatt.jpg',
  resumeUrl: '/Manav_Bhatt_Resume.pdf',
  status: 'Open for 2026–2027 Internships & Collaborative Engineering',
  institution: 'Manipal University Jaipur',
  expectedGraduation: 'May 2027',
};

export const PROJECTS: Project[] = [
  {
    id: 'transitiq',
    title: 'TransitIQ',
    subtitle: 'Dynamic Route Risk Prediction & Intelligent Delivery Intelligence',
    category: 'fullstack',
    tags: ['Next.js', 'FastAPI', 'RandomForest', 'Open-Meteo', 'Tailwind CSS', 'Python'],
    summary:
      'Full-stack logistics analytics platform that evaluates inter-city route hazards by fusing dynamic weather feeds, driver behavioral metrics, and a trained machine learning risk regressor.',
    problemSolved:
      'Freight operators lack unified tools that evaluate weather disruptions, route hazards, and driver performance simultaneously before dispatching shipments.',
    architectureDetails: [
      'Next.js 14 frontend deployed on Vercel with responsive interactive routing controls and map previews.',
      'Asynchronous FastAPI microservice backend managing runtime weather queries and live hazard inferences.',
      'Trained scikit-learn RandomForestRegressor model that synthesizes precipitation, temperature, distance, and driver ratings into a numerical route risk score.',
      'Zero-cost Open-Meteo geocoding and live meteorological integration with graceful iframe map fallbacks.',
    ],
    verifiedFeatures: [
      'Dynamic city-to-city route risk scoring',
      'Live destination weather aggregation via REST endpoint',
      'Driver safety coefficient weighting',
      'Interactive route preview and hazard alert dashboard',
      'Separation of concerns between Next.js UI and FastAPI inference engine',
    ],
    metrics: [
      { label: 'Frontend Stack', value: 'Next.js + Tailwind CSS', sourceNote: 'Source code verified in transitiq-frontend/' },
      { label: 'Backend API', value: 'FastAPI (Python)', sourceNote: 'Verified app/main.py endpoints' },
      { label: 'ML Algorithm', value: 'RandomForestRegressor', sourceNote: 'Verified app/model.py pipeline' },
      { label: 'Deployment', value: 'Live on Vercel', sourceNote: 'Production verified at transit-iq.vercel.app' },
    ],
    techStack: {
      frontend: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      backend: ['FastAPI', 'Uvicorn', 'Python 3.11'],
      aiMl: ['scikit-learn', 'RandomForestRegressor', 'NumPy'],
      tools: ['Vercel', 'Open-Meteo API', 'Git'],
    },
    role: 'Full-Stack Developer & Machine Learning Engineer',
    githubUrl: 'https://github.com/Mann65121/TransitIQ',
    liveDemoUrl: 'https://transit-iq.vercel.app/',
    verificationStatus: 'Deployed Live',
    isFeatured: true,
  },
  {
    id: 'sentinel-ai',
    title: 'Sentinel-AI',
    subtitle: 'Hybrid Intrusion Detection with GAN Pre-Filter & 5-Model Voting Committee',
    category: 'ai-ml',
    tags: ['Python', 'TensorFlow', 'GANs', 'XGBoost', 'Random Forest', 'NSL-KDD'],
    summary:
      'Dual-tier cyber defense architecture combining a Generative Adversarial Network anomaly gatekeeper with a weighted 5-model ensemble classifier for network intrusion detection.',
    problemSolved:
      'Traditional signature intrusion detection systems struggle with zero-day polymorphic traffic patterns and suffer from unacceptable false alarm rates under heavy packet throughput.',
    architectureDetails: [
      'Tier 1 Gatekeeper: Generative Adversarial Network (GAN) trained on benign traffic distribution to screen out out-of-distribution anomalies.',
      'Tier 2 Committee: Multi-model consensus ensemble utilizing Random Forest, XGBoost, CNN-LSTM, and Logistic Regression with soft-voting arbitration.',
      'Benchmarked rigorously on NSL-KDD dataset (125,000+ labeled network flows) across DoS, Probe, R2L, and U2R attack classes.',
      'Pre-processing pipeline with StandardMinMax scaling, categorical one-hot encoding, and mutual information feature selection.',
    ],
    verifiedFeatures: [
      'High-throughput packet vectorization and pre-processing pipeline',
      'GAN generator-discriminator anomaly scoring mechanism',
      '5-model consensus decision voting engine',
      'Detailed ROC and confusion matrix validation scripts',
      'Automated mitigation response trigger for classified malicious packets',
    ],
    metrics: [
      { label: 'Reported Accuracy', value: '92.0%', sourceNote: 'Documented in GitHub repository benchmark' },
      { label: 'Attack Precision', value: '98.0%', sourceNote: 'Reported ensemble test score' },
      { label: 'Attack Recall', value: '84.0%', sourceNote: 'Reported detection sensitivity' },
      { label: 'Local Eval Accuracy', value: '94.03%', sourceNote: 'Verified from local results.txt run on 40K samples' },
    ],
    techStack: {
      aiMl: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'GANs', 'CNN-LSTM'],
      backend: ['Python 3.10', 'NumPy', 'Pandas'],
      tools: ['NSL-KDD Dataset', 'Matplotlib', 'Seaborn'],
    },
    role: 'Lead ML Engineer & Network Security Researcher',
    githubUrl: 'https://github.com/Mann65121/Intrusion-Detection-System',
    diagramAsset: '/assets/projects/sentinel-pipeline.png',
    thumbnail: '/assets/projects/sentinel-accuracy.png',
    verificationStatus: 'Benchmark Verified',
    isFeatured: true,
  },
  {
    id: 'document-qa-rag',
    title: 'Atlas RAG Studio',
    subtitle: 'Local Privacy-Preserving Document QA via LLaMA 3.2 & Vector Chunk Retrieval',
    category: 'systems',
    tags: ['Python', 'Flask', 'Ollama', 'LLaMA 3.2', 'RAG', 'Vector Search'],
    summary:
      'Grounded question-answering system running completely locally on workstation hardware using Ollama and LLaMA 3.2, ensuring zero cloud data leakage for sensitive PDFs.',
    problemSolved:
      'Enterprise documents and personal records cannot be uploaded to commercial LLM APIs due to compliance restrictions and recurring token costs.',
    architectureDetails: [
      'Modular document ingestion pipeline using pypdf and PyMuPDF to extract text with structure preservation.',
      'Overlapping sliding-window chunking strategy with dynamic token sizing for optimal context window density.',
      'Vector similarity search and keyword ranking to assemble grounded context packages for the language model.',
      'Local Ollama integration querying LLaMA 3.2 with strict prompt templating, returning citations and confidence labels.',
      'Graceful local fallback answering flow when the LLM service is offline or under memory pressure.',
    ],
    verifiedFeatures: [
      'Zero-cloud offline processing ensuring complete data sovereignty',
      'Context chunking and similarity-ranked document retrieval',
      'Concise grounded response generation with confidence indicators',
      'Interactive query history and multi-document reset controls',
      'RESTful Flask API layer with clean asynchronous frontend',
    ],
    metrics: [
      { label: 'Local Inference', value: 'LLaMA 3.2 (Ollama)', sourceNote: 'Verified backend/rag_pipeline.py' },
      { label: 'Parser Support', value: 'PyMuPDF + pypdf', sourceNote: 'Verified document_loader.py' },
      { label: 'Data Privacy', value: '100% Local / Zero API Cost', sourceNote: 'Source code verified in local repo' },
      { label: 'Endpoints', value: 'Health, Upload, Ask, History', sourceNote: 'Verified backend/app.py routes' },
    ],
    techStack: {
      backend: ['Flask', 'Python 3.11', 'REST API'],
      aiMl: ['Ollama', 'LLaMA 3.2', 'Vector Retrieval', 'Text Chunking'],
      frontend: ['HTML5', 'Modern CSS', 'Vanilla JavaScript'],
      tools: ['PyMuPDF', 'pypdf', 'Git'],
    },
    role: 'Systems & Backend Engineer',
    githubUrl: 'https://github.com/Mann65121/document-qa-llm-rag',
    verificationStatus: 'Code Verified',
    isFeatured: true,
  },
  {
    id: 'bdh-memory',
    title: 'BDH Memory Visualization',
    subtitle: 'Synaptic Dynamics & Sparse Hebbian Activation Experiments',
    category: 'ai-ml',
    tags: ['Python', 'NetworkX', 'NumPy', 'Hebbian Learning', 'Shaastra Finalist'],
    summary:
      'Visual interpretability testbed exploring sparse neuron activations and synaptic plasticity dynamics inspired by the Dragon Hatchling (BDH) post-transformer paradigm.',
    problemSolved:
      'Standard dense transformer architectures suffer from quadratic computational explosion and opaque internal state opacity; sparse biological memory offers an efficient alternative.',
    architectureDetails: [
      'Graph-theoretic neural network modeling using NetworkX, representing interconnected memory nodes and dynamic synapse weights.',
      'Implementation of Hebbian learning equations: "neurons that fire together wire together", inducing localized cluster formation.',
      'Comparative sparsity analysis demonstrating reduced FLOP activation budgets across simulated sequence retention tasks.',
      'Presented as Finalist at the Synaptix Frontier AI Hackathon, Shaastra 2026 at IIT Madras.',
    ],
    verifiedFeatures: [
      'Interactive synaptic weight evolution graph',
      'Sparse activation threshold visualization',
      'Hebbian memory consolidation simulation',
      'Graph sparsity metric calculations with NumPy',
    ],
    metrics: [
      { label: 'Hackathon Result', value: 'Finalist (Shaastra 2026)', sourceNote: 'IIT Madras Synaptix Frontier AI Hackathon' },
      { label: 'Architecture', value: 'Sparse Graph Memory', sourceNote: 'NetworkX + NumPy implementation' },
      { label: 'Domain', value: 'AI Interpretability', sourceNote: 'Verified repository code & notebook' },
    ],
    techStack: {
      aiMl: ['NetworkX', 'NumPy', 'Matplotlib', 'Hebbian Dynamics'],
      tools: ['Jupyter Notebook', 'Python 3.10', 'Git'],
    },
    role: 'AI Researcher & Interpretability Developer',
    githubUrl: 'https://github.com/Mann65121/BDH-MEMORY-VISUALIZATION',
    verificationStatus: 'Code Verified',
    isFeatured: true,
  },
  {
    id: 'truthlens',
    title: 'TruthLens',
    subtitle: 'Transparent Misinformation Detection with Generative Explainability',
    category: 'fullstack',
    tags: ['React', 'TypeScript', 'Tailwind', 'TF-IDF', 'Logistic Regression', 'Hugging Face'],
    summary:
      'Collaborative fake news detection platform combining classical TF-IDF classification with an LLM-assisted reasoning engine that explains the credibility breakdown to users.',
    problemSolved:
      'Black-box classification creates distrust when flagging online articles; users require actionable explanations of linguistic cues and dubious claims.',
    architectureDetails: [
      'Two-stage evaluation: high-speed linguistic feature classification followed by generative reasoning synthesis.',
      'NLP pipeline utilizing term-frequency inverse-document frequency (TF-IDF) feature weighting and trained Logistic Regression.',
      'Generative AI reasoning module summarizing bias indicators, unsupported assertions, and rhetoric patterns.',
      'Clean modern frontend constructed with React, TypeScript, and Tailwind CSS for rapid text pasted analysis.',
    ],
    verifiedFeatures: [
      'Real-time text credibility score generation',
      'Generative explanation reasoning breakdown',
      'Keyword salience and emotional cue highlighting',
      'Responsive editorial web interface',
    ],
    metrics: [
      { label: 'Classification', value: 'TF-IDF + Logistic Reg', sourceNote: 'Documented NLP pipeline' },
      { label: 'Explainability', value: 'Generative AI Summaries', sourceNote: 'Hugging Face integration' },
      { label: 'UI Architecture', value: 'React + TypeScript', sourceNote: 'Verified repository structure' },
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      aiMl: ['Python', 'TF-IDF', 'Logistic Regression', 'Hugging Face'],
      tools: ['Git', 'Vite', 'npm'],
    },
    role: 'NLP Engineer & Co-Developer (Collaborative Project)',
    githubUrl: 'https://github.com/Mann65121/TruthLens---fake-news-detection',
    verificationStatus: 'Code Verified',
    isFeatured: false,
  },
  {
    id: 'text-gen-studio',
    title: 'Text-Gen-Studio',
    subtitle: 'Interactive GPT-2 Text Continuation Playground',
    category: 'ai-ml',
    tags: ['Python', 'Hugging Face', 'GPT-2', 'NLP', 'Streamlit'],
    summary:
      'AI-powered creative writing and prompt tuning application built with Hugging Face transformers, allowing users to configure temperature, top-k, and sequence length interactively.',
    problemSolved:
      'Writers and researchers need intuitive playgrounds to understand autoregressive language model sampling behaviors without writing boilerplate inference code.',
    architectureDetails: [
      'Integrated Hugging Face GPT-2 language model with configurable sampling hyper-parameters.',
      'Dynamic token generation streaming with temperature and repetition penalty calibration.',
      'Lightweight, responsive interface designed for creative brainstorming and prompt experimentation.',
    ],
    verifiedFeatures: [
      'Prompt-driven autoregressive text completion',
      'Interactive temperature and nucleus sampling tuning',
      'Fast local CPU/GPU execution loop',
    ],
    metrics: [
      { label: 'Base Model', value: 'Hugging Face GPT-2', sourceNote: 'Verified repository code' },
      { label: 'Domain', value: 'Creative NLG Playground', sourceNote: 'GitHub repository audit' },
    ],
    techStack: {
      aiMl: ['Hugging Face Transformers', 'PyTorch', 'GPT-2'],
      backend: ['Python 3.10'],
      tools: ['Git', 'VS Code'],
    },
    role: 'Creator & Developer',
    githubUrl: 'https://github.com/Mann65121/Text-Gen-Studio',
    verificationStatus: 'Code Verified',
    isFeatured: false,
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'vled-iit-ropar',
    role: 'Software Development Intern',
    organization: 'Vicharanashala Lab for Education Design (VLED), IIT Ropar',
    location: 'Remote',
    period: 'Jul 2026 – Present',
    status: 'Current',
    summary:
      'Developing production-grade backend REST APIs for the Community Pinboard feature of a collaborative Crowd-Source FAQ platform, following a clean layered architecture.',
    keyContributions: [
      'Engineered modular RESTful APIs using TypeScript, Express.js, and MongoDB utilizing strict layered controller–service–repository patterns for high maintainability.',
      'Designed and deployed bookmark, reminder, and resource pinboard modules equipped with Zod schema validation to eliminate malformed payloads and enhance database consistency.',
      'Maintained disciplined engineering workflows in an Agile/Scrum team, conducting peer code reviews, sprint grooming, and continuous incremental delivery.',
      'Diagnosed and rectified backend bottlenecks across middleware and database query layers, hardening global error handlers and comprehensive edge-case coverage.',
    ],
    techStack: ['TypeScript', 'Express.js', 'MongoDB', 'Mongoose', 'Zod', 'Git', 'Agile / Scrum', 'Turbo'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Manipal University Jaipur',
    period: 'August 2023 – May 2027',
    grade: 'CGPA: 8.84 / 10',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java/Python)',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Machine Learning & Artificial Intelligence',
      'Theory of Computation',
      'Computer Organisation and Architecture',
      'Design and Analysis of Algorithm',
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'shaastra-2026',
    title: 'Finalist — Synaptix Frontier AI Hackathon',
    event: 'Shaastra 2026',
    organizer: 'Indian Institute of Technology Madras (IIT Madras)',
    year: '2026',
    description:
      'Selected among elite national teams to present BDH (Dragon Hatchling) memory visualization, exploring sparse brain-inspired neuron activations and interpretability dynamics.',
    badge: 'National Finalist',
  },
  {
    id: 'hackwise-2026',
    title: 'Campus Round Qualifier — HackWise 2026',
    event: 'IRIS 2026',
    organizer: 'Indian Institute of Management Indore (IIM Indore)',
    year: '2026',
    description:
      'Qualified through competitive multi-stage technical hackathon rounds tackling complex algorithmic and systems engineering problem statements.',
    badge: 'Campus Qualifier',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    iconName: 'Code2',
    skills: [
      { name: 'JavaScript', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'Java', highlight: true },
      { name: 'C' },
      { name: 'SQL', highlight: true },
    ],
  },
  {
    title: 'Backend & Systems',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'Express.js', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'RESTful API Architecture', highlight: true },
      { name: 'Layered Architecture (Controller-Service-Repo)', highlight: true },
      { name: 'Zod Validation', highlight: true },
      { name: 'Mongoose ODM' },
    ],
  },
  {
    title: 'Frontend Engineering',
    iconName: 'Layout',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Next.js', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'HTML5 / Semantic Web' },
      { name: 'Responsive Layouts', highlight: true },
      { name: 'State Management' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    iconName: 'Brain',
    skills: [
      { name: 'Scikit-learn', highlight: true },
      { name: 'TensorFlow', highlight: true },
      { name: 'PyTorch' },
      { name: 'Generative Adversarial Networks (GANs)', highlight: true },
      { name: 'Ensemble Learning (XGBoost, RF)', highlight: true },
      { name: 'Natural Language Processing (NLP)', highlight: true },
      { name: 'RAG & Vector Retrieval', highlight: true },
      { name: 'Ollama & LLM Local Inference', highlight: true },
      { name: 'NetworkX (Graph Networks)' },
    ],
  },
  {
    title: 'Databases & Tools',
    iconName: 'Database',
    skills: [
      { name: 'MongoDB', highlight: true },
      { name: 'PostgreSQL / SQL', highlight: true },
      { name: 'Git & GitHub', highlight: true },
      { name: 'Linux / Bash', highlight: true },
      { name: 'VS Code' },
      { name: 'Vite & Build Tooling' },
      { name: 'Agile & Scrum Methodologies', highlight: true },
    ],
  },
];
