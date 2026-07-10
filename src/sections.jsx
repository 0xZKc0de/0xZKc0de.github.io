import { Award, BookOpen } from 'lucide-react';

/* ---- Shared Section Header ---- */
export function SectionHeader({ id, children }) {
  return (
    <h2 id={id} className="section-header">
      {children}
    </h2>
  );
}

/* ---- LaTeX-style Entry ---- */
export function Entry({ title, date, company, children }) {
  return (
    <article className="entry">
      <div className="entry-header">
        <h3 className="entry-title">{title}</h3>
        {date && <span className="entry-date">{date}</span>}
      </div>
      {company && <p className="entry-company">{company}</p>}
      {children && <p className="entry-description">{children}</p>}
    </article>
  );
}

/* ---- Tag / Tech Badge ---- */
export function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

/* ============================================================
   SECTION: ABOUT
   ============================================================ */
export function AboutSection() {
  const competencies = [
    {
      label: 'Programming',
      value: 'Python, Go, Rust, SQL',
    },
    {
      label: 'Cloud',
      value: 'AWS (EC2, Bedrock, SageMaker, S3, IAM)',
    },
    {
      label: 'Infra & DevOps',
      value: 'Linux, Bash, Docker, Kubernetes, Terraform, GitHub Actions',
    },
    {
      label: 'LLMOps & AI',
      value: 'vLLM, Ollama, ONNX, Quantization, LangChain, RAG, MLflow',
    },
    {
      label: 'Data',
      value: 'PostgreSQL, Neo4j, Pinecone, Kafka',
    },
  ];

  return (
    <section className="section-block" aria-labelledby="about">
      <SectionHeader id="about">About</SectionHeader>

      <p className="summary-lead">
        Recent Computer Engineering Master&apos;s graduate focused on AI
        Infrastructure, Cloud Engineering, and LLMOps. I design and deploy
        scalable, production-grade AI systems — from quantized edge models to
        cloud-native inference pipelines — grounded in solid systems engineering
        principles.
      </p>

      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.72rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
          color: 'var(--text-muted)',
          marginBottom: '0.75rem',
        }}
      >
        Core Competencies
      </h3>

      <div className="competency-grid">
        {competencies.map(({ label, value }) => (
          <div className="competency-item" key={label}>
            <span className="competency-label">{label}</span>
            <span className="competency-value">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   SECTION: EXPERIENCE
   ============================================================ */
export function ExperienceSection() {
  return (
    <section className="section-block" aria-labelledby="experience">
      <SectionHeader id="experience">Experience</SectionHeader>

      <article className="entry">
        <div className="entry-header">
          <h3 className="entry-title">Software Engineer Intern</h3>
          <span className="entry-date">Mar 2026 – Present</span>
        </div>
        <p className="entry-company">Capgemini &mdash; Casablanca, Morocco</p>
        <p className="entry-description">
          Built <strong>DocGen</strong>, an AI Documentation Platform that
          performs AST-based code analysis and generates structured developer
          documentation using large language models. Integrated GitHub OAuth 2.0
          for repository access and leveraged AWS Bedrock (Claude) as the
          inference backend.
        </p>
        <div className="tag-list">
          {['AWS Bedrock', 'AST Analysis', 'GitHub OAuth 2.0', 'Python', 'LLMs'].map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </article>

      <article className="entry">
        <div className="entry-header">
          <h3 className="entry-title">AI Developer Intern</h3>
          <span className="entry-date">Jan 2025 – Jun 2025</span>
        </div>
        <p className="entry-company">LIADTECH &mdash; Tetouan, Morocco</p>
        <p className="entry-description">
          Designed and shipped an <strong>Intelligent Resume RAG Assistant</strong>{' '}
          — a retrieval-augmented generation system that intelligently matches
          candidates to job descriptions. Built the backend with FastAPI and
          LangChain, used ChromaDB as the vector store, and automated CI/CD via
          Azure DevOps.
        </p>
        <div className="tag-list">
          {['FastAPI', 'LangChain', 'ChromaDB', 'RAG', 'Azure DevOps'].map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </article>
    </section>
  );
}

/* ============================================================
   SECTION: PROJECTS
   ============================================================ */
export function ProjectsSection() {
  const projects = [
    {
      title: 'Edge AI Assistant Chatbot',
      description:
        'A 100% offline mobile AI chat application powered by 4-bit quantized models (Phi-3 / Gemma 2B) using GGUF and ONNX runtimes. Runs entirely on-device with no cloud dependency — designed for privacy-first environments.',
      tags: ['GGUF', 'ONNX', 'Quantization', 'Phi-3', 'Gemma 2B', 'Mobile'],
      links: [
        { label: 'Code', href: 'https://github.com/0xZKc0de' },
        { label: 'Architecture', href: '#' },
      ],
    },
    {
      title: 'BlogIn — Blogging Platform',
      description:
        'A full-stack blogging platform with a rich editor, user authentication (JWT), category management, and image uploads. Built with Angular for the frontend, Spring Boot REST API for the backend, and PostgreSQL as the data store.',
      tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT'],
      links: [{ label: 'Code', href: 'https://github.com/0xZKc0de' }],
    },
    {
      title: 'Voyage Reservation Platform',
      description:
        'End-to-end travel booking platform featuring trip search, seat reservation, and secure payment processing via PayPal API. Backend rigorously tested with JUnit; Angular SPA for the client interface.',
      tags: ['Angular', 'Spring Boot', 'PayPal API', 'JUnit', 'PostgreSQL'],
      links: [{ label: 'Code', href: 'https://github.com/0xZKc0de' }],
    },
  ];

  return (
    <section className="section-block" aria-labelledby="projects">
      <SectionHeader id="projects">Projects &amp; Open Source</SectionHeader>

      {projects.map(({ title, description, tags, links }) => (
        <article className="entry" key={title}>
          <div className="entry-header">
            <h3 className="entry-title">{title}</h3>
          </div>
          <p className="entry-description" style={{ marginTop: '0.25rem' }}>
            {description}
          </p>
          <div className="tag-list" style={{ marginTop: '0.6rem' }}>
            {tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
          <div className="project-links">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                [{label}]
              </a>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

/* ============================================================
   SECTION: CERTIFICATIONS & AWARDS
   ============================================================ */
export function CertificationsSection() {
  const certs = [
    { icon: <Award size={14} />, text: 'OCI 2025 Certified DevOps Professional — Oracle' },
    { icon: <Award size={14} />, text: 'Neo4j Certified Professional — Neo4j' },
    { icon: <Award size={14} />, text: 'HackerRank Software Engineer Certificate' },
  ];

  const awards = [
    { icon: <BookOpen size={14} />, text: '1st Place — Problem Solving Competition (Club Infotech Ensaté)' },
    { icon: <BookOpen size={14} />, text: '1st Place — Secure Challenge (Cybersecurity Competition)' },
  ];

  const renderList = (items) => (
    <ul className="cert-list">
      {items.map(({ icon, text }) => (
        <li key={text}>
          <span className="cert-bullet" aria-hidden="true">{icon}</span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="section-block" aria-labelledby="certifications">
      <SectionHeader id="certifications">Certifications &amp; Awards</SectionHeader>

      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.72rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
          color: 'var(--text-muted)',
          margin: '0 0 0.5rem',
        }}
      >
        Certifications
      </h3>
      {renderList(certs)}

      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.72rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
          color: 'var(--text-muted)',
          margin: '1.25rem 0 0.5rem',
        }}
      >
        Awards
      </h3>
      {renderList(awards)}
    </section>
  );
}

/* ============================================================
   SECTION: BLOG & TOPICS
   ============================================================ */
export function BlogSection() {
  const guides = [
    {
      title: 'Comprehensive Guide to LLM Quantization: From FP16 to GGUF/ONNX 4-bit',
      date: '2025',
      href: '#',
    },
    {
      title: 'Deploying vLLM on AWS SageMaker: Best Practices for High-Throughput Serving',
      date: '2025',
      href: '#',
    },
  ];

  return (
    <section className="section-block" aria-labelledby="blog">
      <SectionHeader id="blog">Blog &amp; Topics</SectionHeader>

      {guides.map(({ title, date, href }) => (
        <div className="guide-entry" key={title}>
          <div>
            <p className="guide-title">{title}</p>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
              }}
            >
              {date}
            </span>
          </div>
          <a
            href={href}
            className="project-link"
            style={{ flexShrink: 0 }}
            target="_blank"
            rel="noreferrer"
          >
            [Read Note]
          </a>
        </div>
      ))}
    </section>
  );
}

/* ============================================================
   SECTION: CV / EDUCATION
   ============================================================ */
export function CVSection() {
  const education = [
    {
      degree: "Master's Degree — Computer Engineering",
      institution: 'Abdelmalek Essaâdi University, ENSA Tétouan',
      years: '2023 – 2025',
      details: 'Specialization in AI Infrastructure, Cloud Computing, and Distributed Systems.',
    },
    {
      degree: "Bachelor's Degree — Computer Engineering",
      institution: 'Abdelmalek Essaâdi University, ENSA Tétouan',
      years: '2020 – 2023',
      details: 'Foundational coursework in algorithms, software engineering, databases, and networks.',
    },
  ];

  return (
    <section className="section-block" aria-labelledby="cv">
      <SectionHeader id="cv">Curriculum Vitae</SectionHeader>

      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.72rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
          color: 'var(--text-muted)',
          marginBottom: '1rem',
        }}
      >
        Education
      </h3>

      {education.map(({ degree, institution, years, details }) => (
        <div className="education-entry" key={degree}>
          <p className="edu-degree">{degree}</p>
          <p className="edu-institution">{institution}</p>
          <p className="edu-year">{years}</p>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              margin: '0.3rem 0 0',
              lineHeight: 1.6,
            }}
          >
            {details}
          </p>
        </div>
      ))}

      <hr style={{ border: 'none', borderTop: '1px solid var(--rule)', margin: '1.5rem 0' }} />

      <p
        style={{
          fontSize: '0.95rem',
          color: 'var(--text-secondary)',
          marginBottom: '0.25rem',
        }}
      >
        Download the full CV as a PDF for a complete overview of experience,
        projects, and technical skills.
      </p>
      <a
        href="/cv.pdf"
        className="download-btn"
        download
        aria-label="Download full CV as PDF"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download Full CV (PDF)
      </a>
    </section>
  );
}
