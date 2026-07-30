import { finalCta } from "../content";

export default function FinalCta() {
  return (
    <section className="final">
      <div className="container final__inner">
        <h2 className="final__title">{finalCta.title}</h2>
        <p className="final__text">{finalCta.text}</p>

        {/* web ešte nie je vonku, tlačidlo zatiaľ nikam nevedie */}
        <button type="button" className="btn btn--light btn--big">
          {finalCta.cta}
        </button>
      </div>
    </section>
  );
}
