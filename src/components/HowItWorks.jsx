import { useState } from "react";
import { howItWorks } from "../content";

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const side = howItWorks.sides[active];

  return (
    <section className="section section--muted" id="ako-to-funguje">
      <div className="container">
        <div className="section__head" data-reveal>
          <h2 className="section__title">{howItWorks.title}</h2>
          <p className="section__intro">{howItWorks.subtitle}</p>
        </div>

        <div className="switch" role="tablist" aria-label="Ktorá strana">
          {howItWorks.sides.map((item, i) => (
            <button
              key={item.badge}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`switch__btn ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {item.badge}
            </button>
          ))}
        </div>

        <ol className="steps" key={active}>
          {side.steps.map((step, i) => (
            <li className="step" key={step.title} style={{ "--i": i }}>
              <span className="step__num">{i + 1}</span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
