import { faq } from "../content";

export default function Faq() {
  return (
    <section className="section" id="otazky">
      <div className="container container--narrow">
        <div className="section__head" data-reveal>
          <h2 className="section__title">{faq.title}</h2>
        </div>

        <div className="faq" data-reveal>
          {faq.items.map((item) => (
            <details key={item.q} className="faq__item" open={!!item.todo}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>

              {/* Poznámka pre seba. Pridáš ju cez pole „todo" v content.js. */}
              {item.todo && <p className="todo">{item.todo}</p>}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
