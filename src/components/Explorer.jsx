import { useEffect, useState } from "react";
import { explorer } from "../content";
import Logo from "./Logo";

const obrazovka = explorer.screen;

export default function Explorer() {
  const [vybrane, setVybrane] = useState([]);
  const [mesto, setMesto] = useState("");
  const [ponukaOtvorena, setPonukaOtvorena] = useState(false);
  // vyskakovacia výzva na konci
  const [vyzva, setVyzva] = useState(false);
  const [zavrete, setZavrete] = useState(false);

  // ponuka miest sa filtruje podľa toho, čo je napísané
  const ponuka = obrazovka.places.filter((m) =>
    m.toLowerCase().includes(mesto.trim().toLowerCase())
  );

  function prepni(tema) {
    setVybrane((zoznam) =>
      zoznam.includes(tema)
        ? zoznam.filter((t) => t !== tema)
        : [...zoznam, tema]
    );
  }

  // ďalej sa dá až keď je vybraté mesto zo zoznamu aj aspoň tri témy
  const mestoPlati = obrazovka.places.includes(mesto.trim());
  const hotovo = vybrane.length >= obrazovka.minimum && mestoPlati;

  // keď je vyplnené, obrazovka sa o chvíľu zatmaví a vyskočí výzva
  useEffect(() => {
    if (!hotovo) {
      setVyzva(false);
      setZavrete(false);
      return;
    }

    const timer = setTimeout(() => setVyzva(true), 500);
    return () => clearTimeout(timer);
  }, [hotovo]);

  const ukazVyzvu = vyzva && !zavrete;

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
          <div className="phone phone--app">
            <span className="phone__island" />

            <div className="phone__screen app">
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

              <div className="app__scroll">
                <div className="app__field">
                  <span className="app__label">{obrazovka.placeLabel}</span>
                  <input
                    type="text"
                    value={mesto}
                    onChange={(e) => {
                      setMesto(e.target.value);
                      setPonukaOtvorena(true);
                    }}
                    onFocus={() => setPonukaOtvorena(true)}
                    placeholder={obrazovka.placePlaceholder}
                  />

                  {ponukaOtvorena && ponuka.length > 0 && (
                    <ul className="app__places">
                      {ponuka.map((m) => (
                        <li key={m}>
                          <button
                            type="button"
                            onClick={() => {
                              setMesto(m);
                              setPonukaOtvorena(false);
                            }}
                          >
                            {m}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="app__topics">
                  {obrazovka.topics.map((tema) => (
                    <button
                      key={tema}
                      type="button"
                      className={`pill ${
                        vybrane.includes(tema) ? "is-active" : ""
                      }`}
                      onClick={() => prepni(tema)}
                    >
                      {tema}
                    </button>
                  ))}
                </div>
              </div>

              <div className="app__bottom">
                <span className="app__count">
                  {obrazovka.counter} {vybrane.length}
                </span>
                <button
                  type="button"
                  className={`app__cta ${hotovo ? "is-ready" : ""}`}
                  disabled={!hotovo}
                  onClick={() => setZavrete(false)}
                >
                  {obrazovka.cta}
                </button>
              </div>

              {/* zatmavenie a výzva na stiahnutie */}
              {ukazVyzvu && (
                <div className="app__done">
                  <p className="app__doneTitle">{obrazovka.doneTitle}</p>
                  <p className="app__doneText">{obrazovka.doneText}</p>

                  <button type="button" className="app__doneCta">
                    {obrazovka.doneCta}
                  </button>

                  <button
                    type="button"
                    className="app__doneBack"
                    onClick={() => setZavrete(true)}
                  >
                    {obrazovka.doneBack}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
