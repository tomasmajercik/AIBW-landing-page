import { preview, wordmark } from "../content.js";

// Ukážka appky v telefóne.
// Celý obsah obrazovky sa mení v content.js (sekcia `preview.app`).
// Telefón aj kartičky sú poskladané z CSS - nie sú to obrázky,
// takže sú ostré na akejkoľvek obrazovke.
export default function Preview() {
  const { app } = preview;

  return (
    <section className="section section--rule" id="ukazka">
      <div className="shell preview">
        <div className="preview__text">
          <p className="eyebrow">{preview.eyebrow}</p>
          <h2 className="section__title">{preview.title}</h2>
          <p className="section__lede">{preview.lede}</p>
          <p className="preview__note">{preview.note}</p>
        </div>

        <div className="phone" aria-hidden="true">
          <div className="phone__notch" />

          <div className="phone__screen">
            <div className="app__bar">
              <span className="app__brand">
                {wordmark.first}
                <span className="wordmark__accent">{wordmark.rest}</span>
              </span>
              <span className="avatar avatar--me">TY</span>
            </div>

            <h3 className="app__title">{app.title}</h3>
            <p className="app__sub">{app.sub}</p>

            <div className="chips">
              {app.chips.map((chip, i) => (
                <span
                  className={i === 0 ? "chip chip--on" : "chip"}
                  key={chip}
                >
                  {chip}
                </span>
              ))}
            </div>

            {app.cards.map((card) => (
              <article className={`table table--${card.key}`} key={card.text}>
                <Seats people={card.people} free={card.free} />

                <p className="table__seats">{card.seats}</p>
                <p className="table__text">{card.text}</p>
                <p className="table__meta">{card.meta}</p>
                <p className="table__btn">{card.button}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Prekrývajúce sa krúžky s iniciálami a prerušované krúžky
// pre voľné miesta pri stole.
function Seats({ people, free }) {
  return (
    <div className="seats">
      {people.map((initials) => (
        <span className="avatar" key={initials}>
          {initials}
        </span>
      ))}
      {Array.from({ length: free }).map((_, i) => (
        <span className="avatar avatar--free" key={`free-${i}`}>
          +
        </span>
      ))}
    </div>
  );
}
