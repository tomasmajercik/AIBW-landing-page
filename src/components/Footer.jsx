import { brand, footer } from "../content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <span className="footer__brand">{brand}</span>
        <span className="footer__line">{footer.line}</span>
        <span className="footer__year">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
