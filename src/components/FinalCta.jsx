import { finalCta } from "../content";

export default function FinalCta() {
  return (
    <section className="final">
      <div className="container final__inner">
        <h2 className="final__title">{finalCta.title}</h2>
        <p className="final__text">{finalCta.text}</p>

        <a className="btn btn--light btn--big" href="#vyskusaj">
          {finalCta.cta}
        </a>
      </div>
    </section>
  );
}
