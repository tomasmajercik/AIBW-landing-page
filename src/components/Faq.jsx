import { faq } from "../content.js";

export default function Faq() {
  return (
    <section className="section section--faq" id="otazky">
      <div className="shell">
        <p className="eyebrow">{faq.eyebrow}</p>
        <h2 className="section__title">{faq.title}</h2>

        <dl className="faq">
          {faq.items.map((item) => (
            <div className="faq__item" key={item.q}>
              <dt className="faq__q">{item.q}</dt>
              <dd className="faq__a">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
