import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About',          href: '/about' },
  { label: 'Projects',       href: '/projects' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Blog',           href: '/blog' },
  { label: 'CV',             href: '/cv' },
];

export default function Navbar({ dark, onToggleDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="navbar" role="banner">
        <div className="navbar-inner">
          {/* Site title */}
          <Link
            to="/about"
            className="navbar-title"
            style={{ textDecoration: 'none', color: 'var(--text-primary)' }}
          >
            Mohamed El Haddad&thinsp;/&thinsp;Portfolio
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation">
            <ul className="navbar-links">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <NavLink
                    to={href}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            {/* Mobile hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Dark mode toggle */}
            <button
              className="dark-toggle"
              onClick={onToggleDark}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Light mode' : 'Dark mode'}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </>
  );
}
