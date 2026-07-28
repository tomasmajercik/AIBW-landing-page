import { nav, wordmark } from "../content.js";

export default function Nav() {
  return (
    <header className="nav">
      <div className="shell nav__inner">
        <a className="nav__brand" href="#top">
          {wordmark.first}
          <span className="wordmark__accent">{wordmark.rest}</span>
        </a>

        <nav className="nav__links" aria-label="Hlavné menu">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav__cta" href="#zapisat">
          {nav.cta}
        </a>
      </div>
    </header>
  );
}
