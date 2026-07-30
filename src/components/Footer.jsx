import { brand, footer } from "../content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">{brand.name}</p>
          <p className="footer__tagline">{footer.tagline}</p>
        </div>
      </div>

      <p className="footer__note">{footer.note}</p>
    </footer>
  );
}
