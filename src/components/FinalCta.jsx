import { finalCta } from "../content";

export default function FinalCta() {
  return (
    <section className="final">
      <div className="container final__inner">
        <h2 className="final__title">{finalCta.title}</h2>
        <p className="final__text">{finalCta.text}</p>

        <div className="hero__actions">
          <a className="btn btn--light" href="#vyskusaj">
            {finalCta.ctaPrimary}
          </a>
          <a className="btn btn--outline" href="#pre-zakladatelov">
            {finalCta.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
