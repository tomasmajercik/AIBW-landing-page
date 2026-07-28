import { why } from "../content.js";

// Pastelový pás. Spojené „toto nie je zoznamka“ a tri dôvody,
// prečo sú na stretnutí vždy traja a viac.
export default function Why() {
  return (
    <section className="section section--soft" id="preco">
      <div className="shell">
        <p className="eyebrow eyebrow--light">{why.eyebrow}</p>

        <h2 className="why__title">
          {why.title}
          <br />
          <em>{why.titleAccent}</em>
        </h2>

        <p className="why__body">{why.body}</p>

        <ul className="points">
          {why.points.map((point) => (
            <li className="point" key={point.title}>
              <h3 className="point__title">{point.title}</h3>
              <p className="point__body">{point.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
