import { problem } from "../content.js";

export default function Problem() {
  return (
    <section className="section section--problem" id="preco">
      <div className="shell">
        <p className="eyebrow">{problem.eyebrow}</p>
        <h2 className="section__title">{problem.title}</h2>

        <div className="cards">
          {problem.cards.map((card) => (
            <article className="card" key={card.kicker}>
              <h3 className="card__kicker">{card.kicker}</h3>
              <p className="card__body">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
