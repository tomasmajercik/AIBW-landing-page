import { brand, nav } from "../content";
import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top">
          <Logo />
          {brand.name}
        </a>

        <nav className="nav__links">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--small" href="#vyskusaj">
          {nav.cta}
        </a>
      </div>
    </header>
  );
}
