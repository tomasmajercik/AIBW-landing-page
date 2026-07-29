import { useEffect, useRef, useState } from "react";
import { match } from "../content";

const APART = 150; // ako ďaleko od seba dieliky začínajú (v px)
const SNAP = 46; // od akej blízkosti už samy zacvaknú

export default function Match() {
  const [offset, setOffset] = useState(APART);
  const [dragging, setDragging] = useState(false);
  const stageRef = useRef(null);
  const drag = useRef(null);

  const snapped = offset === 0;

  // Keď na sekciu doscrolluješ, dieliky sa priblížia — ale zvyšok nechajú na teba.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOffset((o) => (o === APART ? 96 : o));
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function onPointerDown(e) {
    if (snapped) return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // niektoré prehliadače to odmietnu, ťahanie funguje aj bez toho
    }
    drag.current = { startX: e.clientX, startOffset: offset };
    setDragging(true);
  }

  function onPointerMove(e) {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.startX;
    // doľava sa dá ísť len po zacvaknutie, doprava najviac na východiskovú vzdialenosť
    const next = Math.min(APART, Math.max(0, drag.current.startOffset + dx));
    setOffset(next);
  }

  function onPointerUp() {
    if (!drag.current) return;
    drag.current = null;
    setDragging(false);
    setOffset((o) => (o < SNAP ? 0 : APART));
  }

  // Klávesnica a jednoduchý klik: dielik zacvakne sám.
  function joinNow() {
    if (!dragging) setOffset(0);
  }

  function reset() {
    setOffset(APART);
  }

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
          className={`match__stage ${snapped ? "is-joined" : ""} ${
            dragging ? "is-dragging" : ""
          }`}
          ref={stageRef}
        >
          <article className="side side--left">
            <div className="side__inner">
              <span className="side__label">{match.left.label}</span>
              <p className="side__who">{match.left.who}</p>
              <p className="side__text">{match.left.text}</p>
            </div>
          </article>

          <article
            className="side side--right"
            style={{ "--offset": `${offset}px` }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div className="side__inner">
              <span className="side__label">{match.right.label}</span>
              <p className="side__who">{match.right.who}</p>
              <p className="side__text">{match.right.text}</p>
            </div>

            <span className="side__grip" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </article>
        </div>

        <div className={`match__foot ${snapped ? "is-joined" : ""}`}>
          {snapped ? (
            <>
              <span className="match__badge">{match.joined}</span>
              <p className="match__note">{match.note}</p>
              <button type="button" className="match__replay" onClick={reset}>
                {match.replay}
              </button>
            </>
          ) : (
            <button type="button" className="match__hint" onClick={joinNow}>
              {match.hint}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
