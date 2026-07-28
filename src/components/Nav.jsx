import { brand, nav } from "../content.js";

export default function Nav() {
  return (
    <header className="nav">
      <div className="shell nav__inner">
        <a className="nav__brand" href="#top">
          <Mark />
          <span>{brand}</span>
        </a>

        <nav className="nav__links" aria-label="Hlavné menu">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--small" href="#zapisat">
          {nav.cta}
        </a>
      </div>
    </header>
  );
}

function Mark() {
  return (
    <svg className="nav__mark" viewBox="0 0 64 64" aria-hidden="true">
      <g fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 32 H26" stroke="var(--teal)" />
        <path d="M26 32 L41 17 H54" stroke="var(--raspberry)" />
        <path d="M26 32 L41 47 H54" stroke="var(--amber)" />
      </g>
      <circle cx="26" cy="32" r="5.5" fill="var(--ink)" />
    </svg>
  );
}
