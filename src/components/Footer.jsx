import { footer, wordmark } from "../content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <span className="footer__brand">
          {wordmark.first}
          <span className="wordmark__accent">{wordmark.rest}</span>
        </span>
        <span className="footer__line">{footer.line}</span>
        <span className="footer__year">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
