import { useEffect, useRef, useState } from "react";
import { brand, match } from "../content";
import Logo from "./Logo";

const APART = 130; // ako ďaleko od seba sú dieliky (v px)

// Tvar dielika je prevzatý z loga — rovnaké pomery, len prepočítané
// na výšku 100. Výstupok je skoro celý kruh na úzkom krčku, preto to
// vyzerá ako puzzle a nie ako vlnka.
const R_VYSTUPOK = 12; // polomer guľatého výstupku
const KRCOK = 15.4; // šírka krčka pod výstupkom
const R_ROH = 7.5; // zaoblenie rohov

// Zloží obrys dielika. Pre každú hranu povieš, či tam má byť
// výstupok, priehlbina, alebo rovná čiara. Kreslí sa v smere
// hodinových ručičiek, preto sa značka smeru pri hranách strieda.
// vector-effect drží hrúbku čiary rovnakú aj po roztiahnutí tvaru.
function obrys({ hore, vpravo, dole, vlavo }, sirka, vyska) {
  const r = R_ROH;
  const R = R_VYSTUPOK;

  const x1 = (sirka - KRCOK) / 2;
  const x2 = (sirka + KRCOK) / 2;
  const y1 = (vyska - KRCOK) / 2;
  const y2 = (vyska + KRCOK) / 2;

  const hornaHrana =
    hore === "rovno"
      ? `H${sirka - r}`
      : `H${x1} A${R},${R} 0 1 ${hore === "vystupok" ? 1 : 0} ${x2},0 H${sirka - r}`;

  const pravaHrana =
    vpravo === "rovno"
      ? `V${vyska - r}`
      : `V${y1} A${R},${R} 0 1 ${vpravo === "vystupok" ? 0 : 1} ${sirka},${y2} V${vyska - r}`;

  const dolnaHrana =
    dole === "rovno"
      ? `H${r}`
      : `H${x2} A${R},${R} 0 1 ${dole === "vystupok" ? 1 : 0} ${x1},${vyska} H${r}`;

  const lavaHrana =
    vlavo === "rovno"
      ? `V${r}`
      : `V${y2} A${R},${R} 0 1 ${vlavo === "vystupok" ? 0 : 1} 0,${y1} V${r}`;

  return [
    `M${r},0`,
    hornaHrana,
    `A${r},${r} 0 0 1 ${sirka},${r}`,
    pravaHrana,
    `A${r},${r} 0 0 1 ${sirka - r},${vyska}`,
    dolnaHrana,
    `A${r},${r} 0 0 1 0,${vyska - r}`,
    lavaHrana,
    `A${r},${r} 0 0 1 ${r},0`,
    "Z",
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

// Dielik sa roztiahne na veľkosť kartičky, takže kresbu robíme rovno
// v jej pomere strán — inak by sa okrúhly výstupok sploštil na ovál.
function Shape({ index, pomer }) {
  const sirka = 100 * pomer;

  return (
    <svg
      className="side__shape"
      viewBox={`0 0 ${sirka} 100`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={obrys(TVARY[index], sirka, 100)}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function Match() {
  const [gap, setGap] = useState(APART);
  // fázy animácie: nic -> telefon -> logo -> sam (telefón zmizne) -> dieliky sa spoja
  const [phase, setPhase] = useState("nic");
  // na širokej obrazovke je dielik 290×200, na úzkej štvorec 138×138
  const [pomer, setPomer] = useState(1.45);

  useEffect(() => {
    const uzka = window.matchMedia("(max-width: 880px)");
    const prepocitaj = () => setPomer(uzka.matches ? 1 : 1.45);

    prepocitaj();
    uzka.addEventListener("change", prepocitaj);
    return () => uzka.removeEventListener("change", prepocitaj);
  }, []);

  const stageRef = useRef(null);
  const timers = useRef([]);

  const joined = gap === 0;

  // Animácia sa prehráva dookola: Zapadni sa objaví a pritiahne dieliky k sebe.
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
              <Shape index={i} pomer={pomer} />
              <div className="side__inner">
                <span className="side__role">{piece.role}</span>
                <p className="side__who">{piece.who}</p>
                <p className="side__text">{piece.meta}</p>
              </div>
            </article>
          ))}

          {/* Zapadni stojí presne v strede — vďaka nemu sa našli */}
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
