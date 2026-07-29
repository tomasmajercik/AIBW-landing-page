import { useEffect, useRef, useState } from "react";
import { brand, match } from "../content";
import Logo from "./Logo";

const APART = 220; // ako ďaleko od seba sú dieliky (v px)

// Tvar dielika ako kresba — vďaka tomu má aj obrys, nielen výplň.
// vector-effect drží hrúbku čiary rovnakú aj po roztiahnutí tvaru.
function Shape({ variant }) {
  const d =
    variant === "left"
      ? "M4,0 H87.8 V40 C100,43.5 100,56.5 87.8,60 V100 H4 C1.8,100 0,97.8 0,95 V5 C0,2.2 1.8,0 4,0 Z"
      : "M0,0 H96 C98.2,0 100,2.2 100,5 V95 C100,97.8 98.2,100 96,100 H0 V60 C12.2,56.5 12.2,43.5 0,40 Z";

  return (
    <svg
      className="side__shape"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={d} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function Match() {
  const [gap, setGap] = useState(APART);
  // fázy animácie: nic -> telefon -> logo -> sam (telefón zmizne) -> dieliky sa spoja
  const [phase, setPhase] = useState("nic");

  const stageRef = useRef(null);
  const timers = useRef([]);

  const joined = gap === 0;

  // Animácia sa prehráva dookola: appka sa objaví a pritiahne dieliky k sebe.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setGap(0);
      setPhase("sam");
      return;
    }

    let stopped = false;

    function clear() {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    }

    function cycle() {
      if (stopped) return;
      clear();
      setGap(APART);
      setPhase("nic");

      // 1) objaví sa telefón  2) v ňom cvakne svietiace logo
      // 3) telefón zmizne  4) logo pritiahne dieliky  5) chvíľu drží  6) odznova
      timers.current.push(setTimeout(() => setPhase("telefon"), 600));
      timers.current.push(setTimeout(() => setPhase("logo"), 1400));
      timers.current.push(setTimeout(() => setPhase("sam"), 2300));
      timers.current.push(setTimeout(() => setGap(0), 2700));
      timers.current.push(setTimeout(cycle, 6800));
    }

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? cycle() : null),
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => {
      stopped = true;
      clear();
      observer.disconnect();
    };
  }, []);

  return (
    <section className="section match" id="dve-strany">
      {/* Tvary dielikov. Pracujú v pomeroch, takže sa prispôsobia veľkosti karty. */}
      <svg className="match__defs" aria-hidden="true">
        <defs>
          <clipPath id="dielikVlavo" clipPathUnits="objectBoundingBox">
            <path d="M0.04,0 H0.878 V0.4 C1,0.435 1,0.565 0.878,0.6 V1 H0.04 C0.018,1 0,0.978 0,0.95 V0.05 C0,0.022 0.018,0 0.04,0 Z" />
          </clipPath>
          <clipPath id="dielikVpravo" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H0.96 C0.982,0 1,0.022 1,0.05 V0.95 C1,0.978 0.982,1 0.96,1 H0 V0.6 C0.122,0.565 0.122,0.435 0,0.4 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="container">
        <div className="section__head" data-reveal>
          <h2 className="section__title">{match.title}</h2>
          <p className="section__intro">{match.subtitle}</p>
        </div>

        <div
          className={`match__stage ${joined ? "is-joined" : ""} ${
            phase === "telefon" || phase === "logo" ? "is-phone" : ""
          } ${phase === "logo" || phase === "sam" ? "is-logo" : ""}`}
          style={{ "--gap": `${gap}px` }}
          ref={stageRef}
        >
          <article className="side side--left">
            <Shape variant="left" />
            <div className="side__inner">
              <span className="side__role">{match.left.role}</span>
              <p className="side__label">{match.left.label}</p>
              <p className="side__who">{match.left.who}</p>
              <p className="side__text">{match.left.text}</p>
            </div>
          </article>

          <article className="side side--right">
            <Shape variant="right" />
            <div className="side__inner">
              <span className="side__role">{match.right.role}</span>
              <p className="side__label">{match.right.label}</p>
              <p className="side__who">{match.right.who}</p>
              <p className="side__text">{match.right.text}</p>
            </div>
          </article>

          {/* appka stojí presne v mieste spoja — ona ich ťahá k sebe */}
          <span className="match__app" aria-hidden="true">
            {/* domovská obrazovka telefónu — naša appka je jedna z nich */}
            <span className="match__phone">
              <span className="match__phoneIsland" />
              <span className="match__screen">
                {Array.from({ length: 9 }, (_, i) =>
                  i === 4 ? (
                    <span className="match__icon match__icon--nasa" key={i}>
                      <Logo size={16} />
                    </span>
                  ) : (
                    <span className="match__icon" key={i} />
                  )
                )}
              </span>
            </span>

            {/* logo aj názov sú jeden celok — držia sa spolu a hýbu sa spolu */}
            <span className="match__logo">
              <span className="match__appMark">
                <Logo size={30} />
              </span>
              <span className="match__appName">{brand.name}</span>
            </span>
          </span>
        </div>

        {/* bublina vyskočí presne vtedy, keď dieliky zapadnú do seba */}
        <div className={`match__foot ${joined ? "is-joined" : ""}`}>
          <p className="match__bubble">{match.note}</p>
        </div>
      </div>
    </section>
  );
}
