import { useEffect, useState } from "react";
import { hero, brand, communities } from "../content";
import Logo from "./Logo";

const VISIBLE = 4; // koľko kariet je vidno v telefóne naraz
const INTERVAL = 2400; // ako často pribudne nová (v milisekundách)

export default function Hero({ onPick }) {
  const [start, setStart] = useState(0);

  // Karty sa posúvajú dokola, akoby stále pribúdali nové komunity.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = setInterval(
      () => setStart((s) => (s + 1) % communities.length),
      INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  const visible = Array.from({ length: VISIBLE }, (_, i) => {
    const index = (start + i) % communities.length;
    return { ...communities[index], index };
  });

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{hero.eyebrow}</p>

          <h1 className="hero__title">
            {hero.title}
            <br />
            <span className="hero__accent">{hero.titleAccent}</span>
          </h1>

          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="hero__actions">
            <a className="btn" href="#vyskusaj">
              {hero.ctaPrimary}
            </a>
            <a className="btn btn--ghost" href="#pre-zakladatelov">
              {hero.ctaSecondary}
            </a>
          </div>

          <p className="hero__note">{hero.note}</p>

          <ul className="stats">
            {hero.stats.map((stat) => (
              <li key={stat.label} className="stat">
                <span className="stat__value">{stat.value}</span>
                <span className="stat__label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Telefón s pásom komunít, ktoré práve pribudli */}
        <div className="hero__visual">
          <div className="phone">
            <span className="phone__island" />

            <div className="phone__screen">
              <div className="phone__bar">
                <span className="phone__brand">
                  <Logo size={18} />
                  {brand.name}
                </span>
                <span className="phone__time">9:41</span>
              </div>

              <p className="feed__label">
                <span className="feed__dot" />
                {hero.feedLabel}
              </p>

              <div className="feed">
                {visible.map((item, i) => (
                  // key = poradie karty v zozname, takže pri posune sa
                  // nová karta nasadí odznova a prehrá si animáciu
                  <button
                    type="button"
                    className="float"
                    key={item.index}
                    style={{ "--i": i }}
                    onClick={() => onPick(item.interest)}
                  >
                    <span className="float__emoji">{item.name.charAt(0)}</span>
                    <span className="float__body">
                      <span className="float__name">{item.name}</span>
                      <span className="float__meta">
                        {item.intent} · {item.place}
                      </span>
                    </span>
                    <span className="float__members">{item.members}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
