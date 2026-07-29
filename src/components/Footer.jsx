import { brand, footer } from "../content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">{brand.name}</p>
          <p className="footer__tagline">{footer.tagline}</p>
        </div>

        <nav className="footer__links">
          {footer.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="footer__note">{footer.note}</p>
    </footer>
  );
}
