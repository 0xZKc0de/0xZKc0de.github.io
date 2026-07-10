import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  CertificationsSection,
  BlogSection,
  CVSection,
} from './sections';
import './index.css';

/* -----------------------------------------------------------
   Dark mode: read from localStorage, apply to <html>
   ----------------------------------------------------------- */
function useDarkMode() {
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem('portfolio-dark-mode');
      if (stored !== null) return stored === 'true';
      // System preference fallback
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('portfolio-dark-mode', String(dark));
    } catch {
      // ignore storage errors
    }
  }, [dark]);

  return [dark, () => setDark((v) => !v)];
}

/* -----------------------------------------------------------
   Page Components
   ----------------------------------------------------------- */
function AboutPage() {
  return (
    <>
      <AboutSection />
    </>
  );
}

function CVPage() {
  return (
    <>
      <ExperienceSection />
      <CVSection />
    </>
  );
}

/* -----------------------------------------------------------
   App Root
   ----------------------------------------------------------- */
export default function App() {
  const [dark, toggleDark] = useDarkMode();

  return (
    <div className="layout-grid">
      {/* ── Top Navbar (spans full width) ── */}
      <Navbar dark={dark} onToggleDark={toggleDark} />

      {/* ── Left Sidebar ── */}
      <Sidebar />

      {/* ── Right Main Content ── */}
      <main className="main-content" id="main-content">
        <Routes>
          {/* Default redirect to about */}
          <Route path="/" element={<Navigate to="/about" replace />} />
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/certifications" element={<CertificationsSection />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>

        {/* Footer */}
        <footer
          style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--rule)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} Mohamed El Haddad. Built with React &amp; Vite.
        </footer>
      </main>
    </div>
  );
}
