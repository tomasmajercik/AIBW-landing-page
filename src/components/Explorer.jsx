import { useEffect, useMemo, useState } from "react";
import { explorer, interests, places, communities } from "../content";

// Slovenčina počíta inak pri 1, 2–4 a 5+.
function resultsLabel(count) {
  if (count === 1) return explorer.resultsOne;
  if (count >= 2 && count <= 4) return explorer.resultsFew;
  return explorer.resultsMany;
}

export default function Explorer({ interestKey, onInterest }) {
  const [intent, setIntent] = useState(null);
  const [place, setPlace] = useState(null);

  const interest = interests.find((i) => i.key === interestKey);

  // Keď sa záujem zmení (aj kliknutím inde na stránke),
  // starý zámer už nedáva zmysel.
  useEffect(() => setIntent(null), [interestKey]);

  const results = useMemo(
    () =>
      communities.filter(
        (c) =>
          c.interest === interestKey &&
          (intent === null || c.intent === intent) &&
          (place === null || c.place === place)
      ),
    [interestKey, intent, place]
  );

  return (
    <section className="section section--muted" id="vyskusaj">
      <div className="container explorer__grid">
        <div className="explorer__copy" data-reveal>
          <h2 className="section__title section__title--left">
            {explorer.title}
          </h2>
          <p className="section__intro">{explorer.subtitle}</p>

          <p className="section__note">{explorer.note}</p>
        </div>

        <div className="explorer__phone" data-reveal>
          <div className="phone phone--app">
            <span className="phone__island" />

            <div className="phone__screen app">
              <div className="app__top">
                <span className="app__back" aria-hidden="true">
                  ‹
                </span>
                {explorer.screenTitle}
              </div>

              <div className="app__scroll">
                <div className="app__filters">
                  <div className="app__row">
                    <span className="app__label">
                      {explorer.labels.interest}
                    </span>
                    <div className="app__chips">
                      {interests.map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          className={`pill ${
                            interestKey === item.key ? "is-active" : ""
                          }`}
                          onClick={() => onInterest(item.key)}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="app__row">
                    <span className="app__label">{explorer.labels.intent}</span>
                    <div className="app__chips">
                      <button
                        type="button"
                        className={`pill ${intent === null ? "is-active" : ""}`}
                        onClick={() => setIntent(null)}
                      >
                        {explorer.labels.anyIntent}
                      </button>
                      {interest.intents.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className={`pill ${intent === item ? "is-active" : ""}`}
                          onClick={() => setIntent(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="app__row">
                    <span className="app__label">{explorer.labels.place}</span>
                    <div className="app__chips">
                      <button
                        type="button"
                        className={`pill ${place === null ? "is-active" : ""}`}
                        onClick={() => setPlace(null)}
                      >
                        {explorer.labels.anyPlace}
                      </button>
                      {places.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className={`pill ${place === item ? "is-active" : ""}`}
                          onClick={() => setPlace(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="app__results" aria-live="polite">
                  <p className="app__count">
                    <strong>{results.length}</strong> {resultsLabel(results.length)}
                  </p>

                  {results.length > 0 ? (
                    results.map((item) => (
                      <article className="app__card" key={item.name}>
                        <span className="app__emoji" aria-hidden="true">
                          {item.name.charAt(0)}
                        </span>
                        <div className="app__cardBody">
                          <p className="app__name">{item.name}</p>
                          <p className="app__meta">
                            {item.intent} · {item.place} · {item.when}
                          </p>
                        </div>
                        <span className="app__members">{item.members}</span>
                      </article>
                    ))
                  ) : (
                    <div className="app__empty">
                      <h3 className="app__emptyTitle">{explorer.emptyTitle}</h3>
                      <p className="app__emptyText">{explorer.emptyText}</p>
                      <a className="btn btn--small" href="#ako-to-funguje">
                        {explorer.emptyCta}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
