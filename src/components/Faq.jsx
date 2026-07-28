import { faq } from "../content.js";

// Rozbaľovacie otázky. Používa sa značka <details>, ktorú prehliadač
// vie otvárať a zatvárať sám - netreba na to žiadny kód navyše
// a funguje to aj pre čítačky pre nevidiacich.
export default function Faq() {
  return (
    <section className="section section--rule" id="otazky">
      <div className="shell">
        {faq.eyebrow ? <p className="eyebrow">{faq.eyebrow}</p> : null}
        <h2 className="section__title">{faq.title}</h2>

        <div className="faq">
          {faq.items.map((item) => (
            <details className="faq__item" key={item.q}>
              <summary className="faq__q">
                <span>{item.q}</span>
                <span className="faq__sign" aria-hidden="true" />
              </summary>
              <p className="faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
