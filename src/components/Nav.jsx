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

        {/* web ešte nie je vonku, tlačidlo zatiaľ nikam nevedie */}
        <button type="button" className="btn btn--small">
          {nav.cta}
        </button>
      </div>
    </header>
  );
}
