import { Project, Experience, SkillCategory, Education, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'Maniraj Kyatham',
  handle: '@maniraj-kyatham',
  role: 'Software Developer',
  tagline: 'Building scalable Python & REST API backend services, database-optimized architectures, and machine learning systems.',
  bio: `Final-year B.Tech IT student at ACE Engineering College (CGPA: 8.36) with hands-on experience building software applications using Python, FastAPI, Flask, REST APIs, SQL, and Machine Learning. Track record of shipping working products from scratch, optimizing query performance from ~270ms down to under 40ms, and delivering AI-driven solutions.`,
  location: 'Hyderabad, Telangana',
  email: 'manirajkyatham@gmail.com',
  phone: '+91 99494 47302',
  github: 'https://github.com/maniraj48',
  leetcode: 'https://leetcode.com/u/maniraj48',
  leetcodeUsername: 'maniraj48',
  linkedin: 'https://linkedin.com/in/maniraj-kyatham',
  twitter: '',
  resumeUrl: '/resume.pdf',
  status: 'Open to Software Engineering & Backend Opportunities',
  cgpa: '8.36',
  certificationsCount: '5'
};

export const EDUCATIONS: Education[] = [
  {
    id: 'edu-1',
    institution: 'ACE Engineering College',
    degree: 'B.Tech in Information Technology',
    score: 'CGPA: 8.36',
    period: '2023 – 2027',
    location: 'Hyderabad, Telangana'
  },
  {
    id: 'edu-2',
    institution: 'Raghava Laxmi Devi Govt. Junior College',
    degree: 'Intermediate (MPC)',
    score: '95%',
    period: '2021 – 2023',
    location: 'Hyderabad, Telangana'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-0',
    title: 'Specialized AI, ML & NLP Training Program (100 Hours)',
    issuer: 'ACE Engineering College / eSetu Solutions Pvt. Ltd.',
    year: '2026'
  },
  {
    id: 'cert-1',
    title: 'Principles of Generative AI',
    issuer: 'Infosys Springboard',
    year: '2026'
  },
  {
    id: 'cert-2',
    title: 'AI & Data Analytics',
    issuer: 'AICTE / Edunet Foundation / Shell India',
    year: '2025'
  },
  {
    id: 'cert-3',
    title: 'Python Essentials 1 & 2',
    issuer: 'Cisco',
    year: '2024'
  },
  {
    id: 'cert-4',
    title: 'Introduction to SQL',
    issuer: 'Simplilearn',
    year: '2024'
  },
  {
    id: 'cert-5',
    title: 'TCS iON Career Edge – Young Professional',
    issuer: 'TCS iON',
    year: '2024'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'subscription-churn-prediction',
    title: 'Subscription Churn Prediction System',
    tagline: 'Full-stack platform with FastAPI REST APIs, Scikit-Learn ML inference & React UI.',
    description: 'A full-stack subscription churn prediction platform built by a 5-member Agile team. Features FastAPI REST endpoints, JWT authentication, PDF/CSV report exports, and machine learning inference.',
    category: 'AI / ML',
    tags: ['FastAPI', 'React', 'SQLite', 'Scikit-Learn', 'SQLAlchemy', 'JWT', 'Python'],
    githubUrl: 'https://github.com/maniraj48/subscription-churn-prediction',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Reduced critical SQL query execution time from approximately 270 ms to under 40 ms.',
    longDescription: `Served as both Product Owner and Developer in a five-member Agile team building a full-stack churn prediction platform. Designed FastAPI REST APIs for customer management, analytics, machine learning inference, and report generation, while integrating React frontend with JWT authentication and SQLAlchemy ORM.`,
    architectureNotes: [
      'FastAPI REST server with JWT bearer token authentication and SQLAlchemy ORM',
      'Database query optimization using indexed views and CTEs cut execution time from approximately 270 ms to under 40 ms',
      'Scikit-Learn ML model pipeline for customer churn probability inference',
      'React UI integrated with backend report generators for automated PDF/CSV downloads'
    ],
    keyFeatures: [
      'FastAPI REST APIs for auth, customer management, analytics, prediction & reporting',
      'Secure JWT authentication and role-based data flow',
      'Automated PDF/CSV analytics report generation',
      'Optimized SQL query performance via indexed views and CTE queries (<40ms latency)',
      'Sprint-based Agile development with product backlog and user stories'
    ],
    codeSnippet: {
      language: 'python',
      code: `from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import pandas as pd
import joblib

app = FastAPI(title="Subscription Churn Prediction Engine")
churn_model = joblib.load("models/churn_model.pkl")

@app.post("/api/v1/predict")
def predict_churn(customer_data: CustomerSchema, db: Session = Depends(get_db)):
    # Prepare feature matrix for scikit-learn model
    features = pd.DataFrame([customer_data.dict()])
    probability = churn_model.predict_proba(features)[0][1]
    
    # Save inference telemetry via optimized SQL CTE view query
    record_prediction(db, customer_data.id, probability)
    return {
        "customer_id": customer_data.id,
        "churn_risk_score": round(probability, 4),
        "risk_category": "HIGH" if probability > 0.65 else "LOW"
    }`
    }
  },
  {
    id: 'knowledge-vault-ai',
    title: 'Knowledge Vault AI',
    tagline: 'Offline document intelligence application enabling semantic search & source-aware QA.',
    description: 'An offline document intelligence system built with Flask, LangChain, and ChromaDB that enables local semantic search and question answering without reliance on external cloud APIs.',
    category: 'AI / ML',
    tags: ['Python', 'Flask', 'REST API', 'LangChain', 'ChromaDB', 'SQLite'],
    githubUrl: 'https://github.com/maniraj48/knowledge-vault-ai',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    metrics: '100% offline local document processing & vector search without external APIs.',
    longDescription: `Designed and developed an offline document intelligence application enabling semantic search and question answering. Built modular Flask REST APIs integrating SQLite, ChromaDB vector database, and LangChain for document indexing, chunking, retrieval, and source-aware responses.`,
    architectureNotes: [
      'Flask REST API architecture with modular controllers and SQLite persistence',
      'ChromaDB vector embedding store for fast local similarity search',
      'LangChain RAG pipeline returning exact document source citations'
    ],
    keyFeatures: [
      'Complete offline execution — zero external API cost or data exposure',
      'Modular document indexing and text processing pipeline',
      'ChromaDB vector search & similarity retrieval',
      'Chat history management and source-grounded answers'
    ],
    codeSnippet: {
      language: 'python',
      code: `from flask import Flask, request, jsonify
from langchain.vectorstores import Chroma
from langchain.chains import RetrievalQA

app = Flask(__name__)
vector_db = Chroma(persist_directory="./chroma_db", embedding_function=local_embeddings)

@app.route("/api/query", methods=["POST"])
def query_documents():
    data = request.json
    query = data.get("query")
    
    # Perform ChromaDB similarity search
    docs = vector_db.similarity_search(query, k=3)
    response = generate_source_aware_response(query, docs)
    return jsonify({
        "answer": response,
        "sources": [d.metadata for d in docs]
    })`
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'AI & Data Analytics Intern',
    company: 'Edunet Foundation (AICTE & Shell India)',
    period: 'Oct 2025 – Nov 2025',
    location: 'Remote',
    type: 'Internship',
    description: 'Developed machine learning applications using Python, pandas, NumPy, and scikit-learn following structured software development practices.',
    achievements: [
      'Developed machine learning applications using Python, pandas, NumPy and scikit-learn following structured software development practices.',
      'Performed data preprocessing, feature engineering, model development, testing and evaluation on real-world datasets.',
      'Collaborated with mentors and team members to deliver project milestones while documenting implementation details and presenting outcomes.',
      'Strengthened software development, debugging, analytical thinking and problem-solving skills through hands-on project work.'
    ],
    techStack: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Git', 'Data Preprocessing', 'ML Evaluation']
  },
  {
    id: 'exp-2',
    role: 'Product Owner & Developer',
    company: 'Subscription Churn Prediction System',
    period: '2026',
    location: 'ACE Engineering College',
    type: 'Academic Project',
    description: 'Served in both product ownership and development roles in the final phase of specialized AI, ML & NLP training, collaborating in a five-member Agile Scrum team.',
    achievements: [
      'Managed the product backlog, user stories and sprint planning while contributing directly to implementation.',
      'Built FastAPI REST APIs for authentication, customer management, analytics, prediction, reporting and machine learning inference.',
      'Integrated the React frontend, JWT authentication, SQLAlchemy database operations, and PDF/CSV report generation.',
      'Optimized a critical SQL query with indexed views and CTEs, reducing execution time from approximately 270 ms to under 40 ms.'
    ],
    techStack: ['FastAPI', 'React', 'SQLite', 'Scikit-Learn', 'SQLAlchemy', 'JWT', 'Agile Scrum', 'GitHub']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Core CS',
    icon: 'Code2',
    skills: [
      { name: 'Python', category: 'Core', highlight: true, experienceYears: '3 yrs' },
      { name: 'SQL', category: 'Core', highlight: true, experienceYears: '3 yrs' },
      { name: 'Java', category: 'Core', highlight: false, experienceYears: '2 yrs' },
      { name: 'Data Structures & Algorithms', category: 'Core', highlight: true, experienceYears: '3 yrs' },
      { name: 'Object-Oriented Programming', category: 'Core', highlight: true, experienceYears: '3 yrs' },
      { name: 'JavaScript', category: 'Core', highlight: false, experienceYears: '2 yrs' }
    ]
  },
  {
    title: 'Backend Frameworks & Databases',
    icon: 'Server',
    skills: [
      { name: 'FastAPI', category: 'Backend', highlight: true, experienceYears: '2 yrs' },
      { name: 'Flask', category: 'Backend', highlight: true, experienceYears: '2 yrs' },
      { name: 'REST APIs', category: 'Backend', highlight: true, experienceYears: '3 yrs' },
      { name: 'SQLite & PostgreSQL', category: 'Backend', highlight: true, experienceYears: '3 yrs' },
      { name: 'SQLAlchemy ORM', category: 'Backend', highlight: true, experienceYears: '2 yrs' },
      { name: 'ChromaDB Vector Store', category: 'Backend', highlight: false, experienceYears: '1 yr' }
    ]
  },
  {
    title: 'AI, Machine Learning & Data',
    icon: 'Cpu',
    skills: [
      { name: 'Scikit-Learn', category: 'AI/ML', highlight: true, experienceYears: '2 yrs' },
      { name: 'LangChain', category: 'AI/ML', highlight: true, experienceYears: '1 yr' },
      { name: 'pandas & NumPy', category: 'AI/ML', highlight: true, experienceYears: '3 yrs' },
      { name: 'TensorFlow', category: 'AI/ML', highlight: false, experienceYears: '1 yr' },
      { name: 'Hugging Face & OpenCV', category: 'AI/ML', highlight: false, experienceYears: '1 yr' },
      { name: 'SHAP Explainability', category: 'AI/ML', highlight: false, experienceYears: '1 yr' }
    ]
  },
  {
    title: 'Frontend, Tools & Concepts',
    icon: 'Layout',
    skills: [
      { name: 'React.js', category: 'Frontend', highlight: true, experienceYears: '2 yrs' },
      { name: 'Material UI / HTML / CSS', category: 'Frontend', highlight: false, experienceYears: '2 yrs' },
      { name: 'Git & GitHub', category: 'Tools', highlight: true, experienceYears: '3 yrs' },
      { name: 'Docker & Render', category: 'Tools', highlight: false, experienceYears: '1 yr' },
      { name: 'Agile Scrum & Backlog', category: 'Concepts', highlight: true, experienceYears: '2 yrs' },
      { name: 'Software Engineering & DBMS', category: 'Concepts', highlight: true, experienceYears: '3 yrs' }
    ]
  }
];

export const TERMINAL_COMMANDS_HELP = [
  { command: 'help', description: 'Display all available terminal commands' },
  { command: 'about', description: 'Read Maniraj Kyatham bio and academic background' },
  { command: 'skills', description: 'List core programming languages, frameworks & ML stack' },
  { command: 'projects', description: 'Show featured projects (Churn Prediction, Knowledge Vault AI)' },
  { command: 'exp', description: 'View internship timeline' },
  { command: 'edu', description: 'Display B.Tech IT & Intermediate education details' },
  { command: 'cert', description: 'List certifications (Infosys, AICTE, Cisco, TCS iON)' },
  { command: 'contact', description: 'Get direct email, phone, GitHub & LinkedIn links' },
  { command: 'cat resume', description: 'Output summary resume text' },
  { command: 'sudo hire', description: 'Trigger priority recruiter opportunity message' },
  { command: 'clear', description: 'Clear terminal screen' },
  { command: 'exit', description: 'Close terminal window' }
];
