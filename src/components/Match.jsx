import { useEffect, useRef, useState } from "react";
import { brand, match } from "../content";
import Logo from "./Logo";

const APART = 130; // ako ďaleko od seba sú dieliky (v px)

// Zloží obrys puzzle dielika. Pre každú hranu povieš, či tam má byť
// výstupok, priehlbina, alebo rovná čiara.
// vector-effect drží hrúbku čiary rovnakú aj po roztiahnutí tvaru.
function obrys({ hore, vpravo, dole, vlavo }) {
  const rx = 5.5;
  const ry = 6.5;

  const hornaHrana =
    hore === "rovno"
      ? "H94"
      : `H44 A${rx},${ry} 0 1 ${hore === "vystupok" ? 0 : 1} 56,0 H94`;

  const pravaHrana =
    vpravo === "rovno"
      ? "V94"
      : `V44 A${rx},${ry} 0 1 ${vpravo === "vystupok" ? 1 : 0} 100,56 V94`;

  const dolnaHrana =
    dole === "rovno"
      ? "H6"
      : `H56 A${rx},${ry} 0 1 ${dole === "vystupok" ? 0 : 1} 44,100 H6`;

  const lavaHrana =
    vlavo === "rovno"
      ? "V6"
      : `V56 A${rx},${ry} 0 1 ${vlavo === "vystupok" ? 1 : 0} 0,44 V6`;

  return [
    "M6,0",
    hornaHrana,
    "C97.3,0 100,2.7 100,6",
    pravaHrana,
    "C100,97.3 97.3,100 94,100",
    dolnaHrana,
    "C2.7,100 0,97.3 0,94",
    lavaHrana,
    "C0,2.7 2.7,0 6,0 Z",
  ].join(" ");
}

// Štyri dieliky do štvorca. Susedné hrany sa dopĺňajú:
// kde má jeden výstupok, druhý má priehlbinu.
const TVARY = [
  { hore: "rovno", vpravo: "vystupok", dole: "vystupok", vlavo: "rovno" },
  { hore: "rovno", vpravo: "rovno", dole: "vystupok", vlavo: "priehlbina" },
  { hore: "priehlbina", vpravo: "vystupok", dole: "rovno", vlavo: "rovno" },
  { hore: "priehlbina", vpravo: "rovno", dole: "rovno", vlavo: "priehlbina" },
];

function Shape({ index }) {
  return (
    <svg
      className="side__shape"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={obrys(TVARY[index])} vectorEffect="non-scaling-stroke" />
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
      { threshold: 0.3 }
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
          {match.pieces.map((piece, i) => (
            <article className={`side side--${i}`} key={piece.who}>
              <Shape index={i} />
              <div className="side__inner">
                <span className="side__role">{piece.role}</span>
                <p className="side__who">{piece.who}</p>
                <p className="side__text">{piece.meta}</p>
              </div>
            </article>
          ))}

          {/* appka stojí presne v strede — ona ich dala dokopy */}
          <span className="match__app" aria-hidden="true">
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

            <span className="match__logo">
              <span className="match__appMark">
                <Logo size={30} />
              </span>
              <span className="match__appName">{brand.name}</span>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
