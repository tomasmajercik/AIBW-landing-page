import { problem } from "../content";

export default function Problem() {
  return (
    <section className="section problem" id="problem">
      <div className="container problem__grid">
        <h2 className="problem__title" data-reveal>
          {problem.title}
          <br />
          <span className="problem__accent">{problem.titleAccent}</span>
        </h2>

        <ul className="problem__list">
          {problem.items.map((item, i) => (
            <li className="problem__item" key={item.lead} data-reveal>
              <span className="problem__num">{String(i + 1).padStart(2, "0")}</span>
              <p>
                <strong>{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
