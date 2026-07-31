import { useEffect, useRef, useState } from "react";
import { explorer, webUrl } from "../content";
import Logo from "./Logo";

const obrazovka = explorer.screen;

// rozloženie klávesnice, ktorá vybehne pri písaní mesta
const KLAVESY = [
  ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["y", "x", "c", "v", "b", "n", "m"],
];

export default function Explorer() {
  const [vybrane, setVybrane] = useState([]);
  const [mesto, setMesto] = useState("");
  const [ponukaOtvorena, setPonukaOtvorena] = useState(false);
  // vyskakovacia výzva na konci
  const [vyzva, setVyzva] = useState(false);
  // čo je práve zvýraznené — "mesto", názov mesta v ponuke, téma
  // alebo "pokracovat"
  const [naRade, setNaRade] = useState(null);
  // kam ukazuje šípka a či práve „klikla"
  const [sipka, setSipka] = useState(null);
  const [kliklo, setKliklo] = useState(false);
  // klávesnica vybehne, kým sa píše mesto; „klaves" je práve stlačené
  // písmeno — je to zvlášť od naRade, aby k nemu šípka nechodila
  const [klavesnica, setKlavesnica] = useState(false);
  const [klaves, setKlaves] = useState(null);

  const telefonRef = useRef(null);
  const obrazovkaRef = useRef(null);
  const casovace = useRef([]);
  // poistka, aby už naplánovaný krok nedoskočil po zastavení
  const bezi = useRef(true);

  // Šípka si sadne na prvok, ktorý je práve zvýraznený.
  useEffect(() => {
    const obal = obrazovkaRef.current;
    if (!obal || !naRade) return;

    const ciel = obal.querySelector(".je-na-rade");
    if (!ciel) return;

    const o = obal.getBoundingClientRect();
    const c = ciel.getBoundingClientRect();
    setSipka({
      x: c.left - o.left + c.width / 2,
      y: c.top - o.top + c.height / 2,
    });
  }, [naRade, ponukaOtvorena, mesto, klavesnica]);

  // ponuka miest sa filtruje podľa toho, čo je napísané
  const ponuka = obrazovka.places.filter((m) =>
    m.toLowerCase().includes(mesto.trim().toLowerCase())
  );

  // ďalej sa dá až keď je vybraté mesto zo zoznamu aj aspoň tri témy
  const mestoPlati = obrazovka.places.includes(mesto.trim());
  const hotovo = vybrane.length >= obrazovka.minimum && mestoPlati;

  // ---------- ukážka, ktorá sa vyklikáva sama ----------
  // Beží dokola ako video: každý krok prvok najprv zvýrazní a až potom
  // naň „klikne", aby bolo vidno, čo sa práve deje. Klikať sa do nej
  // nedá — jediné živé tlačidlo je výzva na konci.
  useEffect(() => {
    const el = telefonRef.current;
    if (!el) return;

    const stlmene = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (stlmene) {
      setMesto(obrazovka.demoMesto);
      setVybrane(obrazovka.demoTemy);
      return;
    }

    bezi.current = true;

    function naplanuj(cas, co) {
      casovace.current.push(
        setTimeout(() => {
          if (bezi.current) co();
        }, cas)
      );
    }

    // šípka na chvíľu stlačí — a až potom sa vykoná to, na čo klikla
    function klikni(cas, co) {
      naplanuj(cas, () => {
        setKliklo(true);
        co();
      });
      naplanuj(cas + 220, () => setKliklo(false));
    }

    function kolo() {
      if (!bezi.current) return;

      casovace.current.forEach(clearTimeout);
      casovace.current = [];

      // 1) čistý štart
      setMesto("");
      setVybrane([]);
      setPonukaOtvorena(false);
      setNaRade(null);
      setVyzva(false);
      setKlavesnica(false);
      setKlaves(null);

      // 2) mesto: klik do políčka vytiahne klávesnicu, šípka vyťuká
      //    prvé písmená a potom vyberie mesto zo zoznamu
      naplanuj(550, () => setNaRade("mesto"));
      klikni(900, () => {
        setPonukaOtvorena(true);
        setKlavesnica(true);
      });

      // Písmená sa rozsvietia samy — šípka ostáva na políčku mesta.
      const rozpisane = obrazovka.demoMesto.slice(0, 3);
      rozpisane.split("").forEach((pismeno, i) => {
        naplanuj(1250 + i * 320, () => setKlaves(pismeno.toLowerCase()));
        naplanuj(1450 + i * 320, () => {
          setMesto(rozpisane.slice(0, i + 1));
          setKlaves(null);
        });
      });

      naplanuj(2300, () => {
        setKlavesnica(false);
        setKlaves(null);
        setNaRade(obrazovka.demoMesto);
      });
      klikni(2850, () => {
        setMesto(obrazovka.demoMesto);
        setPonukaOtvorena(false);
        setNaRade(null);
      });

      // 3) témy: každú najprv zvýrazniť, potom zapnúť
      obrazovka.demoTemy.forEach((tema, i) => {
        naplanuj(3450 + i * 900, () => setNaRade(tema));
        klikni(3900 + i * 900, () => {
          setVybrane((z) => (z.includes(tema) ? z : [...z, tema]));
          setNaRade(null);
        });
      });

      // 4) až teraz sa dá pokračovať — zvýrazniť tlačidlo a stlačiť ho
      const poTemach = 3900 + obrazovka.demoTemy.length * 900;
      naplanuj(poTemach + 400, () => setNaRade("pokracovat"));
      klikni(poTemach + 1150, () => {
        setNaRade(null);
        setVyzva(true);
      });

      // 5) výzva chvíľu podrží a ide sa odznova
      naplanuj(poTemach + 5600, kolo);
    }

    // rozbehne sa až keď je telefón na obrazovke
    const sledovac = new IntersectionObserver(
      ([zaznam]) => (zaznam.isIntersecting ? kolo() : null),
      { threshold: 0.4 }
    );

    sledovac.observe(el);
    return () => {
      bezi.current = false;
      casovace.current.forEach(clearTimeout);
      casovace.current = [];
      sledovac.disconnect();
    };
  }, []);

  return (
    <section className="section" id="vyskusaj">
      <div className="container explorer__grid">
        <div className="explorer__copy" data-reveal>
          <h2 className="section__title section__title--left">
            {explorer.title}
          </h2>
          <p className="section__intro">{explorer.subtitle}</p>
        </div>

        <div className="explorer__phone" data-reveal>
          <div className="phone phone--app" ref={telefonRef}>
            <span className="phone__island" />

            <div className="phone__screen app" ref={obrazovkaRef}>
              {/* hlavička sa neroluje, aby nepodchádzala pod pilulku */}
              <div className="app__head">
                <div className="app__brand">
                  <Logo size={18} />
                  {obrazovka.brand}
                </div>

                <span className="app__step">{obrazovka.step}</span>
                <h3 className="app__title">{obrazovka.title}</h3>
                <p className="app__hint">{obrazovka.hint}</p>
              </div>

              {/* Celá obrazovka je len prehrávaná ukážka — nedá sa do nej
                  klikať, preto sú to obyčajné bloky, nie tlačidlá. */}
              <div className="app__scroll">
                <div className="app__field">
                  <span className="app__label">{obrazovka.placeLabel}</span>
                  <span
                    className={`app__input ${
                      naRade === "mesto" ? "je-na-rade" : ""
                    } ${mesto ? "" : "is-empty"}`}
                  >
                    {mesto || obrazovka.placePlaceholder}
                  </span>

                  {ponukaOtvorena && ponuka.length > 0 && (
                    <ul className="app__places">
                      {ponuka.map((m) => (
                        <li key={m}>
                          <span className={naRade === m ? "je-na-rade" : ""}>
                            {m}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="app__topics">
                  {obrazovka.topics.map((tema) => (
                    <span
                      key={tema}
                      className={`pill ${
                        vybrane.includes(tema) ? "is-active" : ""
                      } ${naRade === tema ? "je-na-rade" : ""}`}
                    >
                      {tema}
                    </span>
                  ))}
                </div>
              </div>

              <div className="app__bottom">
                <span className="app__count">
                  {obrazovka.counter} {vybrane.length}
                </span>
                <span
                  className={`app__cta ${hotovo ? "is-ready" : ""} ${
                    naRade === "pokracovat" ? "je-na-rade" : ""
                  }`}
                >
                  {obrazovka.cta}
                </span>
              </div>

              {/* Klávesnica — len obrázok. Písmeno sa rozsvieti v tej
                  chvíli, keď pribudne do políčka. */}
              {klavesnica && (
                <div className="app__klavesnica" aria-hidden="true">
                  {KLAVESY.map((rad, i) => (
                    <div className="app__rad" key={i}>
                      {rad.map((k) => (
                        <span
                          key={k}
                          className={`app__klaves ${
                            klaves === k ? "je-stlacene" : ""
                          }`}
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  ))}

                  <div className="app__rad">
                    <span className="app__klaves app__klaves--medzera" />
                  </div>
                </div>
              )}

              {/* Šípka, ktorá to celé klikne. Hrot sedí na prvku,
                  ktorý je práve zvýraznený. */}
              {sipka && !vyzva && (
                <span
                  className={`app__sipka ${kliklo ? "je-klik" : ""}`}
                  style={{ transform: `translate(${sipka.x}px, ${sipka.y}px)` }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M4 2 L4 19 L8.6 14.8 L11.4 21.2 L14.4 19.9 L11.7 13.7 L18 13.4 Z"
                      fill="#fff"
                      stroke="#16181a"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}

              {/* Zatmavenie a výzva — jediné, na čo sa dá kliknúť. */}
              {vyzva && (
                <div className="app__done">
                  <p className="app__doneTitle">{obrazovka.doneTitle}</p>
                  <p className="app__doneText">{obrazovka.doneText}</p>

                  <a className="app__doneCta" href={webUrl}>
                    {obrazovka.doneCta}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
