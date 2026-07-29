import { useState } from "react";
import { founders } from "../content";

export default function Founders() {
  const [active, setActive] = useState(0);
  const current = founders.cases[active];

  return (
    <section className="section founders" id="pre-zakladatelov">
      <div className="container founders__grid">
        <div className="founders__text" data-reveal>
          <h2 className="section__title section__title--left">
            {founders.title}
          </h2>
          <p className="founders__lead">{founders.text}</p>
          <p className="founders__closing">{founders.closing}</p>
        </div>

        <div className="founders__demo" data-reveal>
          <p className="founders__switchLabel">{founders.switchLabel}</p>

          <div className="switch switch--small">
            {founders.cases.map((item, i) => (
              <button
                key={item.key}
                type="button"
                className={`switch__btn ${active === i ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                {item.tab}
              </button>
            ))}
          </div>

          <p className="founders__meta">{current.meta}</p>

          <ul className="tips" key={current.key}>
            {current.tips.map((tip, i) => (
              <li className="tip" key={tip} style={{ "--i": i }}>
                <p>{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
