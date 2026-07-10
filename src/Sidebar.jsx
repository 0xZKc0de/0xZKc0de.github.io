import {
  MapPin,
  Mail,
} from 'lucide-react';

const Github = ({ size, className, 'aria-hidden': ariaHidden }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden={ariaHidden}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const Linkedin = ({ size, className, 'aria-hidden': ariaHidden }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden={ariaHidden}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Profile Picture */}
      <div style={{ textAlign: 'center' }}>
        <div
          className="profile-avatar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            userSelect: 'none',
          }}
          aria-label="Profile picture placeholder"
        >
          {/* Stylized initials placeholder */}
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: 'var(--text-muted)',
            fontSize: '2.2rem',
            lineHeight: 1,
          }}>
            MH
          </span>
        </div>

        <h2 className="profile-name">Mohamed El Haddad</h2>
        <p className="profile-bio">AI &amp; Cloud Engineer</p>
      </div>

      <hr className="sidebar-divider" />

      {/* Contact Details */}
      <ul className="contact-list">
        <li className="contact-item">
          <MapPin size={14} className="contact-icon" aria-hidden="true" />
          <span>Casablanca, Morocco</span>
        </li>
        <li className="contact-item">
          <Mail size={14} className="contact-icon" aria-hidden="true" />
          <a href="mailto:elhaddadmohamed963@gmail.com">
            elhaddadmohamed963@gmail.com
          </a>
        </li>
        <li className="contact-item">
          <Linkedin size={14} className="contact-icon" aria-hidden="true" />
          <a
            href="https://linkedin.com/in/mohamed-el-haddad"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="contact-item">
          <Github size={14} className="contact-icon" aria-hidden="true" />
          <a
            href="https://github.com/0xZKc0de"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </aside>
  );
}
