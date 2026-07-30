import { useEffect, useState } from "react";
import { hero, communities } from "../content";
import Logo from "./Logo";

const VISIBLE = 3; // koľko kariet je v telefóne naraz (spodná sa stráca)
const INTERVAL = 3200; // ako často sa zoznam posunie (v milisekundách)

// Šesť farieb zo Zapadni — každá komunita má svoju, aby sa karty nezlievali.
const TINTS = [
  { bg: "#f5e3dc", ink: "#8f3826" },
  { bg: "#ddebe6", ink: "#2f6354" },
  { bg: "#f6ecd6", ink: "#8a6218" },
  { bg: "#e3eaf0", ink: "#3a5570" },
  { bg: "#efe4ec", ink: "#6d3a5c" },
  { bg: "#e6ebde", ink: "#4f6135" },
];

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12,7 12,12 15.5,14" strokeLinecap="round" />
    </svg>
  );
}

// Ikonky spodnej lišty — rovnaké ako na webe.
const TAB_ICONS = [
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4,12 12,5 20,12" />
    <path d="M6 11v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8" />
  </svg>,
  <svg key="c" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8.5" cy="8" r="3" />
    <circle cx="16" cy="9" r="2.5" />
    <path d="M3 19c0-2.8 2.5-5 5.5-5s5.5 2.2 5.5 5" />
    <path d="M14.5 14.3c2.3.4 4 2.4 4 4.7" />
  </svg>,
  <svg key="v" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 21V4" />
    <path d="M6 4h12l-3.5 4L18 12H6" />
  </svg>,
  <svg key="p" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="3.5" />
    <path d="M4.5 20c0-3.6 3.4-6.5 7.5-6.5s7.5 2.9 7.5 6.5" />
  </svg>,
];

function clenovia(pocet) {
  if (pocet === 1) return "člen";
  if (pocet < 5) return "členovia";
  return "členov";
}

export default function Hero() {
  const [start, setStart] = useState(0);

  // Karty sa posúvajú dokola, akoby sa zoznam komunít stále dopĺňal.
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
          <h1 className="hero__title">
            {hero.title}
            <br />
            <span className="hero__accent">{hero.titleAccent}</span>
          </h1>

          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="hero__actions">
            <a className="btn" href="#ako-to-funguje">
              {hero.cta}
            </a>
          </div>

          <p className="hero__note">{hero.note}</p>
        </div>

        {/* Telefón s ukážkou webu — rovnaké karty, aké na ňom budú */}
        <div className="hero__visual">
          <div className="phone">
            <span className="phone__island" />

            <div className="phone__screen appx">
              <div className="appx__head">
                <span className="appx__brand">
                  <Logo size={18} />
                  zapadni.com
                </span>
              </div>

              <div className="appx__body">
                <p className="appx__label">
                  {hero.feedLabel}
                  <span>{hero.feedCount}</span>
                </p>

                <div className="feed">
                  {visible.map((item, i) => {
                    const tint = TINTS[item.tint];

                    return (
                      // key = poradie karty v zozname, takže pri posune sa
                      // nová karta nasadí odznova a prehrá si animáciu.
                      // Karta je len ukážka — kliknutím sa nič nedeje.
                      <div className="club" key={item.index} style={{ "--i": i }}>
                        <span
                          className="club__cover"
                          style={{ background: tint.bg, color: tint.ink }}
                        >
                          <span className="club__topic">{item.topic}</span>
                          <span className="club__mark" aria-hidden="true">
                            {item.name.charAt(0)}
                          </span>
                        </span>

                        <span className="club__main">
                          <span className="club__name">{item.name}</span>

                          <span className="club__rhythm">
                            <ClockIcon />
                            <span>
                              {item.when} <i>· {item.place}</i>
                            </span>
                          </span>

                          <span className="club__vibe">{item.vibe}</span>

                          <span className="club__foot">
                            <span className="faces" aria-hidden="true">
                              {item.faces.map((skratka, j) => (
                                <span
                                  key={skratka}
                                  className="face"
                                  style={{
                                    background: TINTS[j].bg,
                                    color: TINTS[j].ink,
                                  }}
                                >
                                  {skratka}
                                </span>
                              ))}
                            </span>

                            <span className="club__count">
                              <b>
                                {item.members} {clenovia(item.members)}
                              </b>
                              {item.city}
                            </span>

                            <span className="join">{hero.join}</span>
                          </span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <nav className="appx__tabs" aria-hidden="true">
                {hero.tabs.map((tab, i) => (
                  <span
                    key={tab}
                    className={`appx__tab ${i === 0 ? "is-active" : ""}`}
                  >
                    {TAB_ICONS[i]}
                    {tab}
                  </span>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
