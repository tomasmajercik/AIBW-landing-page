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

        <div className="problem__cta" data-reveal>
          <p className="problem__ctaText">{problem.ctaText}</p>
          <a className="btn btn--big" href="#vyskusaj">
            {problem.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
